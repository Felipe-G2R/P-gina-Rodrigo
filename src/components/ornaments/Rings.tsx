interface OrnamentProps {
  className?: string;
  size?: number;
  stroke?: string;
}

export function Rings({ className = '', size = 72, stroke = '#C99A6B' }: OrnamentProps) {
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
      <circle cx="38" cy="52" r="20" stroke={stroke} strokeWidth="1.2" fill="none" />
      <circle cx="62" cy="52" r="20" stroke={stroke} strokeWidth="1.2" fill="none" />
      {/* Marca de entrelaçamento (clarão) */}
      <path
        d="M50 32.5 Q56 38 56 52 Q56 66 50 71.5"
        stroke={stroke}
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Pequena chama no topo (união) */}
      <path
        d="M50 22 Q47 26 50 30 Q53 26 50 22 Z"
        fill={stroke}
        opacity="0.6"
      />
    </svg>
  );
}
