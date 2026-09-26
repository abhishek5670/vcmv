import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface AnimatedFeatureCardProps extends Omit<HTMLMotionProps<"div">, "title"> {
  index: string;
  tag: string;
  titleContent: React.ReactNode;
  imageSrc: string;
  href?: string;
  color?: "gold" | "charcoal" | "ivory";
}

const colorVariants = {
  gold: {
    '--feature-color': 'var(--vcmv-gold)',
    '--feature-color-light': 'color-mix(in srgb, var(--vcmv-gold) 40%, transparent)',
    '--feature-color-dark': 'var(--vcmv-charcoal)',
  },
  charcoal: {
    '--feature-color': 'var(--vcmv-cream)',
    '--feature-color-light': 'color-mix(in srgb, var(--vcmv-charcoal) 60%, transparent)',
    '--feature-color-dark': 'var(--vcmv-charcoal)',
  },
  ivory: {
    '--feature-color': 'var(--vcmv-charcoal)',
    '--feature-color-light': 'color-mix(in srgb, var(--vcmv-ivory) 80%, transparent)',
    '--feature-color-dark': 'var(--vcmv-ivory)',
  },
};

const AnimatedFeatureCard = React.forwardRef<
  HTMLDivElement,
  AnimatedFeatureCardProps
>(({ className, index, tag, titleContent, imageSrc, color = "gold", href, ...props }, ref) => {
  const cardStyle = colorVariants[color] as React.CSSProperties;

  const cardContent = (
    <motion.div
      ref={ref}
      style={{ ...cardStyle, border: "1px solid color-mix(in srgb, var(--vcmv-gold) 30%, transparent)" }}
      className={cn(
        "relative flex h-[400px] w-full flex-col justify-end overflow-hidden rounded-sm bg-[var(--vcmv-charcoal)] p-6 shadow-sm cursor-pointer group",
        className
      )}
      whileHover="hover"
      initial="initial"
      variants={{
        initial: { y: 0, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" },
        hover: { y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)" },
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      {...props}
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0 opacity-40 transition-opacity duration-300 group-hover:opacity-70"
        style={{
          background: `radial-gradient(circle at 50% 30%, var(--feature-color-light) 0%, transparent 70%)`
        }}
      />
      
      {/* Index Number */}
      <div 
        className="absolute top-6 left-6 text-sm font-semibold tracking-[0.2em]"
        style={{ fontFamily: "var(--font-inter)", color: "color-mix(in srgb, var(--vcmv-gold) 70%, transparent)" }}
      >
        {index}
      </div>

      {/* Main Image */}
      <motion.div 
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
        variants={{
            initial: { scale: 1, y: 0 },
            hover: { scale: 1.15, y: -20 },
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <img
          src={imageSrc}
          alt={tag}
          className="w-48 h-48 object-cover rounded-full shadow-2xl mix-blend-luminosity opacity-80 transition-opacity duration-300 group-hover:opacity-100"
          style={{ filter: "contrast(1.2)" }}
        />
      </motion.div>
      
      {/* Content */}
      <div className="relative z-20 border border-[color-mix(in srgb,var(--vcmv-gold) 20%,transparent)] bg-[var(--vcmv-charcoal)]/80 p-5 backdrop-blur-md transition-colors duration-300 group-hover:bg-[var(--vcmv-charcoal)]/90">
        <span
          className="mb-3 inline-block px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em]"
          style={{ 
            backgroundColor: 'var(--feature-color-dark)', 
            color: 'var(--feature-color)',
            fontFamily: "var(--font-inter)"
          }}
        >
          {tag}
        </span>
        <h3 
          className="text-2xl"
          style={{ 
            fontFamily: "var(--font-cormorant)", 
            color: "var(--vcmv-ivory)",
            fontWeight: 600,
            lineHeight: 1.15
          }}
        >
          {titleContent}
        </h3>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full outline-none" passHref legacyBehavior>
        <a className="block h-full outline-none no-underline">
          {cardContent}
        </a>
      </Link>
    );
  }

  return <div className="block h-full">{cardContent}</div>;
});

AnimatedFeatureCard.displayName = "AnimatedFeatureCard";

export { AnimatedFeatureCard };
