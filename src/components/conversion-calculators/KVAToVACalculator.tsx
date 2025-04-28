import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const KVAToVACalculator = () => {
  const [kva, setKva] = useState('');
  const [va, setVa] = useState('');
  const [error, setError] = useState('');

  const calculateVA = () => {
    setError('');
    try {
      const kvaValue = parseFloat(kva);

      if (isNaN(kvaValue)) {
        setError('Please enter a valid numeric value for kVA.');
        return;
      }

      const vaResult = kvaValue * 1000; // 1 kVA = 1000 VA

      setVa(vaResult.toFixed(0));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setKva('');
    setVa('');
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
            <BreadcrumbPage>kVA to VA Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
     </Breadcrumb>
      <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>kVA to VA Calculator</CardTitle>
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
                <Label htmlFor="va">Apparent Power (VA)</Label>
                <Input
                  id="va"
                  type="number"
                  placeholder="Calculated apparent power in VA"
                  value={va}
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
              <Button onClick={calculateVA}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="kVA to VA Conversion Guide">
        <div className="space-y-4">
          <p>This calculator helps convert apparent power in kilovolt-amperes (kVA) to volt-amperes (VA), the base unit of apparent power.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>VA = kVA × 1000</b></li>
            </ul>
            <p className="mt-2">Where:
              <br />VA = Apparent Power (volt-amperes)
              <br />kVA = Apparent Power (kilovolt-amperes)
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>1 kVA is equal to 1000 VA.</li>
              <li>Used for systems where apparent power is measured in volt-amperes (VA), such as AC circuits and electrical systems.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
    </>
  );
};

export default KVAToVACalculator;
