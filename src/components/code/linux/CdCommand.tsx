import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const CdCommand: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Breadcrumb */}
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
              <Link to="/all-tools">All Tools</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/linux/all">Linux Commands</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>cd Command</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>cd Command in Linux/Unix</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>
            The <strong>cd</strong> (change directory) command is used in Linux and Unix to move between directories in the terminal shell.
          </p>
          <p>
            💡 Tip: You can press the <strong>Tab</strong> key to auto-complete directory names!
          </p>

          <div>
            <h2 className="text-lg font-semibold mb-2">Syntax</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ cd [directory]</code>
            </pre>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Examples</h2>
            <div className="space-y-6">
              <Example title="Go to home directory:" codes={["$ cd", "$ cd ~"]} />
              <Example title="Go to root directory:" codes={["$ cd /"]} />
              <Example title="Move to parent directory:" codes={["$ cd .."]} />
              <Example title="Go to subdirectory (e.g., Documents):" codes={["$ cd Documents"]} />
              <Example title="Go to nested directory (e.g., Documents/Books):" codes={["$ cd Documents/Books"]} />
              <Example title="Use an absolute path:" codes={["$ cd /home/user/Desktop"]} />
              <Example
                title='Directory with spaces (e.g., "My Images"):'
                codes={["$ cd My\\ Images", '$ cd "My Images"', `$ cd 'My Images'`]}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Example: React.FC<{ title: string; codes: string[] }> = ({ title, codes }) => (
  <div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    {codes.map((code, idx) => (
      <div key={idx} className="mb-2">
        <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
          <code>{code}</code>
        </pre>
        {idx < codes.length - 1 && <p className="text-sm text-gray-600">or</p>}
      </div>
    ))}
  </div>
);

export default CdCommand;
