import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";

const WattsToAmpsCalculator = () => {
  const [watts, setWatts] = useState('');
  const [voltage, setVoltage] = useState('');
  const [powerFactor, setPowerFactor] = useState('1');
  const [phase, setPhase] = useState<'single' | 'three'>('single');
  const [amps, setAmps] = useState('');
  const [error, setError] = useState('');

  const calculateAmps = () => {
    setError('');
    try {
      const P = parseFloat(watts);
      const V = parseFloat(voltage);
      const PF = parseFloat(powerFactor);

      if (isNaN(P) || isNaN(V) || isNaN(PF) || V <= 0 || PF <= 0) {
        setError('Please enter valid positive numbers.');
        return;
      }

      let result = 0;
      if (phase === 'single') {
        result = P / (V * PF);
      } else {
        result = P / (Math.sqrt(3) * V * PF);
      }

      setAmps(result.toFixed(4));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setWatts('');
    setVoltage('');
    setPowerFactor('1');
    setPhase('single');
    setAmps('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Watts to Amps Calculator</CardTitle>
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
                <Label htmlFor="amps">Current (A)</Label>
                <Input
                  id="amps"
                  type="number"
                  placeholder="Calculated Amps"
                  value={amps}
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
              <Button onClick={calculateAmps}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Watts to Amps Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts power in Watts (W) to current in Amps (A), based on voltage, power factor, and phase type.</p>
          <div>
            <h3 className="font-medium">Formulas:</h3>
            <ul className="list-disc pl-5">
              <li><b>Single Phase:</b> Amps = Watts / (Voltage × Power Factor)</li>
              <li><b>Three Phase:</b> Amps = Watts / (√3 × Voltage × Power Factor)</li>
            </ul>
            <p className="mt-2">Where:
              <br />Watts = Electrical power
              <br />Voltage = Voltage in Volts (V)
              <br />Power Factor = Decimal between 0 and 1
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>For purely resistive loads, use PF = 1</li>
              <li>Industrial loads often have a PF ≈ 0.8</li>
              <li>Ensure consistent units for accurate conversion</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default WattsToAmpsCalculator;
