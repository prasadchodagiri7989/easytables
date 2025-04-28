import React from "react";
import { Card } from "@/components/ui/card";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export const GradeCalculationPage = () => {
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
                  <BreadcrumbPage>How to Calculate Your Grade</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">How to Calculate Your Grade</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <GuidanceSection title="What is Grade Calculation?">
              <p>Grade calculation is the process of determining a student's grade based on their performance in assignments, exams, and projects.</p>
              <p>It often involves combining the marks from various assessments and assigning them a weighted value to compute a final grade.</p>
            </GuidanceSection>

            <GuidanceSection title="Grade Calculation Formula">
              <h4 className="font-medium mt-3 mb-1">Formula</h4>
              <p>The formula for grade calculation typically involves:</p>
              <pre className="bg-muted p-3 rounded-md text-sm">
                Final Grade = (Σ(Assessment Marks × Weight)) ÷ Total Weight
              </pre>
              <p>Where:</p>
              <ul className="list-disc pl-5">
                <li><strong>Assessment Marks</strong>: The marks obtained in each assessment</li>
                <li><strong>Weight</strong>: The weight assigned to each assessment (e.g., exams = 40%, projects = 30%)</li>
                <li><strong>Total Weight</strong>: The sum of all weights (which should equal 100%)</li>
              </ul>
            </GuidanceSection>

            <GuidanceSection title="Example Calculation">
              <h4 className="font-medium mt-3 mb-1">Example</h4>
              <p><strong>Assessments:</strong></p>
              <ul className="list-disc pl-5">
                <li>Exam: Marks = 85, Weight = 40%</li>
                <li>Project: Marks = 90, Weight = 30%</li>
                <li>Assignment: Marks = 80, Weight = 30%</li>
              </ul>

              <p className="mt-2"><strong>Step-by-Step Calculation:</strong></p>
              <ul className="list-decimal pl-5 space-y-1">
                <li>Exam: 85 × 0.40 = 34.0</li>
                <li>Project: 90 × 0.30 = 27.0</li>
                <li>Assignment: 80 × 0.30 = 24.0</li>
              </ul>
              <p><strong>Final Grade Calculation:</strong></p>
              <pre className="bg-muted p-3 rounded-md text-sm">
                Final Grade = (34.0 + 27.0 + 24.0) ÷ 1 = 85.0
              </pre>
              <p>Your final grade is <strong>85.0</strong>.</p>
            </GuidanceSection>

            <GuidanceSection title="When to Use Grade Calculation">
              <p>The grade calculator is useful when:</p>
              <ul className="list-disc pl-5">
                <li>You want to know your final grade before the result is released.</li>
                <li>You want to track your grade progress throughout the semester.</li>
                <li>You need to know how much weight a certain assignment or test has on your final grade.</li>
              </ul>
            </GuidanceSection>

            <GuidanceSection title="Grade Scale">
              <p>Grades are typically assigned based on the following scale:</p>
              <ul className="list-disc pl-5">
                <li>A = 90-100%</li>
                <li>B = 80-89%</li>
                <li>C = 70-79%</li>
                <li>D = 60-69%</li>
                <li>F = Below 60%</li>
              </ul>
            </GuidanceSection>
          </div>
        </Card>
      </div>
    </>
  );
};
