import React, { useState, useEffect } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  import { Link } from "react-router-dom";

const WorldClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");
  const [locale, setLocale] = useState<string>("en-IN");
  const [worldTimes, setWorldTimes] = useState<any[]>([]);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString(locale, { hour12: true }));
      setCurrentDate(now.toLocaleDateString(locale, { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
      setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);

      const worldCities = [
        { name: "Los Angeles", offset: -7 },
        { name: "Chicago", offset: -5 },
        { name: "New York", offset: -4 },
        { name: "London", offset: 1 },
        { name: "Paris", offset: 2 },
        { name: "Tokyo", offset: 9 },
        { name: "Sydney", offset: 10 },
      ];

      setWorldTimes(
        worldCities.map((city) => {
          const cityTime = new Date(now.getTime() + city.offset * 60 * 60 * 1000);
          return { name: city.name, time: cityTime.toLocaleTimeString(locale, { hour12: true }) };
        })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, [locale]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(event.target.value);
    setCurrentDate(selectedDate.toLocaleDateString(locale, { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
  };

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
            <BreadcrumbPage>World Clock & Current Time</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    <div className="container mx-auto p-6">
      <h2 className="text-center text-3xl font-semibold mb-4">World Clock & Current Time</h2>

      <div className="text-center mb-4">
        <p className="text-xl">Local Time: {currentTime}</p>
        <p className="text-lg">{currentDate}</p>
        <p className="text-md">Time Zone: {timezone} (GMT+5.5)</p>
      </div>

      <div className="flex justify-center space-x-6 mb-4">
        {worldTimes.map((worldTime, index) => (
          <div key={index} className="text-center">
            <h4 className="font-semibold">{worldTime.name}</h4>
            <p>{worldTime.time}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-4">
        <input
          type="date"
          className="border p-2 rounded"
          value={currentDate}
          onChange={handleDateChange}
        />
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h4 className="text-center text-xl font-semibold">Calendar Chart</h4>
        <div className="flex justify-center space-x-2 mt-4">
          <button className="bg-blue-500 text-white p-2 rounded">S</button>
          <button className="bg-blue-500 text-white p-2 rounded">M</button>
          <button className="bg-blue-500 text-white p-2 rounded">T</button>
          <button className="bg-blue-500 text-white p-2 rounded">W</button>
          <button className="bg-blue-500 text-white p-2 rounded">T</button>
          <button className="bg-blue-500 text-white p-2 rounded">F</button>
          <button className="bg-blue-500 text-white p-2 rounded">S</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default WorldClock;
