import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const KWToVACalculator = () => {
  const [kw, setKw] = useState('');
  const [powerFactor, setPowerFactor] = useState('');
  const [va, setVa] = useState('');
  const [error, setError] = useState('');

  const calculateVA = () => {
    setError('');
    try {
      const kwValue = parseFloat(kw);
      const pfValue = parseFloat(powerFactor);

      if (isNaN(kwValue) || isNaN(pfValue)) {
        setError('Please enter valid numeric values.');
        return;
      }

      const vaResult = kwValue / pfValue;

      setVa(vaResult.toFixed(2));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setKw('');
    setPowerFactor('');
    setVa('');
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
            <BreadcrumbPage>kW to VA Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
     </Breadcrumb>
      <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>kW to VA Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="kw">Power (kW)</Label>
                <Input
                  id="kw"
                  type="number"
                  placeholder="Enter power in kW"
                  value={kw}
                  onChange={(e) => setKw(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="powerFactor">Power Factor</Label>
                <Input
                  id="powerFactor"
                  type="number"
                  placeholder="Enter power factor (0-1)"
                  value={powerFactor}
                  onChange={(e) => setPowerFactor(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="va">Apparent Power (VA)</Label>
                <Input
                  id="va"
                  type="number"
                  placeholder="Calculated apparent power in VA"
                  value={va}
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
              <Button onClick={calculateVA}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="kW to VA Conversion Guide">
        <div className="space-y-4">
          <p>This calculator helps convert power in kilowatts (kW) to apparent power in volt-amperes (VA), based on the power factor.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>Apparent Power (VA):</b> VA = kW / Power Factor</li>
            </ul>
            <p className="mt-2">Where:
              <br />kW = Power (kilowatts)
              <br />Power Factor = A value between 0 and 1, representing the efficiency of the electrical system</p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>The power factor is the ratio of real power to apparent power and typically ranges from 0 to 1.</li>
              <li>A power factor closer to 1 indicates efficient power usage.</li>
              <li>This calculation is important for sizing electrical systems like transformers and generators.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div> </>
  );
};

export default KWToVACalculator;
