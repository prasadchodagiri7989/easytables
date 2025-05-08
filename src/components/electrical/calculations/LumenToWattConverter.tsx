import React, { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const LumenToWattConverter: React.FC = () => {
  const [lumens, setLumens] = useState<number>(0);  // Luminous flux in lumens (lm)
  const [efficacy, setEfficacy] = useState<number>(1);  // Luminous efficacy in lumens per watt (lm/W)
  const [power, setPower] = useState<number | string>('—');  // Output power in watts (W)

  const convertToWatt = (lumens: number, efficacy: number) => {
    return lumens / efficacy;  // P(W) = ΦV(lm) / η(lm/W)
  };

  const handleConvert = () => {
    const result = convertToWatt(lumens, efficacy);
    setPower(result);
  };

  const examples = [
    { lumens: 900, efficacy: 15, expectedResult: 60, description: '900 lumens with efficacy of 15 lm/W' },
    { lumens: 1500, efficacy: 25, expectedResult: 60, description: '1500 lumens with efficacy of 25 lm/W' },
    { lumens: 3000, efficacy: 50, expectedResult: 60, description: '3000 lumens with efficacy of 50 lm/W' },
    { lumens: 600, efficacy: 10, expectedResult: 60, description: '600 lumens with efficacy of 10 lm/W' },
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
            <BreadcrumbPage>Lumens to Watts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Lumens to Watts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert luminous flux in lumens (lm) and luminous efficacy in lumens per watt (lm/W) to power in watts (W).</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Luminous Flux in Lumens (lm):</label>
              <input
                type="number"
                value={lumens}
                onChange={(e) => setLumens(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Luminous Efficacy in Lumens per Watt (lm/W):</label>
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
              <strong>Converted Power:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{power} W</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Lumens: {example.lumens} lm, Efficacy: {example.efficacy} lm/W</p>
                    <p>Converted Power: {example.expectedResult} W</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>W = lm / (lm/W)</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>W</strong>: Power in watts (W)</li>
                <li><strong>lm</strong>: Luminous flux in lumens (lm)</li>
                <li><strong>lm/W</strong>: Luminous efficacy in lumens per watt (lm/W)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from lumens (lm) to watts (W) is based on the formula:
                <br />
                - Power (W) is equal to luminous flux (lumens) divided by luminous efficacy (lumens per watt).
                <br />
                - This conversion helps us calculate how much power (in watts) is required to produce a certain amount of luminous flux (lumens) with a given luminous efficacy.
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
              <h2 className="font-semibold text-base mt-6 mb-2">Lumens to Watts Table:</h2>
              <table className="table-auto w-full border-collapse border">
                <thead>
                  <tr>
                    <th className="border p-2">Lumens</th>
                    <th className="border p-2">Incandescent Light Bulb (W)</th>
                    <th className="border p-2">Fluorescent/LED (W)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border p-2">375 lm</td><td className="border p-2">25 W</td><td className="border p-2">6.23 W</td></tr>
                  <tr><td className="border p-2">600 lm</td><td className="border p-2">40 W</td><td className="border p-2">10 W</td></tr>
                  <tr><td className="border p-2">900 lm</td><td className="border p-2">60 W</td><td className="border p-2">15 W</td></tr>
                  <tr><td className="border p-2">1125 lm</td><td className="border p-2">75 W</td><td className="border p-2">18.75 W</td></tr>
                  <tr><td className="border p-2">1500 lm</td><td className="border p-2">100 W</td><td className="border p-2">25 W</td></tr>
                  <tr><td className="border p-2">2250 lm</td><td className="border p-2">150 W</td><td className="border p-2">37.5 W</td></tr>
                  <tr><td className="border p-2">3000 lm</td><td className="border p-2">200 W</td><td className="border p-2">50 W</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
  <h2 className="font-semibold text-base mt-6 mb-2">Industry-Specific Use of Lux Standards:</h2>
  <p>
    Different industries rely on strict lux requirements to ensure not just visibility, but safety, accuracy, and comfort. For example:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Manufacturing floors</strong> require 300–1000 lx to reduce errors and improve operator focus.</li>
    <li><strong>Warehousing</strong> typically targets 150–200 lx in storage zones, but 300–500 lx in loading docks.</li>
    <li><strong>Airports</strong> use lighting between 300–750 lx in terminals for safe navigation and clear signage.</li>
    <li><strong>Parking lots and garages</strong> are maintained at 50–100 lx for security and surveillance clarity.</li>
    <li><strong>Libraries and labs</strong> require focused zones at 500–750 lx for detailed reading and precision tasks.</li>
  </ul>
  <p className="mt-2">
    By converting lumens to lux during project planning, designers ensure lighting layouts comply with industry norms and user expectations.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Uniformity and Photometric Modeling:</h2>
  <p>
    Lux distribution should not only reach the target level but also be <strong>uniform</strong> across the space. High contrast between bright and dim areas can cause visual discomfort. Photometric modeling tools (like Dialux or AGi32) use lux calculations across 3D space to optimize light placement.
  </p>
  <ul className="list-disc list-inside ml-4 mt-2">
    <li>Maintain a uniformity ratio of at least 0.7 between average and minimum lux.</li>
    <li>Adjust ceiling heights and beam angles to avoid shadow pockets.</li>
    <li>Use overlapping light zones to even out brightness and reduce fixture count.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Practical Lighting Audit Tips:</h2>
  <p>
    Converting lumens to lux also assists in conducting lighting audits. Here's how to apply the converter in real-world audits:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Measure actual lumens output from installed fixtures using a light meter or spec sheet.</li>
    <li>Input lumens and the measured area into the converter to verify current lux levels.</li>
    <li>Compare against required lux standards for the task or industry.</li>
    <li>Use results to recommend retrofits with higher-efficacy lighting (e.g., replacing CFL with LED).</li>
    <li>Document findings in reports for energy compliance or performance improvements.</li>
  </ul>
  <p className="mt-2">
    This approach is especially useful in offices, schools, and municipal buildings where government regulations may require proof of illumination levels.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Lighting and Visual Ergonomics:</h2>
  <p>
    Visual ergonomics examines how lighting affects reading, recognition, and reaction speed. By converting lumens to lux for reading desks, control panels, or signage:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Reduce glare and hotspots by balancing fixture brightness.</li>
    <li>Ensure sufficient task lighting in kitchens, workbenches, and production lines.</li>
    <li>Apply tunable white or dim-to-warm technologies for flexible lux ranges.</li>
  </ul>
  <p className="mt-2">
    This ensures environments are not only functional but also comfortable for prolonged visual tasks.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Daylight Integration and Smart Lux Control:</h2>
  <p>
    With the rise of smart buildings, lux sensors now work with automated lighting systems to adjust artificial light based on ambient daylight levels.
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Windows and skylights can contribute significant lux — often 500–2000 lx at midday.</li>
    <li>Using lux converters helps determine how much artificial lighting is still needed.</li>
    <li>Occupancy and daylight sensors can dim lights in real-time to maintain target lux with minimal energy use.</li>
  </ul>
  <p className="mt-2">
    This balance reduces costs, extends fixture lifespan, and aligns with sustainability goals like LEED or WELL building standards.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Final Thoughts:</h2>
  <p>
    Whether you're illuminating a gallery, designing an office, or retrofitting a hotel lobby, converting lumens to lux is the foundation of effective light planning. It ensures your lighting design is human-friendly, budget-aware, and aligned with both safety standards and architectural goals.
  </p>
  <p className="mt-2">
    This converter is more than a calculator — it’s a bridge between vision and precision. Use it often, validate your designs, and bring better lighting to every space you shape.
  </p>
</div>


<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Photometric Files and Simulation Tools:</h2>
  <p>
    Professional lighting designers often rely on <strong>IES photometric files</strong> to simulate how a light source performs in a 3D space. These files contain detailed data about light distribution, beam angles, and intensity gradients — all of which affect lux on a surface.
  </p>
  <p className="mt-2">
    Simulation software like <strong>Dialux</strong> or <strong>Relux</strong> uses these files to generate lux distribution maps across rooms, facades, or outdoor fields. While our converter offers fast estimation, pairing it with photometric simulation helps achieve design-grade precision.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Horizontal vs. Vertical Illuminance:</h2>
  <p>
    While lux is usually measured on a horizontal plane (e.g., desks or floors), <strong>vertical illuminance</strong> is equally important — especially in applications like:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Face illumination</strong> in video conferencing or classrooms</li>
    <li><strong>Wall-mounted displays</strong> in galleries, museums, and exhibitions</li>
    <li><strong>Vertical signage</strong> in malls, transportation hubs, or offices</li>
    <li><strong>Security lighting</strong> for visibility of people approaching entrances</li>
  </ul>
  <p className="mt-2">
    Always consider the lighting angle and orientation when designing for vertical surfaces. Lux values vary depending on how directly the light hits the surface.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Lux Mapping in Architecture:</h2>
  <p>
    In architecture, lux mapping helps visualize how natural and artificial light distribute across building interiors. Architects and interior designers use lux maps to:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Identify under-lit corners or overexposed surfaces</li>
    <li>Choose optimal fixture types and placements</li>
    <li>Balance lighting aesthetics with energy savings</li>
    <li>Coordinate material reflectance and surface finishes</li>
  </ul>
  <p className="mt-2">
    For example, reflective tiles or glossy floors might scatter light, increasing perceived brightness. This means you may need fewer lumens to achieve the same lux, reducing costs.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Lux and Productivity:</h2>
  <p>
    Numerous studies confirm that lux levels affect task accuracy, fatigue, and well-being. For instance:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Offices lit at <strong>500 lux</strong> report fewer typing errors than those at 300 lux.</li>
    <li>In retail, <strong>increased lux near product shelves</strong> improves sales by enhancing visual appeal.</li>
    <li>Schools with optimized lighting see <strong>up to 20% performance improvement</strong> in reading and math tests.</li>
  </ul>
  <p className="mt-2">
    By converting lumens to lux and aligning design with research-backed benchmarks, you can optimize environments for better focus, accuracy, and satisfaction.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Lux for Safety and Security:</h2>
  <p>
    Adequate lux levels in public areas are essential for safety. In outdoor and semi-enclosed spaces:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>30–50 lux</strong> helps in identifying obstacles, reading signage, and navigating parking areas.</li>
    <li><strong>100 lux+</strong> is required for high-risk zones like stairs, escalators, and entrances.</li>
    <li><strong>Security cameras</strong> need consistent vertical lux to capture facial features or license plates.</li>
  </ul>
  <p className="mt-2">
    This converter allows designers to plan lighting that meets standards like ANSI/IES RP-8 or ISO 8995, which define lux levels for pathways and urban spaces.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Emergency Lighting and Lux Requirements:</h2>
  <p>
    Emergency lighting systems also follow strict lux requirements. According to global safety codes:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Exit paths</strong> must maintain at least 1–5 lux during a power outage.</li>
    <li><strong>Fire safety equipment</strong> zones require 10–15 lux for easy visibility.</li>
    <li><strong>Elevator shafts</strong> must provide 50–100 lux under emergency conditions.</li>
  </ul>
  <p className="mt-2">
    During audits or simulations, this tool helps confirm that emergency setups achieve minimum lux thresholds in all required zones.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Impact of Glare and Over-Illumination:</h2>
  <p>
    While high lux can be desirable in some settings, excessive brightness — especially if uneven — leads to <strong>glare</strong>. This affects concentration, causes discomfort, and may even violate workplace lighting standards.
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Ensure balanced lighting by layering ambient, task, and accent lighting.</li>
    <li>Use matte finishes and anti-glare screens to minimize light reflections.</li>
    <li>Choose beam angles and fixture positioning to avoid shining directly into eyes.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Color Temperature and Lux Perception:</h2>
  <p>
    Though lux measures intensity, the <strong>color temperature</strong> of a light source also affects how bright it feels. Warmer lights (2700–3000K) are perceived as dimmer compared to cooler lights (5000–6500K) at the same lux level.
  </p>
  <p>
    This psychological effect plays a key role in mood-based lighting — for example:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Hospitals use <strong>cool white</strong> in surgery zones for alertness.</li>
    <li>Restaurants use <strong>warm white</strong> to create cozy, relaxed atmospheres.</li>
    <li>Retail stores combine neutral white with focused cool white on product displays.</li>
  </ul>
  <p className="mt-2">
    As you convert lumens to lux, also consider choosing light sources with color temperatures that match the space’s intent.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Lux and Legal Compliance:</h2>
  <p>
    Many jurisdictions enforce lighting codes with lux requirements, including:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>EN 12464-1</strong>: For indoor workplaces (Europe)</li>
    <li><strong>ANSI/IES RP-1-20</strong>: Lighting standard for US offices</li>
    <li><strong>OSHA regulations</strong>: Minimum light levels for safety compliance</li>
    <li><strong>LEED/WELL</strong>: Credits for sustainable and human-centered lighting</li>
  </ul>
  <p className="mt-2">
    Using this converter during planning or inspections supports accurate record-keeping and proof of compliance for architects, engineers, and facility managers.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Conclusion:</h2>
  <p>
    Lux measurement is the language of real-world lighting effectiveness. By translating lumens into lux, you gain direct control over how light behaves in your space — not just on paper, but in practice.
  </p>
  <p className="mt-2">
    This converter empowers better lighting decisions in architecture, energy planning, education, healthcare, and more. Pair it with on-site lux meters and simulation tools, and you have a full toolkit for designing bright, efficient, and user-friendly environments.
  </p>
</div>

        </CardContent>
      </Card>
    </div>
  );
};

export default LumenToWattConverter;
