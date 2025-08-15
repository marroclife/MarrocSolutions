// components/ui/Section.tsx
import * as React from "react";

type Element = React.ElementType;

export type SectionProps = React.HTMLAttributes<HTMLElement> & {
  /** Elemento semântico da raiz (default: "section") */
  as?: Element;
};

export function Section({
  as = "section",
  className,
  ...rest
}: SectionProps) {
  const Tag = as as React.ElementType;
  const classes = ["py-10", "sm:py-12", "md:py-16", className]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes} {...rest} />;
}

export default Section;
