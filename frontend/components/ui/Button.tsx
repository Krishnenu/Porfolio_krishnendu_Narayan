import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "card";
  disabled?: boolean;
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  onClick,
  href,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
  target,
  rel,
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 outline-none select-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-accent-purple to-accent-indigo text-white hover:opacity-95 shadow-accent-purple/20 shadow-md hover:scale-[1.02]",
    secondary:
      "border border-card-border bg-card/60 hover:bg-card-hover text-foreground hover:scale-[1.02]",
    card:
      "border border-card-border bg-card hover:bg-card-hover hover:border-accent-purple/20 shadow-sm",
  };

  const classes = `${baseStyle} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.endsWith(".pdf") ||
      href === "#"
    ) {
      return (
        <a href={href} className={classes} target={target} rel={rel}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
