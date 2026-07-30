import React from 'react';

interface VtsLogoProps {
  className?: string;
  variant?: 'default' | 'light' | 'monochrome';
  showTextLabel?: boolean;
}

export const VtsLogo: React.FC<VtsLogoProps> = ({
  className = 'h-10',
  variant = 'default',
  showTextLabel = false,
}) => {
  const magentaColor = variant === 'monochrome' ? 'currentColor' : '#9C1D5E';
  const tsColor = variant === 'light' ? '#FFFFFF' : variant === 'monochrome' ? 'currentColor' : '#111827';

  return (
    <div className={`inline-flex items-center gap-3 ${className.includes('flex-') ? '' : ''}`}>
      <svg
        viewBox="0 0 320 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} w-auto aspect-[16/9] object-contain`}
        aria-label="VTS Consulting & Construction Logo"
      >
        {/* Roof Gable Structure (Magenta) */}
        <path
          d="M 12 65 L 75 10 L 210 65 L 195 65 L 75 22 L 35 65 Z"
          fill={magentaColor}
        />
        {/* Solid roof wedge fill under gable */}
        <path
          d="M 32 65 L 75 25 L 180 65 Z"
          fill={magentaColor}
        />

        {/* 'V' Letter & Diamond Accent (Magenta) */}
        {/* Left arm of V with diamond inner cutout */}
        <path
          d="M 10 72 L 38 72 L 56 102 L 38 102 Z"
          fill={magentaColor}
        />
        {/* Diamond negative space cutout accent */}
        <polygon
          points="24,72 38,92 24,112 10,92"
          fill={magentaColor}
        />
        {/* Bottom V crook and right arm */}
        <path
          d="M 10 72 L 56 160 L 72 160 L 102 72 L 82 72 L 64 128 L 38 72 Z"
          fill={magentaColor}
        />

        {/* 'T' Letter (Black / Light) */}
        <path
          d="M 110 72 L 180 72 L 180 90 L 154 90 L 154 158 L 132 158 L 132 90 L 110 90 Z"
          fill={tsColor}
        />

        {/* 'S' Letter (Black / Light) */}
        <path
          d="M 190 85 C 190 75, 202 71, 222 71 C 242 71, 256 77, 256 92 C 256 112, 218 112, 218 126 C 218 134, 228 138, 240 138 C 252 138, 258 132, 258 126 L 278 126 C 278 146, 258 158, 238 158 C 212 158, 196 148, 196 128 C 196 106, 236 104, 236 92 C 236 86, 228 84, 220 84 C 208 84, 202 89, 202 96 Z"
          fill={tsColor}
        />

        {/* Bottom Tapered Underline Wedge (Magenta) */}
        <path
          d="M 10 168 L 310 171 L 310 178 L 10 180 Z"
          fill={magentaColor}
        />
      </svg>

      {showTextLabel && (
        <div className="flex flex-col text-left">
          <span className="font-extrabold text-sm md:text-base leading-tight tracking-tight text-slate-900 dark:text-white">
            CÔNG TY TNHH TƯ VẤN VÀ XÂY DỰNG VTS
          </span>
          <span className="text-[10px] md:text-xs text-[#9C1D5E] font-bold tracking-wider uppercase">
            VTS CONSULTING & CONSTRUCTION
          </span>
        </div>
      )}
    </div>
  );
};
