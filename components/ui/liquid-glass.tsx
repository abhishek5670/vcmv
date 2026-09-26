"use client";

import React from "react";
import Link from "next/link";

// Types
interface GlassEffectProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
}

export interface DockIcon {
  icon: React.ReactNode;
  alt: string;
  href: string;
  onClick?: () => void;
}

// Glass Effect Wrapper Component
export const GlassEffect: React.FC<GlassEffectProps & { disabled?: boolean }> = ({
  children,
  className = "",
  style = {},
  href,
  target = "_blank",
  disabled = false,
}) => {
  const glassStyle = disabled ? { ...style } : {
    boxShadow: "0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)",
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
    ...style,
  };

  const content = (
    <div
      className={`relative flex font-semibold overflow-hidden text-black cursor-pointer transition-all duration-700 ${className}`}
      style={glassStyle}
    >
      {/* Glass Layers */}
      {!disabled && (
        <>
          <div
            className="absolute inset-0 z-0 overflow-hidden rounded-inherit rounded-[inherit]"
            style={{
              backdropFilter: "blur(3px)",
              filter: "url(#glass-distortion)",
              isolation: "isolate",
            }}
          />
          <div
            className="absolute inset-0 z-10 rounded-[inherit]"
            style={{ background: "rgba(255, 255, 255, 0.25)" }}
          />
          <div
            className="absolute inset-0 z-20 rounded-[inherit] overflow-hidden"
            style={{
              boxShadow:
                "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)",
            }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-30 w-full h-full">{children}</div>
    </div>
  );

  return href ? (
    <a href={href} target={target} rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
};

// Dock Component
export const GlassDock: React.FC<{ icons: DockIcon[]; href?: string; className?: string }> = ({
  icons,
  href,
  className = "",
}) => (
  <GlassEffect
    href={href}
    className={`rounded-3xl p-3 hover:p-4 hover:rounded-[2rem] ${className}`}
  >
    <div className="flex items-center justify-center gap-4 rounded-3xl p-2 overflow-hidden">
      {icons.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          onClick={item.onClick}
          title={item.alt}
          className="w-12 h-12 flex items-center justify-center text-[var(--vcmv-charcoal)] transition-all duration-700 hover:scale-125 cursor-pointer hover:text-[var(--vcmv-gold)]"
          style={{
            transformOrigin: "center center",
            transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
          }}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  </GlassEffect>
);

// Button Component
export const GlassButton: React.FC<{ children: React.ReactNode; href?: string }> = ({
  children,
  href,
}) => (
  <GlassEffect
    href={href}
    className="rounded-3xl px-10 py-6 hover:px-11 hover:py-7 hover:rounded-[2rem] overflow-hidden"
  >
    <div
      className="transition-all duration-700 hover:scale-95"
      style={{
        transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
      }}
    >
      {children}
    </div>
  </GlassEffect>
);

// SVG Filter Component
export const GlassFilter: React.FC = () => (
  <svg style={{ display: "none" }}>
    <filter
      id="glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.001 0.005"
        numOctaves="1"
        seed="17"
        result="turbulence"
      />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="5"
        specularConstant="1"
        specularExponent="100"
        lightingColor="white"
        result="specLight"
      >
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="200"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);
