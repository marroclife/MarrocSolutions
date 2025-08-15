// components/ui/Section.tsx
import * as React from "react";

type Element = React.ElementType;
type HeadingLevel = "h1" | "h2" | "h3" | "h4";

function clsx(...xs: Array<string | undefined | false | null>) {
  return xs.filter(Boolean).join(" ");
}

export type SectionProps = React.HTMLAttributes<HTMLElement> & {
  /** Elemento semântico da raiz (default: "section") */
  as?: Element;
  /** Título opcional (renderiza um heading) */
  title?: React.ReactNode;
  /** Subtítulo opcional (parágrafo abaixo do título) */
  subtitle?: React.ReactNode;
  /** Nível do heading quando `title` é usado */
  headingLevel?: HeadingLevel;
  /**
   * Envolver conteúdo e/ou header com `.container`.
   * Por padrão é **false** para evitar container duplo nas páginas que já têm container interno.
   */
  container?: boolean;
  /** classes extras para o wrapper do conteúdo (dentro do container, se ativo) */
  innerClassName?: string;
};

const Heading = ({
  as,
  className,
  children,
  id,
}: {
  as: HeadingLevel;
  className?: string;
  id?: string;
  children: React.ReactNode;
}) => {
  const Tag = as as any;
  const typo = clsx(
    as === "h1" && "font-display text-3xl sm:text-4xl md:text-6xl leading-tight",
    as === "h2" && "font-display text-2xl sm:text-3xl md:text-4xl",
    as === "h3" && "font-display text-xl sm:text-2xl md:text-3xl",
    as === "h4" && "font-display text-lg sm:text-xl md:text-2xl",
    className
  );
  return <Tag id={id} className={typo}>{children}</Tag>;
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
  const sectionClasses = clsx("py-10 sm:py-12 md:py-16", className);
  const titleId = title ? `${id ?? "sec"}-title` : undefined;

  return (
    <Tag className={sectionClasses} aria-labelledby={titleId} id={id} {...rest}>
      {/* Header opcional */}
      {title ? (
        <header className={clsx(container && "container", "mb-4 sm:mb-6")}>
          <Heading as={headingLevel} id={titleId}>
            {title}
          </Heading>
          {subtitle ? (
            <p className="mt-2 text-paper/80 max-w-3xl">{subtitle}</p>
          ) : null}
        </header>
      ) : null}

      {/* Conteúdo */}
      <div className={clsx(container && "container", innerClassName)}>{children}</div>
    </Tag>
  );
}

export default Section;
