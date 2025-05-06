// components/ReferenceLinks.tsx
import React from "react";
import { useLocation } from "react-router-dom";

import { referenceLinks } from "@/data/reference-links";

export const ReferenceLinks: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const matchingKey = Object.keys(referenceLinks).find(key =>
    currentPath.startsWith(key)
  );

  const linksToShow = matchingKey ? referenceLinks[matchingKey] : null;

  if (!linksToShow) return null;

  return (
    <div className="mt-10 border-t pt-6">
      <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
        See Also
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-blue-600 dark:text-blue-400">
        {linksToShow.map((item, index) => (
          <li key={index}>
            <a href={item.href} className="hover:underline">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
