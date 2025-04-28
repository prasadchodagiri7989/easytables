import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const VAToKVACalculator = () => {
  const [va, setVa] = useState('');
  const [kva, setKva] = useState('');

  const calculateKVA = () => {
    const vaValue = parseFloat(va);
    if (isNaN(vaValue)) {
      setKva('');
      return;
    }
    const result = vaValue / 1000;
    setKva(result.toFixed(4));
  };

  const reset = () => {
    setVa('');
    setKva('');
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
            <BreadcrumbPage>VA to kVA Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
     </Breadcrumb>
      <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>VA to kVA Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="va">Apparent Power (VA)</Label>
                <Input
                  id="va"
                  type="number"
                  placeholder="Enter power in VA"
                  value={va}
                  onChange={(e) => setVa(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="kva">Apparent Power (kVA)</Label>
                <Input
                  id="kva"
                  type="number"
                  placeholder="Converted value in kVA"
                  value={kva}
                  disabled
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={calculateKVA}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="VA to kVA Conversion Guide">
        <div className="space-y-4">
          <p>
            This calculator converts apparent power from volt-amperes (VA) to kilovolt-amperes (kVA).
          </p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><strong>kVA = VA / 1000</strong></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Example:</h3>
            <p>If you have 2500 VA:</p>
            <p>kVA = 2500 / 1000 = <strong>2.5 kVA</strong></p>
          </div>
        </div>
      </GuidanceSection>
    </div> </>
  );
};

export default VAToKVACalculator;
