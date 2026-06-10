"use client";

import { portfolioData } from "@/data/portfolioData";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import DynamicIcon from "@/components/ui/DynamicIcon";

export default function CertificationsPage() {
  const { certifications } = portfolioData;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-card-border/40">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">Certifications</h1>
          <p className="text-sm text-text-muted mt-1">Verified professional credentials and achievements</p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <Card
            key={cert.id}
            className="group p-6 hover:border-accent-purple/20 flex items-start gap-4"
          >
            {/* Certificate Icon Container */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-purple/10 border border-accent-purple/20 text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-all duration-300">
              <DynamicIcon name="Award" className="h-6 w-6" />
            </div>

            <div className="space-y-3 flex-1">
              <div>
                <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-accent-purple transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-text-muted mt-0.5">
                  {cert.issuer}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-text-muted">
                <span className="flex items-center gap-1">
                  <DynamicIcon name="Calendar" className="h-3.5 w-3.5" />
                  Issued {cert.date}
                </span>
                {cert.credentialId && (
                  <span className="flex items-center gap-1 font-mono">
                    <DynamicIcon name="ShieldCheck" className="h-3.5 w-3.5" />
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>

              {cert.verifyUrl && (
                <div className="pt-2 border-t border-card-border/40">
                  <Button
                    href={cert.verifyUrl}
                    variant="secondary"
                    className="!px-3 !py-1.5 !rounded-lg !text-xs font-bold text-accent-purple"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DynamicIcon name="ExternalLink" className="h-3.5 w-3.5" />
                    Verify Credential
                  </Button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
