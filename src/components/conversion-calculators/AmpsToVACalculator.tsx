import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";

const AmpsToVACalculator = () => {
  const [amps, setAmps] = useState('');
  const [voltage, setVoltage] = useState('');
  const [phase, setPhase] = useState<'single' | 'three'>('single');
  const [va, setVa] = useState('');
  const [error, setError] = useState('');

  const calculateVA = () => {
    setError('');
    try {
      const I = parseFloat(amps);
      const V = parseFloat(voltage);

      if (isNaN(I) || isNaN(V)) {
        setError('Please enter valid numeric values.');
        return;
      }

      let vaResult = 0;
      if (phase === 'single') {
        vaResult = V * I;
      } else {
        vaResult = Math.sqrt(3) * V * I;
      }

      setVa(vaResult.toFixed(2));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setAmps('');
    setVoltage('');
    setVa('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Amps to Volt-Amperes (VA) Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phase">Phase</Label>
                <Select value={phase} onValueChange={(value) => setPhase(value as 'single' | 'three')}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select phase" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single Phase</SelectItem>
                    <SelectItem value="three">Three Phase</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="amps">Current (A)</Label>
                <Input
                  id="amps"
                  type="number"
                  placeholder="Enter current in Amps"
                  value={amps}
                  onChange={(e) => setAmps(e.target.value)}
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
                <Label htmlFor="va">Apparent Power (VA)</Label>
                <Input
                  id="va"
                  type="number"
                  placeholder="Calculated VA"
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

      <GuidanceSection title="Amps to VA Conversion Guide">
        <div className="space-y-4">
          <p>This tool converts current in Amperes (A) to apparent power in Volt-Amperes (VA), which is useful for sizing electrical systems.</p>
          <div>
            <h3 className="font-medium">Formulas:</h3>
            <ul className="list-disc pl-5">
              <li><b>Single Phase:</b> VA = V × I</li>
              <li><b>Three Phase:</b> VA = √3 × V × I</li>
            </ul>
            <p className="mt-2">Where:
              <br />V = Voltage (Volts)
              <br />I = Current (Amps)
            </p>
          </div>
          <div>
            <h3 className="font-medium">Notes:</h3>
            <ul className="list-disc pl-5">
              <li>VA is apparent power, not real power (which uses Watts).</li>
              <li>Power factor is not considered here — this is for equipment rating.</li>
              <li>Commonly used for UPS and transformer sizing.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default AmpsToVACalculator;
