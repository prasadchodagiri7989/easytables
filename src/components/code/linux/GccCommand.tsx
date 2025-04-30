import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



const GccCommand: React.FC = () => {
  const [sourceFiles, setSourceFiles] = useState("");
  const [objectFiles, setObjectFiles] = useState("");
  const [includeDirs, setIncludeDirs] = useState("");
  const [libFiles, setLibFiles] = useState("");
  const [libDirs, setLibDirs] = useState("");
  const [outputFile, setOutputFile] = useState("");
  const [warning, setWarning] = useState(false);
  const [debug, setDebug] = useState(false);
  const [optimize, setOptimize] = useState(false);
  const [verbose, setVerbose] = useState(false);

  const generateCommand = () => {
    let cmd = "gcc ";
    if (warning) cmd += "-Wall ";
    if (debug) cmd += "-g ";
    if (optimize) cmd += "-O ";
    if (verbose) cmd += "-v ";

    cmd += buildOptions(includeDirs, "-I");
    cmd += buildOptions(libDirs, "-L");
    cmd += buildLibFiles(libFiles);
    cmd += appendFiles(sourceFiles);
    cmd += appendFiles(objectFiles);
    cmd += appendOutputFile(outputFile);

    return cmd.trim();
  };

  const buildOptions = (input: string, flag: string) => {
    return input
      .split(" ")
      .filter((item) => item)
      .map((item) => `${flag}${item} `)
      .join("");
  };

  const buildLibFiles = (input: string) => {
    return input
      .split(" ")
      .filter((lib) => lib && lib.startsWith("lib") && lib.endsWith(".a"))
      .map((lib) => `-l${lib.slice(3, -2)} `)
      .join("");
  };

  const appendFiles = (files: string) => {
    return files.trim() ? files + " " : "";
  };

  const appendOutputFile = (output: string) => {
    return output.trim() ? `-o ${output}` : "";
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
                  <BreadcrumbPage>gcc Command</BreadcrumbPage>
                </BreadcrumbList>
              </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>GCC C Compiler</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>
            <strong>GCC</strong> (GNU Compiler Collection) is a popular compiler for the C programming language on Linux/Unix systems.
          </p>

          <Section title="Syntax">
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ gcc [options] [source files] [object files] [-o output file]</code>
            </pre>
          </Section>

          <Section title="Options">
            <ul className="list-disc pl-6 space-y-1 text-sm">
              {[
                { label: "-c", description: "compile without linking" },
                { label: "-Dname[=value]", description: "define preprocessor macro" },
                { label: "-fPIC", description: "position-independent code" },
                { label: "-g", description: "debug information for GDB" },
                { label: "-I", description: "add include directory" },
                { label: "-l", description: "link with library" },
                { label: "-L", description: "library search directory" },
                { label: "-o", description: "output file name" },
                { label: "-O", description: "optimization level" },
                { label: "-shared", description: "create shared object" },
                { label: "-U", description: "undefine preprocessor macro" },
                { label: "-w", description: "disable all warnings" },
                { label: "-Wall", description: "enable all warnings" },
                { label: "-Wextra", description: "enable extra warnings" },
              ].map(({ label, description }) => (
                <li key={label}>
                  <strong>{label}</strong>: {description}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Examples">
            {[ 
              { title: "Compile and link:", code: "$ gcc file1.c file2.c -o execfile" },
              { title: "Compile only (no linking):", code: "$ gcc -c file1.c file2.c" },
              { title: "Compile with debugging:", code: "$ gcc -g myfile.c -o execfile" },
              { title: "Compile with warnings enabled:", code: "$ gcc -Wall myfile.c -o execfile" },
              { title: "Link with static library:", code: "$ gcc -static myfile.c -L/user/local/math -lmath -o execfile" },
              { title: "Compile with optimization:", code: "$ gcc -O myfile.c -o execfile" },
            ].map(({ title, code }) => (
              <Example key={title} title={title} code={code} />
            ))}
          </Section>

          <Section title="GCC Code Generator">
            <div className="grid gap-4 mb-4">
              <InputField label="Source files" value={sourceFiles} setValue={setSourceFiles} placeholder="file1.c file2.c" />
              <InputField label="Object files" value={objectFiles} setValue={setObjectFiles} placeholder="file3.o file4.o" />
              <InputField label="Include directories" value={includeDirs} setValue={setIncludeDirs} placeholder="dir1 dir2" />
              <InputField label="Library files" value={libFiles} setValue={setLibFiles} placeholder="liba.a libb.a" />
              <InputField label="Library directories" value={libDirs} setValue={setLibDirs} placeholder="dir3 dir4" />
              <InputField label="Output file name" value={outputFile} setValue={setOutputFile} placeholder="a.out" />

              <div className="flex flex-wrap gap-4 mt-2">
                <Checkbox label="All Warnings (-Wall)" checked={warning} onChange={() => setWarning(!warning)} />
                <Checkbox label="Debug Info (-g)" checked={debug} onChange={() => setDebug(!debug)} />
                <Checkbox label="Optimize (-O)" checked={optimize} onChange={() => setOptimize(!optimize)} />
                <Checkbox label="Verbose (-v)" checked={verbose} onChange={() => setVerbose(!verbose)} />
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded text-sm mt-4">
              <code>{generateCommand()}</code>
            </div>
          </Section>
        </CardContent>
      </Card>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section>
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    {children}
  </section>
);

const Example = ({ title, code }) => (
  <div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <pre className="bg-gray-100 p-4 rounded text-sm">
      <code>{code}</code>
    </pre>
  </div>
);

const InputField = ({ label, value, setValue, placeholder }) => (
  <div className="space-y-2">
    <label className="font-medium">{label}:</label>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="border rounded p-2 w-full text-sm"
    />
  </div>
);

const Checkbox = ({ label, checked, onChange }) => (
  <label className="flex items-center space-x-1 text-sm">
    <input type="checkbox" checked={checked} onChange={onChange} />
    <span>{label}</span>
  </label>
);

export default GccCommand;
