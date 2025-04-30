import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const HtmlTables: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
              <Breadcrumb className="mb-4">
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                          <Link to="/web/html">HTML Tools</Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>HTML Tables</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>HTML Tables</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>
            HTML tables are used to display data in a grid format, consisting of rows and columns. Rows are defined using <code>&lt;tr&gt;</code> tags, and columns are defined using <code>&lt;td&gt;</code> (table data) or <code>&lt;th&gt;</code> (table header) tags.
          </p>

          {/* Basic Structure */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Basic Table Structure</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><code>&lt;table&gt;</code>: Defines the entire table.</li>
              <li><code>&lt;tr&gt;</code>: Defines a row of cells.</li>
              <li><code>&lt;th&gt;</code>: Defines a header cell (bold and centered by default).</li>
              <li><code>&lt;td&gt;</code>: Defines a regular data cell.</li>
            </ul>
          </div>

          {/* Example: Simple Table */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example: Simple Table</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<table border="1">
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
    <td>Data 3</td>
  </tr>
  <tr>
    <td>Data 4</td>
    <td>Data 5</td>
    <td>Data 6</td>
  </tr>
</table>`}</code>
            </pre>
            <p>This creates a table with a header row and two data rows.</p>
          </div>

          {/* Table Styling */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Table Styling</h2>
            <p>You can style tables using CSS:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>border:</strong> Adds a border around the table and cells.</li>
              <li><strong>padding:</strong> Adds space inside table cells.</li>
              <li><strong>text-align:</strong> Aligns text inside cells.</li>
              <li><strong>background-color:</strong> Changes the background color of rows or cells.</li>
            </ul>
          </div>

          {/* Example: Styled Table */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example: Styled Table</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<table style="border: 1px solid black; width: 100%; text-align: center;">
  <tr style="background-color: #f2f2f2;">
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
    <td>Data 3</td>
  </tr>
  <tr>
    <td>Data 4</td>
    <td>Data 5</td>
    <td>Data 6</td>
  </tr>
</table>`}</code>
            </pre>
            <p>This renders a styled table with centered text, borders, and background color for the header row.</p>
          </div>

          {/* Colspan and Rowspan */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Table with Colspan and Rowspan</h2>
            <p>Use the <code>colspan</code> and <code>rowspan</code> attributes to merge cells across columns or rows.</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<table border="1">
  <tr>
    <th colspan="2">Header 1 & 2</th>
    <th>Header 3</th>
  </tr>
  <tr>
    <td rowspan="2">Data 1</td>
    <td>Data 2</td>
    <td>Data 3</td>
  </tr>
  <tr>
    <td>Data 4</td>
    <td>Data 5</td>
  </tr>
</table>`}</code>
            </pre>
            <p>This example shows how a cell can span multiple columns or rows.</p>
          </div>

          {/* Table with Caption */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Table with Caption</h2>
            <p>The <code>&lt;caption&gt;</code> tag adds a title to the table describing its content.</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<table border="1">
  <caption>Employee Data</caption>
  <tr>
    <th>Name</th>
    <th>Position</th>
  </tr>
  <tr>
    <td>John Doe</td>
    <td>Manager</td>
  </tr>
  <tr>
    <td>Jane Smith</td>
    <td>Developer</td>
  </tr>
</table>`}</code>
            </pre>
            <p>This example adds a caption "Employee Data" above the table.</p>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              HTML tables are a powerful way to organize and display data in a tabular format. Mastering structure, styling, and techniques like merging cells enhances the effectiveness of your tables.
            </p>
          </div>

          {/* Further Resources */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Further Resources</h2>
            <p>For more detailed information, visit:</p>
            <a
              href="https://www.rapidtables.com/web/html/html-table.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm"
            >
              HTML Tables - RapidTables
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HtmlTables;