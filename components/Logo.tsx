"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  variant?: "navbar" | "light" | "dark" | "gold";
  showEmblem?: boolean;
}

export default function Logo({
  className,
  variant = "navbar",
  showEmblem = true,
  ...props
}: LogoProps) {
  // Variant color mappings
  const textColor =
    variant === "light"
      ? "#FFF9EF"
      : variant === "dark"
      ? "var(--vcmv-charcoal)"
      : variant === "gold"
      ? "#C9A86A"
      : "currentColor";

  return (
    <svg
      viewBox={showEmblem ? "0 0 248 46" : "0 0 196 46"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-9 sm:h-10 w-auto select-none", className)}
      aria-label="V C M V & Associates LLP"
      role="img"
      {...props}
    >
      <defs>
        <linearGradient id="vcmv-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E5CD9E" />
          <stop offset="50%" stopColor="#C9A86A" />
          <stop offset="100%" stopColor="#9E7D42" />
        </linearGradient>
        <linearGradient id="vcmv-gold-soft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C9A86A" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#E5CD9E" stopOpacity="1" />
          <stop offset="100%" stopColor="#C9A86A" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* ── Vector Emblem ── */}
      {showEmblem && (
        <g transform="translate(1, 2)">
          {/* Outer Luxury Squircle / Diamond Frame */}
          <rect
            x="1.5"
            y="1.5"
            width="38"
            height="38"
            rx="8"
            fill="url(#vcmv-gold-grad)"
            fillOpacity="0.08"
            stroke="url(#vcmv-gold-grad)"
            strokeWidth="1.2"
          />

          {/* Corner Accent Pips */}
          <circle cx="6" cy="6" r="0.8" fill="#C9A86A" opacity="0.65" />
          <circle cx="35" cy="6" r="0.8" fill="#C9A86A" opacity="0.65" />
          <circle cx="6" cy="35" r="0.8" fill="#C9A86A" opacity="0.65" />
          <circle cx="35" cy="35" r="0.8" fill="#C9A86A" opacity="0.65" />

          {/* Geometric Outer Chevron 'V' */}
          <path
            d="M9.5 11.5L20.5 30.5L31.5 11.5"
            stroke="url(#vcmv-gold-grad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner Chevron 'V' */}
          <path
            d="M14 11.5L20.5 22L27 11.5"
            stroke={textColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors duration-300"
            opacity="0.85"
          />

          {/* Center Apex Diamond */}
          <path
            d="M20.5 7L23 10L20.5 13L18 10Z"
            fill="url(#vcmv-gold-grad)"
          />
        </g>
      )}

      {/* ── Brand Typography: V C M V on top, & ASSOCIATES LLP directly below ── */}
      <g transform={showEmblem ? "translate(49, 0)" : "translate(0, 0)"}>
        {/* V C M V */}
        <text
          x="0"
          y="23"
          className="transition-colors duration-300"
          style={{
            fontFamily: "var(--font-cormorant), Cormorant Garamond, Georgia, serif",
            fontSize: "22px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            fill: textColor,
          }}
        >
          V C M V
        </text>

        {/* Subtle Decorative Hairline */}
        <line
          x1="0"
          y1="28.5"
          x2="182"
          y2="28.5"
          stroke="url(#vcmv-gold-soft)"
          strokeWidth="0.8"
          strokeOpacity="0.5"
        />

        {/* & ASSOCIATES LLP directly below V C M V */}
        <text
          x="0.5"
          y="38.5"
          className="transition-colors duration-300"
          style={{
            fontFamily: "var(--font-inter), Inter, -apple-system, sans-serif",
            fontSize: "8.2px",
            fontWeight: 500,
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            fill: "url(#vcmv-gold-grad)",
          }}
        >
          &amp; ASSOCIATES LLP
        </text>
      </g>
    </svg>
  );
}
