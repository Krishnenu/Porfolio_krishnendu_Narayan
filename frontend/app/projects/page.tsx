"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import DynamicIcon from "@/components/ui/DynamicIcon";

type CategoryFilter = "all" | "frontend" | "backend" | "fullstack" | "devops";

export default function ProjectsPage() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const categories: { value: CategoryFilter; label: string }[] = [
    { value: "all", label: "All Projects" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Full Stack" },
    { value: "devops", label: "DevOps" },
  ];

  const filteredProjects = projects.filter(
    (proj) => activeFilter === "all" || proj.category === activeFilter
  );

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-card-border/40">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">Portfolio Projects</h1>
          <p className="text-sm text-text-muted mt-1">A curated collection of my software projects</p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 pb-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveFilter(cat.value)}
            className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all duration-200 cursor-pointer ${
              activeFilter === cat.value
                ? "bg-accent-purple border-accent-purple text-white shadow-md shadow-accent-purple/10"
                : "bg-card/40 border-card-border text-text-muted hover:text-foreground hover:bg-card-hover"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="group relative flex flex-col overflow-hidden hover:border-accent-purple/20 p-0 hover:bg-card/40"
          >
            {/* Image container */}
            <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                unoptimized
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Category tag */}
              <Badge variant="tech" className="absolute top-4 right-4 !bg-accent-purple/80 border-none !text-white shadow-sm !py-1 !px-2.5">
                {project.category}
              </Badge>
            </div>

            {/* Project Details */}
            <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-accent-purple transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Project Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-card-border/40 text-text-muted border border-card-border/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* External links */}
                <div className="flex items-center gap-3 pt-4 border-t border-card-border/40">
                  {project.demoUrl && (
                    <Button href={project.demoUrl} variant="primary" className="!px-3 !py-1.5 !rounded-lg !text-xs" target="_blank" rel="noopener noreferrer">
                      <DynamicIcon name="ExternalLink" className="h-3.5 w-3.5" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button href={project.githubUrl} variant="secondary" className="!px-3 !py-1.5 !rounded-lg !text-xs font-bold" target="_blank" rel="noopener noreferrer">
                      <DynamicIcon name="Github" className="h-3.5 w-3.5" />
                      Source Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 border border-dashed border-card-border rounded-2xl">
          <p className="text-sm text-text-muted">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}
