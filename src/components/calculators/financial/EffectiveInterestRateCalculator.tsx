import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { GuidanceSection } from "@/components/GuidanceSection";

export const EffectiveInterestRateCalculator = () => {
  const [nominalRate, setNominalRate] = useState<number>(5);
  const [compoundFrequency, setCompoundFrequency] = useState<number>(12);
  const [effectiveRate, setEffectiveRate] = useState<number | null>(null);

  const handleCalculate = () => {
    const r = nominalRate / 100;
    const n = compoundFrequency;
    const re = Math.pow(1 + r / n, n) - 1;
    setEffectiveRate(re);
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
            <BreadcrumbPage>Effective Interest Rate</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Effective Interest Rate Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nominalRate">Nominal Annual Rate (%)</Label>
              <Input
                id="nominalRate"
                type="number"
                value={nominalRate}
                onChange={(e) => setNominalRate(Number(e.target.value))}
                min="0"
                step="0.01"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="compound">Compounding Frequency</Label>
              <Select
                value={String(compoundFrequency)}
                onValueChange={(value) => setCompoundFrequency(Number(value))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select compound frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Annually (1/year)</SelectItem>
                  <SelectItem value="2">Semi-annually (2/year)</SelectItem>
                  <SelectItem value="4">Quarterly (4/year)</SelectItem>
                  <SelectItem value="12">Monthly (12/year)</SelectItem>
                  <SelectItem value="365">Daily (365/year)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="default" onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {effectiveRate !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Effective Interest Rate:</p>
                <p className="text-2xl font-semibold">{(effectiveRate * 100).toFixed(2)}%</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="Understanding Effective Interest Rate (EIR)">
          <p>
            The effective interest rate (also called annual equivalent rate or annual percentage yield)
            reflects the real return on an investment or loan after compounding.
          </p>

          <h4 className="font-medium mt-3 mb-1">Formula:</h4>
          <p>
            <strong>rₑ = (1 + r/n)<sup>n</sup> - 1</strong>
          </p>

          <ul className="list-disc pl-5 mt-1">
            <li>r = nominal annual rate (decimal)</li>
            <li>n = number of compounding periods per year</li>
            <li>rₑ = effective interest rate (decimal)</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Example:</h4>
          <ul className="list-disc pl-5">
            <li>Nominal Rate = 5%</li>
            <li>Compounded Monthly (n = 12)</li>
          </ul>
          <p>
            rₑ = (1 + 0.05/12)<sup>12</sup> - 1 = 0.05116 → <strong>5.12%</strong>
          </p>

          <h4 className="font-medium mt-3 mb-1">Why It Matters:</h4>
          <ul className="list-disc pl-5">
            <li>Helps compare loans or investments with different compounding periods</li>
            <li>Gives a true annualized rate, useful for financial decisions</li>
          </ul>

          <p className="mt-2 text-sm text-muted-foreground">Note: This does not account for fees or inflation.</p>
        </GuidanceSection>
      </div>
    </>
  );
};
