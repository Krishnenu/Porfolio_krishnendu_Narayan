"use client";

import { portfolioData } from "@/data/portfolioData";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import DynamicIcon from "@/components/ui/DynamicIcon";

export default function ResumePage() {
  const { personal, education, skills } = portfolioData;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-card-border/40">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">Interactive Resume</h1>
          <p className="text-sm text-text-muted mt-1">My academic and professional summary</p>
        </div>
        <Button href={personal.cvUrl} variant="primary">
          <DynamicIcon name="Download" className="h-4 w-4" />
          Download CV PDF
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Education Timeline */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <DynamicIcon name="GraduationCap" className="text-accent-purple h-6 w-6" />
            <h2 className="text-lg sm:text-xl font-bold text-foreground">Education</h2>
          </div>

          <div className="space-y-6 border-l-2 border-card-border pl-6 ml-3">
            {education.map((edu, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border-2 border-accent-purple group-hover:bg-accent-purple transition-all duration-200" />
                
                <Card className="p-5 hover:bg-card-hover/40">
                  <Badge variant="tech">
                    {edu.period}
                  </Badge>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mt-3">{edu.degree}</h3>
                  <p className="text-sm font-semibold text-text-muted mt-1">{edu.school}</p>
                  <p className="text-sm text-text-muted mt-3 leading-relaxed">{edu.details}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Summary sidebar */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <DynamicIcon name="Cpu" className="text-accent-indigo h-6 w-6" />
            <h2 className="text-lg sm:text-xl font-bold text-foreground">Technical Skillset</h2>
          </div>

          <div className="space-y-6">
            {skills.map((cat, idx) => (
              <Card key={idx} className="p-5 hover:border-accent-indigo/20" hoverable={false}>
                <h3 className="text-sm font-bold text-accent-indigo uppercase tracking-wider mb-4">{cat.category}</h3>
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-foreground">{skill.name}</span>
                        <span className="text-text-muted">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-card-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent-indigo to-accent-purple rounded-full"
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
    </div>
  );
}
