
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ArrowRightLeft } from "lucide-react";
import { unitCategories, getUnitsForCategory, convert } from "@/lib/unit-conversions";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

export const UnitConverter = () => {
  const [category, setCategory] = useState(unitCategories[0].value);
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [value, setValue] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);
  const [availableUnits, setAvailableUnits] = useState<Array<{ label: string; value: string }>>(
    []
  );

  // Update available units when category changes
  useEffect(() => {
    const units = getUnitsForCategory(category);
    setAvailableUnits(units);
    setFromUnit(units[0]?.value || "");
    setToUnit(units[1]?.value || "");
    setResult(null);
  }, [category]);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setResult(null);
  };

  const handleSwapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setResult(null);
  };

  const handleConvert = () => {
    if (!value || isNaN(Number(value))) {
      setResult("Please enter a valid number");
      return;
    }

    try {
      const convertedValue = convert(Number(value), fromUnit, toUnit);
      setResult(convertedValue.toLocaleString('en-US', { 
        maximumFractionDigits: 10,
        minimumFractionDigits: 0
      }));
    } catch (error) {
      setResult("Conversion error");
      console.error(error);
    }
  };

  // Get the display names of the units for the guidance section
  const fromUnitName = availableUnits.find(u => u.value === fromUnit)?.label || "";
  const toUnitName = availableUnits.find(u => u.value === toUnit)?.label || "";
  const categoryName = unitCategories.find(c => c.value === category)?.label || "";

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
            <BreadcrumbPage>Unit Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    <div className="w-full max-w-4xl mx-auto bg-white/40 dark:bg-transparent">
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Unit Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {unitCategories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-[1fr,auto,1fr] gap-2 items-end">
          <div className="space-y-2">
            <Label htmlFor="fromUnit">From</Label>
            <Select value={fromUnit} onValueChange={setFromUnit} disabled>
              <SelectTrigger id="fromUnit" disabled>
                <SelectValue placeholder="From unit" />
              </SelectTrigger>
              <SelectContent>
                {availableUnits.map((unit) => (
                  <SelectItem key={unit.value} value={unit.value}>
                    {unit.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            variant="ghost" 
            className="self-center ml-1 px-2" 
            onClick={handleSwapUnits}
          >
            <ArrowRightLeft className="h-4 w-4" />
          </Button>

          <div className="space-y-2">
            <Label htmlFor="toUnit">To</Label>
            <Select value={toUnit} onValueChange={setToUnit} disabled>
              <SelectTrigger id="toUnit" disabled>
                <SelectValue placeholder="To unit" />
              </SelectTrigger>
              <SelectContent>
                {availableUnits.map((unit) => (
                  <SelectItem key={unit.value} value={unit.value}>
                    {unit.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

          <div className="space-y-2">
            <Label htmlFor="value">Value</Label>
            <Input
              id="value"
              type="number"
              value={value}
              onChange={handleValueChange}
              placeholder="Enter value to convert"
            />
          </div>

          <Button className="w-full" onClick={handleConvert}>
            Convert
          </Button>

          {result !== null && (
            <div className="mt-4 p-4 rounded-md bg-muted">
              <p className="text-sm font-medium mb-1">Result:</p>
              <p className="text-lg font-bold break-words">
                {value} {fromUnitName} = {result} {toUnitName}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <GuidanceSection title={`How to Convert ${fromUnitName} to ${toUnitName}`}>
        <p>Follow these steps to convert {categoryName.toLowerCase()} units:</p>
        
        <ol className="list-decimal pl-5 my-2">
          <li>Select "{categoryName}" from the category dropdown</li>
          <li>Choose your starting unit ("{fromUnitName}") in the "From" field</li>
          <li>Choose your target unit ("{toUnitName}") in the "To" field</li>
          <li>Enter the value you want to convert in the "Value" field</li>
          <li>Click the "Convert" button to see the result</li>
        </ol>

        <h4 className="font-medium mt-4 mb-1">Example</h4>
        <p>
          Convert 10 {fromUnitName} to {toUnitName}:
        </p>
        {fromUnit && toUnit && (
          <div className="bg-background p-2 rounded my-2">
            <p>10 {fromUnitName} = {convert(10, fromUnit, toUnit).toLocaleString('en-US', { 
              maximumFractionDigits: 4,
              minimumFractionDigits: 0
            })} {toUnitName}</p>
          </div>
        )}

        <h4 className="font-medium mt-4 mb-1">Conversion Table</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300 text-sm">
            <thead>
              <tr>
                <th className="px-3 py-2 text-left">{fromUnitName}</th>
                <th className="px-3 py-2 text-left">{toUnitName}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[1, 5, 10, 20, 50, 100].map(val => (
                <tr key={val}>
                  <td className="px-3 py-1">{val}</td>
                  <td className="px-3 py-1">
                    {fromUnit && toUnit ? convert(val, fromUnit, toUnit).toLocaleString('en-US', { 
                      maximumFractionDigits: 4,
                      minimumFractionDigits: 0
                    }) : ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GuidanceSection>
    </div>
    </>
  );
};
