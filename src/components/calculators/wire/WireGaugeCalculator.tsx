import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

// Wire Gauge Conversion Data
const wireGaugeData = {
  "10": { diameter: 0.1019, area: 0.0081, resistance: 0.0033 },
  "12": { diameter: 0.0808, area: 0.0051, resistance: 0.0052 },
  "14": { diameter: 0.0641, area: 0.0032, resistance: 0.0083 },
  "16": { diameter: 0.0508, area: 0.0020, resistance: 0.0134 },
  "18": { diameter: 0.0403, area: 0.0013, resistance: 0.0213 },
  "20": { diameter: 0.0320, area: 0.0008, resistance: 0.0339 },
  "22": { diameter: 0.0253, area: 0.0005, resistance: 0.0539 },
  "24": { diameter: 0.0201, area: 0.0003, resistance: 0.0859 },
  "26": { diameter: 0.0159, area: 0.0002, resistance: 0.1367 },
  "28": { diameter: 0.0126, area: 0.0001, resistance: 0.2173 },
};

const WireGaugeCalculator: React.FC = () => {
  const [gauge, setGauge] = useState<string>("10"); // Wire gauge input
  const [diameter, setDiameter] = useState<number | null>(null); // Diameter result
  const [area, setArea] = useState<number | null>(null); // Area result
  const [resistance, setResistance] = useState<number | null>(null); // Resistance result

  const handleCalculate = () => {
    // Get the wire gauge data
    const data = wireGaugeData[gauge];

    if (data) {
      // Set the results based on the selected gauge
      setDiameter(data.diameter);
      setArea(data.area);
      setResistance(data.resistance);
    } else {
      alert("Invalid wire gauge selected.");
    }
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
            <BreadcrumbPage>Wire Gauge Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Wire Gauge Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="gauge">Wire Gauge</Label>
              <Input
                id="gauge"
                type="text"
                value={gauge}
                onChange={(e) => setGauge(e.target.value)}
                placeholder="Enter wire gauge (e.g., 10, 12, 14, etc.)"
                className="w-full"
              />
            </div>

            <Button onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {diameter !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Diameter (in inches):</p>
                <p className="text-2xl font-semibold">{diameter.toFixed(4)}</p>
              </div>
            )}

            {area !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Area (in square inches):</p>
                <p className="text-2xl font-semibold">{area.toFixed(6)}</p>
              </div>
            )}

            {resistance !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Resistance (per foot):</p>
                <p className="text-2xl font-semibold">{resistance.toFixed(4)} ohms</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Wire Gauge Calculator">
          <p>This calculator allows you to calculate the diameter, area, and resistance of a wire based on its gauge.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Use the Wire Gauge Calculator</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the wire gauge (e.g., 10, 12, 14).</li>
            <li>Click "Calculate" to get the diameter, area, and resistance of the wire.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>Wire Gauge: 12</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>Diameter for 12 AWG wire = 0.0808 inches</p>
            <p>Area for 12 AWG wire = 0.0051 square inches</p>
            <p>Resistance for 12 AWG wire (per foot) = 0.0052 ohms</p>

            <p className="mt-2"><strong>Results:</strong></p>
            <ul className="list-disc pl-5">
              <li>Diameter = 0.0808 inches</li>
              <li>Area = 0.0051 square inches</li>
              <li>Resistance = 0.0052 ohms</li>
            </ul>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default WireGaugeCalculator;
