import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { GuidanceSection } from "@/components/GuidanceSection";

export const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState<number>(100);
  const [discountRate, setDiscountRate] = useState<number>(10);
  const [finalPrice, setFinalPrice] = useState<number | null>(null);

  const handleCalculate = () => {
    const discountAmount = (originalPrice * discountRate) / 100;
    const priceAfterDiscount = originalPrice - discountAmount;
    setFinalPrice(priceAfterDiscount);
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
            <BreadcrumbPage>Discount Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Discount Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="originalPrice">Original Price ($)</Label>
              <Input
                id="originalPrice"
                type="number"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="discountRate">Discount Percentage (%)</Label>
              <Input
                id="discountRate"
                type="number"
                value={discountRate}
                onChange={(e) => setDiscountRate(Number(e.target.value))}
                min="0"
                step="0.1"
              />
            </div>

            <Button variant="default" onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {finalPrice !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Price After Discount:</p>
                <p className="text-2xl font-semibold">${finalPrice.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">You Save:</p>
                <p className="text-lg font-medium">${(originalPrice - finalPrice).toFixed(2)}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Discount Calculator">
          <p>This tool helps you calculate the price after applying a percentage-based discount.</p>

          <h4 className="font-medium mt-3 mb-1">Steps:</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the original price of the item</li>
            <li>Enter the discount percentage</li>
            <li>Click "Calculate" to view the discounted price</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Formula Used:</h4>
          <p>
            Final Price = Original Price - (Original Price × Discount % / 100)
          </p>

          <h4 className="font-medium mt-3 mb-1">Example:</h4>
          <ul className="list-disc pl-5">
            <li>Original Price: $100</li>
            <li>Discount: 25%</li>
          </ul>
          <p>Final Price = $100 - ($100 × 0.25) = $75</p>
          <p>You Save: $25</p>

          <p className="mt-2 text-sm text-muted-foreground">Note: This tool doesn't factor in sales tax or additional fees.</p>
        </GuidanceSection>
      </div>
    </>
  );
};
