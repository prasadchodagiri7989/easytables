import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const PowerFactorCalculator = () => {
  const [realPower, setRealPower] = useState('');
  const [apparentPower, setApparentPower] = useState('');
  const [powerFactor, setPowerFactor] = useState('');
  const [error, setError] = useState('');

  const calculatePowerFactor = () => {
    setError('');
    try {
      const real = parseFloat(realPower);
      const apparent = parseFloat(apparentPower);

      if (isNaN(real) || isNaN(apparent) || apparent === 0) {
        setError('Please enter valid values. Apparent power cannot be zero.');
        return;
      }

      const pf = real / apparent;
      setPowerFactor(pf.toFixed(4));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setRealPower('');
    setApparentPower('');
    setPowerFactor('');
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
            <BreadcrumbPage>Power Factor Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
     </Breadcrumb>
      <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Power Factor Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="realPower">Real Power (kW)</Label>
                <Input
                  id="realPower"
                  type="number"
                  placeholder="Enter real power in kW"
                  value={realPower}
                  onChange={(e) => setRealPower(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="apparentPower">Apparent Power (kVA)</Label>
                <Input
                  id="apparentPower"
                  type="number"
                  placeholder="Enter apparent power in kVA"
                  value={apparentPower}
                  onChange={(e) => setApparentPower(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="powerFactor">Power Factor</Label>
                <Input
                  id="powerFactor"
                  type="number"
                  placeholder="Calculated power factor"
                  value={powerFactor}
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
              <Button onClick={calculatePowerFactor}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Power Factor Conversion Guide">
        <div className="space-y-4">
          <p>The power factor (PF) indicates the efficiency of power usage in AC electrical systems. It is a ratio of real power to apparent power.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>Power Factor = Real Power (kW) / Apparent Power (kVA)</b></li>
            </ul>
            <p className="mt-2">The result is a number between 0 and 1. A power factor closer to 1 means more efficient energy usage.</p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>PF is important in industrial and commercial power systems.</li>
              <li>Low power factor means more losses and reduced efficiency.</li>
              <li>Improving power factor can lower electricity bills and reduce stress on the electrical system.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div> </>
  );
};

export default PowerFactorCalculator;
