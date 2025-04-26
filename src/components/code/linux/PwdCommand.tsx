import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const PwdCommand: React.FC = () => {
  const [absolutePath, setAbsolutePath] = useState(true);

  const generateCommand = () => {
    return absolutePath ? "pwd" : "pwd -P"; // '-P' shows physical path if there are symlinks
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>pwd Command in Linux/Unix</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>
            The <strong>pwd</strong> ("print working directory") command displays the current working directory path in your terminal session.
          </p>

          {/* Syntax Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Syntax</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ pwd [options]</code>
            </pre>
          </div>

          {/* Options Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Options</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>-L</strong>: Show logical path (default, can include symlinks)</li>
              <li><strong>-P</strong>: Show physical path (resolves symlinks)</li>
            </ul>
          </div>

          {/* Examples Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Examples</h2>
            <div className="space-y-4">
              <Example title="Current working directory:" code={`$ pwd`} />
              <Example title="Physical path without symlinks:" code={`$ pwd -P`} />
            </div>
          </div>

          {/* Command Generator Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">pwd Command Generator</h2>
            <div className="flex flex-wrap gap-4 mb-4">
              <label className="flex items-center space-x-1 text-sm">
                <input
                  type="checkbox"
                  checked={!absolutePath}
                  onChange={() => setAbsolutePath(!absolutePath)}
                />
                <span>Physical path (-P)</span>
              </label>
            </div>

            {/* Command Output */}
            <div className="bg-gray-100 p-4 rounded text-sm mt-4">
              <code>{generateCommand()}</code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Example Component to handle repetitive example display
const Example: React.FC<{ title: string; code: string }> = ({ title, code }) => (
  <div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
      <code>{code}</code>
    </pre>
  </div>
);

export default PwdCommand;
