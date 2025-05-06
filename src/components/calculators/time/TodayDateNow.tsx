import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const  TodayDateNow: React.FC = () => {
  const [now, setNow] = useState(new Date());
  const [locale, setLocale] = useState("en-IN");

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(event.target.value);
  };

  const formatDate = (date: Date) =>
    date.toLocaleDateString(locale, { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  const formatTime = (date: Date) =>
    date.toLocaleTimeString(locale, { hour: "numeric", minute: "numeric", second: "numeric", hour12: true });

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

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
            <BreadcrumbPage>Today's Date Now</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    <div className="container mx-auto p-6">
      

      <h1 className="text-3xl font-bold mb-4">Today's Date Now</h1>

      <div className="flex flex-col items-center space-y-2 mb-6 ">
        <select
          value={locale}
          onChange={handleLocaleChange}
          className="border rounded p-2 text-sm dark:text-black"
        >
          <option value="en-IN">English (India)</option>
          <option value="en-US">English (US)</option>
          <option value="en-GB">English (UK)</option>
          <option value="fr-FR">French (France)</option>
          <option value="de-DE">German (Germany)</option>
          {/* Add more locales if needed */}
        </select>

        <div className="text-xl">{formatDate(now)}</div>
        <div className="text-2xl">{formatTime(now)}</div>
        <div className="text-md">{timezone} (GMT+5.5)</div>
      </div>

      <div className="flex justify-center mb-6 dark:text-black">
        <input
          type="date"
          value={now.toISOString().substring(0, 10)}
          className="border p-2 rounded"
          readOnly
        />
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-center text-xl font-semibold mb-2 dark:text-black">Calendar Chart</h2>

        <div className="grid grid-cols-7 gap-2 text-center font-medium dark:text-black">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center mt-2">
          {[...Array(30)].map((_, index) => (
            <div
              key={index}
              className={`p-2 rounded ${
                index + 1 === now.getDate() ? "bg-blue-500 text-white" : "bg-gray-100 dark:text-black"
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default TodayDateNow;
