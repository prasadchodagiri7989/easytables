
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const HtmlTableGenerator = () => {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);
  const [tableData, setTableData] = useState([]);
  const [generatedHtml, setGeneratedHtml] = useState('');
  const [activeTab, setActiveTab] = useState('editor');

  const generateTable = () => {
    const newTableData = Array(rows).fill(0).map((_, rowIndex) => 
      Array(columns).fill(0).map((_, colIndex) => `R${rowIndex + 1}C${colIndex + 1}`)
    );
    setTableData(newTableData);
  };

  const updateTableCell = (rowIndex, colIndex, value) => {
    const newTableData = [...tableData];
    newTableData[rowIndex][colIndex] = value;
    setTableData(newTableData);
  };

  const generateHtml = () => {
    if (tableData.length === 0) {
      // Fixed the toast call to include the required message parameter
      toast.error("Please generate a table first");
      return;
    }

    const html = `<table border="1" cellpadding="8" cellspacing="0">
  <tbody>
    ${tableData.map(row => `
    <tr>
      ${row.map(cell => `<td>${cell}</td>`).join('')}
    </tr>`).join('')}
  </tbody>
</table>`;

    setGeneratedHtml(html);
    setActiveTab('preview');
    toast.success("HTML generated successfully");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedHtml);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>HTML Table Generator</CardTitle>
          <CardDescription>Generate HTML tables with customizable rows and columns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 items-end mb-6">
            <div>
              <Label htmlFor="rows">Rows</Label>
              <Input 
                id="rows"
                type="number" 
                min="1" 
                max="20" 
                value={rows} 
                onChange={(e) => setRows(parseInt(e.target.value))} 
                className="w-24"
              />
            </div>
            <div>
              <Label htmlFor="columns">Columns</Label>
              <Input 
                id="columns"
                type="number" 
                min="1" 
                max="10" 
                value={columns} 
                onChange={(e) => setColumns(parseInt(e.target.value))} 
                className="w-24"
              />
            </div>
            <Button onClick={generateTable}>Generate Table</Button>
          </div>

          {tableData.length > 0 && (
            <>
              <div className="mb-6 overflow-x-auto">
                <table className="border-collapse border border-gray-300 w-full">
                  <tbody>
                    {tableData.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, colIndex) => (
                          <td key={colIndex} className="border border-gray-300 p-2">
                            <Input 
                              value={cell} 
                              onChange={(e) => updateTableCell(rowIndex, colIndex, e.target.value)}
                              className="min-w-[100px]"
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between mb-6">
                <Button onClick={generateHtml}>Generate HTML</Button>
              </div>

              {generatedHtml && (
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="mb-4">
                    <TabsTrigger value="editor">HTML Code</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                  </TabsList>
                  <TabsContent value="editor" className="space-y-4">
                    <div className="relative">
                      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                        <code>{generatedHtml}</code>
                      </pre>
                      <Button 
                        onClick={copyToClipboard} 
                        className="absolute top-2 right-2"
                        variant="outline"
                        size="sm"
                      >
                        Copy
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="preview">
                    <div className="border p-4 rounded-md overflow-x-auto">
                      <div dangerouslySetInnerHTML={{ __html: generatedHtml }} />
                    </div>
                  </TabsContent>
                </Tabs>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default HtmlTableGenerator;
