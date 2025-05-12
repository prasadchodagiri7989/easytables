import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";


export default function KilowattInfo() {
  return (
    <>
     <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/electrical/units">Electrical units</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Kilowatt</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
  </Breadcrumb>
  <Card className="mx-auto max-w-[900px] p-[20px]">
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
    <h2 className="text-2xl font-semibold mt-6">How Kilowatts Relate to Other Units of Power</h2>
      <p>
        The kilowatt is just one of many units used to measure power. Understanding how it relates to other units—both in the SI (metric) system and in non-metric systems—can help in making accurate conversions and comparisons.
      </p>
      <p>
        For example, 1 horsepower (HP), a unit still used in engines and motors, is approximately equal to 0.7457 kilowatts. So a 10 HP motor would deliver about 7.457 kW of power.
      </p>
      <p>
        Similarly, 1 British Thermal Unit per hour (BTU/h), commonly used in heating and cooling systems, is approximately equal to 0.000293 kW. Therefore, an air conditioner rated at 12,000 BTU/h delivers around 3.52 kW of cooling power.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Common Power Ratings in Kilowatts</h2>
      <ul className="list-disc list-inside">
        <li>Electric space heater: 1 to 2 kW</li>
        <li>Window air conditioner: 1 to 2.5 kW</li>
        <li>Electric car charger (Level 2): 6 to 12 kW</li>
        <li>Electric stove or oven: 2 to 5 kW</li>
        <li>Central air conditioning system: 3 to 10 kW</li>
        <li>Home solar panel system (complete): 3 to 10 kW</li>
        <li>Hairdryer: 1.5 to 2 kW</li>
        <li>Microwave oven: 0.6 to 1.2 kW</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Real-World Applications of Kilowatts</h2>
      <p>
        The kilowatt is a practical and widely used unit of power across many sectors:
      </p>
      <ul className="list-disc list-inside">
        <li>
          <strong>Residential:</strong> Home appliances are often rated in kilowatts to indicate their power consumption or output. Understanding these ratings helps consumers choose energy-efficient models and size backup power systems appropriately.
        </li>
        <li>
          <strong>Automotive:</strong> Electric vehicles (EVs) are often rated in kW for both motor output and charger power. A 150 kW EV motor can deliver high performance, and a 50 kW DC fast charger can replenish range rapidly.
        </li>
        <li>
          <strong>Renewable Energy:</strong> Solar panels, wind turbines, and hydro systems use kW ratings to describe generation capacity. A 5 kW residential solar system can offset a significant portion of a home’s power needs.
        </li>
        <li>
          <strong>Industrial:</strong> Machines and motors in factories use kilowatt ratings to plan electrical infrastructure and estimate power costs.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Kilowatts vs. Kilowatt-Hours</h2>
      <p>
        It's common to confuse kilowatts (kW) with kilowatt-hours (kWh), but they represent different things:
      </p>
      <ul className="list-disc list-inside">
        <li>
          <strong>Kilowatt (kW):</strong> A unit of power, or the rate at which energy is used or produced.
        </li>
        <li>
          <strong>Kilowatt-hour (kWh):</strong> A unit of energy, representing the total amount of work done or energy consumed over time.
        </li>
      </ul>
      <p>
        For example, if a 1 kW appliance runs for 3 hours, it will consume 3 kWh of energy. Electric utility companies typically bill customers in kWh.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Calculating Power in Kilowatts</h2>
      <p>
        The general formula to calculate electrical power (in kilowatts) depends on whether the circuit is using direct current (DC) or alternating current (AC).
      </p>
      <h3 className="text-xl font-semibold mt-4">For DC Circuits:</h3>
      <p className="font-mono">P (kW) = (V × I) / 1000</p>
      <p>
        Where V is voltage in volts and I is current in amperes. Divide by 1000 to convert watts to kilowatts.
      </p>

      <h3 className="text-xl font-semibold mt-4">For Single-Phase AC Circuits:</h3>
      <p className="font-mono">P (kW) = (V × I × PF) / 1000</p>
      <p>
        PF is the power factor (a number between 0 and 1) accounting for phase differences between voltage and current.
      </p>

      <h3 className="text-xl font-semibold mt-4">For Three-Phase AC Circuits:</h3>
      <p className="font-mono">P (kW) = (√3 × V × I × PF) / 1000</p>
      <p>
        This formula applies to balanced three-phase systems where √3 (about 1.732) accounts for the phase angle between currents.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Energy Efficiency and Kilowatt Ratings</h2>
      <p>
        Power consumption in kilowatts is directly tied to energy efficiency. A lower kW rating often means a more efficient device, assuming equal performance. Energy-efficient appliances not only reduce utility bills but also minimize environmental impact.
      </p>
      <p>
        Look for Energy Star ratings or efficiency labels that show expected power usage. For example, a refrigerator rated at 0.15 kW running for 24 hours consumes 3.6 kWh/day, while an older unit might use double that.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Smart Grids and Kilowatt Monitoring</h2>
      <p>
        In modern electrical grids, kilowatt-level monitoring is essential for demand management and energy optimization. Smart meters, for example, record power usage in real time and communicate this data to utilities, enabling time-based billing and grid balancing.
      </p>
      <p>
        Smart homes and buildings also monitor kilowatt usage using IoT (Internet of Things) devices, allowing users to identify high-energy-consuming appliances and adjust usage patterns accordingly.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Kilowatts in Backup and Emergency Power Systems</h2>
      <p>
        When selecting backup power systems such as generators or battery storage, kilowatt ratings are critical. For instance, a 10 kW generator can power an entire small home, including air conditioning and refrigeration.
      </p>
      <p>
        In larger setups like data centers or hospitals, backup systems may be rated in hundreds of kilowatts or even megawatts to ensure critical infrastructure remains powered during outages.
      </p>
      <h2 className="text-2xl font-semibold mt-6">Kilowatt Ratings in Electric Vehicles (EVs)</h2>
      <p>
        Electric vehicles use kilowatts to express both the power of the electric motor and the charging rate. For instance, a Tesla Model 3 may have a motor rated at 150 kW, meaning it can deliver about 201 horsepower.
      </p>
      <p>
        Charging stations also use kilowatt ratings to indicate how quickly they can charge a vehicle. Level 1 chargers typically deliver around 1.4 kW, Level 2 chargers can provide 6 to 22 kW, and DC fast chargers can reach 50 to 350 kW or more.
      </p>
      <p>
        The higher the kW rating of the charger, the faster the energy is transferred to the vehicle’s battery. However, the actual charging speed also depends on the vehicle’s battery management system and its maximum charge acceptance rate.
      </p>

      <h2 className="text-2xl font-semibold mt-6">How Utilities Use Kilowatt Demand Charges</h2>
      <p>
        In commercial and industrial settings, utility companies often implement demand charges based on kilowatt usage. This is different from residential energy billing, which is typically based on kilowatt-hours (kWh).
      </p>
      <p>
        Demand charges are assessed based on the highest average kilowatt usage during any 15–30 minute window within a billing cycle. This means even a short burst of high power consumption can lead to increased charges.
      </p>
      <p>
        For example, if a factory uses 100 kW for 15 minutes at some point during the month, they may be billed for a 100 kW demand rate, regardless of lower average usage. This encourages businesses to spread out their power consumption more evenly.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Decibel Conversions from Kilowatts</h2>
      <p>
        In communication and radio engineering, kilowatts are sometimes expressed in decibels—either as dBW (decibel-watts) or dBm (decibel-milliwatts).
      </p>
      <ul className="list-disc list-inside">
        <li><strong>dBW = 10 × log₁₀(Power in watts)</strong></li>
        <li><strong>dBm = 10 × log₁₀(Power in milliwatts)</strong></li>
      </ul>
      <p>
        For example, 1 kW = 1000 W. So:
      </p>
      <p className="font-mono">dBW = 10 × log₁₀(1000) = 30 dBW</p>
      <p>
        Since 1 W = 1000 mW, then:
      </p>
      <p className="font-mono">dBm = 10 × log₁₀(1,000,000) = 60 dBm</p>

      <h2 className="text-2xl font-semibold mt-6">Kilowatt and System Design</h2>
      <p>
        Engineers use kilowatt ratings when designing electrical systems to ensure proper sizing of components like transformers, inverters, wiring, and circuit breakers.
      </p>
      <p>
        Oversizing leads to unnecessary cost, while undersizing risks equipment failure or fire. Load calculations often start with summing up individual power demands (in watts or kilowatts), applying diversity factors, and choosing suitable protective devices accordingly.
      </p>
      <p>
        In solar systems, for instance, a 5 kW inverter must be matched to solar panels producing a similar maximum power output, accounting for environmental derating (e.g., shade, temperature).
      </p>

      <h2 className="text-2xl font-semibold mt-6">Thermal Effects of Kilowatt Ratings</h2>
      <p>
        Power dissipation in electrical components generates heat. In systems rated for several kilowatts, proper thermal management becomes crucial.
      </p>
      <p>
        A device consuming 2 kW may convert 95% to useful output and 5% to heat—that’s 100 W of thermal energy needing dissipation. Fans, heat sinks, and ventilation must be included in the design to prevent overheating and ensure longevity.
      </p>
      <p>
        In servers and data centers, power usage effectiveness (PUE) is used to measure how much kilowatt input goes toward computation versus cooling, guiding system optimization.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Kilowatts in Heating and HVAC Systems</h2>
      <p>
        Heating, ventilation, and air conditioning (HVAC) systems are major consumers of electrical power, often rated in kilowatts or BTU/h.
      </p>
      <p>
        The rough conversion is:
      </p>
      <p className="font-mono">1 kW = 3412.14 BTU/h</p>
      <p>
        So a 3.5 kW electric heater outputs about 11,942 BTU/h. Similarly, air conditioners may be rated in tons, where 1 ton = 12,000 BTU/h ≈ 3.516 kW.
      </p>
      <p>
        Understanding these equivalences helps HVAC designers size systems based on power constraints and energy costs.
      </p>

      <h2 className="text-2xl font-semibold mt-6">International Use of the Kilowatt</h2>
      <p>
        While the kilowatt is globally standardized, its usage can vary by region. In most countries using the metric system, appliance ratings, utility billing, and engineering specifications use kilowatts as the default unit of power.
      </p>
      <p>
        In the United States, some sectors (especially residential and automotive) still use horsepower, BTU/h, or amps. However, kilowatts are increasingly used in electric vehicle specs, solar system sizing, and power tool ratings.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Kilowatts and Electrical Safety</h2>
      <p>
        Working with kilowatt-rated equipment requires caution. Higher power ratings imply higher currents or voltages, increasing risks of shock, arc flash, or fire.
      </p>
      <p>
        For example, a 2 kW device running on 120 V draws about 16.67 A (P = VI). This is near the limit of a standard household 20 A breaker. Using multiple high-kW appliances on the same circuit could easily trip breakers or cause wiring to overheat.
      </p>
      <p>
        Always consult power ratings, use correct wire gauges, and follow electrical codes when dealing with high-power loads.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Kilowatts in Renewable Energy Planning</h2>
      <p>
        When planning a renewable energy system, such as solar or wind, kilowatt capacity is a key design metric. A 5 kW solar panel array can typically produce around 20–25 kWh per day depending on sunlight conditions.
      </p>
      <p>
        In windy areas, a 10 kW wind turbine could produce between 900 and 2000 kWh/month. By comparing daily or monthly energy needs with these generation estimates, homeowners and businesses can size renewable systems to offset grid consumption.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Conclusion: Why Kilowatts Matter</h2>
      <p>
        The kilowatt is more than just a number on an appliance label—it's a critical measurement used in energy planning, efficiency assessments, cost estimation, and safety design.
      </p>
      <p>
        As we shift toward electrification of transport, smarter grids, and renewable power generation, understanding and effectively using kilowatt-based data will become increasingly important for engineers, businesses, and consumers alike.
      </p>

    </Card>
    </>
  );
}
