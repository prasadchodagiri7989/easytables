import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const WattsToKWhCalculator = () => {
  const [watts, setWatts] = useState('');
  const [hours, setHours] = useState('');
  const [kWh, setKWh] = useState('');
  const [error, setError] = useState('');

  const calculateKWh = () => {
    setError('');
    try {
      const W = parseFloat(watts);
      const H = parseFloat(hours);

      if (isNaN(W) || isNaN(H) || W < 0 || H < 0) {
        setError('Please enter valid positive numbers for both fields.');
        return;
      }

      const result = (W * H) / 1000;
      setKWh(result.toFixed(4));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setWatts('');
    setHours('');
    setKWh('');
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
            <BreadcrumbPage>Watts to Kilowatt-hours (kWh) Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
     </Breadcrumb>
      <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Watts to Kilowatt-hours (kWh) Calculator</CardTitle>
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
                <Label htmlFor="hours">Time (Hours)</Label>
                <Input
                  id="hours"
                  type="number"
                  placeholder="Enter time in hours"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="kwh">Energy (kWh)</Label>
                <Input
                  id="kwh"
                  type="number"
                  placeholder="Calculated kWh"
                  value={kWh}
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
              <Button onClick={calculateKWh}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Watts to kWh Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts power in Watts (W) and time in hours (h) to energy in kilowatt-hours (kWh).</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>kWh = (Watts × Hours) / 1000</b></li>
            </ul>
            <p className="mt-2">
              Where:
              <br />Watts = Power consumption
              <br />Hours = Usage time
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>Used for calculating energy consumption over time.</li>
              <li>1 kWh = 1000 watt-hours.</li>
              <li>Commonly used by utility companies for billing.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div> </>
  );
};

export default WattsToKWhCalculator;
