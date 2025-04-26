import { Link } from "react-router-dom";

const mathTools = [
  { label: "Scientific Calculator", path: "/scientific" },
  { label: "Adding Fractions Calculator", path: "/tools/adding-fractions-calculator" },
  { label: "Addition Calculator", path: "/tools/addition-calculator" },
  { label: "Antilog Calculator", path: "/tools/antilog-calculator" },
  { label: "Arccos Calculator", path: "/tools/arccos-calculator" },
  { label: "Arcsin Calculator", path: "/tools/arcsin-calculator" },
  { label: "Arctan Calculator", path: "/tools/arctan-calculator" },
  { label: "Average Calculator", path: "/average" },
  { label: "Base Calculator", path: "/tools/base-calculator" },
  { label: "Binary Calculator", path: "/tools/binary-calculator" },
  { label: "Complex Numbers Calculator", path: "/tools/complex-numbers-calculator" },
  { label: "Convolution Calculator", path: "/tools/convolution-calculator" },
  { label: "Cosine Calculator", path: "/tools/cosine-calculator" },
  { label: "Dividing Fractions Calculator", path: "/tools/dividing-fractions-calculator" },
  { label: "Division Calculator", path: "/tools/division-calculator" },
  { label: "Exponential Growth Calculator", path: "/tools/exponential-growth-calculator" },
  { label: "Exponents Calculator", path: "/tools/exponents-calculator" },
  { label: "Factorial Calculator", path: "/tools/factorial-calculator" },
  { label: "Fractions Calculator", path: "/tools/fractions-calculator" },
  { label: "Fraction Simplifier", path: "/tools/fraction-simplifier" },
  { label: "GCF Calculator", path: "/tools/gcf-calculator" },
  { label: "Hex Calculator", path: "/tools/hex-calculator" },
  { label: "LCM Calculator", path: "/tools/lcm-calculator" },
  { label: "Ln Calculator", path: "/tools/ln-calculator" },
  { label: "Log Calculator", path: "/tools/log-calculator" },
  { label: "Multiplication Calculator", path: "/tools/multiplication-calculator" },
  { label: "Multiplying Fractions Calculator", path: "/tools/multiplying-fractions-calculator" },
  { label: "Percentage Calculator", path: "/percentage" },
  { label: "Percentage Change Calculator", path: "/tools/percentage-change-calculator" },
  { label: "Percent Error Calculator", path: "/tools/percent-error-calculator" },
  { label: "Percentage Increase Calculator", path: "/tools/percentage-increase-calculator" },
  { label: "Pythagorean Theorem Calculator", path: "/tools/pythagorean-theorem-calculator" },
  { label: "Quadratic Equation Solver", path: "/tools/quadratic-equation-solver" },
  { label: "Ratio Calculator", path: "/tools/ratio-calculator" },
  { label: "Remainder Calculator", path: "/tools/remainder-calculator" },
  { label: "Right Triangle Calculator", path: "/tools/right-triangle-calculator" },
  { label: "Root Calculator", path: "/tools/root-calculator" },
  { label: "Scientific Notation Calculator", path: "/tools/scientific-notation-calculator" },
  { label: "Simple Math Calculator", path: "/tools/simple-math-calculator" },
  { label: "Sine Calculator", path: "/tools/sine-calculator" },
  { label: "Square Root Calculator", path: "/tools/square-root-calculator" },
  { label: "Standard Deviation Calculator", path: "/tools/standard-deviation-calculator" },
  { label: "Subtracting Fractions Calculator", path: "/tools/subtracting-fractions-calculator" },
  { label: "Subtraction Calculator", path: "/tools/subtraction-calculator" },
  { label: "Tangent Calculator", path: "/tools/tangent-calculator" },
  { label: "Trigonometry Calculator", path: "/tools/trigonometry-calculator" },
  { label: "Weighted Average Calculator", path: "/tools/weighted-average-calculator" },
  { label: "Variance Calculator", path: "/tools/variance-calculator" },
  { label: "Random Number Generator", path: "/random-number" },
];

export default function MathTools() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Math Calculators</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mathTools.map((item, i) => (
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