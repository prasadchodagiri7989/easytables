import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export const FinalGradeCalculator = () => {
  const [currentGrade, setCurrentGrade] = useState<number | null>(null);
  const [finalExamWeight, setFinalExamWeight] = useState<number | null>(null);
  const [desiredGrade, setDesiredGrade] = useState<number | null>(null);
  const [neededFinalGrade, setNeededFinalGrade] = useState<number | null>(null);

  const calculateNeededGrade = () => {
    if (currentGrade !== null && finalExamWeight !== null && desiredGrade !== null) {
      const finalWeightDecimal = finalExamWeight / 100;
      const needed = (desiredGrade - (1 - finalWeightDecimal) * currentGrade) / finalWeightDecimal;
      setNeededFinalGrade(needed);
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
                  <BreadcrumbPage>Final Grade Calculator</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Final Grade Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">

            <div className="space-y-2">
              <Label htmlFor="current-grade">Current Grade (%)</Label>
              <Input
                id="current-grade"
                type="number"
                value={currentGrade ?? ""}
                onChange={(e) => setCurrentGrade(Number(e.target.value))}
                placeholder="e.g., 85"
                min="0"
                max="100"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="final-weight">Final Exam Weight (%)</Label>
              <Input
                id="final-weight"
                type="number"
                value={finalExamWeight ?? ""}
                onChange={(e) => setFinalExamWeight(Number(e.target.value))}
                placeholder="e.g., 30"
                min="0"
                max="100"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="desired-grade">Desired Overall Grade (%)</Label>
              <Input
                id="desired-grade"
                type="number"
                value={desiredGrade ?? ""}
                onChange={(e) => setDesiredGrade(Number(e.target.value))}
                placeholder="e.g., 90"
                min="0"
                max="100"
              />
            </div>

            <Button
              variant="default"
              onClick={calculateNeededGrade}
              className="w-full mt-4"
            >
              Calculate Needed Final Exam Grade
            </Button>

            {neededFinalGrade !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">You need to score at least:</p>
                <p className="text-2xl font-semibold">{neededFinalGrade.toFixed(2)}%</p>
                <p className="text-sm text-muted-foreground">on your final exam to achieve your desired grade.</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Final Grade Calculator">
          <p>This calculator helps you figure out what score you need on your final exam to achieve your desired overall course grade.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Calculate Needed Final Grade</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter your current grade in the course</li>
            <li>Enter the weight of the final exam (as a percentage)</li>
            <li>Enter the overall grade you want to achieve</li>
            <li>Click "Calculate Needed Final Exam Grade"</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>Current Grade = 85%</li>
              <li>Final Exam Weight = 30%</li>
              <li>Desired Grade = 90%</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>Needed Final Grade = (90 - (1 - 0.3) × 85) ÷ 0.3</p>
            <p>Needed Final Grade = (90 - 59.5) ÷ 0.3 = 30.5 ÷ 0.3 = 101.67%</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>You would need to score 101.67% on your final exam to achieve a 90% overall grade.</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};
