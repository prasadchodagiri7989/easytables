import React from "react";

const CatCommand: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-4">
        <nav className="text-sm text-gray-500">
          Home › Tools › <span className="text-black">Cat Command in Linux/Unix</span>
        </nav>
      </div>

      <h1 className="text-3xl font-bold mb-6">cat Command in Linux/Unix</h1>

      <div className="bg-white rounded-lg shadow p-6 mb-6 space-y-6">
        <p>The <strong>cat</strong> command is used to display the contents of text files and to combine multiple files into one file.</p>
        <p><strong>Note:</strong> The <code>cat</code> command does not accept directories.</p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            <code>$ cat [options] file1 [file2...]</code>
          </pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Options</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-2">Option</th>
                  <th className="border-b p-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b p-2"><code>-b</code></td>
                  <td className="border-b p-2">Add line numbers to non-blank lines.</td>
                </tr>
                <tr>
                  <td className="border-b p-2"><code>-n</code></td>
                  <td className="border-b p-2">Add line numbers to all lines.</td>
                </tr>
                <tr>
                  <td className="border-b p-2"><code>-s</code></td>
                  <td className="border-b p-2">Squeeze multiple blank lines into a single blank line.</td>
                </tr>
                <tr>
                  <td className="border-b p-2"><code>-E</code></td>
                  <td className="border-b p-2">Show <code>$</code> at the end of each line.</td>
                </tr>
                <tr>
                  <td className="border-b p-2"><code>-T</code></td>
                  <td className="border-b p-2">Show <code>^I</code> instead of tab characters.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Examples</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">View a file:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>
                  $ cat list1.txt{"\n"}
                  milk{"\n"}
                  bread{"\n"}
                  apples
                </code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Combine two files:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>
                  $ cat list1.txt list2.txt{"\n"}
                  milk{"\n"}
                  bread{"\n"}
                  apples{"\n"}
                  house{"\n"}
                  car
                </code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Combine and save into another file:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ cat list1.txt list2.txt &gt; todo.txt</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCommand;
