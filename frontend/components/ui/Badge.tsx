import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "tech" | "accent";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const baseStyle =
    "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm shadow-sm transition-all duration-200";

  const variantStyles = {
    default: "border border-card-border bg-card/60 text-text-muted",
    success: "border border-emerald-500/10 bg-emerald-500/5 text-emerald-400",
    tech: "border border-accent-purple/20 bg-[rgba(157,78,221,0.08)] text-accent-purple",
    accent: "border border-accent-indigo/20 bg-accent-indigo/5 text-accent-indigo",
  };

  return (
    <div className={`${baseStyle} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}
