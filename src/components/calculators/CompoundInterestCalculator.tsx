
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";

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

      <GuidanceSection title="How to Use the Compound Interest Calculator">
        <p>This calculator helps you determine how your investment will grow over time with compound interest.</p>
        
        <h4 className="font-medium mt-3 mb-1">Steps to Calculate Compound Interest</h4>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Enter the principal amount (initial investment)</li>
          <li>Enter the annual interest rate (percentage)</li>
          <li>Enter the time period in years</li>
          <li>Select the compounding frequency (how often interest is added)</li>
          <li>Click "Calculate" to see the results</li>
        </ol>
        
        <h4 className="font-medium mt-3 mb-1">Compound Interest Formula</h4>
        <p>A = P(1 + r/n)^(nt)</p>
        <p>Where:</p>
        <ul className="list-disc pl-5 my-1">
          <li>A = Final amount</li>
          <li>P = Principal (initial investment)</li>
          <li>r = Annual interest rate (decimal)</li>
          <li>n = Number of times interest compounds per year</li>
          <li>t = Time period in years</li>
        </ul>
        
        <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
        <div className="space-y-1">
          <p><strong>Input Values:</strong></p>
          <ul className="list-disc pl-5">
            <li>Principal: $1,000</li>
            <li>Annual Interest Rate: 5%</li>
            <li>Time Period: 10 years</li>
            <li>Compounding Frequency: Monthly (12/year)</li>
          </ul>
          
          <p className="mt-2"><strong>Calculation:</strong></p>
          <p>A = $1,000 × (1 + 0.05/12)^(12×10)</p>
          <p>A = $1,000 × (1 + 0.00417)^120</p>
          <p>A = $1,000 × 1.648</p>
          <p>A = $1,648.09</p>
          
          <p className="mt-2"><strong>Result:</strong></p>
          <p>After 10 years, the investment grows to $1,648.09</p>
          <p>Interest Earned: $648.09</p>
        </div>
        
        <h4 className="font-medium mt-3 mb-1">Effect of Compounding Frequency</h4>
        <p>The more frequently interest compounds, the more your investment will grow. For example:</p>
        
        <div className="overflow-x-auto mt-2">
          <table className="min-w-full border text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="px-3 py-1 border">Compounding Frequency</th>
                <th className="px-3 py-1 border">Final Amount<br/>(on $1,000 at 5% for 10 years)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-1 border">Annually (1/year)</td>
                <td className="px-3 py-1 border">$1,628.89</td>
              </tr>
              <tr>
                <td className="px-3 py-1 border">Semi-annually (2/year)</td>
                <td className="px-3 py-1 border">$1,638.62</td>
              </tr>
              <tr>
                <td className="px-3 py-1 border">Quarterly (4/year)</td>
                <td className="px-3 py-1 border">$1,643.62</td>
              </tr>
              <tr>
                <td className="px-3 py-1 border">Monthly (12/year)</td>
                <td className="px-3 py-1 border">$1,648.09</td>
              </tr>
              <tr>
                <td className="px-3 py-1 border">Daily (365/year)</td>
                <td className="px-3 py-1 border">$1,651.25</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h4 className="font-medium mt-3 mb-1">The Power of Compound Interest</h4>
        <ul className="list-disc pl-5">
          <li><strong>Time:</strong> The longer you leave your money invested, the more dramatic the compounding effect.</li>
          <li><strong>Rate:</strong> Even small increases in interest rate can make a significant difference over time.</li>
          <li><strong>Regular contributions:</strong> Adding regular deposits to your principal accelerates growth (not calculated in this basic calculator).</li>
        </ul>
        
        <p className="mt-2 text-sm text-muted-foreground">Note: This calculator doesn't account for inflation, taxes, or additional deposits/withdrawals.</p>
      </GuidanceSection>
    </div>
  );
};
