import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { GuidanceSection } from "@/components/GuidanceSection";

import { Link } from "react-router-dom"; // Or use next/link for Next.js

export const AdditionTable = () => {
  const [number, setNumber] = useState("");
  const [table, setTable] = useState([]);

  const generateTable = () => {
    const num = parseInt(number);
    if (isNaN(num)) return;
    const newTable = [];
    for (let i = 1; i <= 10; i++) {
      newTable.push({ addend: i, sum: num + i });
    }
    setTable(newTable);
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
            <BreadcrumbPage>Addition Table</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="addition-table-container bg-white/40 dark:bg-transparent">
        <h2 className="addition-table-header text-center text-2xl font-bold mb-4">
          Addition Table Generator
        </h2>

        <Card className="p-6 glass-card">
          <div className="grid grid-cols-1 gap-4 items-center mb-6">
            <Label htmlFor="numberInput" className="form-label text-center">
              Enter a Number
            </Label>
            <Input
              id="numberInput"
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="addition-table-input text-center"
              placeholder="e.g., 7"
            />
          </div>

          <Button
            onClick={generateTable}
            className="addition-table-button w-full mb-6"
          >
            Generate Table
          </Button>

          {table.length > 0 && (
            <div className="addition-table-result">
              <h3 className="text-lg font-medium mb-2 text-center">
                Addition Table for {number}
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-center">Expression</th>
                      <th className="px-6 py-3 text-center">Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {table.map((row) => (
                      <tr key={row.addend}>
                        <td className="px-6 py-4 text-center">
                          {number} + {row.addend}
                        </td>
                        <td className="px-6 py-4 text-center">{row.sum}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </Card>

        <GuidanceSection title="How to Use the Addition Table Generator">
          <p>
            This tool generates the addition table for any number you enter.
          </p>

          <h4 className="font-medium mt-3 mb-1">Steps to Use</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter a valid number in the input field.</li>
            <li>Click on "Generate Table" to see the addition table.</li>
            <li>The table displays the expression (number plus numbers 1 through 10) and the corresponding sum.</li>
          </ol>
        </GuidanceSection>
      </div>
    </>
  );
};
