import { Link } from "react-router-dom";

// Optional: Central config for unit labels with symbols
const colorUnits = {
  hex: "HEX (#RRGGBB)",
  rgb: "RGB (rgb)",
  hsl: "HSL (hsl)",
  hsv: "HSV (hsv)",
  cmyk: "CMYK (c,m,y,k)"
};

const colorConversions = [
  { label: "CMYK to RGB", path: "/convertor/color?from=cmyk&to=rgb", from: "cmyk", to: "rgb" },
  { label: "Hex to RGB", path: "/convertor/color?from=hex&to=rgb", from: "hex", to: "rgb" },
  { label: "HSL to RGB", path: "/convertor/color?from=hsl&to=rgb", from: "hsl", to: "rgb" },
  { label: "HSV to RGB", path: "/convertor/color?from=hsv&to=rgb", from: "hsv", to: "rgb" },
  { label: "RGB to CMYK", path: "/convertor/color?from=rgb&to=cmyk", from: "rgb", to: "cmyk" },
  { label: "RGB to Hex", path: "/convertor/color?from=rgb&to=hex", from: "rgb", to: "hex" },
  { label: "RGB to HSL", path: "/convertor/color?from=rgb&to=hsl", from: "rgb", to: "hsl" },
  { label: "RGB to HSV", path: "/convertor/color?from=rgb&to=hsv", from: "rgb", to: "hsv" },
  { label: "How to convert RGB to Hex", path: "/convertor/color?from=rgb&to=hex", from: "rgb", to: "hex" },
  { label: "How to convert Hex to RGB", path: "/convertor/color?from=hex&to=rgb", from: "hex", to: "rgb" }
];

export default function ColorConversions() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Color Conversions</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {colorConversions.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className="block bg-white hover:bg-gray-100 p-4 rounded-xl shadow-md transition duration-200 dark:bg-transparent border"
          >
            <div className="font-semibold">{item.label} Conversion</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {colorUnits[item.from]} → {colorUnits[item.to]}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
