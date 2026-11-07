export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-bold tracking-[-0.02em] ${className}`}>
      <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
        <rect x="1" y="1" width="20" height="20" rx="5" fill="currentColor" opacity="0.14" />
        <path d="M6 5.5v11h10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" fill="none" />
        <rect x="12.4" y="5.5" width="3.6" height="3.6" fill="#2f6bff" />
      </svg>
      <span>LIFEOS</span>
    </span>
  );
}
