import { Link } from "react-router-dom";

const linuxCommands = [
  { label: "Cat Command", path: "/linux/cat-command" },
  { label: "Cd Command", path: "/linux/cd-command" },
  { label: "Cp Command", path: "/linux/cp-command" },
  { label: "Current Directory (pwd)", path: "/linux/current-directory" },
  { label: "Gcc Command", path: "/linux/gcc-command" },
  { label: "Ls Command", path: "/linux/ls-command" },
  { label: "Move Files (mv)", path: "/linux/move-files" },
  { label: "Mv Command", path: "/linux/mv-command" },
  { label: "Pwd Command", path: "/linux/pwd-command" },
  { label: "Fix Slow VirtualBox Ubuntu", path: "/linux/slow-virtualbox-ubuntu" },
  { label: "View Files (ls)", path: "/linux/view-files" },
];

export default function AllLinux() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Linux Commands</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {linuxCommands.map((item, i) => (
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
