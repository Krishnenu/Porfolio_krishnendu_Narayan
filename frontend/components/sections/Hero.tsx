"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import DynamicIcon from "@/components/ui/DynamicIcon";

export default function Hero() {
  const { personal, stats } = portfolioData;

  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case "exp":
        return {
          bg: "bg-stat-exp-bg",
          text: "text-stat-exp-text",
          iconBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        };
      case "proj":
        return {
          bg: "bg-stat-proj-bg",
          text: "text-stat-proj-text",
          iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        };
      case "hack":
        return {
          bg: "bg-stat-hack-bg",
          text: "text-stat-hack-text",
          iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        };
      case "git":
        return {
          bg: "bg-stat-git-bg",
          text: "text-stat-git-text",
          iconBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
        };
      default:
        return {
          bg: "bg-card",
          text: "text-foreground",
          iconBg: "bg-card-border",
        };
    }
  };

  return (
    <section className="relative overflow-hidden py-10 lg:py-16">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-accent-purple/10 blur-[100px] glow-bg" />
      <div className="absolute bottom-0 left-1/3 -z-10 h-[300px] w-[300px] rounded-full bg-accent-indigo/10 blur-[80px] glow-bg" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
        {/* Left Column: Bio & Intro */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-center text-left">
          <Badge variant="default" className="w-fit">
            <span className="animate-pulse">👋</span>
            <span className="text-text-muted">Hi, I&apos;m</span>
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            {personal.firstName}{" "}
            <span className="bg-gradient-to-r from-accent-purple via-pink-500 to-accent-indigo bg-clip-text text-transparent">
              {personal.lastName}
            </span>
          </h1>

          <h3 className="text-lg sm:text-xl font-bold text-foreground/95">
            {personal.role}
          </h3>

          <p className="text-base text-text-muted max-w-lg leading-relaxed">
            {personal.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href="/projects" variant="primary">
              View My Work
              <DynamicIcon name="ArrowRight" className="h-4 w-4" />
            </Button>
            <Button href={personal.cvUrl} variant="secondary">
              Download CV
              <DynamicIcon name="Download" className="h-4 w-4" />
            </Button>
          </div>

          {/* Social icons row */}
          <div className="flex items-center gap-4 pt-4 border-t border-card-border/40 w-fit">
            <span className="text-xs font-semibold text-text-muted">
              Connect with me
            </span>
            <div className="flex items-center gap-3">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-card-border bg-card/40 text-text-muted hover:text-foreground hover:bg-card-hover hover:border-accent-purple/30 transition-all duration-150"
              >
                <DynamicIcon name="Github" className="h-4 w-4" />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-card-border bg-card/40 text-text-muted hover:text-foreground hover:bg-card-hover hover:border-accent-purple/30 transition-all duration-150"
              >
                <DynamicIcon name="Linkedin" className="h-4 w-4" />
              </a>
              <a
                href={personal.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-card-border bg-card/40 text-text-muted hover:text-foreground hover:bg-card-hover hover:border-accent-purple/30 transition-all duration-150"
              >
                <DynamicIcon name="Twitter" className="h-4 w-4" />
              </a>
              <a
                href={personal.social.email}
                className="p-2 rounded-lg border border-card-border bg-card/40 text-text-muted hover:text-foreground hover:bg-card-hover hover:border-accent-purple/30 transition-all duration-150"
              >
                <DynamicIcon name="Mail" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Center Column: Portrait Image with glowing ring background */}
        <div className="lg:col-span-4 flex justify-center relative">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
            {/* Pulsing neon background glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-purple/40 to-accent-indigo/40 blur-3xl opacity-80 animate-pulse" />

            {/* Orbit rings & outline shapes */}
            <div className="absolute border border-dashed border-accent-purple/20 rounded-full w-[110%] h-[110%] animate-[spin_60s_linear_infinite]" />
            <div className="absolute border border-accent-indigo/10 rounded-full w-[120%] h-[120%] animate-[spin_40s_linear_infinite_reverse]" />

            {/* Floating decoration squares */}
            <div
              className="absolute top-10 left-0 border border-accent-purple/30 rounded-lg w-6 h-6 rotate-12 animate-bounce"
              style={{ animationDuration: "6s" }}
            />
            <div
              className="absolute bottom-20 right-0 border border-accent-indigo/30 rounded-lg w-8 h-8 -rotate-45 animate-bounce"
              style={{ animationDuration: "8s" }}
            />

            {/* Profile image wrapper */}
            <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden border-2 border-accent-purple/30 shadow-2xl shadow-accent-purple/10 bg-sidebar/80 backdrop-blur-sm z-10 flex items-center justify-center">
              <Image
                src={personal.avatar}
                alt={personal.name}
                fill
                priority
                unoptimized
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Stats Cards */}
        <div className="lg:col-span-3 space-y-4">
          {stats.map((stat, idx) => {
            const theme = getThemeClasses(stat.colorTheme);
            return (
              <Card
                key={idx}
                className="flex items-center gap-4 p-4 !bg-card/60"
              >
                {/* Accent colored icon container */}
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${theme.iconBg}`}
                >
                  <DynamicIcon name={stat.icon} className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-foreground leading-tight">
                    {stat.value}
                  </h4>
                  <p className="text-xs font-semibold text-text-muted mt-0.5">
                    {stat.label} {stat.sublabel}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
