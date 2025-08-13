import React from "react";


type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type SectionProps = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  headingLevel?: HeadingTag;
  id?: string;
  ariaLabel?: string;
};

export const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className = "",
  headingLevel = "h2",
  id,
  ariaLabel,
}) => {
  const Heading = headingLevel;
  const headingId = title ? `${id ?? title.toLowerCase().replace(/[^a-z0-9]+/g,'-')}-heading` : undefined;

  return (
    <section
      id={id}
      className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
      aria-label={ariaLabel}
      aria-labelledby={headingId}
    >
      {title && (
        <Heading id={headingId} className="text-2xl sm:text-3xl lg:text-4xl font-serif text-off mb-2">
          {title}
        </Heading>
      )}
      {subtitle && (
        <p className="text-off/80 leading-relaxed mb-6 max-w-3xl">{subtitle}</p>
      )}
      {children}
    </section>
  );
};
