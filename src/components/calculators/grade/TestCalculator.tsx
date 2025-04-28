import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";


export const TestCalculator = () => {
  const [totalMarks, setTotalMarks] = useState<number>(0);
  const [marksObtained, setMarksObtained] = useState<number>(0);
  const [percentage, setPercentage] = useState<number | null>(null);

  const handleTotalMarksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTotalMarks(Number(e.target.value));
  };

  const handleMarksObtainedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMarksObtained(Number(e.target.value));
  };

  const calculatePercentage = () => {
    if (totalMarks === 0) {
      setPercentage(null);
      return;
    }

    const calculatedPercentage = (marksObtained / totalMarks) * 100;
    setPercentage(calculatedPercentage);
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
                    <Link to="/grade/all">Grade Calculators</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Test Score Percentage Calculator</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Test Score Percentage Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="total-marks">Enter Total Marks</Label>
              <Input
                id="total-marks"
                type="number"
                value={totalMarks}
                onChange={handleTotalMarksChange}
                min="1"
              />

              <Label htmlFor="marks-obtained">Enter Marks Obtained</Label>
              <Input
                id="marks-obtained"
                type="number"
                value={marksObtained}
                onChange={handleMarksObtainedChange}
                min="0"
                max={totalMarks}
              />

              <Button
                variant="default"
                onClick={calculatePercentage}
                className="w-full mt-4"
              >
                Calculate Percentage
              </Button>

              {percentage !== null && (
                <div className="mt-4 p-4 bg-muted rounded-md">
                  <p className="text-sm text-muted-foreground">Your percentage is:</p>
                  <p className="text-2xl font-semibold">{percentage.toFixed(2)}%</p>
                </div>
              )}
            </div>
          </div>
        </Card>

        <GuidanceSection title="How to Use the Test Percentage Calculator">
          <p>This tool helps you calculate the percentage based on the marks obtained in a test.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Calculate Your Percentage</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the total marks of the test</li>
            <li>Enter the marks you obtained in the test</li>
            <li>Click "Calculate Percentage" to get your result</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>Total Marks: 100</li>
              <li>Marks Obtained: 80</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>Percentage = (80 / 100) * 100 = 80%</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>Your percentage is 80%</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};
