import { Link } from "react-router-dom";

const energyConversions = [
  { label: "Joules to Kilojoules", path: "/convertor/energy?from=j&to=kj" },
  { label: "Joules to BTU", path: "/convertor/energy?from=j&to=btu" },
  { label: "Joules to Calories", path: "/convertor/energy?from=j&to=cal" },
  { label: "Joules to Kilocalories", path: "/convertor/energy?from=j&to=kcal" },
  { label: "Joules to Kilowatt-hours", path: "/convertor/energy?from=j&to=kwh" },
  { label: "Joules to Electronvolts", path: "/convertor/energy?from=j&to=ev" },
  { label: "Kilojoules to Joules", path: "/convertor/energy?from=kj&to=j" },
  { label: "Kilojoules to BTU", path: "/convertor/energy?from=kj&to=btu" },
  { label: "Kilojoules to Calories", path: "/convertor/energy?from=kj&to=cal" },
  { label: "Kilojoules to Kilocalories", path: "/convertor/energy?from=kj&to=kcal" },
  { label: "BTU to Kilojoules", path: "/convertor/energy?from=btu&to=kj" },
  { label: "BTU to Joules", path: "/convertor/energy?from=btu&to=j" },
  { label: "BTU to Kilowatt-hours", path: "/convertor/energy?from=btu&to=kwh" },
  { label: "Kilowatt-hours to BTU", path: "/convertor/energy?from=kwh&to=btu" },
  { label: "Kilowatt-hours to Joules", path: "/convertor/energy?from=kwh&to=j" },
  { label: "Calories to Joules", path: "/convertor/energy?from=cal&to=j" },
  { label: "Calories to Kilojoules", path: "/convertor/energy?from=cal&to=kj" },
  { label: "Calories to Kilocalories", path: "/convertor/energy?from=cal&to=kcal" },
  { label: "Kilocalories to Calories", path: "/convertor/energy?from=kcal&to=cal" },
  { label: "Kilocalories to Joules", path: "/convertor/energy?from=kcal&to=j" },
  { label: "Kilocalories to Kilojoules", path: "/convertor/energy?from=kcal&to=kj" },
  { label: "Electronvolts to Joules", path: "/convertor/energy?from=ev&to=j" },
  { label: "Electronvolts to keV", path: "/convertor/energy?from=ev&to=kev" },
  { label: "Electronvolts to MeV", path: "/convertor/energy?from=ev&to=mev" },
  { label: "Electronvolts to GeV", path: "/convertor/energy?from=ev&to=gev" },
  { label: "keV to Electronvolts", path: "/convertor/energy?from=kev&to=ev" },
  { label: "MeV to Electronvolts", path: "/convertor/energy?from=mev&to=ev" },
  { label: "GeV to Electronvolts", path: "/convertor/energy?from=gev&to=ev" }
];

export default function EnergyConversions() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Energy Conversions</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {energyConversions.map((item, i) => (
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
