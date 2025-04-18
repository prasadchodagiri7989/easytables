import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";

const KVAToKWCalculator = () => {
  const [kva, setKva] = useState('');
  const [powerFactor, setPowerFactor] = useState('');
  const [kw, setKw] = useState('');
  const [error, setError] = useState('');

  const calculateKW = () => {
    setError('');
    try {
      const kvaValue = parseFloat(kva);
      const pf = parseFloat(powerFactor);

      if (isNaN(kvaValue) || isNaN(pf) || pf <= 0 || pf > 1) {
        setError('Please enter valid values for kVA and Power Factor (between 0 and 1).');
        return;
      }

      const kwResult = kvaValue * pf;

      setKw(kwResult.toFixed(4));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setKva('');
    setPowerFactor('');
    setKw('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>kVA to kW Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
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
                <Label htmlFor="powerFactor">Power Factor (PF)</Label>
                <Input
                  id="powerFactor"
                  type="number"
                  placeholder="Enter power factor between 0 and 1"
                  value={powerFactor}
                  onChange={(e) => setPowerFactor(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="kw">Real Power (kW)</Label>
                <Input
                  id="kw"
                  type="number"
                  placeholder="Calculated real power in kW"
                  value={kw}
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
              <Button onClick={calculateKW}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="kVA to kW Conversion Guide">
        <div className="space-y-4">
          <p>This calculator helps convert apparent power in kilovolt-amperes (kVA) to real power in kilowatts (kW), based on the power factor.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>kW = kVA × Power Factor</b></li>
            </ul>
            <p className="mt-2">Where:
              <br />kW = Real Power (kilowatts)
              <br />kVA = Apparent Power (kilovolt-amperes)
              <br />Power Factor (PF) is the efficiency of the system (between 0 and 1).
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>Power factor is typically between 0.8 and 1 for most systems.</li>
              <li>This formula helps determine how much actual real power (in kilowatts) is being used based on the apparent power.</li>
              <li>For motors and generators, the power factor is often given by the manufacturer.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default KVAToKWCalculator;
