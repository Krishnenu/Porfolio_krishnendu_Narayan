"use client";

import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import Switch from "@/components/ui/Switch";
import Button from "@/components/ui/Button";
import DynamicIcon from "@/components/ui/DynamicIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { personal } = portfolioData;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="lg:hidden border-b border-sidebar-border bg-sidebar px-4 py-3 sticky top-0 z-50 flex items-center justify-between transition-colors duration-300">
      {/* Brand Profile */}
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-accent-indigo via-accent-purple to-pink-500 text-white font-extrabold text-sm">
          M
        </div>
        <span className="text-sm font-bold text-foreground">{personal.name}</span>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="p-1.5 rounded-lg border border-card-border bg-card text-text-muted hover:text-foreground transition-colors"
        aria-label="Toggle navigation menu"
      >
        <DynamicIcon name={isOpen ? "X" : "Menu"} className="h-5 w-5" />
      </button>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar Container */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-sidebar border-r border-sidebar-border shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between p-6 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between" onClick={() => setIsOpen(false)}>
          <SidebarContent />
        </div>
      </div>
    </header>
  );
}

// Cloned sidebar content for mobile drawer integration
function SidebarContent() {
  const { personal, navigation } = portfolioData;
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDarkMode(isDark);
  }, []);

  const handleThemeToggle = (checked: boolean) => {
    setIsDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-accent-indigo via-accent-purple to-pink-500 text-white font-extrabold text-xl">
            M
          </div>
          <div>
            <h2 className="text-base font-bold text-foreground leading-tight">{personal.name}</h2>
            <p className="text-xs text-text-muted leading-tight mt-0.5">{personal.role}</p>
          </div>
        </div>

        <nav className="space-y-1">
          {navigation.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-text-muted hover:text-foreground hover:bg-card-hover border border-transparent transition-all duration-200"
            >
              <DynamicIcon name={item.icon} className="h-5 w-5 text-text-muted" />
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="space-y-6 pt-6 border-t border-sidebar-border/60">
        <div className="flex items-center justify-between px-2">
          <span className="text-sm font-medium text-text-muted">Dark Mode</span>
          <Switch checked={isDarkMode} onChange={handleThemeToggle} ariaLabel="Toggle dark mode" />
        </div>

        <Button href={personal.cvUrl} variant="secondary" className="w-full">
          <DynamicIcon name="Download" className="h-4 w-4" />
          Download CV
        </Button>

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

        <p className="text-[10px] text-center text-text-muted/70 tracking-wide font-medium leading-normal">
          © {new Date().getFullYear()} {personal.name}
          <br />
          All rights reserved.
        </p>
      </div>
    </div>
  );
}
