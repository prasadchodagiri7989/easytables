import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GuidanceSection } from "@/components/GuidanceSection";

const BirthdayCalculator: React.FC = () => {
  const [birthDate, setBirthDate] = useState<string>("");
  const [nextBirthday, setNextBirthday] = useState<string>("");
  const [daysUntilNextBirthday, setDaysUntilNextBirthday] = useState<number | null>(null);

  const calculateNextBirthday = (birthDate: string) => {
    const birth = new Date(birthDate);
    const today = new Date();
    let nextBirthday = new Date(birth);

    // Set the next birthday year
    nextBirthday.setFullYear(today.getFullYear());

    // If the birthday has already passed this year, calculate the next year's birthday
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const daysUntil = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 3600 * 24));
    return { nextBirthday, daysUntil };
  };

  const handleCalculateNextBirthday = () => {
    if (!birthDate) {
      setNextBirthday("");
      setDaysUntilNextBirthday(null);
      return;
    }

    const { nextBirthday, daysUntil } = calculateNextBirthday(birthDate);

    // Format next birthday as "Month Day, Year"
    const formattedNextBirthday = nextBirthday.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    setNextBirthday(formattedNextBirthday);
    setDaysUntilNextBirthday(daysUntil);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Birthday Calculator</CardTitle>
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

          <Button onClick={handleCalculateNextBirthday}>Calculate Next Birthday</Button>

          {nextBirthday && (
            <div className="mt-4 p-4 rounded-md bg-muted">
              <p className="text-sm font-medium mb-1">Next Birthday:</p>
              <p className="text-lg font-bold">{nextBirthday}</p>
              {daysUntilNextBirthday !== null && (
                <p className="text-sm font-medium mt-2">Days until next birthday: {daysUntilNextBirthday} days</p>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <GuidanceSection title="How to Use the Birthday Calculator">
        <p>To calculate your next birthday:</p>
        <ol className="list-decimal pl-5 my-2">
          <li>Select your birthdate from the date input field.</li>
          <li>Click "Calculate Next Birthday" to see your next birthday date and the number of days remaining.</li>
        </ol>
      </GuidanceSection>
    </div>
  );
};

export default BirthdayCalculator;
