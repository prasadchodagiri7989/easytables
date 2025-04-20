import { Link } from "react-router-dom";

const temperatureConversions = [
  { label: "Fahrenheit to Celsius", path: "/convertor/temperature?from=f&to=c" },
  { label: "Fahrenheit to Kelvin", path: "/convertor/temperature?from=f&to=k" },
  { label: "Fahrenheit to Rankine", path: "/convertor/temperature?from=f&to=rankine" },
  { label: "Celsius to Fahrenheit", path: "/convertor/temperature?from=c&to=f" },
  { label: "Celsius to Kelvin", path: "/convertor/temperature?from=c&to=k" },
  { label: "Celsius to Rankine", path: "/convertor/temperature?from=c&to=rankine" },
  { label: "Kelvin to Fahrenheit", path: "/convertor/temperature?from=k&to=f" },
  { label: "Kelvin to Celsius", path: "/convertor/temperature?from=k&to=c" },
  { label: "Kelvin to Rankine", path: "/convertor/temperature?from=k&to=rankine" },
  { label: "Rankine to Fahrenheit", path: "/convertor/temperature?from=rankine&to=f" },
  { label: "Rankine to Celsius", path: "/convertor/temperature?from=rankine&to=c" },
  { label: "Rankine to Kelvin", path: "/convertor/temperature?from=rankine&to=k" },
  { label: "Celsius to Kelvin Calculation", path: "/convertor/temperature?from=c&to=k" },
  { label: "Celsius to Fahrenheit Calculation", path: "/convertor/temperature?from=c&to=f" },
  { label: "Fahrenheit to Celsius Calculation", path: "/convertor/temperature?from=f&to=c" },
  { label: "Fahrenheit to Kelvin Calculation", path: "/convertor/temperature?from=f&to=k" },
  { label: "Kelvin to Celsius Calculation", path: "/convertor/temperature?from=k&to=c" },
  { label: "Kelvin to Fahrenheit Calculation", path: "/convertor/temperature?from=k&to=f" },
  { label: "0°F to Celsius", path: "/convertor/temperature?from=f&to=c&value=0" },
  { label: "10°F to Celsius", path: "/convertor/temperature?from=f&to=c&value=10" },
  { label: "20°F to Celsius", path: "/convertor/temperature?from=f&to=c&value=20" },
  { label: "30°F to Celsius", path: "/convertor/temperature?from=f&to=c&value=30" },
  { label: "0°C to Fahrenheit", path: "/convertor/temperature?from=c&to=f&value=0" },
  { label: "10°C to Fahrenheit", path: "/convertor/temperature?from=c&to=f&value=10" },
  { label: "20°C to Fahrenheit", path: "/convertor/temperature?from=c&to=f&value=20" },
  { label: "30°C to Fahrenheit", path: "/convertor/temperature?from=c&to=f&value=30" },
  { label: "100°C to Fahrenheit", path: "/convertor/temperature?from=c&to=f&value=100" }
];

export default function TemperatureConversions() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Temperature Conversions</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {temperatureConversions.map((item, i) => (
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
