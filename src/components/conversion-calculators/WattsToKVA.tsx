import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const WattsToKVACalculator = () => {
  const [watts, setWatts] = useState('');
  const [powerFactor, setPowerFactor] = useState('1');
  const [kva, setKva] = useState('');
  const [error, setError] = useState('');

  const calculateKVA = () => {
    setError('');
    try {
      const W = parseFloat(watts);
      const PF = parseFloat(powerFactor);

      if (isNaN(W) || isNaN(PF) || PF <= 0) {
        setError('Please enter valid numeric values. Power factor must be greater than 0.');
        return;
      }

      const result = W / (PF * 1000);
      setKva(result.toFixed(4));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setWatts('');
    setPowerFactor('1');
    setKva('');
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
            <BreadcrumbLink asChild>
              <Link to="/all-calculators">All Calculators</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/electrical-calculators">Electrical Calculators</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Watts to kVA Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
     </Breadcrumb>
      <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Watts to kVA Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="watts">Power (W)</Label>
                <Input
                  id="watts"
                  type="number"
                  placeholder="Enter power in Watts"
                  value={watts}
                  onChange={(e) => setWatts(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="powerFactor">Power Factor</Label>
                <Input
                  id="powerFactor"
                  type="number"
                  step="0.01"
                  placeholder="Enter power factor (0 to 1)"
                  value={powerFactor}
                  onChange={(e) => setPowerFactor(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="kva">Apparent Power (kVA)</Label>
                <Input
                  id="kva"
                  type="number"
                  placeholder="Calculated kVA"
                  value={kva}
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
              <Button onClick={calculateKVA}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Watts to kVA Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts real power in Watts (W) to apparent power in kilovolt-amperes (kVA), using the power factor of the system.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>kVA = Watts / (Power Factor × 1000)</b></li>
            </ul>
            <p className="mt-2">
              Where:
              <br />Watts = Real Power (W)
              <br />Power Factor = Ratio between real and apparent power (usually between 0.8 and 1)
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>Use PF = 1 for purely resistive loads.</li>
              <li>Typical PF for inductive loads like motors is around 0.8.</li>
              <li>Always double-check unit consistency before conversion.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div> </>
  );
};

export default WattsToKVACalculator;
