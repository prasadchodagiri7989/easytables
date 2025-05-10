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
                                    <Link to="/">Home</Link>
                                  </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
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
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">
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
                    {/* Table with Multiple Headers */}
                    <div>
            <h2 className="text-lg font-semibold mb-2">Table with Multiple Headers</h2>
            <p>In some cases, you may want to group headers in a table for better organization and understanding. The <code>&lt;thead&gt;</code>, <code>&lt;tfoot&gt;</code>, and <code>&lt;tbody&gt;</code> elements can be used to separate different sections of a table, with multiple header rows if needed.</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<table border="1">
  <thead>
    <tr>
      <th rowspan="2">Employee Name</th>
      <th colspan="2">Department</th>
    </tr>
    <tr>
      <th>Department Name</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>Engineering</td>
      <td>New York</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>HR</td>
      <td>Chicago</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3" style="text-align: center;">End of Employee List</td>
    </tr>
  </tfoot>
</table>`}</code>
            </pre>
            <p>This example demonstrates a table with multiple header rows and a footer row that spans all columns.</p>
          </div>

          {/* Responsive Tables */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Responsive Tables</h2>
            <p>In modern web design, it’s important to ensure tables look good on mobile devices. You can make tables responsive by using CSS to allow horizontal scrolling when the table overflows the container.</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<div style="overflow-x:auto;">
  <table border="1">
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
      <th>Header 4</th>
    </tr>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
      <td>Data 3</td>
      <td>Data 4</td>
    </tr>
    <tr>
      <td>Data 5</td>
      <td>Data 6</td>
      <td>Data 7</td>
      <td>Data 8</td>
    </tr>
  </table>
</div>`}</code>
            </pre>
            <p>Wrapping the table in a <code>&lt;div&gt;</code> with the <code>overflow-x:auto;</code> CSS rule will enable horizontal scrolling on smaller screens when the table exceeds the width of its container.</p>
          </div>

          {/* Accessibility in Tables */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Accessibility in Tables</h2>
            <p>Accessibility is critical for ensuring that your tables are usable by all visitors, including those with disabilities. You can improve accessibility by using semantic elements and adding ARIA (Accessible Rich Internet Applications) attributes.</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<table border="1" aria-describedby="employeeTable" aria-labelledby="employeeTableLabel">
  <caption id="employeeTableLabel">Employee Information</caption>
  <thead>
    <tr>
      <th>Employee Name</th>
      <th>Department</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>Engineering</td>
      <td>New York</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>HR</td>
      <td>Chicago</td>
    </tr>
  </tbody>
</table>`}</code>
            </pre>
            <p>In this example, the <code>aria-describedby</code> and <code>aria-labelledby</code> attributes improve the table's accessibility by providing additional context to assistive technologies, such as screen readers.</p>
          </div>

          {/* Table with Links */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Table with Links</h2>
            <p>Sometimes you may need to include links within a table, which can be done by embedding <code>&lt;a&gt;</code> tags inside table cells. This can help users quickly navigate to related pages or resources.</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<table border="1">
  <tr>
    <th>Employee Name</th>
    <th>Profile Link</th>
  </tr>
  <tr>
    <td>John Doe</td>
    <td><a href="/profiles/john-doe">View Profile</a></td>
  </tr>
  <tr>
    <td>Jane Smith</td>
    <td><a href="/profiles/jane-smith">View Profile</a></td>
  </tr>
</table>`}</code>
            </pre>
            <p>This table includes links in the "Profile Link" column, allowing users to visit each employee's profile by clicking the respective link.</p>
          </div>

          {/* Table with Search */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Table with Search</h2>
            <p>For larger datasets, you might want to add a search functionality to your tables. By using JavaScript or a library like DataTables, users can search and filter table content.</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<input type="text" id="searchInput" placeholder="Search...">

<script>
  document.getElementById('searchInput').addEventListener('input', function(event) {
    const filter = event.target.value.toLowerCase();
    const rows = document.querySelectorAll('table tr');
    
    rows.forEach(row => {
      const cells = row.querySelectorAll('td, th');
      let match = false;
      cells.forEach(cell => {
        if (cell.textContent.toLowerCase().includes(filter)) {
          match = true;
        }
      });
      row.style.display = match ? '' : 'none';
    });
  });
</script>`}</code>
            </pre>
            <p>This example uses an input field that filters the table rows as the user types, making it easy to find specific entries in a large table.</p>
          </div>

          {/* Table with Pagination */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Table with Pagination</h2>
            <p>When displaying large tables, it’s helpful to divide the data into smaller pages using pagination. JavaScript libraries like DataTables can help with this, or you can implement your own pagination logic.</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<div id="pagination"></div>
<script>
  const rowsPerPage = 5;
  const tableRows = document.querySelectorAll('table tr');
  const totalPages = Math.ceil(tableRows.length / rowsPerPage);

  function showPage(page) {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    
    tableRows.forEach((row, index) => {
      row.style.display = index >= start && index < end ? '' : 'none';
    });
  }

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.addEventListener('click', () => showPage(i));
    document.getElementById('pagination').appendChild(pageButton);
  }

  showPage(1);
</script>`}</code>
            </pre>
            <p>This script enables basic pagination for tables, displaying a limited number of rows per page with corresponding page buttons for navigation.</p>
          </div>

          {/* Sorting in Tables */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Sorting in Tables</h2>
            <p>To enhance usability, tables can be made sortable by clicking on the column headers. JavaScript libraries like DataTables provide this feature, or you can implement it manually using JavaScript.</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<script>
  document.querySelectorAll('th').forEach(header => {
    header.addEventListener('click', () => {
      const index = Array.from(header.parentNode.children).indexOf(header);
      const rows = Array.from(document.querySelectorAll('table tr:nth-child(n+2)'));
      const sortedRows = rows.sort((rowA, rowB) => {
        const cellA = rowA.children[index].textContent;
        const cellB = rowB.children[index].textContent;
        return cellA.localeCompare(cellB);
      });
      sortedRows.forEach(row => document.querySelector('table').appendChild(row));
    });
  });
</script>`}</code>
            </pre>
            <p>This script enables basic sorting functionality for table columns by clicking on the header cells.</p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default HtmlTables;