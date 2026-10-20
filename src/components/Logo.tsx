export const chevronPaths = {
  left: "M8 2 2 12l6 10",
  right: "M2 2l6 10-6 10",
};

export const chevronSvgProps = {
  viewBox: "0 0 10 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-[0.95em] w-[0.4em] shrink-0 text-indigo",
} as const;

// The <LG> mark. Sized by font-size; chevrons spread apart on hover of a
// parent `.group`.
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex items-center font-display font-bold leading-none tracking-[-0.04em] ${className}`}
    >
      <svg
        {...chevronSvgProps}
        className={`${chevronSvgProps.className} transition-transform duration-300 ease-out group-hover:-translate-x-[0.12em]`}
      >
        <path d={chevronPaths.left} />
      </svg>
      <span className="px-[0.06em]">LG</span>
      <svg
        {...chevronSvgProps}
        className={`${chevronSvgProps.className} transition-transform duration-300 ease-out group-hover:translate-x-[0.12em]`}
      >
        <path d={chevronPaths.right} />
      </svg>
    </span>
  );
}

export function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex flex-col leading-none ${className}`}>
      <span className="font-display text-[1em] font-medium tracking-tight text-foreground">
        Lydia Groza
      </span>
      <span className="mt-[0.4em] font-code text-[0.6em] tracking-[0.2em] text-muted">
        WEB DEVELOPMENT
      </span>
    </span>
  );
}
