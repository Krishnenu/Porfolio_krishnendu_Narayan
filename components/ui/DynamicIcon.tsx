import * as Icons from "lucide-react";
import React from "react";

interface DynamicIconProps {
  name: string;
  className?: string;
  fallback?: string;
}

export default function DynamicIcon({
  name,
  className = "h-5 w-5",
  fallback = "HelpCircle",
}: DynamicIconProps) {
  // Safe cast without using "any" to satisfy typescript and lint checks
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  
  if (!IconComponent) {
    const FallbackComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[fallback] || Icons.HelpCircle;
    return <FallbackComponent className={className} />;
  }

  return <IconComponent className={className} />;
}
