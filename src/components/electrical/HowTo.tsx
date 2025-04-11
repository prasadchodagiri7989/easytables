import React from "react";
import { Link } from "react-router-dom";

const howToItems = [
  { name: "How to Save Electricity", path: "/howto/save-electricity" },
  { name: "How to Save Energy", path: "/howto/save-energy" },
];

const HowTo = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">How To Guides</h1>
      <ul className="space-y-3">
        {howToItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="block text-blue-600 hover:underline text-lg"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HowTo;
