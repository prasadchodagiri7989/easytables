
import React from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

interface GuidanceSectionProps {
  title: string;
  children: React.ReactNode;
}

export const GuidanceSection = ({ title, children }: GuidanceSectionProps) => {
  return (
    <Card className="mt-6 p-4 bg-muted/50" style={{textWrap: "wrap"}}>
      <Accordion type="single" collapsible>
        <AccordionItem value="guidance" className="border-none">
          <AccordionTrigger className="py-1 text-lg font-medium">
            {title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="prose prose-sm max-w-none text-muted-foreground pt-2">
              {children}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};
