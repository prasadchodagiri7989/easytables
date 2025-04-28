import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const ConvolutionCalculator: React.FC = () => {
  const [signal1, setSignal1] = useState<string>("");
  const [signal2, setSignal2] = useState<string>("");
  const [result, setResult] = useState<number[] | null>(null);

  const parseSignal = (signal: string): number[] => {
    return signal
      .split(",")
      .map((val) => parseFloat(val.trim()))
      .filter((val) => !isNaN(val));
  };

  const handleCalculate = () => {
    const signal1Array = parseSignal(signal1);
    const signal2Array = parseSignal(signal2);

    if (signal1Array.length === 0 || signal2Array.length === 0) {
      setResult([0]);
      return;
    }

    const length1 = signal1Array.length;
    const length2 = signal2Array.length;
    const resultLength = length1 + length2 - 1;
    const convolutionResult: number[] = new Array(resultLength).fill(0);

    for (let i = 0; i < resultLength; i++) {
      for (let j = 0; j < length2; j++) {
        if (i - j >= 0 && i - j < length1) {
          convolutionResult[i] += signal1Array[i - j] * signal2Array[j];
        }
      }
    }

    setResult(convolutionResult);
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
            <BreadcrumbPage>Convolution Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Convolution Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="signal1">First Signal (comma separated values)</Label>
              <Input
                id="signal1"
                type="text"
                value={signal1}
                onChange={(e) => setSignal1(e.target.value)}
                placeholder="Enter first signal"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="signal2">Second Signal (comma separated values)</Label>
              <Input
                id="signal2"
                type="text"
                value={signal2}
                onChange={(e) => setSignal2(e.target.value)}
                placeholder="Enter second signal"
              />
            </div>

            <Button variant="default" onClick={handleCalculate} className="w-full">
              Calculate Convolution
            </Button>

            {result !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Convolution Result:</p>
                <p className="text-2xl font-semibold">
                  {result.map((val, index) => (
                    <span key={index}>
                      {val.toFixed(2)} {index < result.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Convolution Calculator">
          <p>This calculator performs convolution between two discrete signals.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Perform Convolution</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the first signal as a comma-separated list of values.</li>
            <li>Enter the second signal as a comma-separated list of values.</li>
            <li>Click "Calculate Convolution" to get the result.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>Signal 1: 1, 2, 3</li>
              <li>Signal 2: 4, 5</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>Convolution = (1×4) + (2×5), (1×5) + (2×4) + (3×5), (2×5) + (3×4)</p>
            <p>Result: 4, 23, 31</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>Convolution Result: 4, 23, 31</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default ConvolutionCalculator;
