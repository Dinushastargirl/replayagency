"use client";

import React from "react";
import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  const links = [
    { label: "WORK", href: "/work", number: "01" },
    { label: "SYSTEM", href: "/system", number: "02" },
    { label: "ABOUT", href: "/about", number: "03" },
    { label: "CONTACT", href: "/contact", number: "04" },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-canvas/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 transition-all duration-300">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-border pb-6">
        <Link
          href="/"
          onClick={onClose}
          className="font-display font-bold text-lg tracking-tight text-primary"
        >
          REPLAY.AGENCY
        </Link>
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 -mr-2 text-primary hover:opacity-70 transition-opacity"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Nav Links */}
      <nav className="my-auto py-12 flex flex-col space-y-6">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="group flex items-baseline justify-between border-b border-border/40 pb-4 text-primary hover:text-muted transition-colors"
          >
            <span className="font-display text-4xl sm:text-5xl font-medium tracking-tight">
              {link.label}
            </span>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-muted">{link.number}</span>
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>
        ))}
      </nav>

      {/* Footer Info */}
      <div className="pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="text-xs text-muted font-mono tracking-wider">DIRECT INQUIRIES</p>
          <a
            href="mailto:replayagency.info@gmail.com"
            className="text-sm font-medium text-primary hover:underline"
          >
            replayagency.info@gmail.com
          </a>
        </div>
        <Button href="/contact" onClick={onClose} variant="primary" icon="arrow-right">
          START A PROJECT
        </Button>
      </div>
    </div>
  );
}
