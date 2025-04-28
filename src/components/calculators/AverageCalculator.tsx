
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


export const AverageCalculator = () => {
  // For "Simple Average" calculator
  const [numbers, setNumbers] = useState("");
  const [average, setAverage] = useState<number | null>(null);
  const [count, setCount] = useState<number | null>(null);
  const [sum, setSum] = useState<number | null>(null);

  // For "Weighted Average" calculator
  const [weightedItems, setWeightedItems] = useState([{ value: "", weight: "" }]);
  const [weightedAverage, setWeightedAverage] = useState<number | null>(null);

  const calculateAverage = () => {
    // Parse the numbers from the input string
    const values = numbers
      .split(/[\s,;]+/) // Split by spaces, commas, or semicolons
      .filter((val) => val.trim() !== "")
      .map((val) => parseFloat(val.trim()))
      .filter((val) => !isNaN(val));

    if (values.length === 0) return;

    const total = values.reduce((acc, val) => acc + val, 0);
    const avg = total / values.length;

    setAverage(avg);
    setCount(values.length);
    setSum(total);
  };

  const calculateWeightedAverage = () => {
    const items = weightedItems.filter(
      (item) => item.value.trim() !== "" && item.weight.trim() !== ""
    );

    if (items.length === 0) return;

    const values = items.map((item) => ({
      value: parseFloat(item.value),
      weight: parseFloat(item.weight)
    }));

    const validValues = values.filter(
      (item) => !isNaN(item.value) && !isNaN(item.weight)
    );

    if (validValues.length === 0) return;

    const sumOfWeightedValues = validValues.reduce(
      (acc, item) => acc + item.value * item.weight,
      0
    );
    const sumOfWeights = validValues.reduce(
      (acc, item) => acc + item.weight,
      0
    );

    if (sumOfWeights === 0) return;

    const avg = sumOfWeightedValues / sumOfWeights;
    setWeightedAverage(avg);
  };

  const handleAddItem = () => {
    setWeightedItems([...weightedItems, { value: "", weight: "" }]);
  };

  const handleRemoveItem = (index: number) => {
    if (weightedItems.length === 1) return;
    const newItems = [...weightedItems];
    newItems.splice(index, 1);
    setWeightedItems(newItems);
  };

  const handleWeightedItemChange = (
    index: number,
    field: "value" | "weight",
    value: string
  ) => {
    const newItems = [...weightedItems];
    newItems[index][field] = value;
    setWeightedItems(newItems);
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
                      <BreadcrumbPage>Average Calculator</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
    <div className="calculator-container bg-white/40 dark:bg-transparent">

      <h2 className="calculator-header">Average Calculator</h2>
      
      <Tabs defaultValue="simple" className="w-full">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="simple">Simple Average</TabsTrigger>
          <TabsTrigger value="weighted">Weighted Average</TabsTrigger>
        </TabsList>
        
        <TabsContent value="simple" className="animate-fade-in">
          <Card className="p-6 glass-card">
            <div className="space-y-4">
              <div className="form-group">
                <Label htmlFor="numbers" className="form-label">Enter Numbers</Label>
                <Textarea
                  id="numbers"
                  value={numbers}
                  onChange={(e) => setNumbers(e.target.value)}
                  placeholder="Enter numbers separated by commas, spaces, or line breaks"
                  className="calculator-input min-h-24"
                />
                <p className="form-hint">Example: 10, 15, 20, 25</p>
              </div>
              
              <Button 
                onClick={calculateAverage}
                className="calculator-button w-full"
              >
                Calculate Average
              </Button>
              
              {average !== null && (
                <div className="calculator-result">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Count:</span>
                      <span>{count}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sum:</span>
                      <span>{sum?.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                      <span>Average:</span>
                      <span className="text-primary">{average.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="weighted" className="animate-fade-in">
          <Card className="p-6 glass-card">
            <div className="space-y-4">
              {weightedItems.map((item, index) => (
                <div key={index} className="flex items-end gap-3">
                  <div className="flex-1">
                    <Label className="form-label">Value</Label>
                    <Input
                      type="number"
                      value={item.value}
                      onChange={(e) => 
                        handleWeightedItemChange(index, "value", e.target.value)
                      }
                      placeholder="Value"
                      className="calculator-input"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <Label className="form-label">Weight</Label>
                    <Input
                      type="number"
                      value={item.weight}
                      onChange={(e) => 
                        handleWeightedItemChange(index, "weight", e.target.value)
                      }
                      placeholder="Weight"
                      className="calculator-input"
                    />
                  </div>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleRemoveItem(index)}
                    disabled={weightedItems.length === 1}
                    className="mb-0"
                  >
                    <X size={16} />
                  </Button>
                </div>
              ))}
              
              <Button
                variant="outline"
                onClick={handleAddItem}
                className="w-full"
              >
                Add Item
              </Button>
              
              <Button 
                onClick={calculateWeightedAverage}
                className="calculator-button w-full"
              >
                Calculate Weighted Average
              </Button>
              
              {weightedAverage !== null && (
                <div className="calculator-result">
                  <div className="text-center">
                    <p className="text-lg font-medium">Weighted Average</p>
                    <p className="text-xl font-bold text-primary mt-2">
                      {weightedAverage.toFixed(2)}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <GuidanceSection title="How to Use the Average Calculator">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-1">Simple Average (Arithmetic Mean)</h4>
            <p>The simple average is the sum of values divided by the number of values.</p>
            <p className="mt-2"><strong>Formula:</strong> Average = (x₁ + x₂ + ... + xₙ) / n</p>
            
            <div className="mt-1 mb-2">
              <p><strong>Example:</strong> Find the average of 10, 15, 20, 25, and 30.</p>
              <p>Sum = 10 + 15 + 20 + 25 + 30 = 100</p>
              <p>Count = 5</p>
              <p>Average = 100 / 5 = 20</p>
            </div>
            
            <p><strong>To use the Simple Average calculator:</strong></p>
            <ol className="list-decimal pl-5">
              <li>Enter your numbers in the text box, separated by commas, spaces, or line breaks</li>
              <li>Click "Calculate Average"</li>
              <li>The result will show the count, sum, and average of your values</li>
            </ol>
          </div>
          
          <div>
            <h4 className="font-medium mb-1">Weighted Average</h4>
            <p>A weighted average takes into account the relative importance (weight) of each value.</p>
            <p className="mt-2"><strong>Formula:</strong> Weighted Average = (x₁w₁ + x₂w₂ + ... + xₙwₙ) / (w₁ + w₂ + ... + wₙ)</p>
            
            <div className="mt-1 mb-2">
              <p><strong>Example:</strong> Calculate a course grade with the following components:</p>
              <ul className="list-disc pl-5">
                <li>Homework (weight 20%): 85</li>
                <li>Midterm (weight 30%): 78</li>
                <li>Final (weight 50%): 92</li>
              </ul>
              <p>Weighted Average = (85×20 + 78×30 + 92×50) / (20 + 30 + 50)</p>
              <p>= (1700 + 2340 + 4600) / 100</p>
              <p>= 8640 / 100</p>
              <p>= 86.4</p>
            </div>
            
            <p><strong>To use the Weighted Average calculator:</strong></p>
            <ol className="list-decimal pl-5">
              <li>Enter value and weight pairs for each item</li>
              <li>Add more items if needed by clicking "Add Item"</li>
              <li>Click "Calculate Weighted Average"</li>
              <li>The result will show the weighted average of your values</li>
            </ol>
          </div>
          
          <div>
            <h4 className="font-medium">When to use Weighted vs. Simple Average</h4>
            <ul className="list-disc pl-5">
              <li>Use <strong>Simple Average</strong> when all values are equally important</li>
              <li>Use <strong>Weighted Average</strong> when some values should have more influence than others, such as:
                <ul className="list-disc pl-5 mt-1">
                  <li>Calculating grades where assignments have different weights</li>
                  <li>Computing portfolio returns where investments have different sizes</li>
                  <li>Finding an average score where tests have different maximum points</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
    </>
  );
};
