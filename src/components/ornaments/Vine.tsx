interface OrnamentProps {
  className?: string;
  size?: number;
  stroke?: string;
}

export function Vine({ className = '', size = 120, stroke = '#C99A6B' }: OrnamentProps) {
  return (
    <svg
      width={size}
      height={size / 4}
      viewBox="0 0 240 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 30 Q40 5 80 30 T160 30 T240 30"
        stroke={stroke}
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
      {/* Folhas */}
      <ellipse cx="40" cy="20" rx="6" ry="3" fill={stroke} opacity="0.55" transform="rotate(-25 40 20)" />
      <ellipse cx="120" cy="20" rx="6" ry="3" fill={stroke} opacity="0.55" transform="rotate(25 120 20)" />
      <ellipse cx="200" cy="20" rx="6" ry="3" fill={stroke} opacity="0.55" transform="rotate(-25 200 20)" />
      <ellipse cx="80" cy="40" rx="6" ry="3" fill={stroke} opacity="0.4" transform="rotate(25 80 40)" />
      <ellipse cx="160" cy="40" rx="6" ry="3" fill={stroke} opacity="0.4" transform="rotate(-25 160 40)" />
      {/* Frutos da vinha */}
      <circle cx="120" cy="42" r="2" fill={stroke} />
      <circle cx="124" cy="46" r="2" fill={stroke} />
      <circle cx="116" cy="46" r="2" fill={stroke} />
      <circle cx="120" cy="50" r="2" fill={stroke} />
    </svg>
  );
}
