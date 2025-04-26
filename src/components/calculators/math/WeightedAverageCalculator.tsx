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

const WeightedAverageCalculator: React.FC = () => {
  const [values, setValues] = useState<number[]>([]); // Array of values
  const [weights, setWeights] = useState<number[]>([]); // Array of weights
  const [result, setResult] = useState<number | null>(null); // The weighted average result

  const handleAddValue = () => {
    setValues([...values, 0]); // Add a new value input
    setWeights([...weights, 0]); // Add a new weight input
  };

  const handleRemoveValue = (index: number) => {
    setValues(values.filter((_, i) => i !== index)); // Remove a value
    setWeights(weights.filter((_, i) => i !== index)); // Remove the corresponding weight
  };

  const handleValueChange = (index: number, newValue: number) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  const handleWeightChange = (index: number, newWeight: number) => {
    const newWeights = [...weights];
    newWeights[index] = newWeight;
    setWeights(newWeights);
  };

  const handleCalculate = () => {
    if (values.length !== weights.length || values.length === 0) {
      alert("Please enter an equal number of values and weights.");
      return;
    }

    const weightedSum = values.reduce((sum, value, index) => sum + value * weights[index], 0);
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);

    if (totalWeight === 0) {
      alert("The total weight cannot be zero.");
      return;
    }

    const weightedAverage = weightedSum / totalWeight;
    setResult(weightedAverage);
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
            <BreadcrumbPage>Weighted Average Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Weighted Average Calculator</h2>

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
                <div className="flex gap-4">
                  <Input
                    id={`value-${index}`}
                    type="number"
                    value={values[index]}
                    onChange={(e) => handleValueChange(index, Number(e.target.value))}
                    min="0"
                    className="flex-1"
                  />
                  <Input
                    id={`weight-${index}`}
                    type="number"
                    value={weights[index]}
                    onChange={(e) => handleWeightChange(index, Number(e.target.value))}
                    min="0"
                    className="flex-1"
                  />
                </div>
              </div>
            ))}

            <Button onClick={handleAddValue} className="w-full">
              Add Value/Weight
            </Button>

            <Button onClick={handleCalculate} className="w-full mt-4">
              Calculate Weighted Average
            </Button>

            {result !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Weighted Average:</p>
                <p className="text-2xl font-semibold">{result.toFixed(4)}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Weighted Average Calculator">
          <p>This calculator allows you to calculate the weighted average of a set of values based on their respective weights.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Use the Weighted Average Calculator</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the values and their corresponding weights.</li>
            <li>Click "Add Value/Weight" to add more value-weight pairs.</li>
            <li>Click "Calculate Weighted Average" to get the result.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values and Weights:</strong></p>
            <ul className="list-disc pl-5">
              <li>Value 1: 80, Weight: 2</li>
              <li>Value 2: 90, Weight: 3</li>
              <li>Value 3: 70, Weight: 5</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>Weighted Average = (80 * 2 + 90 * 3 + 70 * 5) / (2 + 3 + 5) = 77.5</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The weighted average is 77.5.</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default WeightedAverageCalculator;
