import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";


export const LetterGradeToGPACalculator = () => {
  const [letterGrade, setLetterGrade] = useState<string>("");
  const [gpa, setGpa] = useState<number | null>(null);

  const handleGradeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLetterGrade(e.target.value.toUpperCase());
  };

  const calculateGPA = () => {
    const gradePoints: { [key: string]: number } = {
      A: 4.0,
      B: 3.0,
      C: 2.0,
      D: 1.0,
      F: 0.0,
    };

    const calculatedGPA = gradePoints[letterGrade] || 0;
    setGpa(calculatedGPA);
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
                  <BreadcrumbPage>Letter Grade to GPA Conversion</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Letter Grade to GPA Conversion</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="letter-grade">Enter Your Letter Grade (A, B, C, etc.)</Label>
              <Input
                id="letter-grade"
                type="text"
                value={letterGrade}
                onChange={handleGradeChange}
                maxLength={1}
                placeholder="A, B, C, etc."
              />

              <Button
                variant="default"
                onClick={calculateGPA}
                className="w-full mt-4"
              >
                Convert to GPA
              </Button>

              {gpa !== null && (
                <div className="mt-4 p-4 bg-muted rounded-md">
                  <p className="text-sm text-muted-foreground">Your GPA is:</p>
                  <p className="text-2xl font-semibold">{gpa.toFixed(2)}</p>
                </div>
              )}
            </div>
          </div>
        </Card>

        <GuidanceSection title="How to Use the Letter Grade to GPA Conversion">
          <p>This tool helps you convert your letter grade into a GPA value.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Convert Letter Grade to GPA</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter your letter grade (A, B, C, etc.) in the input field</li>
            <li>Click "Convert to GPA" to see your GPA value</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Grade to GPA Conversion Table</h4>
          <ul className="list-disc pl-5">
            <li>A = 4.0</li>
            <li>B = 3.0</li>
            <li>C = 2.0</li>
            <li>D = 1.0</li>
            <li>F = 0.0</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Example Conversion</h4>
          <div className="space-y-1">
            <p><strong>Input Grade:</strong> A</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>Your GPA is 4.0</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};
