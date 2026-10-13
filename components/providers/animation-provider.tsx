"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check for IntersectionObserver support
    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll(
          ".reveal-init, .reveal-scale-init, .reveal-left-init, .reveal-right-init, .reveal-stagger, [data-animate]"
        )
        .forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;

          // If container has stagger, distribute delays to children if not set
          if (target.classList.contains("reveal-stagger")) {
            const children = target.querySelectorAll<HTMLElement>(".reveal-child");
            children.forEach((child, index) => {
              if (!child.style.transitionDelay && !child.className.includes("delay-")) {
                child.style.transitionDelay = `${index * 80}ms`;
              }
            });
          }

          target.classList.add("is-revealed");
          observer.unobserve(target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1,
    });

    const registerElements = () => {
      const elements = document.querySelectorAll(
        ".reveal-init, .reveal-scale-init, .reveal-left-init, .reveal-right-init, .reveal-stagger, [data-animate]"
      );
      elements.forEach((el) => {
        if (!el.classList.contains("is-revealed")) {
          observer.observe(el);
        }
      });
    };

    // Initial pass
    registerElements();

    // Re-check shortly after mount/render to catch dynamic children
    const timer = setTimeout(registerElements, 100);

    // Mutation observer to catch dynamically mounted client components
    const mutationObserver = new MutationObserver(() => {
      registerElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return <>{children}</>;
}
