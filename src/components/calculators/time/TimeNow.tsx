import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { useLocation } from "react-router-dom";
import moment from "moment-timezone";
import { Link } from "react-router-dom";

interface TimeZoneInfo {
  name: string;
  timezone: string;
  abbreviation: string;
}

const TimeNow: React.FC = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const timeZones: TimeZoneInfo[] = [
    { name: "Alaska", timezone: "America/Anchorage", abbreviation: "AKDT" },
    { name: "Bangkok", timezone: "Asia/Bangkok", abbreviation: "ICT" },
    { name: "Beijing", timezone: "Asia/Shanghai", abbreviation: "CST" },
    { name: "BST", timezone: "Europe/London", abbreviation: "BST" },
    { name: "California", timezone: "America/Los_Angeles", abbreviation: "PDT" },
    { name: "Central", timezone: "America/Chicago", abbreviation: "CDT" },
    { name: "Chicago", timezone: "America/Chicago", abbreviation: "CDT" },
    { name: "China", timezone: "Asia/Shanghai", abbreviation: "CST" },
    { name: "Eastern", timezone: "America/New_York", abbreviation: "EDT" },
    { name: "EDT", timezone: "America/New_York", abbreviation: "EDT" },
    { name: "GMT", timezone: "GMT", abbreviation: "GMT" },
    { name: "Hawaii", timezone: "Pacific/Honolulu", abbreviation: "HST" },
    { name: "Hong Kong", timezone: "Asia/Hong_Kong", abbreviation: "HKT" },
    { name: "Houston", timezone: "America/Chicago", abbreviation: "CDT" },
    { name: "India", timezone: "Asia/Kolkata", abbreviation: "IST" },
    { name: "IST", timezone: "Asia/Kolkata", abbreviation: "IST" },
    { name: "Japan", timezone: "Asia/Tokyo", abbreviation: "JST" },
    { name: "Los Angeles", timezone: "America/Los_Angeles", abbreviation: "PDT" },
    { name: "Mountain", timezone: "America/Denver", abbreviation: "MDT" },
    { name: "Mumbai", timezone: "Asia/Kolkata", abbreviation: "IST" },
    { name: "Nepal", timezone: "Asia/Kathmandu", abbreviation: "NPT" },
    { name: "New Delhi", timezone: "Asia/Kolkata", abbreviation: "IST" },
    { name: "New York", timezone: "America/New_York", abbreviation: "EDT" },
    { name: "Pakistan", timezone: "Asia/Karachi", abbreviation: "PKT" },
    { name: "Philippines", timezone: "Asia/Manila", abbreviation: "PHT" },
    { name: "Phoenix", timezone: "America/Phoenix", abbreviation: "MST" },
    { name: "Pacific", timezone: "America/Los_Angeles", abbreviation: "PDT" },
    { name: "PDT", timezone: "America/Los_Angeles", abbreviation: "PDT" },
    { name: "Seoul", timezone: "Asia/Seoul", abbreviation: "KST" },
    { name: "Singapore", timezone: "Asia/Singapore", abbreviation: "SST" },
    { name: "South Korea", timezone: "Asia/Seoul", abbreviation: "KST" },
    { name: "Taiwan", timezone: "Asia/Taipei", abbreviation: "CST" },
    { name: "Thailand", timezone: "Asia/Bangkok", abbreviation: "ICT" },
    { name: "Tokyo", timezone: "Asia/Tokyo", abbreviation: "JST" },
    { name: "United Kingdom", timezone: "Europe/London", abbreviation: "BST" },
    { name: "USA", timezone: "America/New_York", abbreviation: "EDT" },
    { name: "UTC", timezone: "UTC", abbreviation: "UTC" },
  ];

  const [currentTimes, setCurrentTimes] = useState<any[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Get city names from query parameters
      const cities = queryParams.getAll("city");

      // Normalize the cities to lowercase for case-insensitive comparison
      const normalizedCities = cities.map((city) => city.toLowerCase());

      // Filter the time zones based on the cities in the query params, ignoring case sensitivity
      const filteredTimeZones = timeZones.filter((zone) =>
        normalizedCities.includes(zone.name.toLowerCase())
      );


      const times = filteredTimeZones.map((zone) => {
        const time = moment.tz(zone.timezone).format("HH:mm:ss");
        const fullDate = moment.tz(zone.timezone).format("dddd, MMMM Do, YYYY");
        const offset = moment.tz(zone.timezone).format("Z");
        return {
          ...zone,
          time,
          fullDate,
          offset,
        };
      });

      setCurrentTimes(times);
    }, 1000);

    return () => clearInterval(interval);
  }, [queryParams]);

  return (
    <>
                <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/all-calculators">All Calculators</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/time/all">Time Calculators</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current Times for Requested Locations</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="w-full max-w-4xl mx-auto">
        <Card className="w-full max-w-lg mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Current Times for Requested Locations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {currentTimes.length > 0 ? (
              currentTimes.map((zone, index) => (
                <div key={index} className="space-y-4">
                  <div className="text-xl font-semibold">{zone.name} time ({zone.offset})</div>
                  <div className="text-lg">{zone.time}</div>
                  <div className="text-sm text-muted">{zone.fullDate}</div>
                  <div className="space-y-2">
                    <Label>Time Zone Abbreviation</Label>
                    <div>{zone.abbreviation}</div>
                  </div>
                  <div className="space-y-2">
                    <Label>Time Zone Name</Label>
                    <div>{zone.timezone}</div>
                  </div>
                  <div className="space-y-2">
                    <Label>Observe DST</Label>
                    <div>{zone.offset.includes("+") ? "No" : "Yes"}</div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Refresh
                  </Button>
                </div>
              ))
            ) : (
              <p>No cities requested. Please add `city` query parameters in the URL.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default TimeNow;
