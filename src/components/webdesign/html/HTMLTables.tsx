import React from 'react';

const HTMLTables = () => {
  return (
    <div>
      <h2>HTML Tables</h2>

      <p>
        HTML tables are used to display data in a grid format. They consist of rows and columns, where rows are represented by the <code>&lt;tr&gt;</code> tag, and columns are defined using <code>&lt;td&gt;</code> (table data) or <code>&lt;th&gt;</code> (table header) tags.
      </p>

      <h3>Basic Table Structure</h3>

      <p>A basic HTML table includes the following tags:</p>
      <ul>
        <li><code>&lt;table&gt;</code>: Defines the entire table.</li>
        <li><code>&lt;tr&gt;</code>: Defines a row of cells.</li>
        <li><code>&lt;th&gt;</code>: Defines a header cell (bold and centered by default).</li>
        <li><code>&lt;td&gt;</code>: Defines a regular data cell.</li>
      </ul>

      <h4>Example: Simple Table</h4>

      <p>Here's an example of a simple HTML table with a header row and two data rows:</p>

      <pre>
        <code>
{`<table border="1">
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
</table>`}
        </code>
      </pre>

      <p>This renders as a table with headers and rows of data:</p>

      <table border={1}>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>

      <h3>Table Styling</h3>

      <p>You can style tables using CSS. Here are some common ways to style HTML tables:</p>
      <ul>
        <li><code>border</code>: Adds a border around the table and cells.</li>
        <li><code>padding</code>: Adds space inside table cells.</li>
        <li><code>text-align</code>: Aligns text inside table cells.</li>
        <li><code>background-color</code>: Changes the background color of rows or cells.</li>
      </ul>

      <h4>Example: Styled Table</h4>

      <p>Here's an example of a styled HTML table using inline CSS:</p>

      <pre>
        <code>
{`<table style="border: 1px solid black; width: 100%; text-align: center;">
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
</table>`}
        </code>
      </pre>

      <p>This renders a table with centered text, borders, and alternating row colors:</p>

      <table style={{ border: '1px solid black', width: '100%', textAlign: 'center' }}>
        <thead style={{ backgroundColor: '#f2f2f2' }}>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>

      <h3>Table with Colspan and Rowspan</h3>

      <p>You can span multiple columns or rows in a table using the <code>colspan</code> and <code>rowspan</code> attributes. These attributes allow you to merge cells across columns or rows.</p>

      <h4>Example: Colspan and Rowspan</h4>

      <pre>
        <code>
{`<table border="1">
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
</table>`}
        </code>
      </pre>

      <p>This renders as a table where the first cell spans two rows and the header spans two columns:</p>

      <table border={1}>
        <thead>
          <tr>
            <th colSpan={2}>Header 1 &amp; 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={2}>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 4</td>
            <td>Data 5</td>
          </tr>
        </tbody>
      </table>

      <h3>Table with Caption</h3>

      <p>You can add a title or caption to your table using the <code>&lt;caption&gt;</code> tag, which describes the table’s content.</p>

      <h4>Example: Table with Caption</h4>

      <pre>
        <code>
{`<table border="1">
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
</table>`}
        </code>
      </pre>

      <p>This renders a table with a caption:</p>

      <table border={1}>
        <caption>Employee Data</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Manager</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>Developer</td>
          </tr>
        </tbody>
      </table>

      <h3>Conclusion</h3>

      <p>
        HTML tables are a great way to organize and display data in a tabular format. Understanding the basic structure, styling, and advanced techniques like merging cells with <code>colspan</code> and <code>rowspan</code> will help you present data effectively on your web pages.
      </p>

      <h3>Further Resources</h3>

      <p>For more detailed information on HTML tables, visit:</p>

      <ul>
        <li>
          <a
            href="https://www.rapidtables.com/web/html/html-table.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML Tables - RapidTables
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HTMLTables;
