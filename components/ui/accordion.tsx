"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border-gray border-t border-b border-border-gray">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between py-5 px-1 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded"
            aria-expanded={openIndex === index}
            aria-controls={`accordion-panel-${index}`}
            id={`accordion-trigger-${index}`}
          >
            <span className="text-base lg:text-lg font-semibold text-text-heading group-hover:text-brand transition-colors pr-4">
              {item.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            id={`accordion-panel-${index}`}
            role="region"
            aria-labelledby={`accordion-trigger-${index}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-96 pb-5" : "max-h-0"
            }`}
          >
            <p className="text-text-muted leading-relaxed px-1 pr-10">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
