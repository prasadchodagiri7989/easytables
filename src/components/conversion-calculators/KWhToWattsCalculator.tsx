import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";

const KWhToWattsCalculator = () => {
  const [kWh, setKWh] = useState('');
  const [time, setTime] = useState('');
  const [watts, setWatts] = useState('');
  const [error, setError] = useState('');

  const calculateWatts = () => {
    setError('');
    try {
      const kWhValue = parseFloat(kWh);
      const timeValue = parseFloat(time);

      if (isNaN(kWhValue) || isNaN(timeValue)) {
        setError('Please enter valid numeric values.');
        return;
      }

      const wattsResult = (kWhValue * 1000) / timeValue;

      setWatts(wattsResult.toFixed(2));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setKWh('');
    setTime('');
    setWatts('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>kWh to Watts Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="kWh">Energy (kWh)</Label>
                <Input
                  id="kWh"
                  type="number"
                  placeholder="Enter energy in kWh"
                  value={kWh}
                  onChange={(e) => setKWh(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="time">Time (hours)</Label>
                <Input
                  id="time"
                  type="number"
                  placeholder="Enter time in hours"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="watts">Power (W)</Label>
                <Input
                  id="watts"
                  type="number"
                  placeholder="Calculated power in Watts"
                  value={watts}
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
              <Button onClick={calculateWatts}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="kWh to Watts Conversion Guide">
        <div className="space-y-4">
          <p>This calculator helps convert energy in kilowatt-hours (kWh) to power in watts (W), based on the time over which the energy is used.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>Power (W):</b> W = (kWh × 1000) / Time (hours)</li>
            </ul>
            <p className="mt-2">Where:
              <br />kWh = Energy (kilowatt-hours)
              <br />Time = Time (hours) over which the energy was consumed</p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>This calculation helps estimate the average power consumption in watts based on total energy used and time period.</li>
              <li>Useful for determining the power requirements of electrical devices over time.</li>
              <li>The power (watts) is constant if the energy consumption is evenly spread out over time.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default KWhToWattsCalculator;
