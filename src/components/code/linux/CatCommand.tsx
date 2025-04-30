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

const CatCommand: React.FC = () => {
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
          <BreadcrumbPage>cat Command</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>cat Command in Linux/Unix</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>
            The <strong>cat</strong> command is used to display the contents of text files and to combine multiple files into one file.
          </p>
          <p>
            <strong>Note:</strong> The <code>cat</code> command does not accept directories.
          </p>

          <div>
            <h2 className="text-lg font-semibold mb-2">Syntax</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ cat [options] file1 [file2...]</code>
            </pre>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Options</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b p-2">Option</th>
                    <th className="border-b p-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { option: "-b", desc: "Add line numbers to non-blank lines." },
                    { option: "-n", desc: "Add line numbers to all lines." },
                    { option: "-s", desc: "Squeeze multiple blank lines into a single blank line." },
                    { option: "-E", desc: "Show $ at the end of each line." },
                    { option: "-T", desc: "Show ^I instead of tab characters." },
                  ].map(({ option, desc }) => (
                    <tr key={option}>
                      <td className="border-b p-2">
                        <code>{option}</code>
                      </td>
                      <td className="border-b p-2">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Examples</h2>
            <div className="space-y-4">
              <Example
                title="View a file:"
                code={`$ cat list1.txt\nmilk\nbread\napples`}
              />
              <Example
                title="Combine two files:"
                code={`$ cat list1.txt list2.txt\nmilk\nbread\napples\nhouse\ncar`}
              />
              <Example
                title="Combine and save into another file:"
                code={`$ cat list1.txt list2.txt > todo.txt`}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Example: React.FC<{ title: string; code: string }> = ({ title, code }) => (
  <div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
      <code>{code}</code>
    </pre>
  </div>
);

export default CatCommand;
