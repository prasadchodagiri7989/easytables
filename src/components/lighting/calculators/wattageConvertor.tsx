import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const WattageConverter = () => {
  const [watts, setWatts] = useState('');
  const [kilowatts, setKilowatts] = useState('');
  const [horsepower, setHorsepower] = useState('');
  const [error, setError] = useState('');

  const convert = () => {
    setError('');
    const w = parseFloat(watts);
    if (isNaN(w) || w < 0) {
      setError('Please enter a valid positive wattage.');
      return;
    }
    const kw = w / 1000;
    const hp = w / 745.7;
    setKilowatts(kw.toFixed(4));
    setHorsepower(hp.toFixed(4));
  };

  const reset = () => {
    setWatts('');
    setKilowatts('');
    setHorsepower('');
    setError('');
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
                  <BreadcrumbPage>Average Calculator</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Wattage Converter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="watts">Wattage (W)</Label>
                <Input
                  id="watts"
                  type="number"
                  placeholder="e.g., 1000"
                  value={watts}
                  onChange={e => setWatts(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="kilowatts">Kilowatts (kW)</Label>
                <Input
                  id="kilowatts"
                  type="text"
                  value={kilowatts}
                  disabled
                />
              </div>
              <div>
                <Label htmlFor="horsepower">Horsepower (HP)</Label>
                <Input
                  id="horsepower"
                  type="text"
                  value={horsepower}
                  disabled
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <div className="flex gap-3">
              <Button onClick={convert}>Convert</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="About Wattage Conversion">
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-1">Formulas</h3>
            <ul className="list-disc pl-5">
              <li>1 kilowatt (kW) = 1000 watts (W)</li>
              <li>1 horsepower (HP) ≈ 745.7 watts (W)</li>
              <li>kW = W / 1000</li>
              <li>HP = W / 745.7</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-1">How to Use</h3>
            <ol className="list-decimal pl-5">
              <li>Enter the power in watts (W)</li>
              <li>Click "Convert" to view equivalent kW and HP</li>
              <li>Click "Reset" to clear values</li>
            </ol>
          </div>

          <div>
            <h3 className="font-medium mb-1">Applications</h3>
            <ul className="list-disc pl-5">
              <li>Comparing appliance power usage</li>
              <li>Estimating energy cost and efficiency</li>
              <li>Understanding electrical load and motor sizes</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
    </>
  );
};

export default WattageConverter;
