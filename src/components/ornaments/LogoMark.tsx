type LogoMarkProps = {
  size?: number;
  className?: string;
  title?: string;
};

/**
 * LogoMark — versão SVG inline da logo "A Casa Sobre a Rocha".
 * Sem fundo, sem tagline, sem texto: apenas o ícone (casa + família + rocha).
 * Usa `currentColor` para se adaptar a qualquer cor pai.
 */
export function LogoMark({ size = 56, className = '', title = 'A Casa Sobre a Rocha' }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>

      {/* Telhado */}
      <path
        d="M 20 40 L 50 16 L 80 40"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />

      {/* Chaminé */}
      <path
        d="M 67 22 L 67 12 L 73 12 L 73 28"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />

      {/* Paredes (verticais) */}
      <path
        d="M 22 40 L 22 72"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 78 40 L 78 72"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Família — 3 silhuetas dentro da casa */}
      {/* Pai (esquerda, maior) */}
      <circle cx="38" cy="48" r="4.4" fill="currentColor" />
      <path
        d="M 31 72 L 31 58 Q 31 53 38 53 Q 45 53 45 58 L 45 72 Z"
        fill="currentColor"
      />

      {/* Mãe (direita, maior) */}
      <circle cx="62" cy="48" r="4.4" fill="currentColor" />
      <path
        d="M 55 72 L 55 58 Q 55 53 62 53 Q 69 53 69 58 L 69 72 Z"
        fill="currentColor"
      />

      {/* Filho (centro, menor) */}
      <circle cx="50" cy="57" r="3.2" fill="currentColor" />
      <path
        d="M 45 72 L 45 64 Q 45 60 50 60 Q 55 60 55 64 L 55 72 Z"
        fill="currentColor"
      />

      {/* Rocha — base orgânica */}
      <path
        d="M 8 84 Q 20 72 34 80 Q 50 70 64 81 Q 78 73 92 84 Q 88 92 50 92 Q 12 92 8 84 Z"
        fill="currentColor"
        opacity="0.92"
      />

      {/* Pequeno ramo de oliveira à direita da casa (detalhe da logo original) */}
      <path
        d="M 84 60 Q 88 55 92 58"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="86.5" cy="58" rx="1.6" ry="0.9" transform="rotate(-30 86.5 58)" fill="currentColor" />
      <ellipse cx="90" cy="56" rx="1.4" ry="0.8" transform="rotate(-20 90 56)" fill="currentColor" />
    </svg>
  );
}

export default LogoMark;
