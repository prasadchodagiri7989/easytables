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
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">
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
          <div>
            <h2 className="text-lg font-semibold mb-2">Advanced Usage</h2>
            <p>
              While <code>cat</code> is primarily used to display and concatenate files, it can also be used in conjunction with redirection and piping to perform more complex operations. These examples highlight more advanced and practical use cases.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">Redirecting Output</h3>
            <p>
              Use the <code>&gt;</code> operator to overwrite a file or <code>&gt;&gt;</code> to append to a file.
            </p>
            <Example
              title="Redirect contents to a new file:"
              code={`$ cat file1.txt > newfile.txt`}
            />
            <Example
              title="Append contents to an existing file:"
              code={`$ cat file2.txt >> newfile.txt`}
            />
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">Creating Files</h3>
            <p>
              You can use <code>cat</code> to create new files manually by typing content directly into the terminal.
            </p>
            <Example
              title="Create a new file:"
              code={`$ cat > notes.txt\nThis is a new note.\nPress CTRL+D to save`}
            />
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">Using cat with Pipes</h3>
            <p>
              <code>cat</code> is commonly used with pipes (<code>|</code>) to pass its output to other commands.
            </p>
            <Example
              title="Count number of lines in a file:"
              code={`$ cat file.txt | wc -l`}
            />
            <Example
              title="Search for a pattern:"
              code={`$ cat file.txt | grep "pattern"`}
            />
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">Numbering Non-Blank Lines</h3>
            <p>
              Using the <code>-b</code> option, you can number only the non-blank lines of a file, which is useful for formatted output.
            </p>
            <Example
              title="Number non-blank lines:"
              code={`$ cat -b file.txt`}
            />
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">Comparing with Other Commands</h3>
            <p>
              <code>cat</code> can be confused with other file display commands like <code>less</code>, <code>more</code>, and <code>head</code>. Here's a quick comparison:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>cat:</strong> Displays the whole file at once. Good for short files.</li>
              <li><strong>less:</strong> Allows scrolling up/down through large files.</li>
              <li><strong>more:</strong> Like <code>less</code> but only scrolls down.</li>
              <li><strong>head:</strong> Shows the first few lines.</li>
              <li><strong>tail:</strong> Shows the last few lines. Use with <code>-f</code> to monitor live logs.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">Common Mistakes</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Using cat with huge files:</strong> This can flood the terminal and is inefficient. Use <code>less</code> instead.</li>
              <li><strong>Using cat to read single files unnecessarily:</strong> For simple viewing, <code>less</code> or <code>head</code> is more efficient.</li>
              <li><strong>Trying to cat directories:</strong> This will result in an error. <code>cat</code> works with files, not folders.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Real-World Use Cases</h2>
            <p>
              Here are some ways developers, sysadmins, and users use <code>cat</code> in real-world workflows:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>To inspect config files like <code>/etc/passwd</code> or <code>/etc/hosts</code>.</li>
              <li>To quickly dump small log files.</li>
              <li>To merge multiple script files into one deployment file.</li>
              <li>To generate file contents dynamically for scripts.</li>
              <li>To debug output passed to or from other commands via pipes.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Fun Fact</h2>
            <p>
              The name “<code>cat</code>” is short for “concatenate.” It was originally developed for the early Unix systems in the 1970s and has remained a staple utility due to its simplicity and versatility.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Summary</h2>
            <p>
              The <code>cat</code> command is a powerful, lightweight tool used to display, merge, and redirect text file content. It's an essential command for anyone working with Linux, and when combined with piping, redirection, and scripting, it becomes an even more versatile tool.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Redirecting Output</h2>
            <p>
              One of the most useful features of the <code>cat</code> command is its ability to redirect output. You can take the content from one or more files and redirect them into a new file using the <code>&gt;</code> operator. This overwrites any existing content in the target file.
            </p>
            <Example
              title="Overwrite a file:"
              code={`$ cat file1.txt > output.txt`}
            />
            <p>
              Alternatively, you can append content to an existing file using the <code>&gt;&gt;</code> operator. This is useful when adding more content to a log file or maintaining a history.
            </p>
            <Example
              title="Append to a file:"
              code={`$ cat file2.txt >> output.txt`}
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Creating Files Using cat</h2>
            <p>
              The <code>cat</code> command can also be used to quickly create new files. By redirecting standard input (your keyboard input) to a new file, you can type content directly into it.
            </p>
            <Example
              title="Create a new file interactively:"
              code={`$ cat > notes.txt\nType your content here\nPress Ctrl+D to save`}
            />
            <p>
              When using this approach, it's important to remember to press <code>Ctrl+D</code> to signal the end of the input and save the file.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Using cat in Shell Pipelines</h2>
            <p>
              The <code>cat</code> command is commonly used in combination with other utilities via pipes (<code>|</code>). This allows you to process text with powerful tools like <code>grep</code>, <code>awk</code>, <code>sort</code>, and <code>less</code>.
            </p>
            <Example
              title="Filter content using grep:"
              code={`$ cat data.txt | grep "keyword"`}
            />
            <Example
              title="View sorted content:"
              code={`$ cat names.txt | sort`}
            />
            <Example
              title="Count words and lines:"
              code={`$ cat file.txt | wc`}
            />
            <p>
              While piping <code>cat</code> into other commands is common, it can sometimes be replaced with input redirection (e.g., <code>grep "keyword" data.txt</code>) for better performance.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Concatenating Multiple Files</h2>
            <p>
              As the name suggests, <code>cat</code> excels at concatenating files. You can merge several files into one by specifying them in sequence, followed by the redirection operator.
            </p>
            <Example
              title="Concatenate three files into a single file:"
              code={`$ cat jan.txt feb.txt mar.txt > q1.txt`}
            />
            <p>
              This is especially useful for managing logs, reports, or chunked data files.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Viewing Binary Files</h2>
            <p>
              Although <code>cat</code> is intended for text files, it can technically display binary files as well. However, doing this can clutter your terminal with unreadable characters and potentially disrupt your terminal session. Use with caution.
            </p>
            <Example
              title="Attempt to view a binary file:"
              code={`$ cat image.png`}
            />
            <p>
              For binary files, consider using commands like <code>xxd</code>, <code>hexdump</code>, or <code>strings</code> for a cleaner representation.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Viewing Large Files</h2>
            <p>
              Using <code>cat</code> to view very large files can flood the terminal and make it hard to read. In these cases, using <code>less</code> or <code>more</code> is a better approach. However, <code>cat</code> is still helpful when piped with other utilities that filter or format the output.
            </p>
            <Example
              title="View a large file with pagination:"
              code={`$ cat largefile.txt | less`}
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Alternatives to cat</h2>
            <p>
              While <code>cat</code> is versatile, sometimes other tools offer more efficient or readable results:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><code>tac</code>: Displays the file in reverse line order.</li>
              <li><code>nl</code>: Adds line numbers more cleanly than <code>cat -n</code>.</li>
              <li><code>less</code>: Better for navigating long files.</li>
              <li><code>head</code> and <code>tail</code>: For viewing the beginning or end of files.</li>
            </ul>
          </div>
  {/* Understanding cat Internals */}
