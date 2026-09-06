"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { useReplay } from "@/context/ReplayContext";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { phase, reducedMotion } = useReplay();

  // Reveal navigation during transition/hero phase or immediately if reduced motion
  const isVisible = reducedMotion || phase === "transitioning" || phase === "hero";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        } ${
          isScrolled
            ? "bg-canvas/90 backdrop-blur-md border-b border-border/80 shadow-sm py-4"
            : "bg-canvas/70 backdrop-blur-sm border-b border-border/40 py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          {/* LEFT: Logo */}
          <Link
            href="/"
            className="font-display font-bold text-lg sm:text-xl tracking-tight text-primary hover:opacity-80 transition-opacity flex items-center gap-2"
          >
            <span>REPLAY.AGENCY</span>
          </Link>

          {/* CENTER / RIGHT (Desktop Nav Links) */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <Link
              href="/work"
              className="text-xs uppercase tracking-widest font-medium text-primary/70 hover:text-primary transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
            >
              WORK
            </Link>
            <Link
              href="/system"
              className="text-xs uppercase tracking-widest font-medium text-primary/70 hover:text-primary transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
            >
              SYSTEM
            </Link>
            <Link
              href="/about"
              className="text-xs uppercase tracking-widest font-medium text-primary/70 hover:text-primary transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
            >
              ABOUT
            </Link>
          </nav>

          {/* RIGHT: CTA Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Button href="/contact" variant="primary" icon="arrow-right" className="!py-2.5 !px-5 text-[11px]">
              START A PROJECT
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 text-primary hover:opacity-70 transition-opacity"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
