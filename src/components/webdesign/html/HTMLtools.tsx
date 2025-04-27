import { Link } from "react-router-dom";

const htmlTools = [
  { label: "HTML Character Codes", path: "/tools/html-character-codes" },
  { label: "HTML Comments Guide", path: "/tools/html-comments-guide" },
  { label: "HTML Tables Generator", path: "/tools/html-tables-generator" },
  { label: "HTML Color Codes", path: "/tools/html-color" },

];

export default function HtmlTools() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">HTML Tools</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {htmlTools.map((item, i) => (
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
