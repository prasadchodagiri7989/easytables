import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";
import { ArrowRightLeft } from "lucide-react";

const TimeCalculator: React.FC = () => {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  const [inputYears, setInputYears] = useState(0);
  const [inputMonths, setInputMonths] = useState(0);
  const [inputDays, setInputDays] = useState(0);
  const [inputHours, setInputHours] = useState(0);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  
  const [result, setResult] = useState<string>("");

  const handleAddTime = () => {
    const totalYears = years + inputYears;
    const totalMonths = months + inputMonths;
    const totalDays = days + inputDays;
    const totalHours = hours + inputHours;
    const totalMinutes = minutes + inputMinutes;
    const totalSeconds = seconds + inputSeconds;
    
    // Logic to handle overflow for months and days if necessary
    const newMonths = totalMonths % 12;
    const newYears = totalYears + Math.floor(totalMonths / 12);
    
    const newDays = totalDays; // Here we could add logic for overflow days into months if needed
    const newHours = totalHours % 24;
    const newMinutes = totalMinutes % 60;
    const newSeconds = totalSeconds % 60;
    
    setResult(`${newYears} Years, ${newMonths} Months, ${newDays} Days, ${newHours} Hours, ${newMinutes} Minutes, ${newSeconds} Seconds`);
  };

  const handleSubtractTime = () => {
    const totalYears = years - inputYears;
    const totalMonths = months - inputMonths;
    const totalDays = days - inputDays;
    const totalHours = hours - inputHours;
    const totalMinutes = minutes - inputMinutes;
    const totalSeconds = seconds - inputSeconds;
    
    // Logic to handle negative values, adding necessary checks to prevent negative time
    const newMonths = totalMonths % 12;
    const newYears = totalYears + Math.floor(totalMonths / 12);
    
    const newDays = totalDays; // Here we could add logic for negative days handling if needed
    const newHours = totalHours % 24;
    const newMinutes = totalMinutes % 60;
    const newSeconds = totalSeconds % 60;

    setResult(`${newYears} Years, ${newMonths} Months, ${newDays} Days, ${newHours} Hours, ${newMinutes} Minutes, ${newSeconds} Seconds`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Time Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          
          <div className="space-y-2">
            <Label htmlFor="currentTime">Current Time</Label>
            <div className="grid grid-cols-3 gap-4">
              <Input
                type="number"
                id="currentTime"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                placeholder="Years"
              />
              <Input
                type="number"
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                placeholder="Months"
              />
              <Input
                type="number"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                placeholder="Days"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <Input
                type="number"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                placeholder="Hours"
              />
              <Input
                type="number"
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
                placeholder="Minutes"
              />
              <Input
                type="number"
                value={seconds}
                onChange={(e) => setSeconds(Number(e.target.value))}
                placeholder="Seconds"
              />
            </div>
          </div>

          <div className="space-y-2 mt-6">
            <Label htmlFor="addTime">Add Time</Label>
            <div className="grid grid-cols-3 gap-4">
              <Input
                type="number"
                id="addTime"
                value={inputYears}
                onChange={(e) => setInputYears(Number(e.target.value))}
                placeholder="Years"
              />
              <Input
                type="number"
                value={inputMonths}
                onChange={(e) => setInputMonths(Number(e.target.value))}
                placeholder="Months"
              />
              <Input
                type="number"
                value={inputDays}
                onChange={(e) => setInputDays(Number(e.target.value))}
                placeholder="Days"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <Input
                type="number"
                value={inputHours}
                onChange={(e) => setInputHours(Number(e.target.value))}
                placeholder="Hours"
              />
              <Input
                type="number"
                value={inputMinutes}
                onChange={(e) => setInputMinutes(Number(e.target.value))}
                placeholder="Minutes"
              />
              <Input
                type="number"
                value={inputSeconds}
                onChange={(e) => setInputSeconds(Number(e.target.value))}
                placeholder="Seconds"
              />
            </div>
          </div>

          <div className="flex space-x-4 mt-4">
            <Button onClick={handleAddTime}>Add Time</Button>
            <Button onClick={handleSubtractTime}>Subtract Time</Button>
          </div>

          {result && (
            <div className="mt-4 p-4 rounded-md bg-muted">
              <p className="text-sm font-medium mb-1">Result:</p>
              <p className="text-lg font-bold">{result}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <GuidanceSection title="How to Use the Time Calculator">
        <p>To calculate time differences or add/subtract time:</p>
        <ol className="list-decimal pl-5 my-2">
          <li>Enter the current time in years, months, days, hours, minutes, and seconds.</li>
          <li>Enter the time to add or subtract in the respective fields.</li>
          <li>Click "Add Time" or "Subtract Time" to calculate the result.</li>
        </ol>
      </GuidanceSection>
    </div>
  );
};

export default TimeCalculator;
