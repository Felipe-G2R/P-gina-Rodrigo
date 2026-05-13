interface OrnamentProps {
  className?: string;
  size?: number;
  stroke?: string;
}

export function Family({ className = '', size = 96, stroke = '#C99A6B' }: OrnamentProps) {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 120 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Pai */}
      <circle cx="30" cy="22" r="7" stroke={stroke} strokeWidth="1.1" fill="none" />
      <path
        d="M18 78 L18 46 Q18 36 30 36 Q42 36 42 46 L42 78"
        stroke={stroke}
        strokeWidth="1.1"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Mãe */}
      <circle cx="90" cy="22" r="7" stroke={stroke} strokeWidth="1.1" fill="none" />
      <path
        d="M78 78 L78 46 Q78 36 90 36 Q102 36 102 46 L102 78"
        stroke={stroke}
        strokeWidth="1.1"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Filho 1 */}
      <circle cx="52" cy="44" r="5" stroke={stroke} strokeWidth="1" fill="none" />
      <path
        d="M44 78 L44 58 Q44 50 52 50 Q60 50 60 58 L60 78"
        stroke={stroke}
        strokeWidth="1"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Filho 2 */}
      <circle cx="68" cy="46" r="4.5" stroke={stroke} strokeWidth="1" fill="none" />
      <path
        d="M60 78 L60 60 Q60 52 68 52 Q76 52 76 60 L76 78"
        stroke={stroke}
        strokeWidth="1"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  );
}
