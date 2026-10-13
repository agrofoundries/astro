interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  specCode?: string;
  fullWidth?: boolean;
  descriptionClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className = "",
  specCode,
  fullWidth = false,
  descriptionClassName = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-8 lg:mb-10 reveal-init ${centered ? "text-center" : ""} ${className}`}
    >
      <div className={`flex items-center gap-2.5 mb-2.5 ${centered ? "justify-center" : ""}`}>
        {eyebrow && (
          <span className="eyebrow">
            {eyebrow}
          </span>
        )}
        {specCode && (
          <span className="font-mono-spec text-[11px] font-bold text-[#0A2540] bg-white border border-[#CBD5E1] px-2.5 py-0.5 rounded shadow-2xs uppercase">
            {specCode}
          </span>
        )}
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#032356] tracking-tight leading-tight">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-3 text-base sm:text-lg text-[#475569] leading-relaxed font-normal ${
            fullWidth
              ? "w-full max-w-none"
              : centered
              ? "mx-auto max-w-3xl"
              : "max-w-2xl"
          } ${descriptionClassName}`}
        >
          {description}
        </p>
      )}

      {/* Structural USA accent underline with animated expand */}
      <div className={`mt-4 flex items-center gap-1.5 ${centered ? "justify-center" : ""}`}>
        <div className="w-12 h-1 bg-[#D4030C] rounded-full line-expand" />
        <div className="w-4 h-1 bg-[#032356] rounded-full" />
      </div>
    </div>
  );
}
