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

const RandomNumberGenerator: React.FC = () => {
  const [min, setMin] = useState<number>(0); // Minimum value
  const [max, setMax] = useState<number>(100); // Maximum value
  const [result, setResult] = useState<number | null>(null); // The random number result

  const handleGenerate = () => {
    if (min >= max) {
      alert("Minimum value must be less than the maximum value.");
      return;
    }

    // Generate a random number within the range
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setResult(randomNumber);
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
            <BreadcrumbLink asChild>
              <Link to="/all-calculators">All Calculators</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/math/all">Math Calculators</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Random Number Generator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Random Number Generator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="min">Minimum Value</Label>
              <Input
                id="min"
                type="number"
                value={min}
                onChange={(e) => setMin(Number(e.target.value))}
                min="0"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="max">Maximum Value</Label>
              <Input
                id="max"
                type="number"
                value={max}
                onChange={(e) => setMax(Number(e.target.value))}
                min={min + 1}
                className="w-full"
              />
            </div>

            <Button onClick={handleGenerate} className="w-full">
              Generate Random Number
            </Button>

            {result !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Random Number:</p>
                <p className="text-2xl font-semibold">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Random Number Generator">
          <p>This calculator allows you to generate a random number within a specified range.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Use the Random Number Generator</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the minimum and maximum values for the range.</li>
            <li>Click "Generate Random Number" to get a random number within that range.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>Minimum Value: 1</li>
              <li>Maximum Value: 10</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>The generator will pick a random number between 1 and 10 (inclusive).</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The random number generated could be, for example, 7.</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default RandomNumberGenerator;
