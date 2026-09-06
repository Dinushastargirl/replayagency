"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  icon?: "arrow-right" | "arrow-down" | "none";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon = "none",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-medium tracking-wider uppercase transition-all duration-300 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-primary text-canvas border border-primary hover:bg-secondary shadow-sm hover:shadow",
    secondary:
      "bg-surface/80 text-primary border border-border hover:bg-surface hover:border-primary/30",
    outline:
      "bg-transparent text-primary border border-border hover:border-primary hover:bg-primary/5",
  };

  const IconComponent =
    icon === "arrow-right" ? (
      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    ) : icon === "arrow-down" ? (
      <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1" />
    ) : null;

  const combinedClassName = `group rounded-none ${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        <span>{children}</span>
        {IconComponent}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      <span>{children}</span>
      {IconComponent}
    </button>
  );
}
