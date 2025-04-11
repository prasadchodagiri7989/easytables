
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

export const PercentageCalculator = () => {
  // For "What is X% of Y?" calculator
  const [percentage, setPercentage] = useState("");
  const [totalValue, setTotalValue] = useState("");
  const [percentageResult, setPercentageResult] = useState<number | null>(null);

  // For "X is what percentage of Y?" calculator
  const [partValue, setPartValue] = useState("");
  const [wholeValue, setWholeValue] = useState("");
  const [percentOfResult, setPercentOfResult] = useState<number | null>(null);

  // For "Percentage change" calculator
  const [oldValue, setOldValue] = useState("");
  const [newValue, setNewValue] = useState("");
  const [percentageChange, setPercentageChange] = useState<number | null>(null);

  const calculatePercentageOf = () => {
    const percent = parseFloat(percentage);
    const total = parseFloat(totalValue);
    
    if (!isNaN(percent) && !isNaN(total)) {
      const result = (percent / 100) * total;
      setPercentageResult(result);
    }
  };

  const calculatePercentage = () => {
    const part = parseFloat(partValue);
    const whole = parseFloat(wholeValue);
    
    if (!isNaN(part) && !isNaN(whole) && whole !== 0) {
      const result = (part / whole) * 100;
      setPercentOfResult(result);
    }
  };

  const calculateChange = () => {
    const oldVal = parseFloat(oldValue);
    const newVal = parseFloat(newValue);
    
    if (!isNaN(oldVal) && !isNaN(newVal) && oldVal !== 0) {
      const change = ((newVal - oldVal) / oldVal) * 100;
      setPercentageChange(change);
    }
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
              <BreadcrumbPage>Percentage Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
    <div className="calculator-container bg-white/40 dark:bg-transparent">
      <h2 className="calculator-header">Percentage Calculator</h2>
      
      <Tabs defaultValue="percentage-of" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="percentage-of" className="whitespace-normal text-xs sm:text-sm">What is X% of Y?</TabsTrigger>
          <TabsTrigger value="percentage" className="whitespace-normal text-xs sm:text-sm">X is what % of Y?</TabsTrigger>
          <TabsTrigger value="percentage-change" className="whitespace-normal text-xs sm:text-sm">Percentage Change</TabsTrigger>
        </TabsList>
        
        <TabsContent value="percentage-of" className="animate-fade-in">
          <Card className="p-6 glass-card">
            <div className="space-y-4">
              <div className="form-group">
                <Label htmlFor="percentage" className="form-label">Percentage (%)</Label>
                <Input
                  id="percentage"
                  type="number"
                  value={percentage}
                  onChange={(e) => setPercentage(e.target.value)}
                  placeholder="Enter percentage"
                  className="calculator-input"
                />
              </div>
              
              <div className="form-group">
                <Label htmlFor="total-value" className="form-label">Value</Label>
                <Input
                  id="total-value"
                  type="number"
                  value={totalValue}
                  onChange={(e) => setTotalValue(e.target.value)}
                  placeholder="Enter value"
                  className="calculator-input"
                />
              </div>
              
              <Button 
                onClick={calculatePercentageOf}
                className="calculator-button w-full"
              >
                Calculate
              </Button>
              
              {percentageResult !== null && (
                <div className="calculator-result">
                  <p className="text-lg font-medium text-center">{percentage}% of {totalValue} is <span className="text-primary font-bold">{percentageResult.toFixed(2)}</span></p>
                </div>
              )}
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="percentage" className="animate-fade-in">
          <Card className="p-6 glass-card">
            <div className="space-y-4">
              <div className="form-group">
                <Label htmlFor="part-value" className="form-label">Value X</Label>
                <Input
                  id="part-value"
                  type="number"
                  value={partValue}
                  onChange={(e) => setPartValue(e.target.value)}
                  placeholder="Enter value X"
                  className="calculator-input"
                />
              </div>
              
              <div className="form-group">
                <Label htmlFor="whole-value" className="form-label">Value Y</Label>
                <Input
                  id="whole-value"
                  type="number"
                  value={wholeValue}
                  onChange={(e) => setWholeValue(e.target.value)}
                  placeholder="Enter value Y"
                  className="calculator-input"
                />
              </div>
              
              <Button 
                onClick={calculatePercentage}
                className="calculator-button w-full"
              >
                Calculate
              </Button>
              
              {percentOfResult !== null && (
                <div className="calculator-result">
                  <p className="text-lg font-medium text-center">{partValue} is <span className="text-primary font-bold">{percentOfResult.toFixed(2)}%</span> of {wholeValue}</p>
                </div>
              )}
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="percentage-change" className="animate-fade-in">
          <Card className="p-6 glass-card">
            <div className="space-y-4">
              <div className="form-group">
                <Label htmlFor="old-value" className="form-label">Original Value</Label>
                <Input
                  id="old-value"
                  type="number"
                  value={oldValue}
                  onChange={(e) => setOldValue(e.target.value)}
                  placeholder="Enter original value"
                  className="calculator-input"
                />
              </div>
              
              <div className="form-group">
                <Label htmlFor="new-value" className="form-label">New Value</Label>
                <Input
                  id="new-value"
                  type="number"
                  value={newValue}
                  onChange={(e) => setNewValue(e.target.value)}
                  placeholder="Enter new value"
                  className="calculator-input"
                />
              </div>
              
              <Button 
                onClick={calculateChange}
                className="calculator-button w-full"
              >
                Calculate
              </Button>
              
              {percentageChange !== null && (
                <div className="calculator-result">
                  <p className="text-lg font-medium text-center">
                    Percentage change: <span className={`font-bold ${percentageChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {percentageChange >= 0 ? '+' : ''}{percentageChange.toFixed(2)}%
                    </span>
                  </p>
                </div>
              )}
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <GuidanceSection title="How to Use the Percentage Calculator">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-1">What is X% of Y?</h4>
            <p>Use this calculator to find a percentage of a number.</p>
            <p className="mt-2"><strong>Formula:</strong> Result = (X/100) × Y</p>
            
            <div className="mt-1 mb-2">
              <p><strong>Example:</strong> What is 15% of 200?</p>
              <p>Result = (15/100) × 200 = 30</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-1">X is what % of Y?</h4>
            <p>Use this calculator to find what percentage one number is of another.</p>
            <p className="mt-2"><strong>Formula:</strong> Result = (X/Y) × 100</p>
            
            <div className="mt-1 mb-2">
              <p><strong>Example:</strong> 30 is what percentage of 200?</p>
              <p>Result = (30/200) × 100 = 15%</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-1">Percentage Change</h4>
            <p>Use this calculator to find the percentage increase or decrease between two values.</p>
            <p className="mt-2"><strong>Formula:</strong> Result = ((New Value - Original Value) / Original Value) × 100</p>
            
            <div className="mt-1 mb-2">
              <p><strong>Example:</strong> Calculate the percentage change from 200 to 230.</p>
              <p>Result = ((230 - 200) / 200) × 100 = 15%</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium">Common Percentage Conversions</h4>
            <table className="min-w-full border text-sm mt-2">
              <thead>
                <tr className="bg-muted">
                  <th className="px-2 py-1 border">Fraction</th>
                  <th className="px-2 py-1 border">Percentage</th>
                  <th className="px-2 py-1 border">Decimal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 py-1 border">1/4</td>
                  <td className="px-2 py-1 border">25%</td>
                  <td className="px-2 py-1 border">0.25</td>
                </tr>
                <tr>
                  <td className="px-2 py-1 border">1/3</td>
                  <td className="px-2 py-1 border">33.33%</td>
                  <td className="px-2 py-1 border">0.333</td>
                </tr>
                <tr>
                  <td className="px-2 py-1 border">1/2</td>
                  <td className="px-2 py-1 border">50%</td>
                  <td className="px-2 py-1 border">0.5</td>
                </tr>
                <tr>
                  <td className="px-2 py-1 border">2/3</td>
                  <td className="px-2 py-1 border">66.67%</td>
                  <td className="px-2 py-1 border">0.667</td>
                </tr>
                <tr>
                  <td className="px-2 py-1 border">3/4</td>
                  <td className="px-2 py-1 border">75%</td>
                  <td className="px-2 py-1 border">0.75</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </GuidanceSection>
    </div>
    </>
  );
};
