import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const AmpsToKVACalculator = () => {
  const [amps, setAmps] = useState('');
  const [voltage, setVoltage] = useState('');
  const [phase, setPhase] = useState<'single' | 'three'>('single');
  const [kva, setKva] = useState('');
  const [error, setError] = useState('');

  const calculateKVA = () => {
    setError('');
    try {
      const I = parseFloat(amps);
      const V = parseFloat(voltage);

      if (isNaN(I) || isNaN(V)) {
        setError('Please enter valid numeric values.');
        return;
      }

      let kvaResult = 0;
      if (phase === 'single') {
        kvaResult = (V * I) / 1000;
      } else {
        kvaResult = (Math.sqrt(3) * V * I) / 1000;
      }

      setKva(kvaResult.toFixed(4));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setAmps('');
    setVoltage('');
    setKva('');
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
            <BreadcrumbPage>Amps to Kilovolt-Amperes (kVA) Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
     </Breadcrumb>
      <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Amps to Kilovolt-Amperes (kVA) Calculator</CardTitle>
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
                <Label htmlFor="kva">Apparent Power (kVA)</Label>
                <Input
                  id="kva"
                  type="number"
                  placeholder="Calculated kVA"
                  value={kva}
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
              <Button onClick={calculateKVA}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Amps to kVA Conversion Guide">
        <div className="space-y-4">
          <p>This calculator helps convert current in Amperes (A) to apparent power in kilovolt-amperes (kVA), based on the voltage and phase type.</p>
          <div>
            <h3 className="font-medium">Formulas:</h3>
            <ul className="list-disc pl-5">
              <li><b>Single Phase:</b> kVA = (V × I) / 1000</li>
              <li><b>Three Phase:</b> kVA = (√3 × V × I) / 1000</li>
            </ul>
            <p className="mt-2">Where:
              <br />V = Voltage (Volts)
              <br />I = Current (Amps)
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>This calculation gives apparent power — no need for power factor.</li>
              <li>Used for transformer and generator sizing.</li>
              <li>Be sure to use RMS values for AC voltage and current.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
    </>
  );
};

export default AmpsToKVACalculator;
