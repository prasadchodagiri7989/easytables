
import React from "react";
import { Card } from "@/components/ui/card";

interface GuidanceSectionProps {
  title: string;
  children: React.ReactNode;
}

export const GuidanceSection = ({ title, children }: GuidanceSectionProps) => {
  return (
    <Card className="mt-6 p-4 bg-muted/50">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <div className="prose prose-sm max-w-none text-muted-foreground">
        {children}
      </div>
    </Card>
  );
};
