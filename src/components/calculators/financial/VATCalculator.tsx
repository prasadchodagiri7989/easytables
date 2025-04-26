import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export const VATCalculator = () => {
  const [amount, setAmount] = useState<number>(0);
  const [vatRate, setVatRate] = useState<number>(15);
  const [result, setResult] = useState<{ vat: number; total: number } | null>(null);

  const handleCalculate = () => {
    const vat = (amount * vatRate) / 100;
    const total = amount + vat;
    setResult({ vat, total });
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
            <BreadcrumbPage>VAT Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">VAT Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (Excluding VAT)</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="vatRate">VAT Rate (%)</Label>
              <Input
                id="vatRate"
                type="number"
                value={vatRate}
                onChange={(e) => setVatRate(Number(e.target.value))}
                min="0"
                step="0.01"
              />
            </div>

            <Button onClick={handleCalculate} className="w-full">
              Calculate VAT
            </Button>

            {result && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">VAT Amount:</p>
                <p className="text-xl font-medium">${result.vat.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">Total Amount (Including VAT):</p>
                <p className="text-xl font-semibold">${result.total.toFixed(2)}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the VAT Calculator">
          <p>This calculator helps you calculate Value Added Tax (VAT) on a given amount.</p>

          <h4 className="font-medium mt-3 mb-1">Steps:</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the amount before VAT.</li>
            <li>Enter the VAT rate (e.g., 15%).</li>
            <li>Click "Calculate VAT" to see results.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">VAT Formula:</h4>
          <p>
            VAT = (Amount × VAT Rate) / 100
            <br />
            Total = Amount + VAT
          </p>

          <h4 className="font-medium mt-3 mb-1">Example:</h4>
          <p>Amount: $100, VAT Rate: 15%</p>
          <p>VAT = $100 × 0.15 = $15</p>
          <p>Total = $100 + $15 = $115</p>
        </GuidanceSection>
      </div>
    </>
  );
};
