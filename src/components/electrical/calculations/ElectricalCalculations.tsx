import { Link } from "react-router-dom";

const electricalCalculations = [
  { label: "1 Amp to Watts", path: "/electrical-calculations/amps-to-watts?amps=1" },
  { label: "1 Watt to Amps", path: "/electrical-calculations/watts-to-amps?watts=1" },
  { label: "2 Amps to Watt", path: "/electrical-calculations/amps-to-watts?amps=2" },
  { label: "3 Amps to Watt", path: "/electrical-calculations/amps-to-watts?amps=3" },
  { label: "10 Amps to Watt", path: "/electrical-calculations/amps-to-watts?amps=10" },
  { label: "15 Amps to Watt", path: "/electrical-calculations/amps-to-watts?amps=15" },
  { label: "100 Amps to Watt", path: "/electrical-calculations/amps-to-watts?amps=100" },
  { label: "100 Watts to Amps", path: "/electrical-calculations/watts-to-amps?watts=100" },
  { label: "500 Watts to Amps", path: "/electrical-calculations/watts-to-amps?watts=500" },
  { label: "600 Watts to Amps", path: "/electrical-calculations/watts-to-amps?watts=600" },
  { label: "800 Watts to Amps", path: "/electrical-calculations/watts-to-amps?watts=800" },
  { label: "1000 Watts to Amps", path: "/electrical-calculations/watts-to-amps?watts=1000" },
  { label: "1200 Watts to Amps", path: "/electrical-calculations/watts-to-amps?watts=1200" },
  { label: "2000 Watts to Amps", path: "/electrical-calculations/watts-to-amps?watts=2000" },
  { label: "Ah to mAh", path: "/electrical-calculations/ah-to-mah" },
  { label: "Amps to kVA", path: "/electrical-calculations/amps-to-kva" },
  { label: "Amps to mA", path: "/electrical-calculations/amps-to-milliamps" },
  { label: "Amps to kW", path: "/electrical-calculations/amps-to-kw" },
  { label: "Amps to Ohms", path: "/electrical-calculations/amps-to-ohms" },
  { label: "Amps to VA", path: "/electrical-calculations/amps-to-va" },
  { label: "Amps to Volts", path: "/electrical-calculations/amps-to-volts" },
  { label: "Amps to Watts", path: "/electrical-calculations/amps-to-watts" },
  { label: "dB Converter", path: "/electrical-calculations/db-converter" },
  { label: "eV to Volts", path: "/electrical-calculations/electron-volt-to-volt" },
  { label: "Joules to kW", path: "/electrical-calculations/joules-to-kilowatts" },
  { label: "Joules to Volts", path: "/electrical-calculations/joules-to-volts" },
  { label: "Joules to Watts", path: "/electrical-calculations/joules-to-watts" },
  { label: "kW to Amps", path: "/electrical-calculations/kw-to-amps" },
  { label: "kJ to kW", path: "/electrical-calculations/kw-to-kj" },
  { label: "kJ to Watts", path: "/electrical-calculations/kw-to-watts" },
  { label: "kVA to Amps", path: "/electrical-calculations/kva-to-amps" },
  { label: "kW to kVA", path: "/electrical-calculations/kw-to-kva" },
  { label: "kW to Joules", path: "/electrical-calculations/kw-to-joules" },
  { label: "kVA to kW", path: "/electrical-calculations/kva-to-kw" },
  { label: "kVA to VA", path: "/electrical-calculations/kva-to-va" },
  { label: "kVA to Watts", path: "/electrical-calculations/kva-to-watts" },
  { label: "kW to kJ", path: "/electrical-calculations/kw-to-kj" },
  { label: "kW to kWh", path: "/electrical-calculations/kw-to-kwh" },
  { label: "kW to VA", path: "/electrical-calculations/kw-to-va" },
  { label: "kW to Volts", path: "/electrical-calculations/kw-to-volts" },
  { label: "kW to Wh", path: "/electrical-calculations/kw-to-wh" },
  { label: "kWh to kW", path: "/electrical-calculations/kwh-to-kw" },
  { label: "kWh to Watts", path: "/electrical-calculations/kwh-to-watt" },
  { label: "Lumens to Watts", path: "/electrical-calculations/lumen-to-watt" },
  { label: "Lumens to Lux", path: "/electrical-calculations/lumen-to-lux" },
  { label: "Lux to Lumens", path: "/electrical-calculations/lux-to-lumen" },
  { label: "mA to Amps", path: "/electrical-calculations/milliamps-to-amps" },
  { label: "mAh to Ah", path: "/electrical-calculations/mah-to-ah" },
  { label: "mAh to Wh", path: "/electrical-calculations/mah-to-wh" },
  { label: "Ohms to Amps", path: "/electrical-calculations/ohms-to-amps" },
  { label: "Ohms to Volts", path: "/electrical-calculations/ohms-to-volts" },
  { label: "VA to Amps", path: "/electrical-calculations/vat-to-amps" },
  { label: "VA to Watts", path: "/electrical-calculations/vat-to-watts" },
  { label: "VA to kVA", path: "/electrical-calculations/vat-to-kva" },
  { label: "VA to kW", path: "/electrical-calculations/vat-to-kw" },
  { label: "Volts to Amps", path: "/electrical-calculations/volts-to-amps" },
  { label: "Volts to Joules", path: "/electrical-calculations/volts-to-joules" },
  { label: "Volts to kW", path: "/electrical-calculations/volts-to-kw" },
  { label: "Volts to Ohms", path: "/electrical-calculations/volts-to-ohms" },
  { label: "Volts to eV", path: "/electrical-calculations/volts-to-ev" },
  { label: "Volts to Watts", path: "/electrical-calculations/volts-to-watts" },
  { label: "Watts to Amps", path: "/electrical-calculations/watts-to-amps" },
  { label: "Watts to Joules", path: "/electrical-calculations/watts-to-joules" },
  { label: "Watts to Volts", path: "/electrical-calculations/watts-to-volts" },
  { label: "Watts to VA", path: "/electrical-calculations/watts-to-va" },
  { label: "Watts to kVA", path: "/electrical-calculations/watts-to-kva" },
  { label: "Watts to kWh", path: "/electrical-calculations/watts-to-kwh" },
  { label: "Watts to kJ", path: "/electrical-calculations/watts-to-kj" },
  { label: "Watts to Lumens", path: "/electrical-calculations/watts-to-lumens" },
  { label: "Watts to Wh", path: "/electrical-calculations/watts-to-wh" },
  { label: "Wh to kW", path: "/electrical-calculations/wh-to-kw" },
  { label: "Wh to mAh", path: "/electrical-calculations/wh-to-mah" },
  { label: "Wh to Watts", path: "/electrical-calculations/wh-to-watts" },
];

export default function ElectricalCalculations() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Electrical Calculators</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {electricalCalculations.map((item, i) => (
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
