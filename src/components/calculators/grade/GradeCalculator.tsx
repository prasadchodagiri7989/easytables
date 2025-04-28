import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

export const GradeCalculator = () => {
  const [marks, setMarks] = useState<number[]>([0]);
  const [average, setAverage] = useState<number | null>(null);
  const [grade, setGrade] = useState<string>("");

  const handleAddSubject = () => {
    setMarks([...marks, 0]);
  };

  const handleRemoveSubject = (index: number) => {
    const newMarks = [...marks];
    newMarks.splice(index, 1);
    setMarks(newMarks);
  };

  const handleMarksChange = (index: number, value: number) => {
    const newMarks = [...marks];
    newMarks[index] = value;
    setMarks(newMarks);
  };

  const calculateGrade = () => {
    if (marks.length === 0) {
      setAverage(null);
      setGrade("");
      return;
    }

    const total = marks.reduce((acc, val) => acc + val, 0);
    const avg = total / marks.length;
    setAverage(avg);

    if (avg >= 90) setGrade("A");
    else if (avg >= 80) setGrade("B");
    else if (avg >= 70) setGrade("C");
    else if (avg >= 60) setGrade("D");
    else setGrade("F");
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
                  <BreadcrumbPage>Grade Calculator</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Grade Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            {marks.map((mark, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor={`subject-${index}`}>Marks for Subject {index + 1}</Label>
                  <button
                    type="button"
                    onClick={() => handleRemoveSubject(index)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
                <Input
                  id={`subject-${index}`}
                  type="number"
                  value={mark}
                  onChange={(e) => handleMarksChange(index, Number(e.target.value))}
                  min="0"
                  max="100"
                />
              </div>
            ))}

            <Button
              variant="default"
              onClick={handleAddSubject}
              className="w-full"
            >
              Add Another Subject
            </Button>

            <Button
              variant="default"
              onClick={calculateGrade}
              className="w-full mt-4"
            >
              Calculate Grade
            </Button>

            {average !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Your Average Marks:</p>
                <p className="text-2xl font-semibold">{average.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground mt-2">Your Final Grade:</p>
                <p className="text-2xl font-semibold">{grade}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Grade Calculator">
          <p>This calculator helps you find your final grade based on the marks you scored across different subjects.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Calculate Your Grade</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter your marks for each subject (out of 100)</li>
            <li>Click "Calculate Grade" to see your average and final grade</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Grade Scale</h4>
          <ul className="list-disc pl-5">
            <li>90-100: A</li>
            <li>80-89: B</li>
            <li>70-79: C</li>
            <li>60-69: D</li>
            <li>Below 60: F</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>Subject 1: 92</li>
              <li>Subject 2: 85</li>
              <li>Subject 3: 78</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>Average = (92 + 85 + 78) / 3 = 85</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>Your average is 85 → Grade B</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};
