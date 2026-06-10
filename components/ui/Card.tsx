import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({
  children,
  className = "",
  hoverable = true,
}: CardProps) {
  return (
    <div
      className={`relative rounded-2xl border border-card-border bg-card/40 backdrop-blur-sm transition-all duration-300 shadow-sm ${
        hoverable
          ? "hover:bg-card-hover/60 hover:border-accent-purple/20 hover:-translate-y-0.5"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
