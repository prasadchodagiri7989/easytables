
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, Plus } from "lucide-react";

export const GPACalculator = () => {
  const [courses, setCourses] = useState([
    { name: "Course 1", credits: "3", grade: "A" }
  ]);
  const [gpa, setGPA] = useState<number | null>(null);
  const [totalCredits, setTotalCredits] = useState<number | null>(null);
  const [totalGradePoints, setTotalGradePoints] = useState<number | null>(null);

  const gradeValues: { [key: string]: number } = {
    "A+": 4.0,
    "A": 4.0,
    "A-": 3.7,
    "B+": 3.3,
    "B": 3.0,
    "B-": 2.7,
    "C+": 2.3,
    "C": 2.0,
    "C-": 1.7,
    "D+": 1.3,
    "D": 1.0,
    "D-": 0.7,
    "F": 0.0
  };

  const handleAddCourse = () => {
    setCourses([
      ...courses,
      { name: `Course ${courses.length + 1}`, credits: "3", grade: "A" }
    ]);
  };

  const handleRemoveCourse = (index: number) => {
    if (courses.length === 1) return;
    const newCourses = [...courses];
    newCourses.splice(index, 1);
    setCourses(newCourses);
  };

  const handleCourseChange = (
    index: number,
    field: "name" | "credits" | "grade",
    value: string
  ) => {
    const newCourses = [...courses];
    newCourses[index][field] = value;
    setCourses(newCourses);
  };

  const calculateGPA = () => {
    let totalCredits = 0;
    let totalGradePoints = 0;

    for (const course of courses) {
      const credits = parseFloat(course.credits);
      const gradeValue = gradeValues[course.grade] || 0;

      if (!isNaN(credits) && credits > 0) {
        totalCredits += credits;
        totalGradePoints += credits * gradeValue;
      }
    }

    if (totalCredits === 0) return;

    const calculatedGPA = totalGradePoints / totalCredits;
    setGPA(calculatedGPA);
    setTotalCredits(totalCredits);
    setTotalGradePoints(totalGradePoints);
  };

  const getGPAClass = (gpa: number | null) => {
    if (gpa === null) return "";
    if (gpa >= 3.5) return "text-green-600";
    if (gpa >= 3.0) return "text-green-500";
    if (gpa >= 2.0) return "text-yellow-600";
    return "text-red-500";
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-header">GPA Calculator</h2>
      
      <Card className="p-6 glass-card">
        <div className="space-y-6">
          <div className="space-y-4">
            {courses.map((course, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg bg-white/50">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex-1">
                    <Input
                      value={course.name}
                      onChange={(e) => 
                        handleCourseChange(index, "name", e.target.value)
                      }
                      placeholder="Course name"
                      className="calculator-input font-medium"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleRemoveCourse(index)}
                    disabled={courses.length === 1}
                    className="ml-2"
                  >
                    <X size={16} />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label className="form-label">Credits</Label>
                    <Input
                      type="number"
                      value={course.credits}
                      onChange={(e) => 
                        handleCourseChange(index, "credits", e.target.value)
                      }
                      placeholder="3"
                      className="calculator-input"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <Label className="form-label">Grade</Label>
                    <Select
                      value={course.grade}
                      onValueChange={(value) => 
                        handleCourseChange(index, "grade", value)
                      }
                    >
                      <SelectTrigger className="calculator-input">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A">A</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B">B</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="C+">C+</SelectItem>
                        <SelectItem value="C">C</SelectItem>
                        <SelectItem value="C-">C-</SelectItem>
                        <SelectItem value="D+">D+</SelectItem>
                        <SelectItem value="D">D</SelectItem>
                        <SelectItem value="D-">D-</SelectItem>
                        <SelectItem value="F">F</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {course.credits && course.grade && (
                  <div className="mt-3 text-sm text-gray-600">
                    Grade Points: {(parseFloat(course.credits) * (gradeValues[course.grade] || 0)).toFixed(1)}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleAddCourse}
              className="flex items-center gap-2 w-full"
            >
              <Plus size={16} />
              <span>Add Course</span>
            </Button>
            
            <Button 
              onClick={calculateGPA}
              className="calculator-button w-full"
            >
              Calculate GPA
            </Button>
          </div>
          
          {gpa !== null && (
            <div className="calculator-result">
              <div className="space-y-3">
                <div className="text-center">
                  <h3 className="text-lg font-medium mb-1">Your GPA</h3>
                  <div className={`text-4xl font-bold ${getGPAClass(gpa)}`}>
                    {gpa.toFixed(2)}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Total Credits</div>
                    <div className="text-lg font-semibold">{totalCredits}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Total Grade Points</div>
                    <div className="text-lg font-semibold">{totalGradePoints?.toFixed(1)}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
