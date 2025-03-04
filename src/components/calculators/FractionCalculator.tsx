
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const FractionCalculator = () => {
  const [numerator1, setNumerator1] = useState("");
  const [denominator1, setDenominator1] = useState("");
  const [numerator2, setNumerator2] = useState("");
  const [denominator2, setDenominator2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState({ numerator: "", denominator: "", decimal: "" });

  const calculateFraction = () => {
    const num1 = parseInt(numerator1);
    const den1 = parseInt(denominator1);
    const num2 = parseInt(numerator2);
    const den2 = parseInt(denominator2);

    if (isNaN(num1) || isNaN(den1) || isNaN(num2) || isNaN(den2) || den1 === 0 || den2 === 0) {
      return;
    }

    let resultNum, resultDen;

    switch (operation) {
      case "add":
        resultNum = num1 * den2 + num2 * den1;
        resultDen = den1 * den2;
        break;
      case "subtract":
        resultNum = num1 * den2 - num2 * den1;
        resultDen = den1 * den2;
        break;
      case "multiply":
        resultNum = num1 * num2;
        resultDen = den1 * den2;
        break;
      case "divide":
        if (num2 === 0) return;
        resultNum = num1 * den2;
        resultDen = den1 * num2;
        break;
      default:
        return;
    }

    // Simplify the fraction
    const gcd = findGCD(Math.abs(resultNum), Math.abs(resultDen));
    resultNum = resultNum / gcd;
    resultDen = resultDen / gcd;

    // If denominator is negative, move the negative sign to the numerator
    if (resultDen < 0) {
      resultNum = -resultNum;
      resultDen = -resultDen;
    }

    setResult({
      numerator: resultNum.toString(),
      denominator: resultDen.toString(),
      decimal: (resultNum / resultDen).toFixed(4)
    });
  };

  // Function to find the greatest common divisor (GCD)
  const findGCD = (a: number, b: number): number => {
    return b === 0 ? a : findGCD(b, a % b);
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-header">Fraction Calculator</h2>
      
      <Card className="p-6 glass-card">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-6">
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="numerator1" className="form-label text-center">Numerator</Label>
              <Input
                id="numerator1"
                type="number"
                value={numerator1}
                onChange={(e) => setNumerator1(e.target.value)}
                className="calculator-input text-center"
                placeholder="0"
              />
              
              <div className="border-t border-gray-300 my-1"></div>
              
              <Label htmlFor="denominator1" className="form-label text-center">Denominator</Label>
              <Input
                id="denominator1"
                type="number"
                value={denominator1}
                onChange={(e) => setDenominator1(e.target.value)}
                className="calculator-input text-center"
                placeholder="1"
              />
            </div>
          </div>
          
          <div className="flex justify-center">
            <Select
              value={operation}
              onValueChange={(value) => setOperation(value)}
            >
              <SelectTrigger className="w-24 text-center">
                <SelectValue placeholder="Operation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="add">+</SelectItem>
                <SelectItem value="subtract">-</SelectItem>
                <SelectItem value="multiply">×</SelectItem>
                <SelectItem value="divide">÷</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="numerator2" className="form-label text-center">Numerator</Label>
              <Input
                id="numerator2"
                type="number"
                value={numerator2}
                onChange={(e) => setNumerator2(e.target.value)}
                className="calculator-input text-center"
                placeholder="0"
              />
              
              <div className="border-t border-gray-300 my-1"></div>
              
              <Label htmlFor="denominator2" className="form-label text-center">Denominator</Label>
              <Input
                id="denominator2"
                type="number"
                value={denominator2}
                onChange={(e) => setDenominator2(e.target.value)}
                className="calculator-input text-center"
                placeholder="1"
              />
            </div>
          </div>
        </div>
        
        <Button
          onClick={calculateFraction}
          className="calculator-button w-full mb-6"
        >
          Calculate
        </Button>
        
        {result.numerator && result.denominator && (
          <div className="calculator-result">
            <h3 className="text-lg font-medium mb-2 text-center">Result</h3>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="text-center">
                <div className="text-xl font-bold">{result.numerator}</div>
                <div className="border-t-2 border-gray-800 w-12 mx-auto my-1"></div>
                <div className="text-xl font-bold">{result.denominator}</div>
              </div>
              
              <div className="text-center text-gray-600">
                <p>As decimal: <span className="font-bold">{result.decimal}</span></p>
                
                {parseInt(result.numerator) > parseInt(result.denominator) && (
                  <p className="mt-2">
                    Mixed number: {Math.floor(parseInt(result.numerator) / parseInt(result.denominator))} <span className="inline-block mx-1">
                      <span className="block text-center">{parseInt(result.numerator) % parseInt(result.denominator)}</span>
                      <span className="block border-t border-gray-800 text-center">{result.denominator}</span>
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};
