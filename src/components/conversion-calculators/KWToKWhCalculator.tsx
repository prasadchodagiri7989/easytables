import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";

const KWToKWhCalculator = () => {
  const [kw, setKw] = useState('');
  const [hours, setHours] = useState('');
  const [kwh, setKwh] = useState('');
  const [error, setError] = useState('');

  const calculateKWh = () => {
    setError('');
    try {
      const kwValue = parseFloat(kw);
      const hoursValue = parseFloat(hours);

      if (isNaN(kwValue) || isNaN(hoursValue)) {
        setError('Please enter valid numeric values.');
        return;
      }

      const kwhResult = kwValue * hoursValue;

      setKwh(kwhResult.toFixed(2));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setKw('');
    setHours('');
    setKwh('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>kW to kWh Calculator</CardTitle>
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
                  placeholder="Calculated energy in kWh"
                  value={kwh}
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

      <GuidanceSection title="kW to kWh Conversion Guide">
        <div className="space-y-4">
          <p>This calculator helps convert power in kilowatts (kW) to energy in kilowatt-hours (kWh), based on the time in hours.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>Energy (kWh):</b> kWh = kW × Time (hours)</li>
            </ul>
            <p className="mt-2">Where:
              <br />kW = Power (kilowatts)
              <br />Time = Time in hours</p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>This calculation gives the energy consumption based on the power usage over time.</li>
              <li>Commonly used for electricity billing and understanding energy consumption patterns.</li>
              <li>Make sure to use the correct number of hours for accurate results.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default KWToKWhCalculator;
