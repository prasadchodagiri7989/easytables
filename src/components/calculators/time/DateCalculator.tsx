import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GuidanceSection } from "@/components/GuidanceSection";

const DateCalculator: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [result, setResult] = useState<string>("");

  const handleCalculateDays = () => {
    if (!startDate || !endDate) {
      setResult("Please select both dates.");
      return;
    }
    
    const timeDiff = Math.abs((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
    setResult(`${timeDiff} days`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Date Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium">Select Start Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                dateFormat="MMMM d, yyyy"
                className="w-full mt-2 p-2 border rounded-md"
                placeholderText="Select start date"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Select End Date</label>
              <DatePicker
                selected={endDate}
                onChange={(date: Date) => setEndDate(date)}
                dateFormat="MMMM d, yyyy"
                className="w-full mt-2 p-2 border rounded-md"
                placeholderText="Select end date"
              />
            </div>
          </div>

          <Button onClick={handleCalculateDays}>Calculate Days</Button>

          {result && (
            <div className="mt-4 p-4 rounded-md bg-muted">
              <p className="text-sm font-medium mb-1">Result:</p>
              <p className="text-lg font-bold">{result}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <GuidanceSection title="How to Use the Date Calculator">
        <p>To calculate the difference between two dates:</p>
        <ol className="list-decimal pl-5 my-2">
          <li>Click on the "Start Date" and "End Date" fields to select the dates.</li>
          <li>Click "Calculate Days" to get the difference in days between the two dates.</li>
        </ol>
      </GuidanceSection>
    </div>
  );
};

export default DateCalculator;
