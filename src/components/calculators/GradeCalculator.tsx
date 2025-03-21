
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { X, Plus } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { GuidanceSection } from "@/components/GuidanceSection";

export const GradeCalculator = () => {
  const [assignments, setAssignments] = useState([
    { name: "Assignment 1", score: "", outOf: "", weight: "100" }
  ]);
  const [overallGrade, setOverallGrade] = useState<number | null>(null);
  const [letterGrade, setLetterGrade] = useState<string | null>(null);

  const handleAddAssignment = () => {
    setAssignments([
      ...assignments,
      { name: `Assignment ${assignments.length + 1}`, score: "", outOf: "", weight: "100" }
    ]);
  };

  const handleRemoveAssignment = (index: number) => {
    if (assignments.length === 1) return;
    const newAssignments = [...assignments];
    newAssignments.splice(index, 1);
    setAssignments(newAssignments);
  };

  const handleAssignmentChange = (
    index: number,
    field: "name" | "score" | "outOf" | "weight",
    value: string
  ) => {
    const newAssignments = [...assignments];
    newAssignments[index][field] = value;
    setAssignments(newAssignments);
  };

  const calculateGrade = () => {
    // Filter out incomplete assignments
    const validAssignments = assignments.filter(
      (a) => a.score !== "" && a.outOf !== "" && parseFloat(a.outOf) > 0
    );

    if (validAssignments.length === 0) return;

    let totalWeightedScore = 0;
    let totalWeight = 0;

    for (const assignment of validAssignments) {
      const score = parseFloat(assignment.score);
      const outOf = parseFloat(assignment.outOf);
      const weight = parseFloat(assignment.weight) || 100;

      if (!isNaN(score) && !isNaN(outOf) && outOf > 0) {
        const percentage = (score / outOf) * 100;
        totalWeightedScore += percentage * weight;
        totalWeight += weight;
      }
    }

    if (totalWeight === 0) return;

    const grade = totalWeightedScore / totalWeight;
    setOverallGrade(grade);
    setLetterGrade(getLetterGrade(grade));
  };

  const getLetterGrade = (percentage: number) => {
    if (percentage >= 90) return "A";
    if (percentage >= 80) return "B";
    if (percentage >= 70) return "C";
    if (percentage >= 60) return "D";
    return "F";
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-header">Grade Calculator</h2>
      
      <Card className="p-6 glass-card">
        <div className="space-y-6">
          <div className="space-y-4">
            {assignments.map((assignment, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg bg-white/50">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex-1">
                    <Input
                      value={assignment.name}
                      onChange={(e) => 
                        handleAssignmentChange(index, "name", e.target.value)
                      }
                      placeholder="Assignment name"
                      className="calculator-input font-medium"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleRemoveAssignment(index)}
                    disabled={assignments.length === 1}
                    className="ml-2"
                  >
                    <X size={16} />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <Label className="form-label">Score</Label>
                    <Input
                      type="number"
                      value={assignment.score}
                      onChange={(e) => 
                        handleAssignmentChange(index, "score", e.target.value)
                      }
                      placeholder="0"
                      className="calculator-input"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <Label className="form-label">Out of</Label>
                    <Input
                      type="number"
                      value={assignment.outOf}
                      onChange={(e) => 
                        handleAssignmentChange(index, "outOf", e.target.value)
                      }
                      placeholder="100"
                      className="calculator-input"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <Label className="form-label">Weight (%)</Label>
                    <Input
                      type="number"
                      value={assignment.weight}
                      onChange={(e) => 
                        handleAssignmentChange(index, "weight", e.target.value)
                      }
                      placeholder="100"
                      className="calculator-input"
                    />
                  </div>
                </div>
                
                {assignment.score && assignment.outOf && parseFloat(assignment.outOf) > 0 && (
                  <div className="mt-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Score: {((parseFloat(assignment.score) / parseFloat(assignment.outOf)) * 100).toFixed(1)}%</span>
                    </div>
                    <Progress 
                      value={(parseFloat(assignment.score) / parseFloat(assignment.outOf)) * 100} 
                      className="h-2"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleAddAssignment}
              className="flex items-center gap-2 w-full"
            >
              <Plus size={16} />
              <span>Add Assignment</span>
            </Button>
            
            <Button 
              onClick={calculateGrade}
              className="calculator-button w-full"
            >
              Calculate Grade
            </Button>
          </div>
          
          {overallGrade !== null && (
            <div className="calculator-result">
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-medium mb-1">Overall Grade</h3>
                  <div className="text-3xl font-bold text-primary">{overallGrade.toFixed(1)}%</div>
                  {letterGrade && (
                    <div className="text-xl font-semibold mt-1">Letter Grade: {letterGrade}</div>
                  )}
                </div>
                
                <Progress 
                  value={overallGrade} 
                  className="h-3"
                />
                
                <div className="flex justify-between text-sm">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>

      <GuidanceSection title="How to Use the Grade Calculator">
        <p>This calculator helps you determine your overall grade by considering the scores and weights of multiple assignments or assessments.</p>
        
        <h4 className="font-medium mt-3 mb-1">Steps to Calculate Your Grade</h4>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Enter a name for each assignment (e.g., "Midterm Exam", "Project")</li>
          <li>Enter your score and the maximum possible score (the "out of" value)</li>
          <li>Enter the weight as a percentage (e.g., 20 for 20% of your total grade)</li>
          <li>Add more assignments as needed using the "Add Assignment" button</li>
          <li>Click "Calculate Grade" to see your overall grade</li>
        </ol>
        
        <h4 className="font-medium mt-3 mb-1">Understanding Weighted Grades</h4>
        <p>When assignments have different weights, their contribution to your final grade is proportional to their weight.</p>
        
        <div className="my-2">
          <p>For each assignment, we calculate:</p>
          <p className="ml-4">Assignment Percentage = (Your Score / Maximum Score) × 100</p>
          <p>Then the weighted score is:</p>
          <p className="ml-4">Weighted Score = Assignment Percentage × Weight</p>
          <p>The overall grade is the sum of all weighted scores divided by the sum of all weights.</p>
        </div>
        
        <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm mt-2">
            <thead>
              <tr className="bg-muted">
                <th className="px-3 py-1 border">Assignment</th>
                <th className="px-3 py-1 border">Score</th>
                <th className="px-3 py-1 border">Out Of</th>
                <th className="px-3 py-1 border">Percentage</th>
                <th className="px-3 py-1 border">Weight</th>
                <th className="px-3 py-1 border">Weighted Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-1 border">Homework</td>
                <td className="px-3 py-1 border">85</td>
                <td className="px-3 py-1 border">100</td>
                <td className="px-3 py-1 border">85%</td>
                <td className="px-3 py-1 border">20%</td>
                <td className="px-3 py-1 border">17.0</td>
              </tr>
              <tr>
                <td className="px-3 py-1 border">Midterm</td>
                <td className="px-3 py-1 border">78</td>
                <td className="px-3 py-1 border">100</td>
                <td className="px-3 py-1 border">78%</td>
                <td className="px-3 py-1 border">30%</td>
                <td className="px-3 py-1 border">23.4</td>
              </tr>
              <tr>
                <td className="px-3 py-1 border">Final Exam</td>
                <td className="px-3 py-1 border">92</td>
                <td className="px-3 py-1 border">100</td>
                <td className="px-3 py-1 border">92%</td>
                <td className="px-3 py-1 border">50%</td>
                <td className="px-3 py-1 border">46.0</td>
              </tr>
              <tr className="bg-muted">
                <td colSpan={4} className="px-3 py-1 border"></td>
                <td className="px-3 py-1 border font-medium">Total: 100%</td>
                <td className="px-3 py-1 border font-medium">86.4%</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mt-3">In this example, the overall grade is 86.4%, typically a B grade.</p>
        
        <h4 className="font-medium mt-3 mb-1">Common Grading Scales</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm mt-2">
            <thead>
              <tr className="bg-muted">
                <th className="px-3 py-1 border">Letter Grade</th>
                <th className="px-3 py-1 border">Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-1 border">A</td><td className="px-3 py-1 border">90-100%</td></tr>
              <tr><td className="px-3 py-1 border">B</td><td className="px-3 py-1 border">80-89%</td></tr>
              <tr><td className="px-3 py-1 border">C</td><td className="px-3 py-1 border">70-79%</td></tr>
              <tr><td className="px-3 py-1 border">D</td><td className="px-3 py-1 border">60-69%</td></tr>
              <tr><td className="px-3 py-1 border">F</td><td className="px-3 py-1 border">0-59%</td></tr>
            </tbody>
          </table>
        </div>
        
        <p className="mt-3 text-xs text-muted-foreground">Note: Grading scales may vary by institution.</p>
      </GuidanceSection>
    </div>
  );
};
