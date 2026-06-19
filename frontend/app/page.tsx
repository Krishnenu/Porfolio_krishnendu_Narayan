"use client";

import Link from "next/link";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import DynamicIcon from "@/components/ui/DynamicIcon";

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Page Header (Matching Top Row in Screenshot) */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-card-border/40">
        {/* Inner Page Tabs */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="text-foreground relative after:absolute after:bottom-[-25px] after:left-0 after:right-0 after:h-[2px] after:bg-accent-purple font-semibold"
          >
            Home
          </Link>
          <Link
            href="/resume"
            className="text-text-muted hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/experience"
            className="text-text-muted hover:text-foreground transition-colors"
          >
            Highlights
          </Link>
        </nav>

        {/* Status Badge & Hire Action */}
        <div className="flex items-center gap-4 self-end sm:self-auto">
          <Badge variant="success">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for opportunities
          </Badge>
          <Button
            href="/contact"
            variant="primary"
            className="!px-4 !py-1.5 !rounded-xl !text-xs !shadow-sm !shadow-accent-indigo/10"
          >
            Hire Me
            <DynamicIcon name="ArrowUpRight" className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />
    </div>
  );
}
