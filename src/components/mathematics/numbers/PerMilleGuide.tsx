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

export const PerMilleGuide = () => {
  const rules = [
    {
      name: "Understanding Per-mille",
      rule: "Per-mille (‰) means per thousand.",
      example: "25‰ = 25 per 1000 = 0.025",
    },
    {
      name: "Convert Per-mille to Decimal",
      rule: "Value ÷ 1000",
      example: "150‰ = 150 ÷ 1000 = 0.15",
    },
    {
      name: "Convert Decimal to Per-mille",
      rule: "Decimal × 1000",
      example: "0.25 × 1000 = 250‰",
    },
    {
      name: "Convert Per-mille to Percentage",
      rule: "Per-mille ÷ 10",
      example: "80‰ = 80 ÷ 10 = 8%",
    },
    {
      name: "Finding Per-mille of a Number",
      rule: "(Per-mille ÷ 1000) × Total",
      example: "20‰ of 500 = (20 ÷ 1000) × 500 = 10",
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
            <BreadcrumbPage>Per-mille Rules</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="per-mille-guide-container bg-white/40 dark:bg-transparent">
        <h2 className="per-mille-guide-header text-center text-2xl font-bold mb-4">
          Per-mille Rules Guide
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

        <GuidanceSection title="In-Depth Understanding of Per-mille">
          <p>
            Per-mille (‰), sometimes referred to as "parts per thousand," is a unit of measurement used to express quantities as parts of one thousand. This concept is similar to percentages (which are parts per hundred), but it's typically used for more precise measurements, especially when the quantities involved are very small. In the context of scientific measurements, per-mille is often used to express concentrations, such as the alcohol content in blood (BAC), or for very precise measurements in fields like chemistry, economics, and environmental science.
          </p>

          <h4 className="font-medium mt-3 mb-1">Per-mille in Real-life Applications</h4>
          <p>
            Per-mille is used in many real-world scenarios where precise measurements are required. Some common applications include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Blood Alcohol Content (BAC):</strong> BAC is commonly measured in per-mille (‰). A BAC of 0.5‰ means there are 0.5 grams of alcohol per 1000 grams of blood. This is used to assess a person's level of intoxication and can be critical in legal contexts.</li>
            <li><strong>Environmental Science:</strong> Per-mille is often used to express concentrations of substances like pollutants or nutrients in water or soil. For example, a concentration of 3‰ of a certain substance in water means there are 3 parts of that substance per 1000 parts of water.</li>
            <li><strong>Economics:</strong> In finance and economics, per-mille is used for various calculations, such as transaction fees or interest rates on large sums of money. For example, a 2‰ transaction fee on a $10,000 transfer would equal $20.</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Per-mille vs. Percent</h4>
          <p>
            While per-mille (‰) and percentages (%) are both used to express parts of a whole, the key difference lies in the base. Percent means "per hundred" (i.e., parts per 100), while per-mille means "per thousand" (i.e., parts per 1000). To convert from per-mille to percentage, you divide the per-mille value by 10, and to convert from percentage to per-mille, you multiply the percentage by 10.
          </p>
          <p>
            For example:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>25‰ = 25 ÷ 10 = 2.5% (percentage)</li>
            <li>10% = 10 × 10 = 100‰ (per-mille)</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Why Use Per-mille?</h4>
          <p>
            The per-mille system is especially useful in cases where very small values are involved, and percentages might not provide enough precision. For example, in scientific experiments involving trace amounts of substances, or in measuring low levels of blood alcohol content, using per-mille allows for more accuracy. In these contexts, representing measurements as per-mille provides a clearer picture of minute changes, which can be critical in research and regulation.
          </p>

          <h4 className="font-medium mt-3 mb-1">Challenges and Limitations</h4>
          <p>
            One potential challenge with per-mille is that it can be harder to intuitively understand for individuals unfamiliar with the concept, as it is less commonly encountered than percentages. Furthermore, in certain cases, the precision that per-mille offers may be unnecessary, and using percentages might be more appropriate for ease of understanding. It's important to choose the correct unit based on the required precision for the situation.
          </p>

          <h4 className="font-medium mt-3 mb-1">Converting Between Units</h4>
          <p>
            Converting between percentages and per-mille is simple, but it requires attention to detail:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>To convert from per-mille to percentage, divide the per-mille value by 10. For example, 30‰ = 30 ÷ 10 = 3%.</li>
            <li>To convert from percentage to per-mille, multiply the percentage by 10. For example, 5% = 5 × 10 = 50‰.</li>
            <li>To convert from per-mille to decimal, divide the value by 1000. For example, 250‰ = 250 ÷ 1000 = 0.25.</li>
            <li>To convert from decimal to per-mille, multiply the decimal by 1000. For example, 0.15 = 0.15 × 1000 = 150‰.</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Advanced Per-mille Applications</h4>
          <p>
            In more advanced settings, per-mille can be involved in complex calculations, such as determining changes in a population over time or analyzing environmental data. For example, you might measure the concentration of a pollutant in air or water, or the percentage change in a population of organisms over a specific period. These calculations often require precise measurements that can only be accurately represented using per-mille, which allows for a higher degree of sensitivity than percentages.
          </p>
          <p>
            Some applications include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Pollution Monitoring:</strong> In environmental monitoring, pollutants such as chemicals or heavy metals are often measured in per-mille. For example, a river may have a concentration of a pollutant at 0.5‰, meaning there are 0.5 grams of the pollutant per 1000 grams of water.</li>
            <li><strong>Economics:</strong> In finance, transaction fees or commissions on large amounts of money may be calculated in per-mille to express small changes in value. For example, a bank might charge a 1‰ fee on a large transfer to cover transaction costs.</li>
            <li><strong>Public Health:</strong> In medical and health contexts, per-mille can be used to represent concentrations of substances like alcohol or drugs in blood. For example, a BAC of 0.2‰ might indicate that a person has consumed alcohol that would likely affect their behavior or cognitive function.</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Summary</h4>
          <p>
            In conclusion, per-mille is a useful and precise unit of measurement that is valuable in a variety of fields, especially when dealing with small quantities. While it is closely related to percentages, it offers more precision and is commonly used in applications such as blood alcohol content, environmental science, and economics. By understanding how to convert between percentages, per-mille, and decimals, you can make more accurate calculations and gain a deeper understanding of the data you encounter in these fields.
          </p>
        </GuidanceSection>

      </div>
    </>
  );
};
