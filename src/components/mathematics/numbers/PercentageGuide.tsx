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

export const PercentageGuide = () => {
  const rules = [
    {
      name: "Finding a Percentage of a Number",
      rule: "(Percentage ÷ 100) × Total",
      example: "25% of 200 = (25 ÷ 100) × 200 = 50",
    },
    {
      name: "Percentage Increase",
      rule: "((New - Original) ÷ Original) × 100%",
      example: "From 80 to 100 → ((100 - 80) ÷ 80) × 100 = 25%",
    },
    {
      name: "Percentage Decrease",
      rule: "((Original - New) ÷ Original) × 100%",
      example: "From 120 to 90 → ((120 - 90) ÷ 120) × 100 = 25%",
    },
    {
      name: "Convert Fraction to Percentage",
      rule: "(Fraction × 100)%",
      example: "3/4 = (3 ÷ 4) × 100 = 75%",
    },
    {
      name: "Convert Decimal to Percentage",
      rule: "Decimal × 100%",
      example: "0.6 × 100 = 60%",
    },
    {
      name: "Convert Percentage to Decimal",
      rule: "Percentage ÷ 100",
      example: "75% ÷ 100 = 0.75",
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
            <BreadcrumbPage>Percentage Rules</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="percentage-guide-container bg-white/40 dark:bg-transparent">
        <h2 className="percentage-guide-header text-center text-2xl font-bold mb-4">
          Percentage Rules Guide
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

        <GuidanceSection title="In-Depth Understanding of Percentages">
          <p>
            Percentages are one of the most commonly used concepts in mathematics. They help in expressing a proportion out of 100 and are widely used across various fields such as finance, health, and business. The term "percent" comes from the Latin "per centum," meaning "by the hundred." Therefore, when we talk about percentages, we’re simply referring to a number as a fraction of 100. 
          </p>

          <h4 className="font-medium mt-3 mb-1">How Percentages Relate to Fractions and Decimals</h4>
          <p>
            Percentages can be converted to fractions and decimals, making them flexible for various calculations. A percentage is simply a fraction where the denominator is 100. For example, 25% can be written as the fraction 25/100, which simplifies to 1/4. In decimal form, 25% is 0.25. Understanding how to convert between these forms is vital for solving percentage problems efficiently.
          </p>

          <h4 className="font-medium mt-3 mb-1">Percentage Change</h4>
          <p>
            Percentage change is a common way to express how much a quantity has increased or decreased. The formula for calculating percentage change is different depending on whether you're calculating an increase or a decrease. It’s important to apply the correct formula to avoid errors:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>For a percentage increase: The percentage increase is calculated by dividing the difference between the new value and the original value by the original value and then multiplying by 100. For example, if the original price of a product was $100, and the new price is $120, the percentage increase is 20%.</li>
            <li>For a percentage decrease: The percentage decrease is calculated by dividing the difference between the original value and the new value by the original value and then multiplying by 100. For example, if the original price of an item was $100, and the new price is $80, the percentage decrease is 20%.</li>
          </ul>
          <p>
            For instance, if a product initially costs $100 and is now reduced to $80, we can calculate the percentage decrease:
          </p>
          <pre>
            Percentage Decrease = ((100 - 80) / 100) × 100 = 20%
          </pre>

          <h4 className="font-medium mt-3 mb-1">Applications of Percentages in Real Life</h4>
          <p>
            Percentages are used in many aspects of daily life. For example:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Discounts:</strong> When stores offer sales, they often give discounts as a percentage off the original price. A 20% discount on a $50 item means you save $10, so the final price is $40.</li>
            <li><strong>Interest Rates:</strong> Interest rates in finance are often expressed as percentages. For example, if you have $1000 in a savings account with an annual interest rate of 5%, you’ll earn $50 in interest after one year.</li>
            <li><strong>Grades and Test Scores:</strong> Percentages are commonly used to represent grades in school. For example, if you score 90 out of 100 on an exam, your percentage score is 90%. This allows for easy comparison of scores across different tests or students.</li>
            <li><strong>Tax Calculations:</strong> Sales tax is often calculated as a percentage of the total price of an item. If the sales tax rate is 8%, and you purchase an item for $50, the tax would be $4, bringing the total price to $54.</li>
            <li><strong>Nutrition Labels:</strong> Nutrition labels on food products often express values as percentages, such as the percentage of daily recommended intake of vitamins or nutrients. This helps consumers understand how much of a specific nutrient is in a product relative to their daily needs.</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Challenges with Percentages</h4>
          <p>
            While percentages are extremely useful, they can also be misleading if not properly understood or applied. One common mistake is misunderstanding the percentage increase or decrease when applied to different contexts. For example, a 50% increase in salary sounds significant, but if the original salary was very low, the actual increase in monetary terms might not be as impactful as it seems. Similarly, a 50% discount on an item that is originally priced at $100 still results in a $50 cost, but a 50% discount on a $10 item is just a $5 saving.
          </p>
          <p>
            Another challenge is when percentage changes apply to values that already contain a percentage, leading to compounded changes. For example, a 10% increase in a value that has already undergone a 10% increase is not simply a 10% increase again. It’s a 10% increase on the increased amount, meaning the total change is greater.
          </p>

          <h4 className="font-medium mt-3 mb-1">Advanced Percentage Problems</h4>
          <p>
            Sometimes, percentage problems require more complex calculations. For instance, when calculating tax-inclusive prices, or when dealing with compounded interest over time. These problems can be tackled using a step-by-step approach to ensure accuracy.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Compound Interest:</strong> Compound interest is calculated using the formula: \[ A = P(1 + \frac r n)^nt \], where A is the amount, P is the principal, r is the interest rate, n is the number of times the interest is compounded per year, and t is the time in years. This type of problem often involves percentages being applied to both the principal and the accumulated amount.</li>
            <li><strong>Tax Calculations:</strong> If an item costs $100 and the sales tax is 10%, you can calculate the price including tax by multiplying the price by 1.10. In this case, $100 × 1.10 = $110. This ensures you are paying the original price plus the tax amount, all expressed as a percentage.</li>
            <li><strong>Discounts with Multiple Conditions:</strong> Sometimes, items are discounted in multiple stages. For instance, an item might have a 20% discount, then an additional 10% discount applied to the reduced price. In such cases, the percentage discounts are applied sequentially, rather than simply adding them together.</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Summary</h4>
          <p>
            In conclusion, understanding percentages is a fundamental skill that helps in daily life and various fields such as business, finance, and education. Percentages provide an easy way to compare values and understand proportions. It is essential to be able to convert between percentages, decimals, and fractions, as well as to understand how to calculate percentage increase, decrease, and changes in different contexts.
          </p>
          <p>
            While percentages can sometimes be tricky, especially when compounded or when multiple percentage calculations are involved, they are indispensable in real-world scenarios. Mastering percentage calculations will allow you to make more informed decisions and perform better in areas like shopping, budgeting, investing, and even calculating tips or discounts.
          </p>
        </GuidanceSection>

      </div>
    </>
  );
};

