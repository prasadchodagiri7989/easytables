import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


export default function KilowattInfo() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">Kilowatt (kW)</h1>

      <p>
        Kilowatt (symbol: kW) is a unit of electric power.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Kilowatt Definition</h2>
      <p>
        One kilowatt (kW) is equal to 1000 watts (W):
      </p>
      <p className="font-semibold">1kW = 1000W</p>

      <p>
        One kilowatt is defined as energy consumption of 1000 joules per second:
      </p>
      <p className="font-semibold">1kW = 1000J / 1s</p>

      <p>
        One kilowatt is also equal to 1,000,000 milliwatts:
      </p>
      <p className="font-semibold">1kW = 1,000,000mW</p>

      <h2 className="text-2xl font-semibold mt-6">Kilowatt Examples</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Example #1</h3>
          <p>What is the power consumption in kW when energy of 30000 joules was released during 10 seconds?</p>
          <p><span className="font-semibold">Solution:</span> P(kW) = 30000J / 10s / 1000 = <strong>3kW</strong></p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Example #2</h3>
          <p>What is the power consumption when consuming 6kWh for 3 hours?</p>
          <p><span className="font-semibold">Solution:</span> P(kW) = 6kWh / 3h = <strong>2kW</strong></p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6">kW to mW, W, MW, GW Conversion</h2>
      <p>
        Convert kilowatt to milliwatt, watt, megawatt, gigawatt, dBm, dBW.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold">Enter milliwatts:</label>
          <input type="text" className="w-full border p-2 rounded" placeholder="mW" />
        </div>
        <div>
          <label className="block font-semibold">Enter watts:</label>
          <input type="text" className="w-full border p-2 rounded" placeholder="W" />
        </div>
        <div>
          <label className="block font-semibold">Enter kilowatts:</label>
          <input type="text" className="w-full border p-2 rounded" placeholder="kW" />
        </div>
        <div>
          <label className="block font-semibold">Enter megawatts:</label>
          <input type="text" className="w-full border p-2 rounded" placeholder="MW" />
        </div>
        <div>
          <label className="block font-semibold">Enter gigawatts:</label>
          <input type="text" className="w-full border p-2 rounded" placeholder="GW" />
        </div>
        <div>
          <label className="block font-semibold">Enter dBm:</label>
          <input type="text" className="w-full border p-2 rounded" placeholder="dBm" />
        </div>
        <div>
          <label className="block font-semibold">Enter dBW:</label>
          <input type="text" className="w-full border p-2 rounded" placeholder="dBW" />
        </div>
      </div>

      <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded">
        Convert
      </button>

      <h2 className="text-2xl font-semibold mt-6">See Also</h2>
      <ul className="list-disc list-inside">
        <li>Watt (W)</li>
        <li>Kilovolt-amp (kVA)</li>
        <li>Kilowatt-hour (kWh)</li>
        <li>Electric power</li>
        <li>How to convert kW to amps</li>
        <li>How to convert kW to kWh</li>
        <li>How to convert kW to watts</li>
        <li>How to convert kW to mW</li>
        <li>How to convert kW to BTU/h</li>
        <li>Power conversion</li>
        <li>Energy conversion</li>
        <li>Electronic units</li>
      </ul>
    </div>
  );
}