<div>
  <h2 className="text-lg font-semibold mb-2">Understanding <code>cat</code> Internals</h2>
  <p>
    The <code>cat</code> command reads files sequentially and writes them to standard output. It's optimized for buffered input/output operations, making it fast and reliable. Its simplicity makes it a favorite in shell scripts and terminal workflows.
  </p>
</div>

{/* When Not to Use cat */}
<div>
  <h2 className="text-lg font-semibold mb-2">When <em>Not</em> to Use <code>cat</code></h2>
  <p>
    Despite its usefulness, <code>cat</code> is sometimes used unnecessarily. Overuse can lead to inefficient or redundant commands. Consider these better alternatives:
  </p>
  <ul className="list-disc list-inside space-y-1">
    <li><code>grep "pattern" file.txt</code> is more efficient than <code>cat file.txt | grep "pattern"</code></li>
    <li><code>less file.txt</code> is preferred for large files over <code>cat file.txt</code></li>
  </ul>
</div>

{/* Quiz Section */}
<div>
  <h2 className="text-lg font-semibold mb-2">Test Yourself – Quick Quiz</h2>
  <p className="font-medium">
    Which of the following is the correct way to append the contents of <code>file2.txt</code> into <code>file1.txt</code>?
  </p>
  <ol className="list-decimal list-inside space-y-1 mt-2">
    <li><code>cat file2.txt {">"} file1.txt</code></li>
    <li><code>cat file1.txt {">>"} file2.txt</code></li>
    <li><code>cat file2.txt {">>"} file1.txt</code></li>
    <li><code>cat {">"} file1.txt {">"} file2.txt</code></li>
  </ol>
  <p className="mt-2 italic text-green-600">Answer: Option 3 is correct.</p>
