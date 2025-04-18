import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";

const WhTomAhCalculator = () => {
  const [wh, setWh] = useState('');
  const [voltage, setVoltage] = useState('');
  const [mah, setMah] = useState('');
  const [error, setError] = useState('');

  const calculateMah = () => {
    setError('');
    try {
      const W = parseFloat(wh);
      const V = parseFloat(voltage);

      if (isNaN(W) || isNaN(V) || V === 0) {
        setError('Please enter valid numeric values and ensure voltage is not zero.');
        return;
      }

      const result = (W * 1000) / V;
      setMah(result.toFixed(2));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setWh('');
    setVoltage('');
    setMah('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Watt-hours (Wh) to Milliamp-hours (mAh) Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="wh">Energy (Wh)</Label>
                <Input
                  id="wh"
                  type="number"
                  placeholder="Enter energy in Wh"
                  value={wh}
                  onChange={(e) => setWh(e.target.value)}
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
                <Label htmlFor="mah">Charge (mAh)</Label>
                <Input
                  id="mah"
                  type="number"
                  placeholder="Calculated mAh"
                  value={mah}
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
              <Button onClick={calculateMah}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Wh to mAh Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts energy in watt-hours (Wh) to charge in milliamp-hours (mAh), using the voltage of the system.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>mAh = (Wh × 1000) / V</b></li>
            </ul>
            <p className="mt-2">
              Where:
              <br />Wh = Watt-hours
              <br />V = Voltage (Volts)
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>Ensure voltage is consistent with your battery or device specification.</li>
              <li>Typical lithium-ion batteries use 3.7V or 7.4V.</li>
              <li>Check product labels or datasheets for accurate values.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default WhTomAhCalculator;
