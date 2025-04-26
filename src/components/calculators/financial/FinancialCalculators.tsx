import { Link } from "react-router-dom";

const calculators = [
  { label: "Mortgage Calculator", path: "/mortgage" },
  { label: "Compound Interest Calculator", path: "/compound-interest" },
  { label: "Discount Calculator", path: "/calculator/discount" },
  { label: "Effective Interest Rate Calculator", path: "/calculator/effective-interest-rate" },
  { label: "GST Calculator", path: "/calculator/gst" },
  { label: "Simple Interest Calculator", path: "/calculator/simple-interest" },
  { label: "VAT Calculator", path: "/calculator/vat" },
  { label: "Percentage Calculator", path: "/components/calculators/PercentageCalculator" },
  { label: "Percentage Change Calculator", path: "/calculator/percentage-change" },
  { label: "Percentage Increase Calculator", path: "/calculator/percentage-increase" }
];

export default function FinancialCalculators() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Financial Calculators</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {calculators.map((item, i) => (
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
