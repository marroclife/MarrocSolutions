// components/ui/Section.tsx
import * as React from "react";

type Element = React.ElementType;
type HeadingLevel = "h1" | "h2" | "h3" | "h4";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export type SectionProps = React.HTMLAttributes<HTMLElement> & {
  /** Elemento semântico da raiz (default: "section") */
  as?: Element;
  /** Título opcional (renderiza um heading) */
  title?: React.ReactNode;
  /** Subtítulo opcional (parágrafo abaixo do título) */
  subtitle?: React.ReactNode;
  /** Nível do heading quando `title` é usado (default: "h2") */
  headingLevel?: HeadingLevel;
  /**
   * Envolve header e conteúdo com `.container`.
   * Default: false (para evitar container duplo onde a página já usa <div className="container">).
   */
  container?: boolean;
  /** Classes extras para o wrapper do conteúdo (dentro do container, se ativo) */
  innerClassName?: string;
  /** Id opcional para amarrar aria-labelledby ao título */
  id?: string;
};

const Heading: React.FC<{
  as: HeadingLevel;
  className?: string;
  id?: string;
  children: React.ReactNode;
}> = ({ as, className, id, children }) => {
  const Tag = as as any;
  const typo = cn(
    as === "h1" && "font-display text-3xl sm:text-4xl md:text-6xl leading-tight",
    as === "h2" && "font-display text-2xl sm:text-3xl md:text-4xl",
    as === "h3" && "font-display text-xl sm:text-2xl md:text-3xl",
    as === "h4" && "font-display text-lg sm:text-xl md:text-2xl",
    className
  );
  return (
    <Tag id={id} className={typo}>
      {children}
    </Tag>
  );
};

export function Section({
  as = "section",
  className,
  title,
  subtitle,
  headingLevel = "h2",
  container = false,
  innerClassName,
  id,
  children,
  ...rest
}: SectionProps) {
  const Tag = as as Element;
  const sectionClasses = cn("py-10 sm:py-12 md:py-16", className);
  const titleId = title ? `${id ?? "section"}-title` : undefined;

  return (
    <Tag className={sectionClasses} aria-labelledby={titleId} id={id} {...rest}>
      {title ? (
        <header className={cn(container && "container", "mb-4 sm:mb-6")}>
          <Heading as={headingLevel} id={titleId}>
            {title}
          </Heading>
          {subtitle ? (
            <p className="mt-2 text-paper/80 max-w-3xl">{subtitle}</p>
          ) : null}
        </header>
      ) : null}

      <div className={cn(container && "container", innerClassName)}>{children}</div>
    </Tag>
  );
}

export default Section;
