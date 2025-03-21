
import React, { useState } from "react";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarUI } from "@/components/ui/calendar";

export const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [month, setMonth] = useState(new Date());

  const handlePrevMonth = () => {
    const prevMonth = new Date(month);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setMonth(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(month);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setMonth(nextMonth);
  };

  const handleToday = () => {
    setMonth(new Date());
    setDate(new Date());
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-md">
        <CardHeader className="bg-primary/5">
          <div className="flex items-center">
            <CalendarIcon className="mr-2 text-primary" size={24} />
            <CardTitle>Calendar</CardTitle>
          </div>
          <CardDescription>
            View and interact with a calendar
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 pb-4">
          <div className="flex justify-between items-center mb-4">
            <Button variant="outline" size="sm" onClick={handlePrevMonth}>
              <ChevronLeft size={16} />
            </Button>
            <h2 className="text-xl font-semibold">
              {month.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </h2>
            <Button variant="outline" size="sm" onClick={handleNextMonth}>
              <ChevronRight size={16} />
            </Button>
          </div>
          
          <div className="flex justify-center">
            <CalendarUI
              mode="single"
              selected={date}
              onSelect={setDate}
              month={month}
              onMonthChange={setMonth}
              className="border rounded-md p-3"
            />
          </div>
          
          <div className="mt-4 flex justify-center">
            <Button variant="outline" onClick={handleToday}>
              Today
            </Button>
          </div>
          
          {date && (
            <div className="mt-4 p-4 bg-muted/30 rounded-md">
              <p className="text-center">
                Selected date: <span className="font-medium">{date.toLocaleDateString('en-US', { 
                  weekday: 'long',
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric'
                })}</span>
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
