
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GuidanceSection } from "@/components/GuidanceSection";

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
    <div className="calculator-container bg-white/40 dark:bg-transparent">
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

      <GuidanceSection title="How to Use the BMI Calculator">
        <p>Body Mass Index (BMI) is a measure of body fat based on height and weight. This calculator helps you determine your BMI and corresponding weight category.</p>
        
        <h4 className="font-medium mt-3 mb-1">Steps to Calculate Your BMI</h4>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Select either Metric (cm/kg) or Imperial (ft-in/lbs) units</li>
          <li>Enter your height and weight in the selected units</li>
          <li>Click "Calculate BMI" to see your results</li>
        </ol>
        
        <h4 className="font-medium mt-3 mb-1">BMI Formula</h4>
        <div className="space-y-2">
          <div>
            <p className="font-medium">Metric Formula:</p>
            <p>BMI = weight (kg) / [height (m)]²</p>
          </div>
          
          <div>
            <p className="font-medium">Imperial Formula:</p>
            <p>BMI = 703 × weight (lb) / [height (in)]²</p>
          </div>
        </div>
        
        <h4 className="font-medium mt-3 mb-1">BMI Categories</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm mt-2">
            <thead>
              <tr className="bg-muted">
                <th className="px-3 py-1 border">BMI</th>
                <th className="px-3 py-1 border">Weight Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-1 border">Below 18.5</td>
                <td className="px-3 py-1 border">Underweight</td>
              </tr>
              <tr>
                <td className="px-3 py-1 border">18.5 - 24.9</td>
                <td className="px-3 py-1 border">Normal weight</td>
              </tr>
              <tr>
                <td className="px-3 py-1 border">25.0 - 29.9</td>
                <td className="px-3 py-1 border">Overweight</td>
              </tr>
              <tr>
                <td className="px-3 py-1 border">30.0 and above</td>
                <td className="px-3 py-1 border">Obese</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
        <div className="space-y-2">
          <div>
            <p className="font-medium">Metric Example:</p>
            <p>Height: 175 cm (1.75 m)</p>
            <p>Weight: 70 kg</p>
            <p>BMI = 70 / (1.75)² = 70 / 3.0625 = 22.9</p>
            <p>Category: Normal weight</p>
          </div>
          
          <div>
            <p className="font-medium">Imperial Example:</p>
            <p>Height: 5 feet 9 inches (69 inches)</p>
            <p>Weight: 154 pounds</p>
            <p>BMI = 703 × 154 / (69)² = 703 × 154 / 4761 = 22.8</p>
            <p>Category: Normal weight</p>
          </div>
        </div>
        
        <h4 className="font-medium mt-3 mb-1">Limitations of BMI</h4>
        <p>While BMI is a useful screening tool, it has limitations:</p>
        <ul className="list-disc pl-5">
          <li>It doesn't distinguish between muscle and fat mass</li>
          <li>It may overestimate body fat in athletes and those with muscular builds</li>
          <li>It may underestimate body fat in older persons and those who have lost muscle mass</li>
          <li>It doesn't consider factors like age, sex, ethnicity, and body composition</li>
        </ul>
        
        <p className="mt-2 text-sm text-muted-foreground">Always consult with a healthcare provider for a comprehensive health assessment.</p>
      </GuidanceSection>
    </div>
  );
};
