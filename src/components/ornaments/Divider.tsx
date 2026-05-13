interface DividerProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Divider({ className = '', variant = 'light' }: DividerProps) {
  const stroke = variant === 'dark' ? '#C99A6B' : '#A6764B';
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="ornament-line-dark flex-1 max-w-[140px]" />
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="1.6" fill={stroke} />
        <path
          d="M11 3 L13 11 L11 19 L9 11 Z"
          fill="none"
          stroke={stroke}
          strokeWidth="0.6"
          strokeLinejoin="round"
        />
        <path
          d="M3 11 L11 9 L19 11 L11 13 Z"
          fill="none"
          stroke={stroke}
          strokeWidth="0.6"
          strokeLinejoin="round"
        />
      </svg>
      <span className="ornament-line-dark flex-1 max-w-[140px]" />
    </div>
  );
}
