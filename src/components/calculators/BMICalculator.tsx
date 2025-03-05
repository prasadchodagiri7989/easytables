
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const BMICalculator = () => {
  const [height, setHeight] = useState<number>(170);
  const [weight, setWeight] = useState<number>(70);
  const [heightFt, setHeightFt] = useState<number>(5);
  const [heightIn, setHeightIn] = useState<number>(7);
  const [weightLbs, setWeightLbs] = useState<number>(154);
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string>("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  const getBMICategory = (bmi: number): string => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  const calculateBMI = () => {
    let calculatedBMI: number;
    
    if (unit === "metric") {
      // BMI formula for metric: weight (kg) / [height (m)]²
      const heightInMeters = height / 100;
      calculatedBMI = weight / (heightInMeters * heightInMeters);
    } else {
      // BMI formula for imperial: 703 × weight (lb) / [height (in)]²
      const heightInInches = (heightFt * 12) + heightIn;
      calculatedBMI = (703 * weightLbs) / (heightInInches * heightInInches);
    }
    
    setBmi(calculatedBMI);
    setBmiCategory(getBMICategory(calculatedBMI));
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-header">BMI Calculator</h2>
      
      <Card className="p-6 glass-card">
        <Tabs value={unit} onValueChange={(value) => setUnit(value as "metric" | "imperial")}>
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="metric">Metric</TabsTrigger>
            <TabsTrigger value="imperial">Imperial</TabsTrigger>
          </TabsList>
          
          <TabsContent value="metric" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                id="height"
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                min="0"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                min="0"
                step="0.1"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="imperial" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="heightFt">Height (ft)</Label>
                <Input
                  id="heightFt"
                  type="number"
                  value={heightFt}
                  onChange={(e) => setHeightFt(Number(e.target.value))}
                  min="0"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="heightIn">Height (in)</Label>
                <Input
                  id="heightIn"
                  type="number"
                  value={heightIn}
                  onChange={(e) => setHeightIn(Number(e.target.value))}
                  min="0"
                  max="11"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="weightLbs">Weight (lbs)</Label>
              <Input
                id="weightLbs"
                type="number"
                value={weightLbs}
                onChange={(e) => setWeightLbs(Number(e.target.value))}
                min="0"
                step="0.1"
              />
            </div>
          </TabsContent>
        </Tabs>
        
        <Button 
          variant="default"
          onClick={calculateBMI}
          className="w-full mt-4"
        >
          Calculate BMI
        </Button>
        
        {bmi !== null && (
          <div className="mt-4 p-4 bg-muted rounded-md">
            <p className="text-sm text-muted-foreground">Your BMI:</p>
            <p className="text-2xl font-semibold">{bmi.toFixed(1)}</p>
            <p className="text-sm text-muted-foreground">Category:</p>
            <p className="text-lg font-medium">{bmiCategory}</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default BMICalculator;
