import { Link } from "react-router-dom";

const timeDateTools = [
    { label: "Date Calculator", path: "/tools/date-calculator" },
    { label: "Time Calculator", path: "/tools/time-calculator" },
    { label: "Age Calculator", path: "/tools/age-calculator" },
    { label: "Birthday Calculator", path: "/tools/birthday-calculator" },
    { label: "Alaska Time Now", path: "/tools/time-now?city=alaska" },
    { label: "Bangkok Time Now", path: "/tools/time-now?city=bangkok" },
    { label: "Beijing Time Now", path: "/tools/time-now?city=beijing" },
    { label: "BST Time Now", path: "/tools/time-now?city=bst" },
    { label: "California Time Now", path: "/tools/time-now?city=california" },
    { label: "Central Time Now", path: "/tools/time-now?city=central" },
    { label: "Chicago Time Now", path: "/tools/time-now?city=chicago" },
    { label: "China Time Now", path: "/tools/time-now?city=china" },
    { label: "Eastern Time Now", path: "/tools/time-now?city=eastern" },
    { label: "EDT Time Now", path: "/tools/time-now?city=edt" },
    { label: "GMT Time Now", path: "/tools/time-now?city=gmt" },
    { label: "Hawaii Time Now", path: "/tools/time-now?city=hawaii" },
    { label: "Hong Kong Time Now", path: "/tools/time-now?city=hongkong" },
    { label: "Houston Time Now", path: "/tools/time-now?city=houston" },
    { label: "India Time Now", path: "/tools/time-now?city=india" },
    { label: "IST Time Now", path: "/tools/time-now?city=ist" },
    { label: "Japan Time Now", path: "/tools/time-now?city=japan" },
    { label: "Los Angeles Time Now", path: "/tools/time-now?city=losangeles" },
    { label: "Mountain Time Now", path: "/tools/time-now?city=mountain" },
    { label: "Mumbai Time Now", path: "/tools/time-now?city=mumbai" },
    { label: "Nepal Time Now", path: "/tools/time-now?city=nepal" },
    { label: "New Delhi Time Now", path: "/tools/time-now?city=newdelhi" },
    { label: "New York Time Now", path: "/tools/time-now?city=newyork" },
    { label: "Pakistan Time Now", path: "/tools/time-now?city=pakistan" },
    { label: "Philippines Time Now", path: "/tools/time-now?city=philippines" },
    { label: "Phoenix Time Now", path: "/tools/time-now?city=phoenix" },
    { label: "Pacific Time Now", path: "/tools/time-now?city=pacific" },
    { label: "PDT Time Now", path: "/tools/time-now?city=pdt" },
    { label: "Seoul Time Now", path: "/tools/time-now?city=seoul" },
    { label: "Singapore Time Now", path: "/tools/time-now?city=singapore" },
    { label: "South Korea Time Now", path: "/tools/time-now?city=southkorea" },
    { label: "Taiwan Time Now", path: "/tools/time-now?city=taiwan" },
    { label: "Thailand Time Now", path: "/tools/time-now?city=thailand" },
    { label: "Tokyo Time Now", path: "/tools/time-now?city=tokyo" },
    { label: "United Kingdom Time Now", path: "/tools/time-now?city=uk" },
    { label: "USA Time Now", path: "/tools/time-now?city=usa" },
    { label: "UTC Time Now", path: "/tools/time-now?city=utc" },
    { label: "DST - When Do the Clocks Change", path: "/tools/dst-change" },
    { label: "DST - When Do the Clocks Go Back", path: "/tools/dst-back" },
    { label: "DST - When Do the Clocks Go Forward", path: "/tools/dst-forward" },
    { label: "How Many Days Are in a Year", path: "/tools/days-in-year" },
    { label: "How Many Hours Are in a Week", path: "/tools/hours-in-week" },
    { label: "How Many Hours Are in a Year", path: "/tools/hours-in-year" },
    { label: "How Many Seconds Are in a Day", path: "/tools/seconds-in-day" },
    { label: "How Many Seconds Are in an Hour", path: "/tools/seconds-in-hour" },
    { label: "How Many Seconds Are in a Year", path: "/tools/seconds-in-year" },
    { label: "How Many Weeks Are in a Month", path: "/tools/weeks-in-month" },
    { label: "How Many Weeks Are in a Year", path: "/tools/weeks-in-year" },
    { label: "Months of the Year", path: "/tools/months-of-year" },
    { label: "Alarm Clock", path: "/alarm-clock" },
    { label: "Calendar", path: "/calendar" },
    { label: "Countdown Timer", path: "/countdown" },
    { label: "Current Time", path: "/tools/current-time" },
    { label: "Stopwatch", path: "/stopwatch" },
    { label: "Today's Date", path: "/tools/todays-date" },
  ];
  
  

export default function TimeDateTools() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Time & Date Calculators & Tools</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {timeDateTools.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className="block bg-white hover:bg-gray-100 p-4 rounded-xl shadow-md transition duration-200 dark:bg-transparent border"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}