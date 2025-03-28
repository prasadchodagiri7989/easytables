import React, { useState } from "react";
import { Copy, Check, Plus, Minus, Download, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/ui/ToolLayout";
import { GuidanceSection } from "../GuidanceSection";

const HtmlTableGenerator = () => {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [includeHeader, setIncludeHeader] = useState(true);
  const [includeCaption, setIncludeCaption] = useState(false);
  const [caption, setCaption] = useState("Table Caption");
  const [border, setBorder] = useState(1);
  const [cellpadding, setCellpadding] = useState(5);
  const [cellspacing, setCellspacing] = useState(0);
  const [width, setWidth] = useState(100);
  const [widthUnit, setWidthUnit] = useState("%");
  const [cssClass, setCssClass] = useState("");
  const [id, setId] = useState("");
  const [tableData, setTableData] = useState(Array(3).fill().map(() => Array(3).fill("")));
  const [headerData, setHeaderData] = useState(Array(3).fill("Header"));
  const [copied, setCopied] = useState(false);
  const [tableCode, setTableCode] = useState("");

  const updateTableSize = (newRows: number, newCols: number) => {
    // Update rows
    if (newRows > rows) {
      const additionalRows = Array(newRows - rows).fill().map(() => Array(cols).fill(""));
      setTableData([...tableData, ...additionalRows]);
    } else if (newRows < rows) {
      setTableData(tableData.slice(0, newRows));
    }
    
    // Update columns
    if (newCols > cols) {
      const newTableData = tableData.map(row => [...row, ...Array(newCols - cols).fill("")]);
      setTableData(newTableData);
      setHeaderData([...headerData, ...Array(newCols - cols).fill("Header")]);
    } else if (newCols < cols) {
      const newTableData = tableData.map(row => row.slice(0, newCols));
      setTableData(newTableData);
      setHeaderData(headerData.slice(0, newCols));
    }
    
    setRows(newRows);
    setCols(newCols);
  };

  const handleCellChange = (rowIndex: number, colIndex: number, value: string) => {
    const newTableData = [...tableData];
    newTableData[rowIndex][colIndex] = value;
    setTableData(newTableData);
  };

  const handleHeaderChange = (colIndex: number, value: string) => {
    const newHeaderData = [...headerData];
    newHeaderData[colIndex] = value;
    setHeaderData(newHeaderData);
  };

  const generateTableCode = () => {
    let code = '<table';
    
    if (border > 0) code += ` border="${border}"`;
    if (cellpadding > 0) code += ` cellpadding="${cellpadding}"`;
    if (cellspacing > 0) code += ` cellspacing="${cellspacing}"`;
    if (width > 0) code += ` width="${width}${widthUnit}"`;
    if (cssClass) code += ` class="${cssClass}"`;
    if (id) code += ` id="${id}"`;
    
    code += '>\n';
    
    if (includeCaption && caption.trim()) {
      code += `  <caption>${caption}</caption>\n`;
    }
    
    if (includeHeader) {
      code += '  <thead>\n    <tr>\n';
      for (let j = 0; j < cols; j++) {
        code += `      <th>${headerData[j] || `Header ${j+1}`}</th>\n`;
      }
      code += '    </tr>\n  </thead>\n';
    }
    
    code += '  <tbody>\n';
    for (let i = 0; i < rows; i++) {
      code += '    <tr>\n';
      for (let j = 0; j < cols; j++) {
        code += `      <td>${tableData[i][j] || `Cell ${i+1},${j+1}`}</td>\n`;
      }
      code += '    </tr>\n';
    }
    code += '  </tbody>\n</table>';
    
    setTableCode(code);
    return code;
  };

  const copyToClipboard = () => {
    const code = generateTableCode();
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast("Table code copied to clipboard", {
      description: "You can now paste it into your HTML document"
    });
    
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const downloadHtml = () => {
    const code = generateTableCode();
    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated HTML Table</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    table { border-collapse: collapse; }
    th, td { padding: 8px; text-align: left; }
    th { background-color: #f2f2f2; }
  </style>
</head>
<body>
${code}
</body>
</html>`;

    const blob = new Blob([fullHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "table.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast("HTML file downloaded", {
      description: "Your table has been saved as HTML"
    });
  };

  const handleGenerateTable = () => {
    generateTableCode();
    toast("Table code generated", {
      description: "You can now copy or download the HTML"
    });
  };

  return (
    <>
    <ToolLayout
      title="HTML Table Generator"
      description="Generate HTML tables with custom rows, columns, and styling."
      className="max-w-5xl"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">Table Structure</h3>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <label htmlFor="rows" className="block text-xs font-medium text-gray-600">
                  Rows
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => updateTableSize(Math.max(1, rows - 1), cols)}
                    className="px-2 py-1 border border-gray-200 rounded-l-md bg-gray-50 hover:bg-gray-100"
                    disabled={rows <= 1}
                  >
                    <Minus size={14} />
                  </button>
                  <input
                    id="rows"
                    type="number"
                    min="1"
                    max="20"
                    value={rows}
                    onChange={(e) => updateTableSize(Math.max(1, Math.min(20, parseInt(e.target.value) || 1)), cols)}
                    className="w-16 py-1 px-2 text-center border-y border-gray-200"
                  />
                  <button
                    onClick={() => updateTableSize(Math.min(20, rows + 1), cols)}
                    className="px-2 py-1 border border-gray-200 rounded-r-md bg-gray-50 hover:bg-gray-100"
                    disabled={rows >= 20}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              
              <div className="space-y-1">
                <label htmlFor="cols" className="block text-xs font-medium text-gray-600">
                  Columns
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => updateTableSize(rows, Math.max(1, cols - 1))}
                    className="px-2 py-1 border border-gray-200 rounded-l-md bg-gray-50 hover:bg-gray-100"
                    disabled={cols <= 1}
                  >
                    <Minus size={14} />
                  </button>
                  <input
                    id="cols"
                    type="number"
                    min="1"
                    max="10"
                    value={cols}
                    onChange={(e) => updateTableSize(rows, Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                    className="w-16 py-1 px-2 text-center border-y border-gray-200"
                  />
                  <button
                    onClick={() => updateTableSize(rows, Math.min(10, cols + 1))}
                    className="px-2 py-1 border border-gray-200 rounded-r-md bg-gray-50 hover:bg-gray-100"
                    disabled={cols >= 10}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeHeader}
                  onChange={() => setIncludeHeader(!includeHeader)}
                  className="rounded border-gray-300 text-primary focus:ring-primary/30 mr-1.5"
                />
                <span className="text-sm text-gray-600">Include header</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeCaption}
                  onChange={() => setIncludeCaption(!includeCaption)}
                  className="rounded border-gray-300 text-primary focus:ring-primary/30 mr-1.5"
                />
                <span className="text-sm text-gray-600">Include caption</span>
              </label>
            </div>
            
            {includeCaption && (
              <div className="space-y-1">
                <label htmlFor="caption" className="block text-xs font-medium text-gray-600">
                  Caption
                </label>
                <input
                  id="caption"
                  type="text"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="w-full px-3 py-1.5 border border-gray-200 rounded-md focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
            )}
            
            <h3 className="text-sm font-medium text-gray-700 mt-6">Table Attributes</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="border" className="block text-xs font-medium text-gray-600">
                  Border
                </label>
                <input
                  id="border"
                  type="number"
                  min="0"
                  max="10"
                  value={border}
                  onChange={(e) => setBorder(Math.max(0, Math.min(10, parseInt(e.target.value) || 0)))}
                  className="w-full px-3 py-1.5 border border-gray-200 rounded-md focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="cellpadding" className="block text-xs font-medium text-gray-600">
                  Cell Padding
                </label>
                <input
                  id="cellpadding"
                  type="number"
                  min="0"
                  max="20"
                  value={cellpadding}
                  onChange={(e) => setCellpadding(Math.max(0, Math.min(20, parseInt(e.target.value) || 0)))}
                  className="w-full px-3 py-1.5 border border-gray-200 rounded-md focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="cellspacing" className="block text-xs font-medium text-gray-600">
                  Cell Spacing
                </label>
                <input
                  id="cellspacing"
                  type="number"
                  min="0"
                  max="20"
                  value={cellspacing}
                  onChange={(e) => setCellspacing(Math.max(0, Math.min(20, parseInt(e.target.value) || 0)))}
                  className="w-full px-3 py-1.5 border border-gray-200 rounded-md focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
              
              <div className="space-y-1 flex items-end">
                <div className="flex-1">
                  <label htmlFor="width" className="block text-xs font-medium text-gray-600">
                    Width
                  </label>
                  <input
                    id="width"
                    type="number"
                    min="0"
                    max="1000"
                    value={width}
                    onChange={(e) => setWidth(Math.max(0, Math.min(1000, parseInt(e.target.value) || 0)))}
                    className="w-full px-3 py-1.5 border border-gray-200 rounded-l-md focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>
                <select
                  value={widthUnit}
                  onChange={(e) => setWidthUnit(e.target.value)}
                  className="px-2 py-1.5 border border-gray-200 rounded-r-md focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                >
                  <option value="%">%</option>
                  <option value="px">px</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="class" className="block text-xs font-medium text-gray-600">
                  CSS Class
                </label>
                <input
                  id="class"
                  type="text"
                  value={cssClass}
                  onChange={(e) => setCssClass(e.target.value)}
                  placeholder="table table-striped"
                  className="w-full px-3 py-1.5 border border-gray-200 rounded-md focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="tableId" className="block text-xs font-medium text-gray-600">
                  ID
                </label>
                <input
                  id="tableId"
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder="my-table"
                  className="w-full px-3 py-1.5 border border-gray-200 rounded-md focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
            </div>
            
            <div className="pt-4">
              <Button
                onClick={handleGenerateTable}
                className="w-full"
              >
                Generate Table Code
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">Table Content</h3>
            
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="min-w-full">
                {includeHeader && (
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      {Array(cols).fill(0).map((_, colIndex) => (
                        <th key={`header-${colIndex}`} className="p-2 border-r border-gray-200 last:border-r-0">
                          <input
                            type="text"
                            value={headerData[colIndex]}
                            onChange={(e) => handleHeaderChange(colIndex, e.target.value)}
                            className="w-full px-2 py-1 text-sm border border-gray-200 rounded focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                            placeholder={`Header ${colIndex+1}`}
                          />
                        </th>
                      ))}
                    </tr>
                  </thead>
                )}
                <tbody>
                  {Array(rows).fill(0).map((_, rowIndex) => (
                    <tr key={`row-${rowIndex}`} className="border-b border-gray-200 last:border-b-0">
                      {Array(cols).fill(0).map((_, colIndex) => (
                        <td key={`cell-${rowIndex}-${colIndex}`} className="p-2 border-r border-gray-200 last:border-r-0">
                          <input
                            type="text"
                            value={tableData[rowIndex][colIndex]}
                            onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                            className="w-full px-2 py-1 text-sm border border-gray-200 rounded focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                            placeholder={`Cell ${rowIndex+1},${colIndex+1}`}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {tableCode && (
              <div className="space-y-3 mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-700">Generated HTML</h3>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={copyToClipboard}
                      className="flex items-center text-xs"
                    >
                      {copied ? (
                        <>
                          <Check size={14} className="mr-1.5" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy size={14} className="mr-1.5" />
                          Copy Code
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={downloadHtml}
                      className="flex items-center text-xs"
                    >
                      <Download size={14} className="mr-1.5" />
                      Download
                    </Button>
                  </div>
                </div>
                <pre className="p-3 bg-gray-50 border border-gray-200 rounded-lg overflow-x-auto text-xs font-mono whitespace-pre-wrap max-h-[200px] overflow-y-auto">
                  {tableCode}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </ToolLayout>
    <GuidanceSection title="How to Use the HTML Table Generator">
  <div className="space-y-4">
    <div>
      <h4 className="font-medium mb-1">Using the HTML Table Generator</h4>
      <p>The HTML Table Generator allows you to create customizable tables quickly.</p>
      <p className="mt-2"><strong>How to Use:</strong></p>
      <ol className="list-decimal pl-5">
        <li>Enter the number of rows and columns you need.</li>
        <li>Optionally include a header row and a table caption.</li>
        <li>Customize table attributes like border size, padding, spacing, and width.</li>
        <li>Apply a CSS class and ID for styling purposes.</li>
        <li>Click "Generate Table Code" to get the HTML table.</li>
        <li>Copy and paste the generated code into your project.</li>
      </ol>
    </div>

    <div>
      <h4 className="font-medium mb-1">Features</h4>
      <ul className="list-disc pl-5">
        <li>Create tables with customizable rows and columns.</li>
        <li>Includes options for headers and captions.</li>
        <li>Allows adjusting border, padding, spacing, and width.</li>
        <li>Supports custom CSS classes and IDs for styling.</li>
        <li>Instantly generates clean and structured HTML table code.</li>
      </ul>
    </div>
  </div>
</GuidanceSection>


</>
  );
};

export default HtmlTableGenerator;
