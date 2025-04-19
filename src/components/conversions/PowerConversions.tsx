import { Link } from "react-router-dom";

const powerCalculations = [
  "BHP to kW conversion",
  "BTU/hr to kW conversion",
  "BTU/hr to tons conversion",
  "BTU/hr to watts conversion",
  "dBm converter",
  "dBm to mW conversion",
  "dBm to watts conversion",
  "GW to watts conversion",
  "hp to kW conversion",
  "hp to watts conversion",
  "kW to BHP conversion",
  "kW to BTU/hr conversion",
  "kW to hp conversion",
  "kW to mW conversion",
  "kW to MW conversion",
  "kW to tons conversion",
  "kW to watts conversion",
  "mW to watts conversion",
  "mW to kW conversion",
  "mW to dBm conversion",
  "MW to watts conversion",
  "MW to kW conversion",
  "Tons to BTU/hr conversion",
  "Tons to kW conversion",
  "Watts to mW conversion",
  "Watts to kW conversion",
  "Watts to MW conversion",
  "Watts to GW conversion",
  "Watts to dBm conversion",
  "Watts to hp conversion",
  "Watts to BTU/hr conversion",
  "How to convert mW to watts",
  "How to convert watts to mW",
  "How to convert watts to kW",
  "How to convert watts to hp",
  "How to convert watt to BTU/hr",
  "How to convert kW to watt",
  "How to convert kW to hp",
  "How to convert kW to BTU/hr",
  "How to convert kW to BHP",
  "How to convert kW to refrigeration tons",
  "How to convert hp to watts",
  "How to convert hp to kW",
  "How to convert BTU/hr to watts",
  "How to convert BTU/hr to kW",
  "How to convert BTU/hr to refrigeration tons",
  "How to convert refrigeration tons to BTU/hr",
  "How to convert refrigeration tons to kW",
  "How to convert BHP to kW"
];

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function PowerConversions() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Power Conversions</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {powerCalculations.map((item, i) => (
          <Link
            key={i}
            to={`/conversions/${slugify(item)}`}
            className="block bg-white hover:bg-gray-100 p-4 rounded-xl shadow-md transition duration-200 dark:bg-transparent border"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
