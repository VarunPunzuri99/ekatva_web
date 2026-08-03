type IconProps = { className?: string };

export function MandalaMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <circle cx="12" cy="12" r="5.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M12 3.5v2.5M12 18v2.5M3.5 12h2.5M18 12h2.5M6.2 6.2l1.8 1.8M16 16l1.8 1.8M17.8 6.2 16 8M8 16l-1.8 1.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StarMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 3.5 13.6 9.2 19.5 12 13.6 14.8 12 20.5 10.4 14.8 4.5 12 10.4 9.2 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
