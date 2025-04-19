import { Link } from "react-router-dom";

const imageConversions = [
  "GIF to PNG converter",
  "GIF to JPG converter",
  "JPG to GIF converter",
  "JPG to PDF converter",
  "JPG to PNG converter",
  "PNG to GIF converter",
  "PNG to JPG converter",
  "PNG to PDF converter",
  "Image to black & white converter"
];

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ImageConversions() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Image Conversions</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {imageConversions.map((item, i) => (
          <Link
            key={i}
            to={`/conversions/${slugify(item)}`}
            className="block bg-white hover:bg-gray-100 p-4 rounded-xl shadow-md transition duration-200 dark:bg-transparent border"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
