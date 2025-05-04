import { Link } from "react-router-dom"; // Use next/link if using Next.js

const imageTools = [
  { label: "GIF to PNG Converter", path: "/image/gif-to-png" },
  { label: "GIF to JPG Converter", path: "/image/gif-to-jpg" },
  { label: "JPG to GIF Converter", path: "/image/jpg-to-gif" },
  { label: "JPG to PDF Converter", path: "/image/jpg-to-pdf" },
  { label: "JPG to PNG Converter", path: "/image/jpg-to-png" },
  { label: "PNG to GIF Converter", path: "/image/png-to-gif" },
  { label: "PNG to JPG Converter", path: "/image/png-to-jpg" },
  { label: "PNG to PDF Converter", path: "/image/png-to-pdf" },
  { label: "Image to Black & White Converter", path: "/image/to-black-white" },
];

export default function ImageConverterTools() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Image Converter Tools</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {imageTools.map((tool, index) => (
          <Link
            key={index}
            to={tool.path}
            className="block bg-white hover:bg-gray-100 p-4 rounded-xl shadow-md transition duration-200 dark:bg-transparent border"
          >
            {tool.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
