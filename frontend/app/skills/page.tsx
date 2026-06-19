"use client";

import { portfolioData } from "@/data/portfolioData";
import Card from "@/components/ui/Card";
import DynamicIcon from "@/components/ui/DynamicIcon";

export default function SkillsPage() {
  const { skills, services } = portfolioData;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-card-border/40">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">Skills & Expertise</h1>
          <p className="text-sm text-text-muted mt-1">Technologies and methodologies I work with</p>
        </div>
      </div>

      {/* Services Grid (What I Do detail) */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="flex gap-4 p-5 hover:bg-card-hover/40"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-purple/10 border border-accent-purple/20 text-accent-purple">
                <DynamicIcon name={service.icon} className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-foreground">{service.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Skills Progress Dashboard */}
      <div className="space-y-4 pt-4">
        <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">Detailed Proficiency</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skills.map((cat, idx) => (
            <Card
              key={idx}
              className="p-6 hover:border-accent-purple/20"
              hoverable={false}
            >
              <h3 className="text-sm font-bold text-accent-purple uppercase tracking-wider mb-4">
                {cat.category}
              </h3>
              
              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-card-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent-purple to-accent-indigo rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
