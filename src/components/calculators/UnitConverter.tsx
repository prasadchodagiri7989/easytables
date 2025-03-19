
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

  return (
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
            <Select value={fromUnit} onValueChange={setFromUnit}>
              <SelectTrigger id="fromUnit">
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
            <Select value={toUnit} onValueChange={setToUnit}>
              <SelectTrigger id="toUnit">
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
              {value} {availableUnits.find(u => u.value === fromUnit)?.label} = {result} {availableUnits.find(u => u.value === toUnit)?.label}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
