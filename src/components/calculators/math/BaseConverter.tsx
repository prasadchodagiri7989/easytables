import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

export const BaseConverter = () => {
  const [inputNumber, setInputNumber] = useState<string>("");
  const [inputBase, setInputBase] = useState<string>("10");
  const [outputBase, setOutputBase] = useState<string>("2");
  const [outputValue, setOutputValue] = useState<string | null>(null);

  const handleConvert = () => {
    try {
      // Convert the input number to decimal
      const decimalValue = parseInt(inputNumber, parseInt(inputBase));
      
      if (isNaN(decimalValue)) {
        setOutputValue("Invalid input number for the selected base.");
        return;
      }

      // Convert the decimal value to the selected output base
      let result = "";
      switch (outputBase) {
        case "2":
          result = decimalValue.toString(2); // Convert to binary
          break;
        case "8":
          result = decimalValue.toString(8); // Convert to octal
          break;
        case "10":
          result = decimalValue.toString(10); // Convert to decimal
          break;
        case "16":
          result = decimalValue.toString(16).toUpperCase(); // Convert to hexadecimal
          break;
        default:
          result = "Unsupported base.";
      }
      
      setOutputValue(result);
    } catch (error) {
      setOutputValue("An error occurred during conversion.");
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
            <BreadcrumbPage>Base Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Base Converter</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="inputNumber">Number to Convert</Label>
              <Input
                id="inputNumber"
                type="text"
                value={inputNumber}
                onChange={(e) => setInputNumber(e.target.value)}
                placeholder="Enter number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="inputBase">Input Base</Label>
              <Select
                value={inputBase}
                onValueChange={(value) => setInputBase(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select input base" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">Binary (Base 2)</SelectItem>
                  <SelectItem value="8">Octal (Base 8)</SelectItem>
                  <SelectItem value="10">Decimal (Base 10)</SelectItem>
                  <SelectItem value="16">Hexadecimal (Base 16)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="outputBase">Output Base</Label>
              <Select
                value={outputBase}
                onValueChange={(value) => setOutputBase(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select output base" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">Binary (Base 2)</SelectItem>
                  <SelectItem value="8">Octal (Base 8)</SelectItem>
                  <SelectItem value="10">Decimal (Base 10)</SelectItem>
                  <SelectItem value="16">Hexadecimal (Base 16)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="default" onClick={handleConvert} className="w-full">
              Convert
            </Button>

            {outputValue !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Converted Value:</p>
                <p className="text-2xl font-semibold">{outputValue}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Base Converter">
          <p>This calculator helps you convert numbers between different bases (binary, octal, decimal, and hexadecimal).</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Convert Between Bases</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the number you want to convert.</li>
            <li>Select the base of the input number (binary, octal, decimal, or hexadecimal).</li>
            <li>Select the desired output base for the conversion.</li>
            <li>Click "Convert" to get the result in the selected base.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Value:</strong></p>
            <ul className="list-disc pl-5">
              <li>Input Number: 1010 (Binary)</li>
              <li>Input Base: Binary (Base 2)</li>
              <li>Output Base: Decimal (Base 10)</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>1010 (Binary) = 10 (Decimal)</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>Converted value: 10 (Decimal)</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};
