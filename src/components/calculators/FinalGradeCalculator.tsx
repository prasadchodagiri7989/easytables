
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { GuidanceSection } from "@/components/GuidanceSection";

export const FinalGradeCalculator = () => {
  // For "Calculate Final Grade Needed" tab
  const [currentGrade, setCurrentGrade] = useState("");
  const [finalWeight, setFinalWeight] = useState("");
  const [desiredGrade, setDesiredGrade] = useState("");
  const [requiredGrade, setRequiredGrade] = useState<number | null>(null);
  const [isPossible, setIsPossible] = useState<boolean>(true);

  // For "Calculate Final Course Grade" tab
  const [currentGradeForFinal, setCurrentGradeForFinal] = useState("");
  const [finalWeightForFinal, setFinalWeightForFinal] = useState("");
  const [finalExamGrade, setFinalExamGrade] = useState("");
  const [finalCourseGrade, setFinalCourseGrade] = useState<number | null>(null);

  useEffect(() => {
    setRequiredGrade(null);
    setIsPossible(true);
  }, [currentGrade, finalWeight, desiredGrade]);

  useEffect(() => {
    setFinalCourseGrade(null);
  }, [currentGradeForFinal, finalWeightForFinal, finalExamGrade]);

  const calculateRequiredGrade = () => {
    const current = parseFloat(currentGrade);
    const weight = parseFloat(finalWeight) / 100;
    const desired = parseFloat(desiredGrade);

    if (isNaN(current) || isNaN(weight) || isNaN(desired) || weight <= 0 || weight >= 1) {
      return;
    }

    // Formula: (desired - current * (1 - weight)) / weight
    const required = (desired - current * (1 - weight)) / weight;
    setRequiredGrade(required);
    setIsPossible(required <= 100);
  };

  const calculateFinalCourseGrade = () => {
    const current = parseFloat(currentGradeForFinal);
    const weight = parseFloat(finalWeightForFinal) / 100;
    const examGrade = parseFloat(finalExamGrade);

    if (isNaN(current) || isNaN(weight) || isNaN(examGrade) || weight <= 0 || weight >= 1) {
      return;
    }

    // Formula: current * (1 - weight) + examGrade * weight
    const final = current * (1 - weight) + examGrade * weight;
    setFinalCourseGrade(final);
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-header">Final Grade Calculator</h2>
      
      <Tabs defaultValue="needed" className="w-full">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="needed">Calculate Grade Needed</TabsTrigger>
          <TabsTrigger value="final">Calculate Final Grade</TabsTrigger>
        </TabsList>
        
        <TabsContent value="needed" className="animate-fade-in">
          <Card className="p-6 glass-card">
            <div className="space-y-4">
              <div className="form-group">
                <Label htmlFor="current-grade" className="form-label">Current Grade (%)</Label>
                <Input
                  id="current-grade"
                  type="number"
                  value={currentGrade}
                  onChange={(e) => setCurrentGrade(e.target.value)}
                  placeholder="e.g., 85"
                  className="calculator-input"
                />
              </div>
              
              <div className="form-group">
                <Label htmlFor="final-weight" className="form-label">Final Exam Weight (%)</Label>
                <Input
                  id="final-weight"
                  type="number"
                  value={finalWeight}
                  onChange={(e) => setFinalWeight(e.target.value)}
                  placeholder="e.g., 20"
                  className="calculator-input"
                />
                <p className="form-hint">What percentage of your total grade is the final exam worth?</p>
              </div>
              
              <div className="form-group">
                <Label htmlFor="desired-grade" className="form-label">Desired Final Grade (%)</Label>
                <Input
                  id="desired-grade"
                  type="number"
                  value={desiredGrade}
                  onChange={(e) => setDesiredGrade(e.target.value)}
                  placeholder="e.g., 90"
                  className="calculator-input"
                />
              </div>
              
              <Button 
                onClick={calculateRequiredGrade}
                className="calculator-button w-full"
              >
                Calculate Required Grade
              </Button>
              
              {requiredGrade !== null && (
                <div className="calculator-result">
                  <div className="space-y-3">
                    <div className="text-center">
                      <h3 className="text-lg font-medium mb-1">Required Grade on Final</h3>
                      {isPossible ? (
                        <>
                          <div className="text-3xl font-bold text-primary">{requiredGrade.toFixed(1)}%</div>
                          <p className="text-sm mt-1 text-gray-600">
                            You need to score at least {requiredGrade.toFixed(1)}% on your final exam to achieve a {desiredGrade}% in the course.
                          </p>
                        </>
                      ) : (
                        <>
                          <div className="text-xl font-bold text-red-500">Not possible</div>
                          <p className="text-sm mt-1 text-red-500">
                            You would need to score {requiredGrade.toFixed(1)}% on your final exam, which exceeds 100%.
                          </p>
                        </>
                      )}
                    </div>
                    
                    {isPossible && (
                      <>
                        <Progress value={requiredGrade > 100 ? 100 : requiredGrade} className="h-3" />
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>0%</span>
                          <span>50%</span>
                          <span>100%</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="final" className="animate-fade-in">
          <Card className="p-6 glass-card">
            <div className="space-y-4">
              <div className="form-group">
                <Label htmlFor="current-grade-for-final" className="form-label">Current Grade Before Final (%)</Label>
                <Input
                  id="current-grade-for-final"
                  type="number"
                  value={currentGradeForFinal}
                  onChange={(e) => setCurrentGradeForFinal(e.target.value)}
                  placeholder="e.g., 85"
                  className="calculator-input"
                />
              </div>
              
              <div className="form-group">
                <Label htmlFor="final-weight-for-final" className="form-label">Final Exam Weight (%)</Label>
                <Input
                  id="final-weight-for-final"
                  type="number"
                  value={finalWeightForFinal}
                  onChange={(e) => setFinalWeightForFinal(e.target.value)}
                  placeholder="e.g., 20"
                  className="calculator-input"
                />
                <p className="form-hint">What percentage of your total grade is the final exam worth?</p>
              </div>
              
              <div className="form-group">
                <Label htmlFor="final-exam-grade" className="form-label">Your Final Exam Grade (%)</Label>
                <Input
                  id="final-exam-grade"
                  type="number"
                  value={finalExamGrade}
                  onChange={(e) => setFinalExamGrade(e.target.value)}
                  placeholder="e.g., 78"
                  className="calculator-input"
                />
              </div>
              
              <Button 
                onClick={calculateFinalCourseGrade}
                className="calculator-button w-full"
              >
                Calculate Final Course Grade
              </Button>
              
              {finalCourseGrade !== null && (
                <div className="calculator-result">
                  <div className="space-y-3">
                    <div className="text-center">
                      <h3 className="text-lg font-medium mb-1">Final Course Grade</h3>
                      <div className="text-3xl font-bold text-primary">{finalCourseGrade.toFixed(1)}%</div>
                    </div>
                    
                    <Progress value={finalCourseGrade > 100 ? 100 : finalCourseGrade} className="h-3" />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>0%</span>
                      <span>50%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <GuidanceSection title="How to Use the Final Grade Calculator">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-1">Calculate Grade Needed on Final</h4>
            <p>Use this calculator to determine what grade you need on your final exam to achieve your desired course grade.</p>
            
            <p className="mt-2"><strong>Formula:</strong></p>
            <p className="ml-4">Required Final Grade = (Desired Overall Grade - Current Grade × (1 - Final Weight)) / Final Weight</p>
            
            <div className="mt-2 mb-3">
              <p><strong>Example:</strong></p>
              <ul className="list-disc pl-5">
                <li>Current Grade: 85%</li>
                <li>Final Exam Weight: 30% (0.3)</li>
                <li>Desired Grade: 90%</li>
              </ul>
              <p className="mt-1">Required Final Grade = (90 - 85 × (1 - 0.3)) / 0.3</p>
              <p>= (90 - 85 × 0.7) / 0.3</p>
              <p>= (90 - 59.5) / 0.3</p>
              <p>= 30.5 / 0.3</p>
              <p>= 101.7%</p>
              <p className="text-red-500">In this case, the required grade exceeds 100%, so it's not possible to achieve the desired grade.</p>
            </div>
            
            <p><strong>To use the Grade Needed calculator:</strong></p>
            <ol className="list-decimal pl-5">
              <li>Enter your current grade percentage before the final exam</li>
              <li>Enter the weight of the final exam as a percentage (e.g., 20 for 20%)</li>
              <li>Enter your desired final course grade</li>
              <li>Click "Calculate Required Grade"</li>
            </ol>
          </div>
          
          <div>
            <h4 className="font-medium mb-1">Calculate Final Course Grade</h4>
            <p>Use this calculator to find your final course grade after you've taken the final exam.</p>
            
            <p className="mt-2"><strong>Formula:</strong></p>
            <p className="ml-4">Final Course Grade = Current Grade × (1 - Final Weight) + Final Exam Grade × Final Weight</p>
            
            <div className="mt-2 mb-3">
              <p><strong>Example:</strong></p>
              <ul className="list-disc pl-5">
                <li>Current Grade: 85%</li>
                <li>Final Exam Weight: 30% (0.3)</li>
                <li>Final Exam Grade: 92%</li>
              </ul>
              <p className="mt-1">Final Course Grade = 85 × (1 - 0.3) + 92 × 0.3</p>
              <p>= 85 × 0.7 + 92 × 0.3</p>
              <p>= 59.5 + 27.6</p>
              <p>= 87.1%</p>
            </div>
            
            <p><strong>To use the Final Grade calculator:</strong></p>
            <ol className="list-decimal pl-5">
              <li>Enter your current grade percentage before the final exam</li>
              <li>Enter the weight of the final exam as a percentage</li>
              <li>Enter the grade you received on the final exam</li>
              <li>Click "Calculate Final Course Grade"</li>
            </ol>
          </div>
          
          <div>
            <h4 className="font-medium mb-1">Understanding Final Exam Weight</h4>
            <p>The final exam weight represents what percentage of your total course grade comes from the final exam.</p>
            <p>For example, if your syllabus states:</p>
            <ul className="list-disc pl-5 my-1">
              <li>Homework: 20%</li>
              <li>Midterm: 30%</li>
              <li>Final Exam: 50%</li>
            </ul>
            <p>Then your final exam weight would be 50%.</p>
          </div>
          
          <div>
            <h4 className="font-medium">Tips for Using This Calculator</h4>
            <ul className="list-disc pl-5">
              <li>Make sure all percentages are entered correctly (e.g., enter 30 for 30%, not 0.3)</li>
              <li>The final exam weight must be between 1% and 99%</li>
              <li>If the calculator shows that you need more than 100% on the final, consider speaking with your instructor about extra credit opportunities</li>
              <li>Use this calculator early in the semester to set goals for your final exam</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};
