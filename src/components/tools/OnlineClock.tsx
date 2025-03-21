
import React, { useState, useEffect } from "react";
import { Clock, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface ClockSettings {
  showSeconds: boolean;
  hour12: boolean;
  showDate: boolean;
  timezone: string;
}

export const OnlineClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [settings, setSettings] = useState<ClockSettings>({
    showSeconds: true,
    hour12: true,
    showDate: true,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });
  const [availableTimezones, setAvailableTimezones] = useState<string[]>([]);
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    // Clean up on component unmount
    return () => clearInterval(timer);
  }, []);
  
  // Get list of available timezones
  useEffect(() => {
    // Use Intl API to get timezones if available
    if (typeof Intl !== 'undefined' && Intl.supportedValuesOf) {
      try {
        const timezones = Intl.supportedValuesOf('timeZone');
        setAvailableTimezones(timezones);
      } catch (error) {
        console.error('Error getting timezones:', error);
        // Fallback to common timezones
        setAvailableTimezones([
          'America/New_York',
          'America/Chicago', 
          'America/Denver',
          'America/Los_Angeles',
          'Europe/London',
          'Europe/Paris',
          'Asia/Tokyo',
          'Australia/Sydney',
          'Pacific/Auckland',
        ]);
      }
    } else {
      // Fallback to common timezones
      setAvailableTimezones([
        'America/New_York',
        'America/Chicago', 
        'America/Denver',
        'America/Los_Angeles',
        'Europe/London',
        'Europe/Paris',
        'Asia/Tokyo',
        'Australia/Sydney',
        'Pacific/Auckland',
      ]);
    }
  }, []);
  
  const formatTime = (date: Date) => {
    try {
      const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: settings.showSeconds ? 'numeric' : undefined,
        hour12: settings.hour12,
        timeZone: settings.timezone,
      };
      
      return date.toLocaleTimeString(undefined, options);
    } catch (error) {
      console.error('Error formatting time:', error);
      return date.toLocaleTimeString();
    }
  };
  
  const formatDate = (date: Date) => {
    try {
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: settings.timezone,
      };
      
      return date.toLocaleDateString(undefined, options);
    } catch (error) {
      console.error('Error formatting date:', error);
      return date.toLocaleDateString();
    }
  };
  
  const handleTimezoneChange = (value: string) => {
    setSettings({
      ...settings,
      timezone: value,
    });
  };
  
  const toggleSetting = (setting: keyof ClockSettings) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting],
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-md">
        <CardHeader className="bg-primary/5">
          <div className="flex items-center">
            <Clock className="mr-2 text-primary" size={24} />
            <CardTitle>Online Clock</CardTitle>
          </div>
          <CardDescription>
            View the current time in different formats and timezones
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 pb-4">
          <Tabs defaultValue="clock">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="clock">Clock</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="clock" className="pt-4">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="text-7xl font-bold tracking-tighter text-center">
                  {formatTime(currentTime)}
                </div>
                
                {settings.showDate && (
                  <div className="text-xl">
                    {formatDate(currentTime)}
                  </div>
                )}
                
                <div className="text-sm text-muted-foreground">
                  Timezone: {settings.timezone.replace(/_/g, ' ')}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select value={settings.timezone} onValueChange={handleTimezoneChange}>
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableTimezones.map((timezone) => (
                      <SelectItem key={timezone} value={timezone}>
                        {timezone.replace(/_/g, ' ')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-seconds">Show seconds</Label>
                  <Switch
                    id="show-seconds"
                    checked={settings.showSeconds}
                    onCheckedChange={() => toggleSetting('showSeconds')}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="12-hour">12-hour format</Label>
                  <Switch
                    id="12-hour"
                    checked={settings.hour12}
                    onCheckedChange={() => toggleSetting('hour12')}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-date">Show date</Label>
                  <Switch
                    id="show-date"
                    checked={settings.showDate}
                    onCheckedChange={() => toggleSetting('showDate')}
                  />
                </div>
              </div>
              
              <Button
                variant="outline"
                className="w-full mt-4"
                onClick={() => {
                  setSettings({
                    showSeconds: true,
                    hour12: true,
                    showDate: true,
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                  });
                }}
              >
                Reset to Default Settings
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
