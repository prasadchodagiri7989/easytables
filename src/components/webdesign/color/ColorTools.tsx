import { Link } from "react-router-dom";

const colorTools = [
  { label: "Color Scheme Generator", path: "/tools/color-scheme-generator" },
  { label: "HTML Color Codes", path: "/tools/html-color-codes" },
  { label: "RGB Color Picker", path: "/tools/rgb-color-picker" },
  { label: "Web Safe Colors", path: "/tools/web-safe-colors" },
];

export default function ColorTools() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Color Tools</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colorTools.map((item, i) => (
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
