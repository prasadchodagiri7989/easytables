import { useSearchParams } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

import colorData from "@/lib/color-data";
  

export const ColorInfoPage = () => {
  const [searchParams] = useSearchParams();
  const selectedColor = searchParams.get("color")?.toLowerCase() || "black";
  const color = colorData[selectedColor] || colorData["black"];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>{color.name} Color Code</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>{color.name} RGB color code = {color.hex} = {color.rgb}</p>
          <div className="bg-muted p-4 rounded">
            <h4 className="font-medium">Color Codes Chart</h4>
            <table className="w-full text-sm mt-2">
              <thead>
                <tr>
                  <th className="text-left">Color</th>
                  <th className="text-left">Hex</th>
                  <th className="text-left">RGB</th>
                </tr>
              </thead>
              <tbody>
                {color.codes.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.hex}</td>
                    <td>{item.rgb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">HTML Examples</h4>
            {color.htmlSnippets.map((snippet, index) => (
              <div key={index}>
                <code className="block bg-background p-2 rounded text-xs">{snippet}</code>
                <div className="mt-1" dangerouslySetInnerHTML={{ __html: snippet }} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ColorInfoPage;