</div>

{/* Combining cat with Tools */}
<div>
  <h2 className="text-lg font-semibold mb-2">Combining <code>cat</code> with Other Tools</h2>
  <p>
    Combine <code>cat</code> with tools like <code>sed</code> and <code>awk</code> to perform advanced file manipulations.
  </p>
  <Example
    title="Remove comments from a config file:"
    code={`$ cat config.txt | sed '/^#/d'`}
  />
  <Example
    title="Print specific columns from CSV:"
    code={`$ cat data.csv | awk -F ',' '{print $1, $3}'`}
  />
</div>

{/* Pro Tips */}
<div>
  <h2 className="text-lg font-semibold mb-2">Pro Tips</h2>
  <ul className="list-disc list-inside space-y-1">
    <li>Use <code>alias c='cat'</code> in your shell profile for faster typing.</li>
    <li>Run <code>cat -v</code> to visualize non-printable characters.</li>
    <li>Use <code>cat /dev/null {">"} file.txt</code> to empty a file without deleting it.</li>
  </ul>
</div>

{/* Security Note */}
<div>
  <h2 className="text-lg font-semibold mb-2">Security Consideration</h2>
  <p>
    Avoid using <code>cat</code> to print sensitive files on shared screens. Use editors with better access control or ensure proper file permissions to protect confidential content.
  </p>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Using <code>cat</code> in Shell Scripts</h2>
  <p>
    The <code>cat</code> command is often used in shell scripts for combining configuration files, inserting templates, or generating reports. Here's a simple example:
  </p>
  <Example
    title="Create a backup script:"
    code={`#!/bin/bash\ncat file1.txt file2.txt > backup.txt\necho "Backup created as backup.txt"`}
  />
  <p>
    You can automate file management tasks with <code>cat</code> to improve workflow efficiency.
  </p>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Performance Considerations</h2>
  <p>
    While <code>cat</code> is fast for small files, it's less optimal for large datasets or logs. Use <code>head</code>, <code>tail</code>, or <code>less</code> for better control and performance:
  </p>
  <ul className="list-disc list-inside space-y-1">
    <li><code>less filename.log</code> for fast scrolling</li>
    <li><code>head -n 1000 file.txt</code> to load first 1000 lines</li>
    <li><code>tail -f log.txt</code> to follow a growing log file in real-time</li>
  </ul>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Multiline Text Files with <code>cat</code></h2>
  <p>
    Use <code>cat</code> with redirection to manually create multi-line files:
  </p>
  <Example
    title="Create file.txt manually:"
    code={`$ cat > file.txt\nLine one\nLine two\nLine three\nCtrl+D to save`}
  />
  <p>
    This is useful when quickly jotting notes or creating test files without using an editor.
  </p>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Avoid Overwriting Important Files</h2>
  <p>
    When using <code>cat {">"} filename</code>, be cautious — if the file exists, it will be completely overwritten. Always double-check the target file before running redirection commands.
  </p>
  <p>
    Use <code>&gt;&gt;</code> to append instead if unsure:
  </p>
  <Example
    title="Safe appending:"
    code={`$ cat notes.txt >> journal.txt`}
  />
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Related Commands to Explore</h2>
  <ul className="list-disc list-inside space-y-1">
    <li><code>tac</code> – Outputs the contents of a file in reverse</li>
    <li><code>nl</code> – Adds line numbers with more formatting options</li>
    <li><code>paste</code> – Joins lines side by side (column-wise)</li>
    <li><code>tee</code> – Redirects output to a file while also displaying it</li>
    <li><code>xargs</code> – Reads items from input and executes commands</li>
  </ul>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Quick File Preview Tips</h2>
  <p>
    Use <code>cat</code> in combination with <code>head</code> and <code>tail</code> to preview specific sections of a file:
  </p>
  <Example
    title="Preview first 10 lines of merged files:"
    code={`$ cat file1.txt file2.txt | head`}
  />
  <Example
    title="View last lines after combining files:"
    code={`$ cat *.log | tail -n 20`}
  />
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
