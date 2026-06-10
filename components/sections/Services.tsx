"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import Card from "@/components/ui/Card";
import DynamicIcon from "@/components/ui/DynamicIcon";

export default function Services() {
  const { services } = portfolioData;

  return (
    <div className="py-12 border-t border-card-border/40">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">
            What I Do
          </h2>
        </div>
        <Link
          href="/skills"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-purple hover:text-accent-indigo hover:underline transition-all"
        >
          View All Services
          <DynamicIcon name="ArrowUpRight" className="h-4 w-4" />
        </Link>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Card
            key={service.id}
            className="group relative p-6 hover:-translate-y-1"
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-accent-purple/0 to-accent-indigo/0 group-hover:from-accent-purple/[0.03] group-hover:to-accent-indigo/[0.03] transition-all duration-300" />

            {/* Icon Box */}
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-purple/10 border border-accent-purple/20 text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-all duration-300 mb-5">
              <DynamicIcon name={service.icon} className="h-5 w-5" />
            </div>

            {/* Title & Desc */}
            <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-accent-purple transition-colors duration-200">
              {service.title}
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              {service.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
