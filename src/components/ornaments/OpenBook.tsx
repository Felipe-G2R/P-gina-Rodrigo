interface OrnamentProps {
  className?: string;
  size?: number;
  stroke?: string;
}

export function OpenBook({ className = '', size = 72, stroke = '#C99A6B' }: OrnamentProps) {
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
      {/* Lombada */}
      <line x1="50" y1="28" x2="50" y2="78" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
      {/* Página esquerda */}
      <path
        d="M50 28 Q30 30 18 36 L18 78 Q30 74 50 78 Z"
        fill="none"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      {/* Página direita */}
      <path
        d="M50 28 Q70 30 82 36 L82 78 Q70 74 50 78 Z"
        fill="none"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      {/* Linhas de texto */}
      <line x1="26" y1="44" x2="44" y2="42" stroke={stroke} strokeWidth="0.5" opacity="0.6" />
      <line x1="26" y1="50" x2="44" y2="48" stroke={stroke} strokeWidth="0.5" opacity="0.6" />
      <line x1="26" y1="56" x2="44" y2="54" stroke={stroke} strokeWidth="0.5" opacity="0.6" />
      <line x1="56" y1="42" x2="74" y2="44" stroke={stroke} strokeWidth="0.5" opacity="0.6" />
      <line x1="56" y1="48" x2="74" y2="50" stroke={stroke} strokeWidth="0.5" opacity="0.6" />
      <line x1="56" y1="54" x2="74" y2="56" stroke={stroke} strokeWidth="0.5" opacity="0.6" />
    </svg>
  );
}
