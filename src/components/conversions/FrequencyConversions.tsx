import { Link } from "react-router-dom";

const frequencyConversions = [
  { label: "Hertz to Kilohertz", path: "/convertor/frequency?from=hz&to=khz" },
  { label: "Hertz to Megahertz", path: "/convertor/frequency?from=hz&to=mhz" },
  { label: "Hertz to Gigahertz", path: "/convertor/frequency?from=hz&to=ghz" },
  { label: "Hertz to Terahertz", path: "/convertor/frequency?from=hz&to=thz" },
  { label: "Hertz to Radians/Second", path: "/convertor/frequency?from=hz&to=rads" },
  { label: "Kilohertz to Hertz", path: "/convertor/frequency?from=khz&to=hz" },
  { label: "Kilohertz to Megahertz", path: "/convertor/frequency?from=khz&to=mhz" },
  { label: "Kilohertz to Gigahertz", path: "/convertor/frequency?from=khz&to=ghz" },
  { label: "Megahertz to Hertz", path: "/convertor/frequency?from=mhz&to=hz" },
  { label: "Megahertz to Kilohertz", path: "/convertor/frequency?from=mhz&to=khz" },
  { label: "Megahertz to Gigahertz", path: "/convertor/frequency?from=mhz&to=ghz" },
  { label: "Gigahertz to Hertz", path: "/convertor/frequency?from=ghz&to=hz" },
  { label: "Gigahertz to Kilohertz", path: "/convertor/frequency?from=ghz&to=khz" },
  { label: "Gigahertz to Megahertz", path: "/convertor/frequency?from=ghz&to=mhz" },
  { label: "Terahertz to Hertz", path: "/convertor/frequency?from=thz&to=hz" },
  { label: "Radians/Second to Hertz", path: "/convertor/frequency?from=rads&to=hz" },
  { label: "1 Kilohertz to Hertz", path: "/convertor/frequency?from=khz&to=hz&value=1" },
  { label: "1 Megahertz to Hertz", path: "/convertor/frequency?from=mhz&to=hz&value=1" },
  { label: "1 Megahertz to Kilohertz", path: "/convertor/frequency?from=mhz&to=khz&value=1" },
  { label: "100 Megahertz to Hertz", path: "/convertor/frequency?from=mhz&to=hz&value=100" },
  { label: "1 Gigahertz to Hertz", path: "/convertor/frequency?from=ghz&to=hz&value=1" },
  { label: "1 Gigahertz to Megahertz", path: "/convertor/frequency?from=ghz&to=mhz&value=1" }
];

export default function FrequencyConversions() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequency Conversions</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {frequencyConversions.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className="block bg-white hover:bg-gray-100 p-4 rounded-xl shadow-md transition duration-200 dark:bg-transparent border"
          >
            {item.label} Conversion
          </Link>
        ))}
      </div>
    </div>
  );
}
