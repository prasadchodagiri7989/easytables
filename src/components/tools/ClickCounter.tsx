
import React, { useState } from "react";
import { MousePointer, RotateCcw, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const { toast } = useToast();

  const handleClick = () => {
    if (!isActive && count === 0) {
      // Start the timer on first click
      const now = Date.now();
      setStartTime(now);
      setIsActive(true);
      
      // Update elapsed time every 100ms
      const id = window.setInterval(() => {
        setElapsedTime(Date.now() - now);
      }, 100);
      
      setIntervalId(id);
    }
    
    setCount(count + 1);
  };

  const handleReset = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    
    setCount(0);
    setStartTime(null);
    setElapsedTime(0);
    setIsActive(false);
    setIntervalId(null);
    
    toast({
      title: "Counter reset",
      description: "The click counter has been reset to 0",
    });
  };

  // Format elapsed time in seconds
  const formatTime = (ms: number) => {
    const seconds = ms / 1000;
    return seconds.toFixed(1);
  };
  
  // Calculate clicks per second
  const cps = isActive && elapsedTime > 0 
    ? (count / (elapsedTime / 1000)).toFixed(1) 
    : "0.0";

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-md">
        <CardHeader className="bg-primary/5">
          <div className="flex items-center">
            <MousePointer className="mr-2 text-primary" size={24} />
            <CardTitle>Click Counter</CardTitle>
          </div>
          <CardDescription>
            Count your clicks and measure your clicking speed
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 pb-4">
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="text-7xl font-bold">{count}</div>
            
            <Button 
              size="lg" 
              className="w-48 h-48 rounded-full text-xl"
              onClick={handleClick}
            >
              CLICK
            </Button>
            
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              <div className="bg-muted/30 p-4 rounded-md text-center">
                <div className="text-sm text-muted-foreground mb-1">
                  <Clock size={16} className="inline-block mr-1" />
                  Time
                </div>
                <div className="text-xl font-semibold">
                  {formatTime(elapsedTime)}s
                </div>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-md text-center">
                <div className="text-sm text-muted-foreground mb-1">
                  <MousePointer size={16} className="inline-block mr-1" />
                  CPS
                </div>
                <div className="text-xl font-semibold">
                  {cps}
                </div>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              onClick={handleReset}
              className="flex items-center gap-2"
            >
              <RotateCcw size={16} />
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
