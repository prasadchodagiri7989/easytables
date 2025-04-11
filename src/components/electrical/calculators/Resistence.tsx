import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";

const ResistanceCalculator = () => {
  const [voltage, setVoltage] = useState('');
  const [current, setCurrent] = useState('');
  const [resistance, setResistance] = useState('');
  const [error, setError] = useState('');

  const calculateResistance = () => {
    setError('');
    const V = parseFloat(voltage); // volts
    const I = parseFloat(current); // amps

    if (isNaN(V) || isNaN(I) || I === 0) {
      setError('Please enter valid values. Current must not be zero.');
      return;
    }

    const R = V / I; // Ohms
    setResistance(R.toFixed(4) + ' Ω');
  };

  const reset = () => {
    setVoltage('');
    setCurrent('');
    setResistance('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Resistance Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="voltage">Voltage (V) in Volts</Label>
                <Input
                  id="voltage"
                  type="number"
                  placeholder="Enter voltage"
                  value={voltage}
                  onChange={e => setVoltage(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="current">Current (I) in Amperes</Label>
                <Input
                  id="current"
                  type="number"
                  placeholder="Enter current"
                  value={current}
                  onChange={e => setCurrent(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="resistance">Resistance (R)</Label>
                <Input
                  id="resistance"
                  type="text"
                  placeholder="Result"
                  value={resistance}
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
              <Button onClick={calculateResistance}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="About Resistance">
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-1">Resistance Formula</h3>
            <p>
              Resistance measures how much a material opposes the flow of electric current.
            </p>
            <p className="mt-2 font-medium">R = V / I</p>
            <p>Where:</p>
            <ul className="list-disc pl-5">
              <li><strong>R</strong> = Resistance in Ohms (Ω)</li>
              <li><strong>V</strong> = Voltage in Volts (V)</li>
              <li><strong>I</strong> = Current in Amperes (A)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-1">How to Use</h3>
            <ol className="list-decimal pl-5">
              <li>Enter the voltage (V) in Volts</li>
              <li>Enter the current (I) in Amperes</li>
              <li>Click "Calculate" to find resistance (R)</li>
            </ol>
          </div>

          <div>
            <h3 className="font-medium mb-1">Applications</h3>
            <ul className="list-disc pl-5">
              <li>Electrical and electronics circuit design</li>
              <li>Ohm’s Law experiments and learning</li>
              <li>Power analysis in resistive components</li>
              <li>Troubleshooting and testing resistors</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default ResistanceCalculator;
