interface OrnamentProps {
  className?: string;
  size?: number;
  stroke?: string;
}

export function HeartCross({ className = '', size = 72, stroke = '#C99A6B' }: OrnamentProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Coração */}
      <path
        d="M50 82 C20 62 18 42 32 32 C42 25 48 32 50 38 C52 32 58 25 68 32 C82 42 80 62 50 82 Z"
        fill="none"
        stroke={stroke}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Cruz interna */}
      <line x1="50" y1="44" x2="50" y2="70" stroke={stroke} strokeWidth="1.1" strokeLinecap="round" />
      <line x1="42" y1="54" x2="58" y2="54" stroke={stroke} strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}
