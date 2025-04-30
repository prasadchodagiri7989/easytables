import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



const CpCommand = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [stdout, setStdout] = useState("");
  const [stderr, setStderr] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setOptions((prev) =>
      prev.includes(value) ? prev.filter((opt) => opt !== value) : [...prev, value]
    );
  };

  const generateCommand = () => {
    let cmd = "cp ";
    if (options.length > 0) {
      cmd += "-" + options.join("") + " ";
    }
    if (source) {
      cmd += source + " ";
    }
    if (destination) {
      cmd += destination + " ";
    }
    if (stdout) {
      cmd += `> ${stdout} `;
    }
    if (stderr) {
      cmd += `2> ${stderr}`;
    }
    return cmd.trim();
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
                  <BreadcrumbPage>cp Command</BreadcrumbPage>
                </BreadcrumbList>
              </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>cp Command in Linux/Unix</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>The <strong>cp</strong> command copies files and directories in Linux/Unix systems.</p>

          <section>
            <h2 className="text-lg font-semibold mb-2">Syntax</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ cp [options] source dest</code>
            </pre>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Options</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              {[
                { label: "-a", description: "archive files" },
                { label: "-f", description: "force copy by removing destination if needed" },
                { label: "-i", description: "interactive - ask before overwrite" },
                { label: "-l", description: "link files instead of copy" },
                { label: "-L", description: "follow symbolic links" },
                { label: "-n", description: "no overwrite" },
                { label: "-R", description: "recursive copy (include hidden files)" },
                { label: "-u", description: "update newer files only" },
                { label: "-v", description: "verbose messages" },
              ].map((opt) => (
                <li key={opt.label}>
                  <strong>{opt.label}</strong>: {opt.description}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Examples</h2>
            <div className="space-y-4">
              {[
                { title: "Copy a single file:", code: "$ cp main.c bak" },
                { title: "Copy multiple files to a directory:", code: "$ cp main.c def.h /home/usr/rapid/" },
                { title: "Copy all C files:", code: "$ cp *.c bak" },
                { title: "Copy directories recursively:", code: "$ cp -R dev bak" },
                { title: "Force copy a file:", code: "$ cp -f test.c bak" },
                { title: "Interactive prompt before overwrite:", code: "$ cp -i test.c bak" },
                { title: "Update newer files only:", code: "$ cp -u * bak" },
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
            <h2 className="text-lg font-semibold mb-4">cp Code Generator</h2>
            <div className="grid gap-4 mb-4">
              <OptionsSection options={options} handleOptionChange={handleOptionChange} />
              <InputSection label="Source files/folders:" value={source} setValue={setSource} placeholder="file1 file2 dir1 dir2" />
              <InputSection label="Destination folder/file:" value={destination} setValue={setDestination} placeholder="destdir" />
              <InputSection label="Redirect stdout to:" value={stdout} setValue={setStdout} placeholder="out.txt" />
              <InputSection label="Redirect stderr to:" value={stderr} setValue={setStderr} placeholder="err.txt" />
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

const OptionsSection = ({ options, handleOptionChange }) => (
  <div>
    <label className="font-medium">Options:</label>
    <div className="flex flex-wrap gap-2">
      {[
        { value: "f", label: "Force (-f)" },
        { value: "i", label: "Interactive (-i)" },
        { value: "l", label: "Link (-l)" },
        { value: "L", label: "Follow symlinks (-L)" },
        { value: "n", label: "No overwrite (-n)" },
        { value: "R", label: "Recursive (-R)" },
        { value: "u", label: "Update newer (-u)" },
        { value: "v", label: "Verbose (-v)" },
      ].map((opt) => (
        <label key={opt.value} className="flex items-center space-x-1 text-sm">
          <input
            type="checkbox"
            value={opt.value}
            checked={options.includes(opt.value)}
            onChange={handleOptionChange}
          />
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
  </div>
);

const InputSection = ({ label, value, setValue, placeholder }) => (
  <div className="space-y-2">
    <label className="font-medium">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="border rounded p-2 w-full text-sm"
    />
  </div>
);

export default CpCommand;
