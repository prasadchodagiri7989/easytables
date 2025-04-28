import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const GPAToLetterGradeConversion = () => {
  const [gpa, setGpa] = useState<number | null>(null);
  const [letterGrade, setLetterGrade] = useState<string>("");

  const handleGpaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGpa(parseFloat(e.target.value));
  };

  const convertGPAtoGrade = () => {
    if (gpa === null) return;

    if (gpa >= 3.7) {
      setLetterGrade("A");
    } else if (gpa >= 3.0) {
      setLetterGrade("B");
    } else if (gpa >= 2.0) {
      setLetterGrade("C");
    } else if (gpa >= 1.0) {
      setLetterGrade("D");
    } else {
      setLetterGrade("F");
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
                  <BreadcrumbPage>GPA to Letter Grade Conversion</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">GPA to Letter Grade Conversion</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Input
                type="number"
                value={gpa || ""}
                onChange={handleGpaChange}
                placeholder="Enter your GPA"
                min="0"
                step="0.01"
              />
              <Button onClick={convertGPAtoGrade} className="w-full mt-4">Convert GPA to Letter Grade</Button>

              {letterGrade && (
                <div className="mt-4 p-4 bg-muted rounded-md">
                  <p className="text-sm text-muted-foreground">Your Letter Grade is:</p>
                  <p className="text-2xl font-semibold">{letterGrade}</p>
                </div>
              )}
            </div>
          </div>
        </Card>

        <GuidanceSection title="How GPA is Converted to Letter Grade">
          <p>The conversion of GPA to letter grades depends on the grading scale used by most institutions. Here's a general guide:</p>

          <h4 className="font-medium mt-3 mb-1">GPA to Letter Grade Conversion Scale</h4>
          <ul className="list-disc pl-5">
            <li><strong>A:</strong> GPA 3.7 - 4.0</li>
            <li><strong>B:</strong> GPA 3.0 - 3.69</li>
            <li><strong>C:</strong> GPA 2.0 - 2.99</li>
            <li><strong>D:</strong> GPA 1.0 - 1.99</li>
            <li><strong>F:</strong> GPA 0.0 - 0.99</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">How GPA is Calculated</h4>
          <p>GPA (Grade Point Average) is typically calculated using the following scale:</p>
          <ul className="list-disc pl-5">
            <li>A = 4.0</li>
            <li>B = 3.0</li>
            <li>C = 2.0</li>
            <li>D = 1.0</li>
            <li>F = 0.0</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Value:</strong> GPA = 3.5</p>
            <p><strong>Conversion:</strong></p>
            <p>The GPA of 3.5 falls in the range of 3.0 - 3.69, which corresponds to a grade of <strong>B</strong>.</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};
