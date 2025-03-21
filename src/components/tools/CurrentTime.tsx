
import React, { useState, useEffect } from "react";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    // Clean up on component unmount
    return () => clearInterval(timer);
  }, []);
  
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString(undefined, options);
  };
  
  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true
    };
    return date.toLocaleTimeString(undefined, options);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-md">
        <CardHeader className="bg-primary/5">
          <div className="flex items-center">
            <Clock className="mr-2 text-primary" size={24} />
            <CardTitle>Current Time</CardTitle>
          </div>
          <CardDescription>
            The current local date and time
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 pb-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center text-6xl font-bold tracking-tighter text-center">
              {formatTime(currentTime)}
            </div>
            <Separator />
            <div className="flex items-center text-xl">
              <CalendarIcon className="mr-2 text-muted-foreground" size={20} />
              {formatDate(currentTime)}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
