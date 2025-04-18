import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";

const MAhToWhCalculator = () => {
  const [mAh, setMAh] = useState('');
  const [voltage, setVoltage] = useState('');
  const [wh, setWh] = useState('');
  const [error, setError] = useState('');

  const calculateWh = () => {
    setError('');
    try {
      const mAhValue = parseFloat(mAh);
      const voltageValue = parseFloat(voltage);

      if (isNaN(mAhValue) || isNaN(voltageValue)) {
        setError('Please enter valid numeric values.');
        return;
      }

      const whResult = (mAhValue * voltageValue) / 1000;

      setWh(whResult.toFixed(2));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setMAh('');
    setVoltage('');
    setWh('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>mAh to Watt-hours (Wh) Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="mAh">Capacity (mAh)</Label>
                <Input
                  id="mAh"
                  type="number"
                  placeholder="Enter capacity in mAh"
                  value={mAh}
                  onChange={(e) => setMAh(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="voltage">Voltage (V)</Label>
                <Input
                  id="voltage"
                  type="number"
                  placeholder="Enter voltage in Volts"
                  value={voltage}
                  onChange={(e) => setVoltage(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="wh">Energy (Wh)</Label>
                <Input
                  id="wh"
                  type="number"
                  placeholder="Calculated energy in Wh"
                  value={wh}
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
              <Button onClick={calculateWh}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="mAh to Wh Conversion Guide">
        <div className="space-y-4">
          <p>This calculator helps convert battery capacity from milliampere-hours (mAh) to energy in watt-hours (Wh), based on the voltage of the battery.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>Energy (Wh):</b> Wh = (mAh × V) / 1000</li>
            </ul>
            <p className="mt-2">Where:
              <br />mAh = Battery Capacity (milliampere-hours)
              <br />V = Voltage (Volts)</p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>This calculation helps to estimate the total energy capacity of a battery in watt-hours.</li>
              <li>It's commonly used to determine how long a battery will last based on its voltage and capacity.</li>
              <li>Useful for checking battery life for devices like phones and laptops.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default MAhToWhCalculator;
