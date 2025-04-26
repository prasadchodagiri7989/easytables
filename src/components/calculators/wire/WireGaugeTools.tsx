import { Link } from "react-router-dom";

const wireGaugeTools = [
  { label: "Wire Gauge Calculator", path: "/tools/wire-gauge-calculator" },
  { label: "AWG to mm Calculator", path: "/tools/awg-to-mm-calculator" },
  { label: "SWG to mm Calculator", path: "/tools/swg-to-mm-calculator" },
  { label: "Voltage Drop Calculator", path: "/tools/voltage-drop-calculator" },
  { label: "#2 Gauge Wire Calculator", path: "/tools/2-gauge-wire-calculator" },
];

export default function WireGaugeTools() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Wire Gauge Calculators</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {wireGaugeTools.map((item, i) => (
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