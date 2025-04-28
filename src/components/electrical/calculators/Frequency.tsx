import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";


const FrequencyCalculator = () => {
  const [timePeriod, setTimePeriod] = useState('');
  const [frequency, setFrequency] = useState('');
  const [error, setError] = useState('');

  const calculateFrequency = () => {
    setError('');
    const T = parseFloat(timePeriod); // seconds

    if (isNaN(T) || T <= 0) {
      setError('Please enter a valid time period greater than 0.');
      return;
    }

    const f = 1 / T; // Hz
    setFrequency(f.toFixed(4) + ' Hz');
  };

  const reset = () => {
    setTimePeriod('');
    setFrequency('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Frequency Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="timePeriod">Time Period (T) in Seconds</Label>
                <Input
                  id="timePeriod"
                  type="number"
                  placeholder="Enter time period"
                  value={timePeriod}
                  onChange={e => setTimePeriod(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="frequency">Frequency (f)</Label>
                <Input
                  id="frequency"
                  type="text"
                  placeholder="Result"
                  value={frequency}
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
              <Button onClick={calculateFrequency}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="About Frequency">
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-1">Frequency Formula</h3>
            <p>
              Frequency refers to how many cycles occur in a second and is the inverse of the time period.
            </p>
            <p className="mt-2 font-medium">f = 1 / T</p>
            <p>Where:</p>
            <ul className="list-disc pl-5">
              <li><strong>f</strong> = Frequency in Hertz (Hz)</li>
              <li><strong>T</strong> = Time Period in seconds (s)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-1">How to Use</h3>
            <ol className="list-decimal pl-5">
              <li>Enter the time period (T) in seconds</li>
              <li>Click "Calculate" to get the frequency (f)</li>
            </ol>
          </div>

          <div>
            <h3 className="font-medium mb-1">Applications</h3>
            <ul className="list-disc pl-5">
              <li>Signal and waveform analysis</li>
              <li>Oscillator and wave generator design</li>
              <li>Sound wave studies in physics</li>
              <li>AC power system analysis</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default FrequencyCalculator;
