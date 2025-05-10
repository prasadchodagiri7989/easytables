import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const KwhInfo = () => {
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
                                                              <BreadcrumbPage>Kilowatt-hour</BreadcrumbPage>
                                                            </BreadcrumbItem>
                                                          </BreadcrumbList>
          </Breadcrumb>
    <div className="max-w-4xl mx-auto p-6 bg-white/40 dark:bg-transparent rounded-2xl shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-center">Kilowatt-hour (kWh)</h1>

      <section>
        <h2 className="text-2xl font-semibold">Kilowatt-hour Definition</h2>
        <p>kWh or kilowatt-hour is an energy unit (symbol kWh or kW⋅h).</p>
        <p>One kilowatt-hour is defined as the energy consumed by power consumption of 1kW during 1 hour:</p>
        <p className="font-mono">1 kWh = 1kW × 1h</p>
        <p>1 kilowatt-hour is equal to 3.6 × 10<sup>6</sup> joules:</p>
        <p className="font-mono">1 kWh = 3.6 × 10<sup>6</sup> J</p>
        <p>The energy E in kilowatt-hours (kWh) is equal to the power P in kilowatts (kW), times the time t in hours (h):</p>
        <p className="font-mono">E(kWh) = P(kW) × t(h)</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Kilowatt-hour Example</h2>
        <p><strong>Example:</strong> What is the energy consumed when using 2kW for 3 hours?</p>
        <p className="font-mono">E(kWh) = 2kW × 3h = 6kWh</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">kWh Conversion</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-mono">1 kWh = 1000 Wh = 0.001 MWh</span></li>
          <li><span className="font-mono">1 kWh = 3412.14 BTU = 3.41214 kBTU</span></li>
          <li><span className="font-mono">1 kWh = 3.6 × 10<sup>6</sup> J = 3600 kJ = 3.6 MJ = 0.0036 GJ</span></li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">kWh to BTU, Joule Conversion Table</h2>
        <table className="table-auto w-full border mt-4 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2">Kilowatt-hour (kWh)</th>
              <th className="border px-3 py-2">BTU</th>
              <th className="border px-3 py-2">Joule (J)</th>
            </tr>
          </thead>
          <tbody>
            {[
              [0.1, '341.21', '3.6 × 10⁵'],
              [1, '3412.14', '3.6 × 10⁶'],
              [10, '34121.42', '3.6 × 10⁷'],
              [100, '341214.16', '3.6 × 10⁸'],
              [1000, '3412141.63', '3.6 × 10⁹'],
              [10000, '34121416.33', '3.6 × 10¹⁰']
            ].map(([kwh, btu, joule]) => (
              <tr key={kwh}>
                <td className="border px-3 py-1 text-center">{kwh} kWh</td>
                <td className="border px-3 py-1 text-center">{btu} BTU</td>
                <td className="border px-3 py-1 text-center">{joule} J</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">kWh Meter</h2>
        <p>A kWh meter is a device that measures the amount of electrical energy consumed in kilowatt-hours. It has a counter display to show the total kWh consumed over time.</p>
        <p>Energy consumption is calculated by taking the difference between current and previous readings over a time period.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Cost of Electricity Bill</h2>
        <p>The electricity cost is calculated by multiplying the energy consumed in kWh by the cost per kWh.</p>
        <p><strong>Example:</strong> For 900 kWh per month at $0.10 per kWh:</p>
        <p className="font-mono">900 kWh × $0.10 = $90</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">How Many kWh Does a House Use?</h2>
        <p>Typical household energy usage ranges from:</p>
        <ul className="list-disc pl-6">
          <li>150 kWh to 1500 kWh per month</li>
          <li>5 kWh to 50 kWh per day</li>
        </ul>
        <p>Usage depends on factors like weather and the number of people living in the home.</p>
      </section>
    </div>
    <section>
  <h2 className="text-2xl font-semibold mt-8">Understanding the Role of Kilowatt-Hours in Electricity Billing</h2>
  <p>
    Electricity bills are often calculated based on the number of kilowatt-hours (kWh) consumed over a specific billing period. A kilowatt-hour represents the amount of energy used when a 1-kilowatt device is running for one hour. For example, a 100-watt light bulb left on for 10 hours would consume 1 kWh (100 watts x 10 hours = 1000 watt-hours or 1 kWh). Utilities often use this standard to ensure a fair and accurate calculation of how much energy is being used and how much should be charged.
  </p>
  <p>
    The utility company uses a meter to measure how many kWh a household or business consumes, and this is then multiplied by the rate per kWh. In many cases, the cost of electricity can vary depending on the time of day (called Time-of-Use, or TOU pricing), with rates being higher during peak demand hours (such as late afternoon and evening) and lower during off-peak hours (like late night or early morning).
  </p>
  <p>
    Consumers can monitor their kWh usage by checking the reading on their electricity meters, which can either be manual or digital. In modern homes, many utility companies have smart meters that send real-time data to the company, allowing for more accurate billing and sometimes even enabling dynamic pricing where customers can take advantage of lower prices during off-peak times.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">The Impact of Energy Efficiency on kWh Consumption</h2>
  <p>
    One of the most effective ways to reduce kWh consumption is to improve energy efficiency. Energy efficiency means using less energy to perform the same tasks. The concept has become central to discussions about reducing global energy demand and curbing carbon emissions. Energy efficiency can be achieved in various ways, from upgrading to more efficient appliances to adopting better practices in daily energy usage.
  </p>
  <p>
    Common methods for reducing kWh consumption in households include:
    <ul className="list-disc pl-6">
      <li>Switching to LED light bulbs, which consume less energy than incandescent bulbs.</li>
      <li>Upgrading to energy-efficient appliances such as refrigerators, washing machines, and dishwashers that consume less electricity while performing the same tasks.</li>
      <li>Improving home insulation to reduce heating and cooling energy requirements.</li>
      <li>Using smart thermostats to better control temperature and minimize energy waste.</li>
      <li>Ensuring that windows and doors are properly sealed to prevent heat loss in the winter and heat gain in the summer.</li>
    </ul>
  </p>
  <p>
    By focusing on energy efficiency, households and businesses can reduce their total energy consumption, ultimately lowering their kWh usage and their electricity bills. Moreover, as energy costs continue to rise, adopting energy-efficient measures will help consumers save money in the long run.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">Renewable Energy and the Future of kWh Consumption</h2>
  <p>
    As the world continues to shift toward cleaner, more sustainable energy sources, renewable energy has become an important factor in reducing both kWh consumption from traditional fossil fuels and the carbon footprint associated with energy production. Renewable energy sources like solar, wind, hydro, and geothermal power generate electricity with little to no emissions, making them essential to the future of energy consumption.
  </p>
  <p>
    The adoption of renewable energy has the potential to greatly reduce the global demand for fossil-fuel-generated electricity. For example, solar panels installed on rooftops can generate electricity during the day, reducing the amount of energy a home or business needs to draw from the grid. Similarly, wind turbines can generate electricity without relying on traditional power plants, reducing the need for coal, natural gas, or oil-based power generation.
  </p>
  <p>
    While renewable energy sources are becoming more affordable, their intermittent nature (e.g., solar panels are not effective at night) means that energy storage solutions, such as batteries, will be key to ensuring a consistent energy supply. Batteries can store excess energy generated during peak production times and release it when demand is high or generation is low. This innovation will help ensure that renewable energy can meet the energy demands of homes and businesses 24/7, without relying on fossil fuels or creating large spikes in kWh consumption.
  </p>
  <p>
    The transition to renewable energy also impacts electricity pricing. In some regions, the increased use of renewable energy helps stabilize prices because renewables do not require fuel costs like coal or gas plants. This means that energy prices may become more predictable, and consumers will be less vulnerable to price spikes caused by geopolitical tensions or fuel shortages.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">The Global Efforts to Measure and Reduce kWh Consumption</h2>
  <p>
    Around the world, governments and organizations are working to promote energy efficiency and reduce overall kWh consumption. This is being done through various initiatives, such as energy efficiency standards, carbon pricing, and the promotion of renewable energy. International agreements such as the Paris Agreement aim to reduce global greenhouse gas emissions and promote sustainable energy practices. Reducing kWh consumption is a key component of achieving these goals.
  </p>
  <p>
    Many countries have adopted strict energy efficiency standards for appliances, vehicles, and buildings to help curb energy consumption. These regulations often require manufacturers to meet minimum energy performance criteria, ensuring that consumers have access to products that use less electricity. For example, the Energy Star program in the United States certifies energy-efficient products that meet or exceed certain energy consumption standards, helping consumers make more informed purchasing decisions.
  </p>
  <p>
    Some governments have also implemented carbon pricing mechanisms, such as carbon taxes or cap-and-trade systems, which provide economic incentives to reduce emissions and lower energy consumption. By making carbon-intensive activities more expensive, these mechanisms encourage businesses and individuals to invest in energy-efficient technologies, renewable energy, and other sustainable practices that reduce their overall kWh usage.
  </p>
  <p>
    In addition to government efforts, many international organizations are promoting the use of energy-efficient technologies and renewable energy. For instance, the International Energy Agency (IEA) provides countries with data, analysis, and policy recommendations to help them improve energy efficiency and transition to clean energy. Organizations like the World Energy Council and the World Resources Institute are working to create a global framework for sustainable energy use, including reducing the reliance on traditional electricity generation and promoting innovative solutions to lower kWh consumption.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">Smart Technology and the Changing Landscape of kWh Consumption</h2>
  <p>
    With the advent of smart technologies, the way we consume and manage electricity has undergone a major transformation. Smart technologies, including smart meters, smart thermostats, and home automation systems, allow consumers to better monitor and control their energy usage, ultimately leading to a reduction in kWh consumption.
  </p>
  <p>
    Smart meters, for example, provide real-time data on energy consumption, allowing consumers to track their kWh usage more closely. These meters can often be accessed via mobile apps, giving users the ability to see how much energy they are consuming at any given moment and adjust their habits accordingly. By understanding their consumption patterns, consumers can make informed decisions about when to use energy-intensive appliances and when to turn them off, reducing unnecessary kWh usage.
  </p>
  <p>
    Similarly, smart thermostats like Nest or Ecobee allow homeowners to set their heating and cooling systems to optimize energy usage. These thermostats learn the homeowner's schedule and adjust the temperature accordingly, ensuring that the system doesn't run when it is not needed. This can significantly reduce the kWh consumed by heating and cooling systems, which are typically some of the largest contributors to energy consumption in homes.
  </p>
  <p>
    Home automation systems take this one step further by allowing users to control all aspects of their home’s energy use from a single platform. Lights, appliances, heating, and cooling systems can all be automated and controlled remotely, enabling users to reduce energy usage even when they are away from home. This not only saves energy but also makes it easier to monitor and manage kWh consumption from any location.
  </p>
  <p>
    In the future, the integration of artificial intelligence (AI) and the Internet of Things (IoT) with smart technologies will further optimize energy consumption. These systems will be able to predict energy needs and adjust settings automatically, ensuring that homes and businesses use the least amount of energy necessary to maintain comfort and productivity. As these technologies become more widespread, they will play a crucial role in reducing global kWh consumption and promoting a more sustainable energy future.
  </p>
</section>

    </>
  );
};

export default KwhInfo;
