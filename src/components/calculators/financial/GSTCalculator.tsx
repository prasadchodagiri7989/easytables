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

export const GSTCalculator = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [gstRate, setGstRate] = useState<number>(18);
  const [mode, setMode] = useState<"add" | "remove">("add");
  const [result, setResult] = useState<{ gstAmount: number; finalAmount: number } | null>(null);

  const handleCalculate = () => {
    const rate = gstRate / 100;
    let gstAmount = 0;
    let finalAmount = 0;

    if (mode === "add") {
      gstAmount = amount * rate;
      finalAmount = amount + gstAmount;
    } else {
      gstAmount = (amount * rate) / (1 + rate);
      finalAmount = amount - gstAmount;
    }

    setResult({ gstAmount, finalAmount });
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
                          <Link to="/finance-all">Financial Calculators</Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>GST Calculator</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                 </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">GST Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                min="0"
                step="0.01"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gstRate">GST Rate (%)</Label>
              <Input
                id="gstRate"
                type="number"
                value={gstRate}
                onChange={(e) => setGstRate(Number(e.target.value))}
                min="0"
                step="0.1"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mode">Calculation Type</Label>
              <Select value={mode} onValueChange={(val) => setMode(val as "add" | "remove")}>
                <SelectTrigger>
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="add">Add GST (inclusive)</SelectItem>
                  <SelectItem value="remove">Remove GST (exclusive)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="default" onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {result && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">GST Amount:</p>
                <p className="text-xl font-semibold">₹{result.gstAmount.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">
                  {mode === "add" ? "Total after GST:" : "Amount before GST:"}
                </p>
                <p className="text-xl font-semibold">₹{result.finalAmount.toFixed(2)}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the GST Calculator">
          <p>This calculator helps you determine the GST on any product or service.</p>

          <h4 className="font-medium mt-3 mb-1">Steps:</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the base amount</li>
            <li>Enter applicable GST rate (e.g., 5%, 12%, 18%)</li>
            <li>Select whether you want to add or remove GST</li>
            <li>Click "Calculate" to view GST amount and final total</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">GST Formula:</h4>
          <ul className="list-disc pl-5">
            <li><strong>Add GST:</strong> GST = Amount × Rate; Final = Amount + GST</li>
            <li><strong>Remove GST:</strong> GST = Amount × Rate ÷ (1 + Rate); Base = Amount − GST</li>
          </ul>

          <p className="mt-2 text-sm text-muted-foreground">Note: This tool is for estimation and doesn't include cess or other regional taxes.</p>
        </GuidanceSection>
      </div>
    </>
  );
};
