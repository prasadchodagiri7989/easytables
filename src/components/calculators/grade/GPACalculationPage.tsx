import React from "react";
import { Card } from "@/components/ui/card";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export const GPACalculationPage = () => {
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
                  <BreadcrumbPage>How GPA is Calculated</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">How GPA is Calculated</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <GuidanceSection title="What is GPA?">
              <p>The Grade Point Average (GPA) is a numerical representation of a student's academic performance, typically on a scale from 0 to 4.0.</p>
              <p>It is calculated by assigning each grade a point value, multiplying it by the number of credits for that course, and then averaging the weighted points over the total credits.</p>
            </GuidanceSection>

            <GuidanceSection title="GPA Calculation Formula">
              <h4 className="font-medium mt-3 mb-1">Formula</h4>
              <p>The formula for calculating GPA is:</p>
              <pre className="bg-muted p-3 rounded-md text-sm">
                GPA = (Σ(Grade Points × Credits)) ÷ Total Credits
              </pre>
              <p>Where:</p>
              <ul className="list-disc pl-5">
                <li><strong>Grade Points</strong>: The numerical value assigned to the grade (e.g., A = 4.0, B = 3.0)</li>
                <li><strong>Credits</strong>: The number of credits assigned to each course</li>
                <li><strong>Total Credits</strong>: The sum of all credits of the courses taken</li>
              </ul>
            </GuidanceSection>

            <GuidanceSection title="Grade Point System">
              <h4 className="font-medium mt-3 mb-1">Grade Point Values</h4>
              <p>GPA is calculated based on the following scale:</p>
              <ul className="list-disc pl-5">
                <li>A = 4.0</li>
                <li>B = 3.0</li>
                <li>C = 2.0</li>
                <li>D = 1.0</li>
                <li>F = 0.0</li>
              </ul>
            </GuidanceSection>

            <GuidanceSection title="Example Calculation">
              <h4 className="font-medium mt-3 mb-1">Example</h4>
              <p><strong>Courses Taken:</strong></p>
              <ul className="list-disc pl-5">
                <li>Course 1: Grade A, Credits 3</li>
                <li>Course 2: Grade B, Credits 4</li>
                <li>Course 3: Grade C, Credits 3</li>
              </ul>

              <p className="mt-2"><strong>Step-by-Step Calculation:</strong></p>
              <ul className="list-decimal pl-5 space-y-1">
                <li>Grade Point for Course 1 (A) = 4.0 × 3 = 12.0</li>
                <li>Grade Point for Course 2 (B) = 3.0 × 4 = 12.0</li>
                <li>Grade Point for Course 3 (C) = 2.0 × 3 = 6.0</li>
              </ul>
              <p><strong>Final GPA Calculation:</strong></p>
              <pre className="bg-muted p-3 rounded-md text-sm">
                GPA = (12.0 + 12.0 + 6.0) ÷ (3 + 4 + 3) = 30.0 ÷ 10 = 3.0
              </pre>
              <p>Your final GPA is <strong>3.0</strong></p>
            </GuidanceSection>

            <GuidanceSection title="When to Use a GPA Calculator">
              <p>The GPA calculator is helpful when:</p>
              <ul className="list-disc pl-5">
                <li>You want to track your academic progress throughout the semester.</li>
                <li>You need to know your GPA for scholarship or job applications.</li>
                <li>You want to calculate your cumulative GPA at the end of a course or semester.</li>
              </ul>
            </GuidanceSection>
          </div>
        </Card>
      </div>
    </>
  );
};
