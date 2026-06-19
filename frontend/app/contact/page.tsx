"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import DynamicIcon from "@/components/ui/DynamicIcon";

export default function ContactPage() {
  const { personal } = portfolioData;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-card-border/40">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Get In Touch
          </h1>
          <p className="text-sm text-text-muted mt-1">
            Let&apos;s discuss how we can work together
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Info Column */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 space-y-6" hoverable={false}>
            <h2 className="text-lg font-bold text-foreground">
              Contact Details
            </h2>

            {/* Contact card */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <DynamicIcon name="Phone" className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Contact
                </h3>
                <a
                  href={`tel:+${personal.mobile}`}
                  className="text-sm font-semibold text-foreground hover:text-accent-purple transition-colors"
                >
                  +{personal.mobile}
                </a>
              </div>
            </div>

            {/* Email card */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-purple/10 border border-accent-purple/20 text-accent-purple">
                <DynamicIcon name="Mail" className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Email
                </h3>
                <a
                  href={personal.social.email}
                  className="text-sm font-semibold text-foreground hover:text-accent-purple transition-colors"
                >
                  {personal.social.email.replace("mailto:", "")}
                </a>
              </div>
            </div>

            {/* Location card */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo">
                <DynamicIcon name="MapPin" className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Location
                </h3>
                <p className="text-sm font-semibold text-foreground">
                  Bangalore, India
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <DynamicIcon name="Clock" className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Availability
                </h3>
                <p className="text-sm font-semibold text-foreground">
                  Open to full time positions
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-3">
          <Card className="p-6" hoverable={false}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-lg font-bold text-foreground">
                Send a Message
              </h2>

              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="text-xs font-semibold text-text-muted"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-card/40 focus:bg-card focus:border-accent-purple outline-none text-sm transition-all duration-200"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-text-muted"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-card/40 focus:bg-card focus:border-accent-purple outline-none text-sm transition-all duration-200"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold text-text-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-card/40 focus:bg-card focus:border-accent-purple outline-none text-sm transition-all duration-200 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "sending"}
                variant="primary"
                className="w-full"
              >
                {status === "sending" ? (
                  <>
                    <DynamicIcon
                      name="Loader2"
                      className="h-4 w-4 animate-spin"
                    />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <DynamicIcon name="Send" className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>

              {status === "success" && (
                <div className="flex items-center gap-2 p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/5 text-sm font-semibold text-emerald-400 mt-4 animate-fadeIn">
                  <DynamicIcon name="CheckCircle2" className="h-5 w-5" />
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
