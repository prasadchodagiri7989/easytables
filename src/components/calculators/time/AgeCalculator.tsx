import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GuidanceSection } from "@/components/GuidanceSection";

const AgeCalculator: React.FC = () => {
  const [birthDate, setBirthDate] = useState<string>("");
  const [age, setAge] = useState<string>("");

  const calculateAge = (birthDate: string) => {
    const birth = new Date(birthDate);
    const today = new Date();

    let ageInYears = today.getFullYear() - birth.getFullYear();
    const ageInMonths = today.getMonth() - birth.getMonth();
    const ageInDays = today.getDate() - birth.getDate();

    // Adjust age if birth month/day hasn't occurred yet this year
    if (ageInMonths < 0 || (ageInMonths === 0 && ageInDays < 0)) {
      ageInYears--;
    }

    const ageInMonthsFinal = today.getMonth() - birth.getMonth();
    const ageInDaysFinal = today.getDate() - birth.getDate();

    return { years: ageInYears, months: ageInMonthsFinal, days: ageInDaysFinal };
  };

  const handleCalculateAge = () => {
    if (!birthDate) {
      setAge("Please select a valid birthdate.");
      return;
    }

    const { years, months, days } = calculateAge(birthDate);
    setAge(`${years} years, ${months} months, ${days} days`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Age Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium">Select Your Birthdate</label>
              <Input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full mt-2 p-2 border rounded-md"
              />
            </div>
          </div>

          <Button onClick={handleCalculateAge}>Calculate Age</Button>

          {age && (
            <div className="mt-4 p-4 rounded-md bg-muted">
              <p className="text-sm font-medium mb-1">Your Age:</p>
              <p className="text-lg font-bold">{age}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <GuidanceSection title="How to Use the Age Calculator">
        <p>To calculate your age:</p>
        <ol className="list-decimal pl-5 my-2">
          <li>Select your birthdate from the date input field.</li>
          <li>Click "Calculate Age" to see your age in years, months, and days.</li>
        </ol>
      </GuidanceSection>
    </div>
  );
};

export default AgeCalculator;
