import React from "react";
import { Card } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { GuidanceSection } from "@/components/GuidanceSection";

import { Link } from "react-router-dom"; // Or use next/link for Next.js

export const PPMGuide = () => {
  const rules = [
    {
      name: "Understanding Parts-Per Million (PPM)",
      rule: "PPM means parts per million, which is used to express very dilute concentrations of substances.",
      example: "1 PPM = 1 part of a substance per million parts of a solution.",
    },
    {
      name: "Convert PPM to Decimal",
      rule: "PPM ÷ 1,000,000",
      example: "100 PPM = 100 ÷ 1,000,000 = 0.0001",
    },
    {
      name: "Convert Decimal to PPM",
      rule: "Decimal × 1,000,000",
      example: "0.00025 × 1,000,000 = 250 PPM",
    },
    {
      name: "Convert PPM to Percentage",
      rule: "PPM ÷ 10,000",
      example: "500 PPM = 500 ÷ 10,000 = 5%",
    },
    {
      name: "Finding PPM of a Quantity",
      rule: "(Amount ÷ Total) × 1,000,000",
      example: "Find 200 PPM of 5000 liters → (200 ÷ 1,000,000) × 5000 = 0.001",
    },
  ];

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
                          <Link to="/mathematics/numbers">Numbers</Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Parts-Per Million (PPM) Rules</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="ppm-guide-container bg-white/40 dark:bg-transparent">
        <h2 className="ppm-guide-header text-center text-2xl font-bold mb-4">
          Parts-Per Million (PPM) Rules Guide
        </h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md"
              >
                <h3 className="font-semibold text-lg">{rule.name}</h3>
                <p className="text-md mt-1"><strong>Rule:</strong> {rule.rule}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  <strong>Example:</strong> {rule.example}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <GuidanceSection title="In-Depth Understanding of Parts-Per Million (PPM)">
          <p>
            Parts-per million (PPM) is a unit of measurement commonly used in fields such as chemistry, environmental science, and medicine to describe very dilute concentrations of substances in a solution. It represents one part of a substance per one million parts of a solution. This is an extremely small amount, often used when concentrations are so low that expressing them in percentages or other units would be impractical.
          </p>

          <h4 className="font-medium mt-3 mb-1">PPM in Real-Life Applications</h4>
          <p>
            PPM is commonly used to measure concentrations of pollutants, contaminants, or specific compounds in various solutions, especially in air, water, and soil. Here are a few real-life examples:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Air Quality:</strong> In environmental science, PPM is used to measure pollutants like carbon monoxide (CO) or nitrogen dioxide (NO2) in the air. For example, a level of 0.02 PPM of CO in air means there are 0.02 parts of CO per one million parts of air.</li>
            <li><strong>Water Quality:</strong> PPM is used to measure the concentration of dissolved substances like chlorine, fluoride, or heavy metals in water. For instance, a concentration of 1 PPM of lead in drinking water is a cause for concern, as lead is highly toxic even in small amounts.</li>
            <li><strong>Medical and Pharmaceutical:</strong> In medicine, PPM is used to express the concentration of certain compounds in the bloodstream. For example, the concentration of a drug in a patient's blood might be measured in PPM.</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">PPM vs. Percentage</h4>
          <p>
            While both percentage and PPM describe concentrations, PPM is typically used for very small concentrations, whereas percentages are used for larger quantities. To convert between the two:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>To convert PPM to percentage, divide the PPM value by 10,000. For example, 500 PPM = 500 ÷ 10,000 = 5%.</li>
            <li>To convert percentage to PPM, multiply the percentage value by 10,000. For example, 0.5% = 0.5 × 10,000 = 500 PPM.</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Why Use PPM?</h4>
          <p>
            PPM is used when concentrations are so small that other units such as percentage, parts per hundred, or even parts per thousand would not provide sufficient precision. It allows scientists, engineers, and health professionals to precisely express concentrations of substances that would otherwise be too small to measure effectively. This precision is crucial in fields such as:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Environmental Monitoring:</strong> Tracking pollutants in the air, soil, and water. For instance, PPM is used to measure how much carbon dioxide (CO2) is in the air.</li>
            <li><strong>Health and Medicine:</strong> Measuring the concentration of drugs or toxins in a person’s body, such as blood alcohol concentration or lead in blood.</li>
            <li><strong>Chemistry:</strong> Used in chemical analysis and reactions to express the concentration of reactants or byproducts in solutions.</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Converting Between Units</h4>
          <p>
            Conversion between PPM, decimal, and percentage is straightforward once you understand the relationships between them. Here are some simple conversion rules:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>To convert from PPM to decimal, divide the PPM value by 1,000,000. For example, 100 PPM = 100 ÷ 1,000,000 = 0.0001.</li>
            <li>To convert from decimal to PPM, multiply the decimal value by 1,000,000. For example, 0.00025 = 0.00025 × 1,000,000 = 250 PPM.</li>
            <li>To convert from PPM to percentage, divide by 10,000. For example, 500 PPM = 500 ÷ 10,000 = 5%.</li>
            <li>To convert from percentage to PPM, multiply by 10,000. For example, 0.5% = 0.5 × 10,000 = 500 PPM.</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Advanced Applications of PPM</h4>
          <p>
            While PPM is most commonly used for environmental and health-related measurements, it has a range of advanced applications in various industries. Some of these include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Pharmaceutical Industry:</strong> When developing drugs, the concentration of active ingredients must be very precise. PPM is used to ensure the right dosage in liquid medications and vaccines.</li>
            <li><strong>Food and Beverage:</strong> PPM is used to monitor ingredients, preservatives, and contaminants in food and beverages. For example, the concentration of preservatives in a beverage may be measured in PPM.</li>
            <li><strong>Industrial Processes:</strong> In industries like manufacturing, PPM is used to measure the presence of trace elements in materials such as metals or chemicals, ensuring product quality and safety.</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Challenges with PPM Measurements</h4>
          <p>
            While PPM is a highly useful unit, measuring and interpreting values in PPM can sometimes be challenging. Some common issues include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Measurement Precision:</strong> Accurate PPM measurements require highly sensitive instruments, which can be costly or complex to use in some cases.</li>
            <li><strong>Environmental Conditions:</strong> Factors such as temperature, pressure, and humidity can affect the accuracy of PPM measurements, especially in gas or liquid solutions.</li>
            <li><strong>Interpreting Small Values:</strong> Working with very small quantities often requires precise handling and conversion, and even a slight error in calculation can result in significant discrepancies in the outcome.</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Summary</h4>
          <p>
            In summary, parts-per million (PPM) is an essential unit of measurement used to describe extremely small concentrations of substances. It finds use in a wide range of fields including environmental science, healthcare, and manufacturing, among others. By understanding how to convert PPM to other units such as decimal or percentage, and knowing its practical applications, one can make precise measurements and calculations. This unit is indispensable when dealing with low concentrations that require a high degree of accuracy.
          </p>
        </GuidanceSection>

      </div>
    </>
  );
};
