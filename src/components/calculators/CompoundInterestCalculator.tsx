
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState<number>(1000);
  const [rate, setRate] = useState<number>(5);
  const [time, setTime] = useState<number>(5);
  const [compoundFrequency, setCompoundFrequency] = useState<number>(12);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    // Compound interest formula: A = P(1 + r/n)^(nt)
    const r = rate / 100;
    const n = compoundFrequency;
    const t = time;
    const p = principal;
    
    const amount = p * Math.pow(1 + r / n, n * t);
    setResult(amount);
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-header">Compound Interest Calculator</h2>
      
      <Card className="p-6 glass-card">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="principal">Principal Amount ($)</Label>
            <Input
              id="principal"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              min="0"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="rate">Annual Interest Rate (%)</Label>
            <Input
              id="rate"
              type="number"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              min="0"
              step="0.01"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="time">Time Period (years)</Label>
            <Input
              id="time"
              type="number"
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
              min="0"
              step="0.5"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="compound">Compound Frequency</Label>
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
          
          <Button 
            variant="default"
            onClick={handleCalculate}
            className="w-full"
          >
            Calculate
          </Button>
          
          {result !== null && (
            <div className="mt-4 p-4 bg-muted rounded-md">
              <p className="text-sm text-muted-foreground">Final Amount:</p>
              <p className="text-2xl font-semibold">${result.toFixed(2)}</p>
              <p className="text-sm text-muted-foreground">Interest Earned:</p>
              <p className="text-lg font-medium">${(result - principal).toFixed(2)}</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default CompoundInterestCalculator;
