import { Link } from "react-router-dom";

const developmentTools = [
  { label: "Canonical URL Generator", path: "/tools/canonical-url-generator" },
  { label: "HTAccess Redirection", path: "/tools/htaccess-redirection" },
  { label: "HTML Redirection", path: "/tools/html-redirection" },
  { label: "JavaScript Redirection", path: "/tools/javascript-redirection" },
  { label: "jQuery Redirection", path: "/tools/jquery-redirection" },
  { label: "PHP Redirection", path: "/tools/php-redirection" },
  { label: "Screen Resolution Statistics", path: "/tools/screen-resolution-statistics" },
  { label: "Website Traffic Down Checker", path: "/tools/website-traffic-down-checker" },
];

export default function DevelopmentTools() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Development Tools</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {developmentTools.map((item, i) => (
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
