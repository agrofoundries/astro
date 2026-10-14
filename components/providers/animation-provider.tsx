"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    let observer: IntersectionObserver | null = null;
    let timer: NodeJS.Timeout | null = null;

    // Delay attachment until after initial React hydration completes
    timer = setTimeout(() => {
      if (!("IntersectionObserver" in window)) {
        document
          .querySelectorAll(
            ".reveal-init, .reveal-scale-init, .reveal-left-init, .reveal-right-init, .reveal-stagger, [data-animate]"
          )
          .forEach((el) => el.classList.add("is-revealed"));
        return;
      }

      const observerCallback: IntersectionObserverCallback = (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;

            if (target.classList.contains("reveal-stagger")) {
              const children = target.querySelectorAll<HTMLElement>(".reveal-child");
              children.forEach((child, index) => {
                if (!child.style.transitionDelay && !child.className.includes("delay-")) {
                  child.style.transitionDelay = `${index * 80}ms`;
                }
              });
            }

            target.classList.add("is-revealed");
            obs.unobserve(target);
          }
        });
      };

      observer = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.1,
      });

      const elements = document.querySelectorAll(
        ".reveal-init, .reveal-scale-init, .reveal-left-init, .reveal-right-init, .reveal-stagger, [data-animate]"
      );
      elements.forEach((el) => {
        if (!el.classList.contains("is-revealed")) {
          observer?.observe(el);
        }
      });
    }, 250);

    return () => {
      if (timer) clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return <>{children}</>;
}
