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
