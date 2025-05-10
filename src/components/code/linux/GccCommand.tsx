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
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">
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
              <InputField label="Source files " value={sourceFiles} setValue={setSourceFiles} placeholder="file1.c file2.c"/>
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

            <div className="bg-gray-100 p-4 rounded text-sm mt-4 dark:text-black">
              <code>{generateCommand()}</code>
            </div>
          </Section>
          <Section title="GCC and Cross-Compilation">
            <p>
              Cross-compilation refers to the process of compiling code for a platform different from the one on which the compiler is running. For instance, you might compile a program for an ARM-based device while running the GCC compiler on an x86 machine.
            </p>
            <p>
              GCC supports cross-compilation through the use of the <strong>--target</strong> option, which specifies the architecture for which the code is being compiled. This is helpful when building software for embedded systems or other specialized hardware.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                $ gcc --target=arm-linux-gnueabi -o program program.c
              </code>
            </pre>
            <p>
              In this example, the code is compiled for an ARM architecture even though the GCC compiler is running on an x86 machine. You'll typically need the appropriate cross-compiler toolchain installed for this to work.
            </p>
          </Section>

          <Section title="Static vs. Dynamic Linking">
            <p>
              When you compile and link code with GCC, there are two primary ways to link libraries: static and dynamic. Understanding the difference between these two linking methods is crucial for optimizing your build process and controlling the size of the output.
            </p>
            <h3 className="text-lg font-semibold mb-2">Static Linking</h3>
            <p>
              Static linking involves including all of the necessary library code within the executable at compile time. The benefit of static linking is that the resulting executable is self-contained and doesn't require external libraries to run. However, it increases the size of the output and may lead to longer build times.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                $ gcc file1.c file2.c -static -o program
              </code>
            </pre>
            <h3 className="text-lg font-semibold mb-2">Dynamic Linking</h3>
            <p>
              Dynamic linking, on the other hand, keeps the external libraries separate from the executable. The libraries are loaded at runtime, which reduces the size of the executable but requires the presence of the necessary shared libraries on the target system.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                $ gcc file1.c file2.c -o program
              </code>
            </pre>
            <p>
              By default, GCC performs dynamic linking, but you can force static linking using the <code>-static</code> flag. This is useful when building standalone applications that do not rely on shared libraries.
            </p>
          </Section>

          <Section title="GCC Optimizations">
            <p>
              GCC provides several optimization levels and flags to control how the compiler optimizes your code. Optimizations can help improve the performance of your code but may also increase compilation time or cause other side effects.
            </p>
            <h3 className="text-lg font-semibold mb-2">Optimization Levels</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>-O0</strong>: No optimization (default). Fastest compilation time but may result in slower code.</li>
              <li><strong>-O1</strong>: Basic optimizations. A balance between compilation time and performance.</li>
              <li><strong>-O2</strong>: Further optimizations. Increases the performance of the code but can increase the compilation time.</li>
              <li><strong>-O3</strong>: Aggressive optimizations. Produces the fastest code but can result in significantly longer compile times.</li>
              <li><strong>-Os</strong>: Optimizes for size. Useful for embedded systems or when the size of the executable is critical.</li>
              <li><strong>-Ofast</strong>: Enables all optimizations that GCC supports, including those that may violate strict standards compliance.</li>
            </ul>
            <p>
              Example:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                $ gcc -O3 myfile.c -o execfile
              </code>
            </pre>
            <p>
              In this example, the code is compiled with the <strong>-O3</strong> flag to enable aggressive optimizations for maximum performance.
            </p>
          </Section>

          <Section title="Debugging with GCC">
            <p>
              Debugging is an essential part of the development process. GCC provides various flags to help with debugging, primarily through the generation of debug symbols.
            </p>
            <h3 className="text-lg font-semibold mb-2">Generating Debug Information</h3>
            <p>
              To enable debugging information in your compiled code, use the <strong>-g</strong> flag. This flag generates additional information that can be used by debuggers like GDB (GNU Debugger).
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                $ gcc -g myfile.c -o execfile
              </code>
            </pre>
            <p>
              This will allow you to use GDB to debug your program and inspect variables, set breakpoints, and step through your code.
            </p>
            <h3 className="text-lg font-semibold mb-2">Debugging with GDB</h3>
            <p>
              Once the program is compiled with debug symbols, you can use GDB to debug it:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                $ gdb ./execfile <br />
                (gdb) run <br />
                (gdb) break main <br />
                (gdb) step
              </code>
            </pre>
            <p>
              This sequence launches GDB, starts the program, sets a breakpoint at the <code>main</code> function, and steps through the code one line at a time.
            </p>
          </Section>

          <Section title="GCC and Makefiles">
            <p>
              When working on large projects, compiling and linking your code manually becomes tedious. Makefiles help automate the build process by defining rules for compiling and linking. GCC can be integrated with Makefiles to streamline the process.
            </p>
            <h3 className="text-lg font-semibold mb-2">Basic Makefile Example</h3>
            <p>
              Here’s an example of a simple Makefile for compiling a C program using GCC:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                CC = gcc <br />
                CFLAGS = -Wall -O2 <br />
                <br />
                all: main.o utils.o <br />
                &nbsp;&nbsp;&nbsp;&nbsp;$(CC) $(CFLAGS) main.o utils.o -o myprogram <br />
                <br />
                main.o: main.c <br />
                &nbsp;&nbsp;&nbsp;&nbsp;$(CC) $(CFLAGS) -c main.c <br />
                <br />
                utils.o: utils.c <br />
                &nbsp;&nbsp;&nbsp;&nbsp;$(CC) $(CFLAGS) -c utils.c <br />
                <br />
                clean: <br />
                &nbsp;&nbsp;&nbsp;&nbsp;rm -f *.o myprogram
              </code>
            </pre>
            <p>
              This Makefile defines rules for compiling two source files (<code>main.c</code> and <code>utils.c</code>) and linking them into an executable (<code>myprogram</code>). The <code>clean</code> rule removes the object files and the executable.
            </p>
            <h3 className="text-lg font-semibold mb-2">Running Make</h3>
            <p>
              To build your project using the Makefile, simply run the following command:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                $ make
              </code>
            </pre>
            <p>
              This will execute the rules defined in the Makefile, compiling and linking your code according to the instructions specified.
            </p>
          </Section>

          <Section title="GCC Cross-Compilers for Embedded Systems">
            <p>
              GCC is widely used for embedded systems development. Often, you'll need a cross-compiler to compile code for an architecture that's different from your development machine. For example, building software for ARM-based microcontrollers is common in embedded systems.
            </p>
            <h3 className="text-lg font-semibold mb-2">Installing a Cross-Compiler</h3>
            <p>
              To install a cross-compiler for a target architecture (e.g., ARM), you can often find prebuilt toolchains or use a package manager to install them.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                $ sudo apt-get install gcc-arm-linux-gnueabi
              </code>
            </pre>
            <p>
              After installation, you can use the cross-compiler just like any other GCC tool, specifying the target architecture with the <strong>--target</strong> flag.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                $ arm-linux-gnueabi-gcc -o program program.c
              </code>
            </pre>
          </Section>
          <Section title="Advanced GCC Features">
            <p>
              GCC is a powerful tool, offering advanced features that can be leveraged to improve performance, portability, and debugging. Understanding these features is key to optimizing your build process and getting the most out of your code.
            </p>
            
            <h3 className="text-lg font-semibold mb-2">Profile-Guided Optimization (PGO)</h3>
            <p>
              Profile-guided optimization (PGO) is an advanced optimization technique in GCC that relies on profiling information gathered from running a program. The idea is to optimize the code based on real-world execution paths, leading to more efficient compiled code.
            </p>
            <p>
              To enable PGO in GCC, you need to perform the following steps:
            </p>
            <ol className="list-decimal pl-6 space-y-1 text-sm">
              <li>First, compile the code with the <strong>-fprofile-generate</strong> option to generate profiling data:</li>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>
                  $ gcc -fprofile-generate myfile.c -o myfile
                </code>
              </pre>
              <li>Run the program to generate the profiling data:</li>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>
                  $ ./myfile
                </code>
              </pre>
              <li>Recompile the code with the <strong>-fprofile-use</strong> flag to apply the optimizations:</li>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>
                  $ gcc -fprofile-use myfile.c -o myfile_optimized
                </code>
              </pre>
            </ol>
            <p>
              This process can result in significant performance improvements, especially for large programs where profiling provides valuable insights.
            </p>

            <h3 className="text-lg font-semibold mb-2">Link-Time Optimization (LTO)</h3>
            <p>
              Link-time optimization (LTO) allows GCC to perform optimizations across different translation units (e.g., across multiple object files). This can significantly improve the performance of your code by allowing the compiler to make global optimizations that it would not otherwise be able to perform at the individual file level.
            </p>
            <p>
              To enable LTO in GCC, you need to add the <strong>-flto</strong> flag to both the compilation and linking steps:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                $ gcc -flto -c file1.c file2.c <br />
                $ gcc -flto file1.o file2.o -o myprogram
              </code>
            </pre>
            <p>
              LTO allows the compiler to optimize the entire program, potentially improving the performance and reducing the size of the executable.
            </p>

          </Section>

          <Section title="Handling Compiler Errors and Warnings">
            <p>
              GCC provides a wide array of error messages and warnings that can help developers identify issues in their code. However, understanding and resolving these errors can sometimes be challenging. Let’s go through some common GCC errors and warnings and how to resolve them.
            </p>

            <h3 className="text-lg font-semibold mb-2">Common Errors</h3>
            <p>
              Here are some typical GCC errors you might encounter:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>undefined reference to 'function_name'</strong>: This error occurs when the linker cannot find the definition of a function or variable that is referenced in the code. It usually indicates that you forgot to include the necessary source file or library.</li>
              <li><strong>syntax error before 'token'</strong>: This error occurs when there is a mistake in your code's syntax, such as a missing semicolon or mismatched parentheses.</li>
              <li><strong>error: invalid suffix on literal</strong>: This error can occur when trying to assign a numeric literal with an unsupported suffix, such as using <code>0b1010</code> in older versions of GCC that don’t support binary literals.</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Common Warnings</h3>
            <p>
              GCC also produces warnings when it detects potentially problematic code, such as:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>warning: implicit declaration of function 'function_name'</strong>: This warning occurs when you use a function before declaring it. To resolve it, declare the function prototype at the beginning of your code or include the correct header file.</li>
              <li><strong>warning: unused variable 'variable_name'</strong>: This warning informs you about variables that are declared but not used in the code. If the variable is unnecessary, simply remove it to clean up the code.</li>
              <li><strong>warning: comparison between signed and unsigned integer expressions</strong>: This occurs when you compare signed and unsigned integers, which can lead to unexpected behavior. To fix it, ensure the types of the variables being compared are compatible.</li>
            </ul>
            <p>
              By enabling <strong>-Wall</strong>, you can get more warnings from GCC to help identify potential issues before they become bugs.
            </p>

          </Section>

          <Section title="Using GCC with Other Languages">
            <p>
              While GCC is primarily used for compiling C and C++ code, it also supports a wide range of other programming languages. Let’s take a look at some of these and how you can compile them with GCC.
            </p>

            <h3 className="text-lg font-semibold mb-2">GCC for C++</h3>
            <p>
              GCC can also compile C++ code with the <strong>g++</strong> front-end. When compiling C++ code, you should use the <strong>g++</strong> command instead of <strong>gcc</strong>. This ensures that the C++ standard library is linked properly.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                $ g++ myfile.cpp -o myprogram
              </code>
            </pre>
            <p>
              You can still use the same options as with C, such as <strong>-O2</strong> for optimization or <strong>-g</strong> for debugging information.
            </p>

            <h3 className="text-lg font-semibold mb-2">GCC for Fortran</h3>
            <p>
              GCC also supports Fortran, and the <strong>gfortran</strong> front-end is used to compile Fortran code.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                $ gfortran myfile.f90 -o myprogram
              </code>
            </pre>
            <p>
              As with C and C++, you can specify optimization flags and other options when compiling Fortran code with GCC.
            </p>

            <h3 className="text-lg font-semibold mb-2">GCC for Other Languages</h3>
            <p>
              GCC also supports other languages such as Ada, Go, and Objective-C, each with its own front-end (e.g., <strong>gnat</strong> for Ada, <strong>gccgo</strong> for Go). To compile these languages, simply use the appropriate compiler front-end command for the language:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                $ gnat myfile.ads myfile.adb -o myprogram (for Ada) <br />
                $ gccgo myfile.go -o myprogram (for Go)
              </code>
            </pre>
            <p>
              By using GCC with these different languages, you can leverage a unified toolchain for multiple programming languages, streamlining the build process.
            </p>
          </Section>

          <Section title="GCC Best Practices">
            <p>
              When using GCC, adhering to best practices can help ensure the efficiency, portability, and maintainability of your code. Here are some tips to follow when working with GCC.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>Enable warnings</strong>: Always use the <strong>-Wall</strong> option to enable GCC's warning messages. This helps catch potential issues early.</li>
              <li><strong>Use optimization levels wisely</strong>: Use the <strong>-O</strong> flags to optimize your code for performance, but remember that aggressive optimizations may make debugging more difficult.</li>
              <li><strong>Use makefiles</strong>: For larger projects, use Makefiles to automate the build process. This reduces manual errors and simplifies building complex projects.</li>
              <li><strong>Keep your toolchain updated</strong>: Regularly update GCC and related tools to take advantage of bug fixes, new features, and performance improvements.</li>
              <li><strong>Use debugging tools</strong>: Utilize debugging tools like GDB and Valgrind to ensure your code runs correctly and is free of memory errors or undefined behavior.</li>
            </ul>
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
      className="border rounded p-2 w-full text-sm dark:text-black"
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
