import { Link } from "react-router-dom";

const powerConversions = [
  { label: "Watt (W) to Kilowatt (kW)", path: "/convertor/power?from=w&to=kw" },
  { label: "Watt (W) to Megawatt (MW)", path: "/convertor/power?from=w&to=mw" },
  { label: "Watt (W) to Horsepower (hp)", path: "/convertor/power?from=w&to=hp" },
  { label: "Watt (W) to Foot-pound per minute (ft⋅lb/min)", path: "/convertor/power?from=w&to=ftlbmin" },
  { label: "Watt (W) to BTU per hour (BTU/h)", path: "/convertor/power?from=w&to=btuh" },
  { label: "Kilowatt (kW) to Watt (W)", path: "/convertor/power?from=kw&to=w" },
  { label: "Kilowatt (kW) to Megawatt (MW)", path: "/convertor/power?from=kw&to=mw" },
  { label: "Kilowatt (kW) to Horsepower (hp)", path: "/convertor/power?from=kw&to=hp" },
  { label: "Kilowatt (kW) to Foot-pound per minute (ft⋅lb/min)", path: "/convertor/power?from=kw&to=ftlbmin" },
  { label: "Kilowatt (kW) to BTU per hour (BTU/h)", path: "/convertor/power?from=kw&to=btuh" },
  { label: "Megawatt (MW) to Watt (W)", path: "/convertor/power?from=mw&to=w" },
  { label: "Megawatt (MW) to Kilowatt (kW)", path: "/convertor/power?from=mw&to=kw" },
  { label: "Megawatt (MW) to Horsepower (hp)", path: "/convertor/power?from=mw&to=hp" },
  { label: "Megawatt (MW) to Foot-pound per minute (ft⋅lb/min)", path: "/convertor/power?from=mw&to=ftlbmin" },
  { label: "Megawatt (MW) to BTU per hour (BTU/h)", path: "/convertor/power?from=mw&to=btuh" },
  { label: "Horsepower (hp) to Watt (W)", path: "/convertor/power?from=hp&to=w" },
  { label: "Horsepower (hp) to Kilowatt (kW)", path: "/convertor/power?from=hp&to=kw" },
  { label: "Horsepower (hp) to Megawatt (MW)", path: "/convertor/power?from=hp&to=mw" },
  { label: "Horsepower (hp) to Foot-pound per minute (ft⋅lb/min)", path: "/convertor/power?from=hp&to=ftlbmin" },
  { label: "Horsepower (hp) to BTU per hour (BTU/h)", path: "/convertor/power?from=hp&to=btuh" },
  { label: "Foot-pound per minute (ft⋅lb/min) to Watt (W)", path: "/convertor/power?from=ftlbmin&to=w" },
  { label: "Foot-pound per minute (ft⋅lb/min) to Kilowatt (kW)", path: "/convertor/power?from=ftlbmin&to=kw" },
  { label: "Foot-pound per minute (ft⋅lb/min) to Megawatt (MW)", path: "/convertor/power?from=ftlbmin&to=mw" },
  { label: "Foot-pound per minute (ft⋅lb/min) to Horsepower (hp)", path: "/convertor/power?from=ftlbmin&to=hp" },
  { label: "Foot-pound per minute (ft⋅lb/min) to BTU per hour (BTU/h)", path: "/convertor/power?from=ftlbmin&to=btuh" },
  { label: "BTU per hour (BTU/h) to Watt (W)", path: "/convertor/power?from=btuh&to=w" },
  { label: "BTU per hour (BTU/h) to Kilowatt (kW)", path: "/convertor/power?from=btuh&to=kw" },
  { label: "BTU per hour (BTU/h) to Megawatt (MW)", path: "/convertor/power?from=btuh&to=mw" },
  { label: "BTU per hour (BTU/h) to Horsepower (hp)", path: "/convertor/power?from=btuh&to=hp" },
  { label: "BTU per hour (BTU/h) to Foot-pound per minute (ft⋅lb/min)", path: "/convertor/power?from=btuh&to=ftlbmin" },
];

export default function PowerConversions() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Power Conversions</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {powerConversions.map((item, i) => (
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
