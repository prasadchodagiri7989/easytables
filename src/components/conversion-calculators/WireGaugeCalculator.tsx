import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const WireGaugeCalculator = () => {
  const [current, setCurrent] = useState('');
  const [length, setLength] = useState('');
  const [voltageDrop, setVoltageDrop] = useState('3'); // default 3%
  const [phase, setPhase] = useState<'single' | 'three'>('single');
  const [gauge, setGauge] = useState('');
  const [error, setError] = useState('');

  const copperResistivity = 10.4; // ohms per mil-foot (for copper)

  const calculateGauge = () => {
    setError('');
    try {
      const I = parseFloat(current);
      const L = parseFloat(length);
      const VD = parseFloat(voltageDrop);

      if (isNaN(I) || isNaN(L) || isNaN(VD)) {
        setError('Please enter valid numeric values.');
        return;
      }

      // Calculate voltage drop per amp-foot (simplified for demonstration)
      const allowableVD = VD / 100;
      const voltage = 120; // assume standard 120V unless provided
      const totalVD = allowableVD * voltage;

      // Calculate required circular mils (CM) using:
      // CM = (K × I × D) / VD, K = 12.9 (copper, single-phase), D = distance*2 (out + back)
      const K = phase === 'single' ? 12.9 : 22.4;
      const distance = phase === 'single' ? L * 2 : L * Math.sqrt(3);
      const CM = (K * I * distance) / totalVD;

      // Approximate AWG based on CM (simplified table)
      const awgTable = [
        { gauge: '14', cm: 4110 },
        { gauge: '12', cm: 6530 },
        { gauge: '10', cm: 10380 },
        { gauge: '8', cm: 16510 },
        { gauge: '6', cm: 26240 },
        { gauge: '4', cm: 41740 },
        { gauge: '2', cm: 66360 },
        { gauge: '1', cm: 83690 },
        { gauge: '1/0', cm: 105600 },
        { gauge: '2/0', cm: 133100 },
        { gauge: '3/0', cm: 167800 },
        { gauge: '4/0', cm: 211600 },
      ];

      const match = awgTable.find((awg) => CM <= awg.cm);
      setGauge(match ? match.gauge : 'Larger than 4/0');
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setCurrent('');
    setLength('');
    setVoltageDrop('3');
    setGauge('');
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
            <BreadcrumbPage>Wire Gauge Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
     </Breadcrumb>
      <div className="container mx-auto p-4">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Wire Gauge Calculator</CardTitle>
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
                  <Label htmlFor="current">Current (A)</Label>
                  <Input
                    id="current"
                    type="number"
                    placeholder="Enter current in Amps"
                    value={current}
                    onChange={(e) => setCurrent(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="length">Distance (ft)</Label>
                  <Input
                    id="length"
                    type="number"
                    placeholder="One-way distance in feet"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="voltageDrop">% Voltage Drop</Label>
                  <Input
                    id="voltageDrop"
                    type="number"
                    step="0.1"
                    placeholder="Allowed voltage drop %"
                    value={voltageDrop}
                    onChange={(e) => setVoltageDrop(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="gauge">Suggested Wire Gauge (AWG)</Label>
                  <Input
                    id="gauge"
                    type="text"
                    placeholder="Calculated AWG"
                    value={gauge}
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
                <Button onClick={calculateGauge}>Calculate</Button>
                <Button variant="outline" onClick={reset}>Reset</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <GuidanceSection title="Wire Gauge Calculation Guide">
          <div className="space-y-4">
            <p>This calculator helps determine the appropriate wire gauge based on current, distance, and allowable voltage drop.</p>
            <ul className="list-disc pl-5">
              <li>Voltage drop should typically not exceed 3% for efficiency and safety.</li>
              <li>Always round up to the nearest larger gauge when in doubt.</li>
              <li>Check NEC tables for exact specifications if needed.</li>
            </ul>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default WireGaugeCalculator;

