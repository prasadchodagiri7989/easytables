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

const VarianceCalculator: React.FC = () => {
  const [values, setValues] = useState<number[]>([]); // Array of values
  const [result, setResult] = useState<number | null>(null); // The variance result

  const handleAddValue = () => {
    setValues([...values, 0]); // Add a new value input
  };

  const handleRemoveValue = (index: number) => {
    setValues(values.filter((_, i) => i !== index)); // Remove a value
  };

  const handleValueChange = (index: number, newValue: number) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  const handleCalculate = () => {
    if (values.length === 0) {
      alert("Please enter at least one value.");
      return;
    }

    const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
    const variance = values.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / values.length;

    setResult(variance);
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
            <BreadcrumbPage>Variance Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Variance Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            {values.map((_, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor={`value-${index}`}>Value {index + 1}</Label>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemoveValue(index)}
                    className="self-start"
                  >
                    Remove
                  </Button>
                </div>
                <Input
                  id={`value-${index}`}
                  type="number"
                  value={values[index]}
                  onChange={(e) => handleValueChange(index, Number(e.target.value))}
                  min="0"
                  className="w-full"
                />
              </div>
            ))}

            <Button onClick={handleAddValue} className="w-full">
              Add Value
            </Button>

            <Button onClick={handleCalculate} className="w-full mt-4">
              Calculate Variance
            </Button>

            {result !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Variance:</p>
                <p className="text-2xl font-semibold">{result.toFixed(4)}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Variance Calculator">
          <p>This calculator allows you to calculate the variance of a set of values.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Use the Variance Calculator</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the values for which you want to calculate the variance.</li>
            <li>Click "Add Value" to add more values.</li>
            <li>Click "Calculate Variance" to get the result.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>5, 10, 15, 20, 25</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>Mean = (5 + 10 + 15 + 20 + 25) / 5 = 15</p>
            <p>Variance = ((5-15)² + (10-15)² + (15-15)² + (20-15)² + (25-15)²) / 5</p>
            <p>Variance = (100 + 25 + 0 + 25 + 100) / 5 = 50</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The variance is 50.</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default VarianceCalculator;
