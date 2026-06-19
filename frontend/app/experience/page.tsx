"use client";

import { portfolioData } from "@/data/portfolioData";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import DynamicIcon from "@/components/ui/DynamicIcon";

export default function ExperiencePage() {
  const { experiences } = portfolioData;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-card-border/40">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">Work Experience</h1>
          <p className="text-sm text-text-muted mt-1">My professional career and contributions</p>
        </div>
        <Button href="/contact" variant="primary">
          Work With Me
          <DynamicIcon name="ArrowRight" className="h-4 w-4" />
        </Button>
      </div>

      {/* Experience Timeline */}
      <div className="max-w-3xl">
        <div className="space-y-8 border-l-2 border-card-border pl-6 ml-3">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border-2 border-accent-indigo group-hover:bg-accent-indigo transition-all duration-200" />

              <Card className="p-6 hover:bg-card-hover/40 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent-indigo transition-colors duration-200">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-text-muted mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <Badge variant="accent" className="self-start sm:self-auto">
                    {exp.period}
                  </Badge>
                </div>

                <ul className="space-y-2.5 list-disc list-inside text-sm text-text-muted leading-relaxed">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="marker:text-accent-indigo">
                      <span className="pl-1">{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-2.5 py-1 rounded-lg border border-card-border bg-card-hover text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
