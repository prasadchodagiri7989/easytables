import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const WattsToLumensConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(10); // Default 10 Watts
  const [efficacy, setEfficacy] = useState<number>(80); // Default luminous efficacy 80 lm/W
  const [lumens, setLumens] = useState<number | string>('—'); // Luminous flux in lumens

  const calculateLumens = (watts: number, efficacy: number) => {
    return watts * efficacy;
  };

  const handleConvert = () => {
    const result = calculateLumens(watts, efficacy);
    setLumens(result);
  };

  const examples = [
    { watts: 5, efficacy: 100, expectedResult: 500, description: "5 W LED bulb with 100 lm/W" },
    { watts: 15, efficacy: 65, expectedResult: 975, description: "15 W CFL bulb with 65 lm/W" },
    { watts: 60, efficacy: 15, expectedResult: 900, description: "60 W incandescent bulb with 15 lm/W" },
    { watts: 8, efficacy: 120, expectedResult: 960, description: "8 W LED spotlight with 120 lm/W" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
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
              <Link to="/energy-conversions">Energy Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Watts to Lumens Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Watts to Lumens Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Convert electrical power in watts (W) to luminous flux in lumens (lm) based on luminous efficacy (lm/W).
            This tool is useful for understanding the light output of bulbs, lamps, and other lighting devices based on their power consumption and efficacy.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Watts (W):</label>
              <input
                type="number"
                value={watts}
                onChange={(e) => setWatts(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Luminous Efficacy (lm/W):</label>
              <input
                type="number"
                value={efficacy}
                onChange={(e) => setEfficacy(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            <div>
              <strong>Converted Lumens:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{lumens} lm</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Watts: {example.watts} W, Efficacy: {example.efficacy} lm/W</p>
                    <p>Converted Lumens: {example.expectedResult} lm</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>Lumens = Watts × Efficacy (lm/W)</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>lm</strong>: Luminous flux in lumens (lm)</li>
                <li><strong>W</strong>: Power in watts (W)</li>
                <li><strong>lm/W</strong>: Luminous efficacy in lumens per watt (lm/W)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from watts (W) to lumens (lm) is based on the formula:
                <br />
                - Lumens (lm) is equal to watts (W) multiplied by luminous efficacy (lm/W).
                <br />
                - This helps you determine the light output in lumens for a given wattage and efficacy.
                <br />
                For example, a 10W LED bulb with an efficacy of 100 lm/W will provide 1000 lumens of light. This value is crucial for understanding how bright a light source will be based on its power consumption.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Luminous Efficacy Table:</h2>
              <table className="table-auto w-full border-collapse border">
                <thead>
                  <tr>
                    <th className="border p-2 text-left">Light Type</th>
                    <th className="border p-2 text-left">Typical Luminous Efficacy (lm/W)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border p-2">Tungsten incandescent light bulb</td><td className="border p-2">12.5-17.5 lm/W</td></tr>
                  <tr><td className="border p-2">Halogen lamp</td><td className="border p-2">16-24 lm/W</td></tr>
                  <tr><td className="border p-2">Fluorescent lamp</td><td className="border p-2">45-75 lm/W</td></tr>
                  <tr><td className="border p-2">LED lamp</td><td className="border p-2">80-100 lm/W</td></tr>
                  <tr><td className="border p-2">Metal halide lamp</td><td className="border p-2">75-100 lm/W</td></tr>
                  <tr><td className="border p-2">High pressure sodium vapor lamp</td><td className="border p-2">85-150 lm/W</td></tr>
                  <tr><td className="border p-2">Low pressure sodium vapor lamp</td><td className="border p-2">100-200 lm/W</td></tr>
                  <tr><td className="border p-2">Mercury vapor lamp</td><td className="border p-2">35-65 lm/W</td></tr>
                </tbody>
              </table>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Real-Life Applications:</h2>
              <p>
                Understanding the watts-to-lumens conversion is essential in selecting the right light bulb or lamp for various applications. For example:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Residential Lighting:</strong> If you're replacing a 60W incandescent bulb with an LED bulb, knowing the lumens output helps you choose the right brightness without using more power.</li>
                <li><strong>Energy-efficient Lighting:</strong> LED lights typically offer better luminous efficacy, meaning they produce more light with less energy consumption, making them ideal for both residential and commercial spaces.</li>
                <li><strong>Outdoor Lighting:</strong> For outdoor security lighting, understanding the luminous output of different light sources (based on watts and efficacy) helps you achieve optimal brightness for visibility and safety.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Frequently Asked Questions (FAQs):</h2>
              <div>
                <h3 className="font-semibold">1. Why do different light bulbs have different luminous efficacy?</h3>
                <p>
                  Luminous efficacy varies based on the technology used in the light bulb. LED bulbs have much higher efficacy than incandescent bulbs because they convert more electrical energy into visible light. On the other hand, incandescent bulbs waste much of the energy as heat.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">2. How can I calculate the energy savings when switching from incandescent to LED?</h3>
                <p>
                  To calculate the energy savings, you can compare the watts consumed by the incandescent bulb to the LED bulb. For example, replacing a 60W incandescent bulb with a 10W LED bulb can reduce energy consumption by 83%. Multiply the savings by the number of hours the bulb is used to calculate the total savings.
                </p>
              </div>
            </div>
          </div>
          <h2 className="font-semibold text-base mt-6 mb-2">Understanding Light Output and Efficiency</h2>
      <p>
        Lighting efficiency is a key consideration when selecting bulbs for different applications. In the Watts to Lumens Converter, you can see how much light is emitted per watt of energy consumed. However, the efficiency can vary depending on the type of bulb and its technology.
      </p>

      <div>
        <h3 className="font-semibold text-base mt-4 mb-2">Different Types of Light Bulbs and Their Efficiency</h3>
        <p>
          When discussing Watts and Lumens, it’s important to consider the technology behind the light bulb. Different types of bulbs have varying levels of luminous efficacy, which is the amount of light (lumens) produced per watt of electricity consumed. Here’s a breakdown of common bulb types:
        </p>

        <table className="table-auto w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2 text-left">Bulb Type</th>
              <th className="border p-2 text-left">Average Efficacy (lm/W)</th>
              <th className="border p-2 text-left">Average Wattage (for 800 Lumens)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">Incandescent</td><td className="border p-2">12-15 lm/W</td><td className="border p-2">60W</td></tr>
            <tr><td className="border p-2">CFL (Compact Fluorescent Lamp)</td><td className="border p-2">45-75 lm/W</td><td className="border p-2">13-18W</td></tr>
            <tr><td className="border p-2">LED</td><td className="border p-2">80-100 lm/W</td><td className="border p-2">8-10W</td></tr>
            <tr><td className="border p-2">Halogen</td><td className="border p-2">16-24 lm/W</td><td className="border p-2">50W</td></tr>
          </tbody>
        </table>
        
        <p>
          As seen from the table, LED bulbs have the highest luminous efficacy, meaning they can produce the same light output with less energy consumption compared to incandescent or halogen bulbs.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-base mt-4 mb-2">Calculating the Right Bulb for Specific Light Output</h3>
        <p>
          To choose the right bulb for your space, you'll want to estimate the light output you need in lumens and match it with the appropriate wattage based on the bulb type. This section explains how to calculate the right bulb wattage for a given lumen output.
        </p>
        <p>
          To calculate the required wattage based on lumen output, use the following formula:
        </p>
        <pre className="bg-gray-100 p-2 rounded font-mono text-sm dark:text-black">Required Wattage = Desired Lumens / Luminous Efficacy (lm/W)</pre>
        <p>
          For example, if you need 800 lumens from an LED bulb with a luminous efficacy of 90 lm/W:
        </p>
        <pre className="bg-gray-100 p-2 rounded font-mono text-sm dark:text-black">Required Wattage = 800 lm / 90 lm/W = 8.89 Watts</pre>
        <p>
          This shows that an 8.89W LED bulb will produce approximately 800 lumens, which is equivalent to the light output of a standard 60W incandescent bulb.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-base mt-4 mb-2">Common Applications for Various Lumen Levels</h3>
        <p>
          Different environments require different levels of brightness, measured in lumens. Here are some typical lumen outputs for various common lighting applications:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Reading Lights:</strong> 300-500 lumens</li>
          <li><strong>Task Lighting (kitchen, office):</strong> 500-1,000 lumens</li>
          <li><strong>Living Room/Bedroom Lighting:</strong> 1,000-3,000 lumens</li>
          <li><strong>Outdoor Lighting (garden, porch):</strong> 1,500-3,000 lumens</li>
          <li><strong>High-Intensity Applications (workshops, garage):</strong> 4,000+ lumens</li>
        </ul>
        <p>
          You can use these guidelines to determine how much light you need for different spaces. For instance, a small reading lamp may only need 400 lumens, while your living room lighting could require around 2,000 lumens.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-base mt-4 mb-2">Comparing Watts to Lumens for Energy Savings</h3>
        <p>
          One of the biggest advantages of switching to LED bulbs is the significant reduction in energy consumption. For instance, if you replace a 60W incandescent bulb with a 10W LED bulb, you’ll use 1/6 of the energy to achieve the same light output.
        </p>
        <p>
          Using the formula:
        </p>
        <pre className="bg-gray-100 p-2 rounded font-mono text-sm dark:text-black">Energy Savings = (Old Wattage - New Wattage) × Hours of Use per Day × Days per Year</pre>
        <p>
          Let’s say you replace a 60W incandescent bulb with a 10W LED bulb and use it for 5 hours a day for 365 days:
        </p>
        <pre className="bg-gray-100 p-2 rounded font-mono text-sm dark:text-black">
Energy Savings = (60W - 10W) × 5 hours/day × 365 days/year = 91,250 Wh = 91.25 kWh per year
        </pre>
        <p>
          In this example, switching to LED can save you over 91 kWh per year, which can significantly reduce your electricity bill.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-base mt-4 mb-2">Adjusting Your Lighting for Different Needs</h3>
        <p>
          Not all lighting applications are created equal, and you may need different levels of brightness depending on your specific needs. Here’s how to adjust your lighting:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>For Focused Work (e.g., desk, reading):</strong> Choose bulbs with higher lumens and color temperatures closer to daylight (5,000K-6,500K).</li>
          <li><strong>For Ambiance (e.g., living rooms, dining rooms):</strong> Choose bulbs with lower lumens for a more relaxed, dimmed light effect.</li>
          <li><strong>For Outdoors (e.g., security lights):</strong> Choose high-lumen bulbs to ensure visibility in dark areas. A brighter light of 2,000+ lumens is generally recommended.</li>
        </ul>
        <p>
          By adjusting the lumen output and color temperature, you can create the perfect lighting atmosphere for different areas of your home or workplace.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-base mt-4 mb-2">Conclusion: Efficiency and Practicality Combined</h3>
        <p>
          Choosing the right bulb involves understanding both the wattage and the lumen output to meet your needs while minimizing energy consumption. By using the right bulb for each task, you can not only reduce your electricity usage but also optimize the lighting in your home, ensuring you have enough brightness in every room.
        </p>
        <p>
          Remember, LEDs are the most efficient bulbs available today, offering excellent lumen output with minimal wattage. As energy efficiency becomes a priority for households and businesses, understanding how to select the best light bulb for your needs can lead to considerable savings and environmental benefits.
        </p>
      </div>
      <h2 className="font-semibold text-base mt-6 mb-2">The Role of Color Temperature in Lighting</h2>
      <p>
        While wattage and lumens play a crucial role in determining the brightness and energy consumption of a bulb, another key factor to consider is the <strong>color temperature</strong>, which affects the appearance of the light produced by the bulb. Measured in Kelvin (K), color temperature defines whether the light is warm, cool, or neutral. It’s important to choose the right color temperature based on the mood you want to create or the task you’re performing.
      </p>

      <div>
        <h3 className="font-semibold text-base mt-4 mb-2">Understanding Color Temperature</h3>
        <p>
          Color temperature is classified into the following categories:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Warm White (2,700K to 3,000K):</strong> Provides a soft, cozy light ideal for living rooms, bedrooms, and dining areas. It creates a relaxed, inviting atmosphere.</li>
          <li><strong>Neutral White (3,500K to 4,100K):</strong> Produces a balanced, natural light suitable for kitchens, bathrooms, and workspaces, providing a bright but comfortable environment.</li>
          <li><strong>Cool White (4,500K to 6,500K):</strong> Emits a bright, crisp light that resembles daylight. Perfect for areas requiring high visibility like garages, workshops, or outdoor lighting.</li>
        </ul>
        <p>
          Choosing the right color temperature can significantly impact how comfortable and productive you feel in different environments. For example, cooler light (above 4,000K) is often preferred for tasks that require focus, while warmer light (below 3,000K) is best for relaxation.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-base mt-4 mb-2">How to Choose the Right Lumens for Your Space</h3>
        <p>
          Selecting the appropriate lumen output for each room in your home or office is essential to ensuring adequate lighting levels without wasting energy. The amount of light you need depends on the function of the space and the desired ambiance.
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Living Room:</strong> 1,500-3,000 lumens, depending on the size of the room. You may want a combination of general and task lighting here.</li>
          <li><strong>Bedroom:</strong> 1,000-2,000 lumens. Softer light is usually preferred, but you can adjust depending on activities like reading.</li>
          <li><strong>Kitchen:</strong> 3,000-6,000 lumens, as you need bright, focused lighting for cooking and meal prep. Use task lighting above workspaces.</li>
          <li><strong>Bathroom:</strong> 2,000-4,000 lumens, depending on the size of the space. Bright, even lighting is essential for grooming tasks.</li>
          <li><strong>Office:</strong> 3,000-6,000 lumens. Bright, cool light can help increase focus and productivity. Desk lamps can provide additional task lighting.</li>
          <li><strong>Hallways and Corridors:</strong> 1,000-2,000 lumens. Soft lighting works well here to avoid harsh glares.</li>
          <li><strong>Outdoors:</strong> 2,000-3,000 lumens for general lighting. For security lighting, brighter bulbs may be required to illuminate large areas effectively.</li>
        </ul>
        <p>
          By matching the lumen output with the function of the room, you ensure both the practicality and aesthetic of the lighting design. It’s also essential to account for the layout and the number of bulbs used in a space.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-base mt-4 mb-2">Calculating Lumen Output for Multiple Bulbs</h3>
        <p>
          If you plan to use multiple bulbs in a single room, it’s important to calculate the total lumen output to ensure the space is sufficiently illuminated. The total lumen output for multiple bulbs is simply the sum of the lumens each bulb produces.
        </p>
        <p>
          For example, if you use four 800-lumen LED bulbs in your living room:
        </p>
        <pre className="bg-gray-100 p-2 rounded font-mono text-sm">Total Lumens = 4 bulbs × 800 lumens/bulb = 3,200 lumens</pre>
        <p>
          In this example, the total lumen output would be 3,200 lumens, which is suitable for medium to large-sized living rooms, depending on the lighting needs.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-base mt-4 mb-2">Lighting Design Tips: Layering Light</h3>
        <p>
          A key principle in lighting design is to use a combination of different types of lighting to create a balanced, functional, and aesthetically pleasing environment. This technique is called <strong>layered lighting</strong>.
        </p>
        <p>
          There are three main types of lighting to incorporate in a well-lit space:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Ambient Lighting:</strong> General lighting that provides overall illumination for the room (e.g., ceiling fixtures, chandeliers, recessed lights).</li>
          <li><strong>Task Lighting:</strong> Focused lighting for specific activities like reading, cooking, or working (e.g., desk lamps, under-cabinet lights, pendant lights over a kitchen island).</li>
          <li><strong>Accent Lighting:</strong> Decorative lighting used to highlight certain features or create mood (e.g., wall sconces, spotlights, table lamps, and chandeliers). This type of lighting often adds visual interest to the space.</li>
        </ul>
        <p>
          Layering these different lighting types creates a more dynamic and versatile lighting environment. For example, in a living room, you might use overhead ambient lighting for general illumination, table lamps or wall sconces for accent lighting, and task lighting like floor lamps for reading.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-base mt-4 mb-2">The Future of Lighting: Smart Bulbs and Automation</h3>
        <p>
          The lighting industry is evolving rapidly, with the advent of <strong>smart bulbs</strong> and <strong>smart home integration</strong> becoming more common. Smart bulbs allow you to control your lighting remotely using apps, voice commands, or sensors, offering greater flexibility and energy efficiency. With smart lighting systems, you can adjust the brightness and color temperature of your bulbs to suit different activities, moods, or times of day.
        </p>
        <p>
          Additionally, smart lighting systems can be integrated into your home automation setup. You can set schedules, automate dimming based on time of day, or have the lights react to your actions (such as turning on when you enter a room).
        </p>
        <p>
          While smart bulbs are typically more expensive than traditional bulbs, they can save energy in the long run due to their advanced features like dimming and automatic shutoff. The increased control and customization they offer make them ideal for creating the perfect lighting for every situation.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-base mt-4 mb-2">Conclusion: The Importance of Efficient Lighting</h3>
        <p>
          Whether you’re illuminating your home, office, or outdoor spaces, selecting the right lighting setup is crucial for both functionality and comfort. By understanding lumens, wattage, color temperature, and the different types of lighting, you can make informed decisions that enhance your lighting design, improve your energy efficiency, and create the perfect atmosphere in any space.
        </p>
        <p>
          Energy-efficient options like LED bulbs can save you money in the long run, while providing brighter, more effective lighting. As lighting technology continues to improve, you can look forward to even more efficient, customizable, and environmentally friendly options that can meet the diverse needs of modern spaces.
        </p>
      </div>
   
        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToLumensConverter;
