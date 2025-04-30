import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



const CurrentDirectory = () => {
  const [showLogical, setShowLogical] = useState(true);
  const [showPhysical, setShowPhysical] = useState(false);

  const generateCommand = () => {
    if (showPhysical) return "pwd -P";
    return "pwd";
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
<Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/code/all">Code Tools</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/linux/all">Linux Commands</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>Current Directory</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Finding Current Directory in Linux</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>
            In Linux/Unix, you can view your <strong>current working directory</strong> using the <code>pwd</code> command. It prints the full, absolute path to where you are currently located in the filesystem.
          </p>

          <section>
            <h2 className="text-lg font-semibold mb-2">Syntax</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ pwd [options]</code>
            </pre>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Options</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              {[
                { label: "-L", description: "Show logical path (includes symbolic links)" },
                { label: "-P", description: "Show physical path (resolves all symbolic links)" },
              ].map((opt) => (
                <li key={opt.label}>
                  <strong>{opt.label}</strong>: {opt.description}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Environment Variable</h2>
            <p>
              You can also view the current directory stored in the environment variable <code>$PWD</code>:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>echo $PWD</code>
            </pre>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Examples</h2>
            <div className="space-y-4">
              {[
                { title: "Show current logical directory:", code: "$ pwd" },
                { title: "Show current physical directory (no symlinks):", code: "$ pwd -P" },
                { title: "Using environment variable:", code: "$ echo $PWD" },
              ].map(({ title, code }) => (
                <div key={title}>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <pre className="bg-gray-100 p-4 rounded text-sm">
                    <code>{code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">Current Directory Code Generator</h2>

            <div className="flex flex-wrap gap-4 mb-4">
              <OptionCheckbox
                label="Logical path (default)"
                checked={showLogical}
                onChange={() => {
                  setShowLogical(true);
                  setShowPhysical(false);
                }}
              />
              <OptionCheckbox
                label="Physical path (-P)"
                checked={showPhysical}
                onChange={() => {
                  setShowPhysical(true);
                  setShowLogical(false);
                }}
              />
            </div>

            <div className="bg-gray-100 p-4 rounded text-sm mt-4">
              <code>{generateCommand()}</code>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

const OptionCheckbox = ({ label, checked, onChange }) => (
  <label className="flex items-center space-x-1 text-sm">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
    <span>{label}</span>
  </label>
);

export default CurrentDirectory;
