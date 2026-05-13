interface OrnamentProps {
  className?: string;
  size?: number;
  stroke?: string;
}

export function House({ className = '', size = 72, stroke = '#C99A6B' }: OrnamentProps) {
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
      {/* Rocha */}
      <path
        d="M10 82 Q18 76 28 80 Q36 73 48 78 Q58 72 68 79 Q80 74 90 82 L90 92 L10 92 Z"
        fill="none"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      {/* Casa */}
      <path
        d="M28 56 L28 78 L72 78 L72 56"
        fill="none"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      {/* Telhado */}
      <path
        d="M22 58 L50 36 L78 58"
        fill="none"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Porta */}
      <path
        d="M44 78 L44 64 Q50 60 56 64 L56 78"
        fill="none"
        stroke={stroke}
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      {/* Cruz no telhado */}
      <line x1="50" y1="28" x2="50" y2="36" stroke={stroke} strokeWidth="0.9" strokeLinecap="round" />
      <line x1="47" y1="31" x2="53" y2="31" stroke={stroke} strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}
