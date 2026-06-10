"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import Button from "@/components/ui/Button";
import Switch from "@/components/ui/Switch";
import DynamicIcon from "@/components/ui/DynamicIcon";

export default function Sidebar() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { personal, navigation } = portfolioData;

  // Initialize theme from document element class list

  const handleThemeToggle = (checked: boolean) => {
    setIsDarkMode(!checked);
    if (checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-sidebar-border bg-sidebar p-6 flex-col justify-between overflow-y-auto lg:flex transition-colors duration-300">
      {/* Header Profile Section */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-accent-indigo via-accent-purple to-pink-500 shadow-md shadow-accent-purple/20 text-white font-extrabold text-xl">
            M
          </div>
          <div>
            <h2 className="text-base font-bold text-foreground leading-tight">
              {personal.name}
            </h2>
            <p className="text-xs text-text-muted leading-tight mt-0.5">
              {personal.role}
            </p>
          </div>
        </div>

        {/* Dynamic Navigation Menu */}
        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[rgba(157,78,221,0.15)] text-accent-purple shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-accent-purple/20"
                    : "text-text-muted hover:text-foreground hover:bg-card-hover border border-transparent"
                }`}
              >
                <DynamicIcon
                  name={item.icon}
                  className={`h-5 w-5 ${
                    isActive ? "text-accent-purple" : "text-text-muted"
                  }`}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Section */}
      <div className="space-y-6 pt-6 border-t border-sidebar-border/60">
        {/* Dark Mode Switch */}
        <div className="flex items-center justify-between px-2">
          <span className="text-sm font-medium text-text-muted">Dark Mode</span>
          <Switch
            checked={!isDarkMode}
            onChange={handleThemeToggle}
            ariaLabel="Toggle dark mode"
          />
        </div>

        {/* Download CV */}
        <Button href={personal.cvUrl} variant="secondary" className="w-full">
          <DynamicIcon name="Download" className="h-4 w-4" />
          Download CV
        </Button>

        {/* Social Links */}
        <div className="flex items-center justify-between px-2">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-foreground transition-colors duration-150"
            aria-label="GitHub"
          >
            <DynamicIcon name="Github" className="h-5 w-5" />
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-foreground transition-colors duration-150"
            aria-label="LinkedIn"
          >
            <DynamicIcon name="Linkedin" className="h-5 w-5" />
          </a>
          <a
            href={personal.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-foreground transition-colors duration-150"
            aria-label="Twitter"
          >
            <DynamicIcon name="Twitter" className="h-5 w-5" />
          </a>
          <a
            href={personal.social.email}
            className="text-text-muted hover:text-foreground transition-colors duration-150"
            aria-label="Email"
          >
            <DynamicIcon name="Mail" className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[10px] text-center text-text-muted/70 tracking-wide font-medium leading-normal">
          © {new Date().getFullYear()} {personal.name}
          <br />
          All rights reserved.
        </p>
      </div>
    </aside>
  );
}
