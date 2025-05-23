
import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { BarChart2, Trash2, Plus, Download } from "lucide-react";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "../GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


interface DataItem {
  name: string;
  value: number;
}

export const BarGraphMaker = () => {
  const [data, setData] = useState<DataItem[]>([
    { name: "A", value: 10 },
    { name: "B", value: 20 },
    { name: "C", value: 15 },
  ]);
  const [newName, setNewName] = useState("");
  const [newValue, setNewValue] = useState("");
  const [chartTitle, setChartTitle] = useState("Bar Graph");
  const { toast } = useToast();

  const addDataPoint = () => {
    if (!newName.trim()) {
      toast({
        title: "Name required",
        description: "Please enter a name for the data point",
        variant: "destructive",
      });
      return;
    }

    if (!newValue || isNaN(Number(newValue))) {
      toast({
        title: "Invalid value",
        description: "Please enter a valid number for the value",
        variant: "destructive",
      });
      return;
    }

    setData([...data, { name: newName, value: Number(newValue) }]);
    setNewName("");
    setNewValue("");
    
    toast({
      title: "Data point added",
      description: `Added ${newName}: ${newValue}`,
    });
  };

  const removeDataPoint = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    
    toast({
      title: "Data point removed",
      description: "The data point has been removed from the graph",
    });
  };

  const downloadImage = () => {
    const svgElement = document.querySelector(".recharts-wrapper svg");
    if (!svgElement) {
      toast({
        title: "Download failed",
        description: "Could not generate the image",
        variant: "destructive",
      });
      return;
    }

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      
      const downloadLink = document.createElement("a");
      downloadLink.download = `${chartTitle || "bar-graph"}.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
      
      toast({
        title: "Download complete",
        description: "Your bar graph has been downloaded",
      });
    };
    
    img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <>
              <Breadcrumb className="mb-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Bar Graph Maker</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-md">
        <CardHeader className="bg-primary/5">
          <div className="flex items-center">
            <BarChart2 className="mr-2 text-primary" size={24} />
            <CardTitle>Bar Graph Maker</CardTitle>
          </div>
          <CardDescription>
            Create and customize bar graphs
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 pb-4">
          <div className="space-y-6">
            <div>
              <Label htmlFor="chart-title">Chart Title</Label>
              <Input
                id="chart-title"
                value={chartTitle}
                onChange={(e) => setChartTitle(e.target.value)}
                placeholder="Enter chart title"
                className="mt-1"
              />
            </div>

            <div className="border rounded-md p-4">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" name="Value" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="data-name">Name</Label>
                <Input
                  id="data-name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Enter name"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="data-value">Value</Label>
                <Input
                  id="data-value"
                  type="number"
                  value={newValue}
                  onChange={(e) => setNewValue(e.target.value)}
                  placeholder="Enter value"
                  className="mt-1"
                />
              </div>
              <div className="flex items-end">
                <Button 
                  onClick={addDataPoint} 
                  className="w-full"
                >
                  <Plus size={16} className="mr-2" />
                  Add Data Point
                </Button>
              </div>
            </div>

            {data.length > 0 && (
              <div>
                <h3 className="text-lg font-medium mb-2">Data Points</h3>
                <div className="border rounded-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="px-4 py-2 text-left">Name</th>
                        <th className="px-4 py-2 text-left">Value</th>
                        <th className="px-4 py-2 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={index} className="border-t">
                          <td className="px-4 py-2">{item.name}</td>
                          <td className="px-4 py-2">{item.value}</td>
                          <td className="px-4 py-2 text-right">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeDataPoint(index)}
                              className="h-8 w-8 p-0 text-destructive"
                            >
                              <Trash2 size={16} />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <Button onClick={downloadImage} variant="outline" className="flex gap-2">
              <Download size={16} />
              Download Graph
            </Button>
          </div>
        </CardContent>
      </Card>
      <GuidanceSection title="How to Use the Bar Graph Maker">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-1">Creating a Bar Graph</h4>
            <p>Bar graphs are useful for visualizing data by representing categories with rectangular bars.</p>
            <p className="mt-2"><strong>Steps to create a bar graph:</strong></p>
            
            <ol className="list-decimal pl-5">
              <li>Enter a title for your bar graph.</li>
              <li>Add data points by entering names and values in the respective fields.</li>
              <li>Click "Add Data Point" to include more values.</li>
              <li>The graph updates automatically as you add data.</li>
            </ol>
          </div>
          
          <div>
            <h4 className="font-medium mb-1">Customizing Your Graph</h4>
            <p>You can customize your bar graph by:</p>
            <ul className="list-disc pl-5">
              <li>Editing the chart title.</li>
              <li>Modifying existing data points.</li>
              <li>Removing data points if needed.</li>
              <li>Adjusting value ranges for better visualization.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium">Downloading Your Bar Graph</h4>
            <p>Once your graph is complete, you can download it as an image:</p>
            <ol className="list-decimal pl-5">
              <li>Click the "Download Graph" button.</li>
              <li>Save the image to your device for presentations or reports.</li>
            </ol>
          </div>
        </div>
      </GuidanceSection>

    </div>
    </>
  );
};
