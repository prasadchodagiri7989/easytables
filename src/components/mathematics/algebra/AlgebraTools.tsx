import { Link } from "react-router-dom";

const algebraTools = [
  { label: "Factorial", path: "/algebra/factorial" },
  { label: "Logarithm", path: "/algebra/logarithm" },
  { label: "Logarithm Rules", path: "/algebra/logarithm-rules" },
  { label: "Logarithm Table", path: "/algebra/logarithm-table" },
  { label: "Natural Logarithm", path: "/algebra/natural-logarithm" },
  { label: "Quadratic Equation", path: "/algebra/quadratic-equation" }
];

export default function AlgebraTools() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Algebra Tools</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {algebraTools.map((item, i) => (
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
