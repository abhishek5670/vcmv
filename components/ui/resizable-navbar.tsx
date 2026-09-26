"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState } from "react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

import { GlassFilter } from "./liquid-glass";

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <>
      <GlassFilter />
      <motion.div
        ref={ref}
        className={cn("fixed inset-x-0 top-0 z-40 w-full group", visible ? "is-scrolled" : "is-top", className)}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
            : child,
        )}
      </motion.div>
    </>
  );
};

import { GlassEffect } from "./liquid-glass";

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  
  return (
    <motion.div
      animate={{
        width: "60%",
        y: 12,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden flex-row items-center justify-between self-start lg:flex",
        className,
      )}
    >
      <GlassEffect
        disabled={isHome && !visible}
        className="w-full transition-all duration-500 rounded-full"
        style={{
          backgroundColor: visible 
            ? "color-mix(in srgb, var(--vcmv-ivory) 80%, transparent)" 
            : isHome 
              ? "transparent"
              : "color-mix(in srgb, var(--vcmv-charcoal) 40%, transparent)",
          transition: "background-color 0.3s ease",
        }}
      >
        <div className="w-full flex flex-row items-center justify-between px-6 py-3 relative">
          {React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(child as React.ReactElement<any>, { visible })
              : child
          )}
        </div>
      </GlassEffect>
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick, visible }: NavItemsProps & { visible?: boolean }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium lg:flex",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-sm tracking-wide transition-colors duration-200"
          style={{ color: visible ? "var(--vcmv-taupe)" : "#ffffff" }}
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full"
              style={{ backgroundColor: "color-mix(in srgb, var(--vcmv-gold) 12%, transparent)" }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  
  return (
    <motion.div
      animate={{
        width: "92%",
        paddingRight: "16px",
        paddingLeft: "16px",
        y: 12,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col items-center justify-between px-0 lg:hidden py-3",
        className,
      )}
    >
      <GlassEffect
        disabled={isHome && !visible}
        className="w-full transition-all duration-500 rounded-[12px]"
        style={{
          backgroundColor: visible 
            ? "color-mix(in srgb, var(--vcmv-ivory) 80%, transparent)" 
            : isHome 
              ? "transparent"
              : "color-mix(in srgb, var(--vcmv-charcoal) 40%, transparent)",
          transition: "background-color 0.3s ease",
        }}
      >
        <div className="w-full flex-col items-center justify-between px-4 py-3 relative">
          {children}
        </div>
      </GlassEffect>
    </motion.div>
  );
};


export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-xl px-6 py-8",
            className,
          )}
          style={{
            backgroundColor: "var(--vcmv-ivory)",
            boxShadow: "0 16px 48px color-mix(in srgb, var(--vcmv-charcoal) 12%, transparent)",
            border: "1px solid color-mix(in srgb, var(--vcmv-gold) 20%, transparent)",
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX
      onClick={onClick}
      className="cursor-pointer text-white group-[.is-scrolled]:text-[var(--vcmv-charcoal)] transition-colors duration-300"
    />
  ) : (
    <IconMenu2
      onClick={onClick}
      className="cursor-pointer text-white group-[.is-scrolled]:text-[var(--vcmv-charcoal)] transition-colors duration-300"
    />
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
    | React.ComponentPropsWithoutRef<"a">
    | React.ComponentPropsWithoutRef<"button">
  )) => {
  const baseStyles =
    "px-5 py-2.5 text-sm font-medium tracking-wide relative cursor-pointer transition-all duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "bg-[#C9A86A] text-[#2B2A28] rounded-full hover:bg-[#b8935a] hover:-translate-y-0.5",
    secondary:
      "bg-transparent text-[#6B6258] hover:text-[#2B2A28] rounded-full",
    dark: "bg-[#2B2A28] text-[#FFF9EF] rounded-full hover:bg-[#3d3c39] hover:-translate-y-0.5",
    gradient:
      "bg-gradient-to-b from-[#C9A86A] to-[#b8935a] text-[#2B2A28] rounded-full hover:-translate-y-0.5",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
