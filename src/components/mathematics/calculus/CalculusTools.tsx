import { Link } from "react-router-dom";

const calculusTools = [
  { label: "Derivative", path: "/calculus/derivative" },
  { label: "Laplace Transform", path: "/calculus/laplace-transform" },
  { label: "Convolution", path: "/calculus/convolution" }
];

export default function CalculusTools() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Calculus & Analysis Tools</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {calculusTools.map((item, i) => (
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
