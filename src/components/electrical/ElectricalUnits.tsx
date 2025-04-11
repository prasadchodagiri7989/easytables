import { Link } from "react-router-dom";

const electricalUnits = [
  { name: "Ampere (A)", path: "/units/ampere" },
  { name: "dB-milliwatt (dBm)", path: "/units/dbm" },
  { name: "dB-watt (dBW)", path: "/units/dbw" },
  { name: "Decibel (dB)", path: "/units/decibel" },
  { name: "Farad (F)", path: "/units/farad" },
  { name: "Kilovolt-amp (kVA)", path: "/units/kva" },
  { name: "Kilowatt (kW)", path: "/units/kw" },
  { name: "Kilowatt-hour (kWh)", path: "/units/kwh" },
  { name: "Ohm (Ω)", path: "/units/ohm" },
  { name: "Volt (V)", path: "/units/volt" },
  { name: "Watt (W)", path: "/units/watt" },
];

const ElectricalUnits = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Electrical & Electronic Units</h1>
      <ul className="space-y-4">
        {electricalUnits.map((unit) => (
          <li key={unit.path}>
            <Link to={unit.path} className="text-blue-600 hover:underline text-lg">
              {unit.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ElectricalUnits;