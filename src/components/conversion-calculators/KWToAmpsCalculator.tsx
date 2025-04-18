import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";

const KWToAmpsCalculator = () => {
  const [kw, setKw] = useState('');
  const [voltage, setVoltage] = useState('');
  const [phase, setPhase] = useState<'single' | 'three'>('single');
  const [amps, setAmps] = useState('');
  const [error, setError] = useState('');

  const calculateAmps = () => {
    setError('');
    try {
      const kwValue = parseFloat(kw);
      const voltageValue = parseFloat(voltage);

      if (isNaN(kwValue) || isNaN(voltageValue)) {
        setError('Please enter valid numeric values.');
        return;
      }

      let ampsResult = 0;
      if (phase === 'single') {
        ampsResult = (kwValue * 1000) / voltageValue; // Single-phase formula
      } else {
        ampsResult = (kwValue * 1000) / (Math.sqrt(3) * voltageValue); // Three-phase formula
      }

      setAmps(ampsResult.toFixed(2));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setKw('');
    setVoltage('');
    setAmps('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>kW to Amps Calculator</CardTitle>
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
                <Label htmlFor="amps">Current (A)</Label>
                <Input
                  id="amps"
                  type="number"
                  placeholder="Calculated current in Amps"
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

      <GuidanceSection title="kW to Amps Conversion Guide">
        <div className="space-y-4">
          <p>This calculator helps convert power in kilowatts (kW) to current in amperes (A), based on the voltage and phase type.</p>
          <div>
            <h3 className="font-medium">Formulas:</h3>
            <ul className="list-disc pl-5">
              <li><b>Single Phase:</b> Amps = (kW × 1000) / Voltage</li>
              <li><b>Three Phase:</b> Amps = (kW × 1000) / (√3 × Voltage)</li>
            </ul>
            <p className="mt-2">Where:
              <br />kW = Power (kilowatts)
              <br />Voltage = Voltage (Volts)
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>Use RMS values for AC voltage.</li>
              <li>Commonly used in motor and generator sizing calculations.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default KWToAmpsCalculator;
