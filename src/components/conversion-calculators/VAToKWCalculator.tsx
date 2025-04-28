import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const VAToKWCalculator = () => {
  const [va, setVa] = useState('');
  const [pf, setPf] = useState('');
  const [kw, setKw] = useState('');
  const [error, setError] = useState('');

  const calculateKW = () => {
    setError('');
    try {
      const vaValue = parseFloat(va);
      const pfValue = parseFloat(pf);

      if (isNaN(vaValue) || isNaN(pfValue) || pfValue <= 0 || pfValue > 1) {
        setError('Enter valid values. Power factor must be between 0 and 1.');
        return;
      }

      const result = (vaValue * pfValue) / 1000;
      setKw(result.toFixed(4));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setVa('');
    setPf('');
    setKw('');
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
            <BreadcrumbPage>VA to kW Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
     </Breadcrumb>
      <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>VA to kW Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="va">Apparent Power (VA)</Label>
                <Input
                  id="va"
                  type="number"
                  placeholder="Enter apparent power in VA"
                  value={va}
                  onChange={(e) => setVa(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="pf">Power Factor (0-1)</Label>
                <Input
                  id="pf"
                  type="number"
                  placeholder="Enter power factor"
                  value={pf}
                  onChange={(e) => setPf(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="kw">Real Power (kW)</Label>
                <Input
                  id="kw"
                  type="number"
                  placeholder="Calculated real power in kW"
                  value={kw}
                  disabled
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <div className="flex gap-3">
              <Button onClick={calculateKW}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="VA to kW Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts apparent power (VA) to real power (kW) using the power factor.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><strong>kW = (VA × Power Factor) / 1000</strong></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Example:</h3>
            <p>If you have 1500 VA and a power factor of 0.9:</p>
            <p>kW = (1500 × 0.9) / 1000 = <strong>1.35 kW</strong></p>
          </div>
        </div>
      </GuidanceSection>
    </div> </>
  );
};

export default VAToKWCalculator;
