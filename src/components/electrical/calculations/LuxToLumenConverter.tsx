import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const LuxToLumenConverter: React.FC = () => {
  const [lux, setLux] = useState<number>(0);  // Illuminance in lux (lx)
  const [area, setArea] = useState<number>(0);  // Area in square meters or square feet
  const [unit, setUnit] = useState<string>('m2');  // Area unit: m2 or ft2
  const [lumens, setLumens] = useState<number | string>('');  // Output luminous flux in lumens (lm)

  // Conversion function to calculate lumens
  const convertToLumens = (lux: number, area: number, unit: string) => {
    if (unit === 'ft2') {
      return 0.09290304 * lux * area;  // Lux to Lumens formula for square feet
    } else {
      return lux * area;  // Lux to Lumens formula for square meters
    }
  };

  const handleConvert = () => {
    const result = convertToLumens(lux, area, unit);
    setLumens(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      lux: 500,
      area: 4,
      expectedResult: 2000,
      unit: 'm2',
      description: 'Example: 500 lux on 4 square meters',
    },
    {
      lux: 500,
      area: 10,
      expectedResult: 464.515,
      unit: 'ft2',
      description: 'Example: 500 lux on 10 square feet',
    },
    {
      lux: 1000,
      area: 2,
      expectedResult: 2000,
      unit: 'm2',
      description: 'Example: 1000 lux on 2 square meters',
    },
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
              <Link to="/lighting-calculations">Lighting Calculations</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Lux to Lumens Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Lux to Lumens Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white ">
          <p>Convert illuminance in lux (lx) to luminous flux in lumens (lm) depending on the area and the unit of measurement.</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Illuminance in Lux (lx):</label>
              <input
                type="number"
                value={lux}
                onChange={(e) => setLux(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Area:</label>
              <input
                type="number"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Choose Area Unit:</label>
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="w-full border px-3 py-2 rounded dark:text-black"
              >
                <option value="m2">Square Meters (m²)</option>
                <option value="ft2">Square Feet (ft²)</option>
              </select>
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            <div>
              <strong>Converted Luminous Flux:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{lumens} lm</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Illuminance: {example.lux} lx, Area: {example.area} {example.unit}</p>
                    <p>Converted Luminous Flux: {example.expectedResult} lm</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>lm = lx × m²</strong> (for square meters)
                <br />
                <strong>lm = 0.09290304 × lx × ft²</strong> (for square feet)
              </p>
              <p>
                Where:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>lm = Luminous flux in lumens (lm)</li>
                  <li>lx = Illuminance in lux (lx)</li>
                  <li>m² = Area in square meters (m²)</li>
                  <li>ft² = Area in square feet (ft²)</li>
                </ul>
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from lux (lx) to lumens (lm) depends on the area that the light is spread over.
                <br />
                - For square meters: lumens (lm) = lux (lx) × area (m²)
                <br />
                - For square feet: lumens (lm) = 0.09290304 × lux (lx) × area (ft²)
                <br />
                This formula calculates how much luminous flux (in lumens) is received by the surface, based on the illuminance (in lux) and the area.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Example Calculation:</h2>
              <p>
                What is the luminous flux in lumens if an area of 4 square meters receives 500 lux of light?
                <br />
                Using the formula: lumens = lux × area, we get lumens = 500 × 4 = 2000 lm.
              </p>
            </div>
          </div>

          <div>
  <h2 className="font-semibold text-base mt-6 mb-2">Why Convert Lux to Lumens?</h2>
  <p>
    While lux measures the amount of light falling on a surface, lumens describe the total output of a light source. In many lighting design scenarios, you know the required lux levels for a space but need to determine how many lumens — and ultimately how many fixtures — are needed to achieve those levels.
  </p>
  <p className="mt-2">
    This converter reverses the traditional lumen-to-lux calculation and gives lighting designers, architects, and engineers a practical tool to size systems appropriately, ensuring adequate light distribution and visual comfort.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Use Cases in Architecture and Design:</h2>
  <p>
    Lux targets are frequently referenced in architectural standards and codes such as EN 12464-1, ANSI/IES RP-1, and ISO 8995. Knowing how to convert lux back into lumens allows professionals to:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Calculate total luminous flux needed for a space</li>
    <li>Plan fixture layouts and lumen packages</li>
    <li>Ensure compliance with workplace lighting guidelines</li>
    <li>Optimize energy use by avoiding over-lighting</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Applications Across Industries:</h2>
  <p>
    Converting lux to lumens is essential across diverse sectors. For instance:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Education:</strong> Classrooms require 300–500 lux across large areas. Knowing the area helps calculate the total lumen output needed.</li>
    <li><strong>Healthcare:</strong> Operating rooms demand 1000+ lux — this must be converted to lumens to size and choose lighting systems.</li>
    <li><strong>Retail:</strong> Lux levels affect product visibility. Designers calculate lumens needed to meet merchandising goals and visual consistency.</li>
    <li><strong>Industrial:</strong> Assembly lines and quality inspection zones need reliable lux-to-lumen calculations to ensure safety and accuracy.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Photometry and Lighting Layouts:</h2>
  <p>
    Advanced lighting plans rely on photometric software, but early-stage planning still benefits greatly from manual lux-to-lumen conversions. For example:
  </p>
  <p className="mt-2">
    To maintain 500 lux across a 120 m² open-plan office:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    Required lumens = 500 × 120 = 60,000 lm
  </p>
  <p>
    If you're using 3000-lumen LED panels, you’d need:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    60,000 ÷ 3000 = 20 fixtures
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Vertical vs. Horizontal Area:</h2>
  <p>
    It's important to note whether you're measuring light over horizontal (tables, floors) or vertical (walls, displays) surfaces. The conversion math remains the same, but the **context** changes:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Horizontal areas</strong> are common in workspaces, corridors, and homes.</li>
    <li><strong>Vertical areas</strong> matter in museums, lobbies, signage, and security lighting.</li>
  </ul>
  <p className="mt-2">
    Always define your target surface orientation when calculating lumens from lux.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Conversion in Different Units:</h2>
  <p>
    When dealing with square feet, the conversion requires an additional step. Since 1 square foot = 0.09290304 square meters, your lux-to-lumen equation becomes:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    lm = 0.09290304 × lux × area (in ft²)
  </p>
  <p>
    This means a 10 ft² space lit at 500 lux needs:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    0.09290304 × 500 × 10 = 464.515 lm
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Human-Centric Lighting Design:</h2>
  <p>
    Converting lux to lumens isn't just about numbers — it helps create better human experiences. A few examples:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Reading rooms:</strong> need soft yet focused light. You might aim for 400 lux over 2 m² — requiring 800 lumens total.</li>
    <li><strong>Artwork walls:</strong> may be lit at only 150–200 lux to preserve materials. For a 3 m² canvas, you'd limit output to 600 lumens.</li>
    <li><strong>Bedrooms:</strong> favor layered lighting — general ambient light of 150 lux and reading lights at 400–500 lux.</li>
  </ul>
  <p className="mt-2">
    This converter supports such nuanced design work by making back-calculations from lighting standards fast and intuitive.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Energy Optimization:</h2>
  <p>
    Over-illumination wastes power. Using lux-to-lumen calculations, you can detect where:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Fewer or lower-power fixtures will still meet lighting targets</li>
    <li>Occupancy sensors or dimmers could reduce over-lighting</li>
    <li>Old technologies (CFL, halogen) can be replaced with high-lumen/watt LEDs</li>
  </ul>
  <p>
    This contributes to more sustainable, cost-effective lighting plans — especially in large commercial or municipal buildings.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">How Photometry Supports Lux to Lumen Conversion</h2>
  <p>
    Photometry is the science of measuring visible light. It helps quantify the relationship between light emitted from a source (lumens) and the illuminance received on a surface (lux). This converter offers a bridge between those two units, helping both engineers and casual users understand lighting requirements in practical terms.
  </p>
  <p>
    Lux = Lumens / Area (m²) — this is a basic photometric equation that allows us to calculate the luminous flux necessary to illuminate an area adequately.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Lighting Simulation and Planning</h2>
  <p>
    Professionals often use lux planning software to simulate light distribution, but this tool is perfect for pre-planning or estimating without needing CAD files or IES photometric data. Suppose you're renovating a 40 m² conference room and the target illuminance is 500 lux. This means:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    Required Lumens = 500 lux × 40 m² = 20,000 lm
  </p>
  <p>
    If each light fixture outputs 2000 lumens, you’d need at least 10 fixtures, assuming even light distribution and minimal losses.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Impact of Mounting Height and Light Loss</h2>
  <p>
    Lux-to-lumen calculations assume ideal conditions, but in real installations, factors like ceiling height and fixture quality influence actual lux received. Higher mounting heights result in greater light dispersion and lower lux per unit area. Designers typically add a light loss factor (LLF) or maintenance factor (MF) ranging from 0.7 to 0.9 to account for:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Dust on fixtures or lamps</li>
    <li>Degradation of lamp brightness over time</li>
    <li>Obstructions or shadows caused by furniture</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Zone-Based Lighting Distribution</h2>
  <p>
    Different zones in a room may require different lux targets. Using this converter, you can break down a large room into smaller zones and calculate lumens separately for:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Task lighting zones (e.g., desks, counters): 500–750 lux</li>
    <li>Ambient zones (e.g., hallways): 100–300 lux</li>
    <li>Accent areas (e.g., artwork): 200–300 lux</li>
  </ul>
  <p>
    This ensures balanced lighting that supports usability and visual appeal.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Designing with Efficiency in Mind</h2>
  <p>
    Lighting efficiency is not only about achieving sufficient lux but doing so with minimal energy. For example, two rooms may both target 500 lux, but if one uses LEDs with 150 lm/W and the other halogen bulbs with 20 lm/W, the energy consumption will vary drastically. By converting lux to lumens, and then comparing fixture specs, you can identify:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Over-lit areas wasting power</li>
    <li>Under-lit areas needing correction</li>
    <li>Fixtures with poor efficacy that need replacement</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Smart Lighting and Lux-Based Automation</h2>
  <p>
    In modern buildings, smart lighting systems use lux sensors to trigger automation. For instance:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Dim lights when enough daylight is present</li>
    <li>Increase brightness when lux drops below a set threshold</li>
    <li>Integrate with HVAC systems to balance energy loads</li>
  </ul>
  <p>
    Calculating lumens from lux helps you set accurate thresholds for automation scripts or hardware configurations in smart homes and commercial BMS platforms.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Field Measurement and Audit Support</h2>
  <p>
    When auditing lighting installations, field measurements with a lux meter give you current illuminance. Using this converter, you can reverse-calculate how much light is being delivered and determine if additional fixtures or layout changes are necessary.
  </p>
  <p>
    For example, if your meter shows 300 lux over a 6 m² workstation, you're receiving:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    300 × 6 = 1800 lumens
  </p>
  <p>
    If the spec said 2000 lm, then you're getting 90% of expected output — a reasonable result after accounting for real-world losses.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Integrating Reflectance and Surface Color</h2>
  <p>
    Wall and floor color significantly impact perceived brightness. Reflective surfaces amplify lux without increasing lumens. For instance:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>White surfaces reflect up to 80% of incident light</li>
    <li>Dark carpets or paint can absorb 50%+ of light</li>
    <li>Glossy finishes bounce light more than matte</li>
  </ul>
  <p>
    While this tool gives a base lumen value, designers adjust based on surface reflectance coefficients to achieve target lux uniformly.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Typical Lux Recommendations by Application</h2>
  <p>
    Here's a quick reference guide for common environments:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Residential (bedroom, living): 100–300 lx</li>
    <li>Office (desk task areas): 300–500 lx</li>
    <li>Hospital exam room: 1000 lx</li>
    <li>Retail: 500–750 lx</li>
    <li>Stairways or storage: 100 lx</li>
    <li>Art galleries: 200–300 lx (conservation zones)</li>
  </ul>
  <p>
    This tool helps estimate lumens needed for those targets given the room’s dimensions.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Conclusion:</h2>
  <p>
    Whether you're lighting a conference hall, a hallway, or a home office, understanding how lux translates into lumens is key to effective, safe, and aesthetically pleasing lighting.
  </p>
  <p className="mt-2">
    This tool bridges theory and application, allowing designers to reverse-engineer their lighting needs with clarity and confidence. Use it in early drafts, code compliance checks, or real-time discussions with clients to ensure lighting goals are fully met.
  </p>
</div>


        </CardContent>
      </Card>
    </div>
  );
};

export default LuxToLumenConverter;
