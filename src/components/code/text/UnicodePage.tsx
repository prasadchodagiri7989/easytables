import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const UnicodePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const unicodeData = [
    { char: "©", name: "Copyright", unicode: "U+00A9", escapeSequence: "\\u00A9", htmlCode: "&#169;", htmlNamedCode: "&copy;" },
    { char: "®", name: "Registered", unicode: "U+00AE", escapeSequence: "\\u00AE", htmlCode: "&#174;", htmlNamedCode: "&reg;" },
    { char: "™", name: "Trademark", unicode: "U+2122", escapeSequence: "\\u2122", htmlCode: "&#8482;", htmlNamedCode: "&trade;" },
    { char: "∞", name: "Infinity", unicode: "U+221E", escapeSequence: "\\u221E", htmlCode: "&#8734;", htmlNamedCode: "&infin;" },
    { char: "$", name: "Dollar", unicode: "U+0024", escapeSequence: "\\u0024", htmlCode: "&#36;", htmlNamedCode: "" },
    { char: "€", name: "Euro", unicode: "U+20AC", escapeSequence: "\\u20AC", htmlCode: "&#8364;", htmlNamedCode: "&euro;" },
    { char: "¥", name: "Yen", unicode: "U+00A5", escapeSequence: "\\u00A5", htmlCode: "&#165;", htmlNamedCode: "&yen;" },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredUnicodeList = unicodeData.filter((unicode) =>
    unicode.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-sm text-gray-500 mb-4">
        Home › Tools › <span className="text-black">Unicode Characters</span>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Unicode Characters Table</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 text-sm text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold mb-2">Search for Unicode</h2>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search Unicode Name"
              className="border rounded p-2 w-full text-sm dark:bg-transparent"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Unicode Character Symbols</h2>
            <p className="text-xs text-gray-500 mb-4">Mouse click on character to get the code.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-xs">
                <thead>
                  <tr>
                    {["Character", "Name", "Unicode", "Escape Sequence", "HTML Code", "HTML Named Code"].map((header, index) => (
                      <th key={index} className="px-4 py-2 border bg-gray-100 font-semibold">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredUnicodeList.map((unicode, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border text-center">{unicode.char}</td>
                      <td className="px-4 py-2 border">{unicode.name}</td>
                      <td className="px-4 py-2 border text-center">{unicode.unicode}</td>
                      <td className="px-4 py-2 border text-center">{unicode.escapeSequence}</td>
                      <td className="px-4 py-2 border text-center">{unicode.htmlCode}</td>
                      <td className="px-4 py-2 border text-center">{unicode.htmlNamedCode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Special Codes</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-xs">
                <thead>
                  <tr>
                    {["Unicode", "Escape Sequence", "HTML Numeric Code", "HTML Named Code", "Description"].map((header, index) => (
                      <th key={index} className="px-4 py-2 border bg-gray-100 font-semibold">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">U+0009</td>
                    <td className="px-4 py-2 border">\\u0009</td>
                    <td className="px-4 py-2 border">&#09;</td>
                    <td className="px-4 py-2 border"></td>
                    <td className="px-4 py-2 border">horizontal tab</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">U+00A0</td>
                    <td className="px-4 py-2 border">\\u00A0</td>
                    <td className="px-4 py-2 border">&#160;</td>
                    <td className="px-4 py-2 border">&nbsp;</td>
                    <td className="px-4 py-2 border">non-breaking space</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Greek Alphabet Codes</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-xs">
                <thead>
                  <tr>
                    {["Character", "Unicode", "Escape Sequence", "HTML Numeric Code", "HTML Named Code", "Description"].map((header, index) => (
                      <th key={index} className="px-4 py-2 border bg-gray-100 font-semibold">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">α</td>
                    <td className="px-4 py-2 border">U+03B1</td>
                    <td className="px-4 py-2 border">\\u03B1</td>
                    <td className="px-4 py-2 border">&#945;</td>
                    <td className="px-4 py-2 border">&alpha;</td>
                    <td className="px-4 py-2 border">small alpha</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">β</td>
                    <td className="px-4 py-2 border">U+03B2</td>
                    <td className="px-4 py-2 border">\\u03B2</td>
                    <td className="px-4 py-2 border">&#946;</td>
                    <td className="px-4 py-2 border">&beta;</td>
                    <td className="px-4 py-2 border">small beta</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UnicodePage;
