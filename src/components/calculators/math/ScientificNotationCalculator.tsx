import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const ScientificNotationCalculator: React.FC = () => {
  const [number, setNumber] = useState<number>(0);
  const [scientificNotation, setScientificNotation] = useState<string>("");

  const convertToScientificNotation = () => {
    if (number === 0) {
      setScientificNotation("0 in scientific notation is 0");
      return;
    }

    const exponent = Math.floor(Math.log10(Math.abs(number)));
    const mantissa = (number / Math.pow(10, exponent)).toFixed(6);

    setScientificNotation(`${mantissa} × 10^${exponent}`);
  };

  return (
    <>
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Scientific Notation Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Scientific Notation Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div>
              <Label htmlFor="number">Number</Label>
              <Input
                id="number"
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
              />
            </div>

            <Button className="w-full" onClick={convertToScientificNotation}>
              Convert to Scientific Notation
            </Button>

            {scientificNotation && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Result:</p>
                <p className="text-2xl font-semibold">{scientificNotation}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Scientific Notation Calculator">
          <p>This calculator helps you convert any number to its scientific notation form.</p>

          <h4 className="font-medium mt-3 mb-1">Steps:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Enter the number you want to convert to scientific notation.</li>
            <li>Click "Convert to Scientific Notation" to get the result.</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Scientific Notation Format:</h4>
          <p><strong>Number = mantissa × 10^exponent</strong></p>

          <h4 className="font-medium mt-3 mb-1">Example:</h4>
          <p>Convert 15000 to scientific notation:</p>
          <p>1.5 × 10^4</p>
        </GuidanceSection>
      </div>
    </>
  );
};

export default ScientificNotationCalculator;
