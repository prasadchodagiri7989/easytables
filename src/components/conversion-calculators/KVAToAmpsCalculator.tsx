import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";

const KVAToAmpsCalculator = () => {
  const [kva, setKva] = useState('');
  const [voltage, setVoltage] = useState('');
  const [phase, setPhase] = useState<'single' | 'three'>('single');
  const [amps, setAmps] = useState('');
  const [error, setError] = useState('');

  const calculateAmps = () => {
    setError('');
    try {
      const kvaValue = parseFloat(kva);
      const V = parseFloat(voltage);

      if (isNaN(kvaValue) || isNaN(V)) {
        setError('Please enter valid numeric values.');
        return;
      }

      let ampsResult = 0;
      if (phase === 'single') {
        ampsResult = (kvaValue * 1000) / V;
      } else {
        ampsResult = (kvaValue * 1000) / (Math.sqrt(3) * V);
      }

      setAmps(ampsResult.toFixed(4));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setKva('');
    setVoltage('');
    setAmps('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>kVA to Amps Calculator</CardTitle>
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
                <Label htmlFor="kva">Apparent Power (kVA)</Label>
                <Input
                  id="kva"
                  type="number"
                  placeholder="Enter apparent power in kVA"
                  value={kva}
                  onChange={(e) => setKva(e.target.value)}
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
                <Label htmlFor="amps">Current (Amps)</Label>
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

      <GuidanceSection title="kVA to Amps Conversion Guide">
        <div className="space-y-4">
          <p>This calculator helps convert apparent power in kilovolt-amperes (kVA) to current in Amperes (A), based on the voltage and phase type.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>Single Phase:</b> I = (kVA × 1000) / V</li>
              <li><b>Three Phase:</b> I = (kVA × 1000) / (√3 × V)</li>
            </ul>
            <p className="mt-2">Where:
              <br />I = Current (Amps)
              <br />kVA = Apparent Power (kilovolt-amperes)
              <br />V = Voltage (Volts)
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>Use this calculator to determine the current required for a given power and voltage.</li>
              <li>This formula is important when designing electrical circuits and selecting equipment like transformers and generators.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default KVAToAmpsCalculator;
