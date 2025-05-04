import React from "react";
import { Card } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use next/link for Next.js

export const LogarithmTable = () => {
  const base = 10; // You can change this base if needed (for example, use e for natural logarithms)
  const values = Array.from({ length: 10 }, (_, i) => i + 1); // Values from 1 to 10
  
  // Logarithm function to calculate base-10 logarithm
  const logBase10 = (num: number) => Math.log10(num);

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
                            <BreadcrumbLink asChild>
                              <Link to="/mathematics/algebra">Algebra Tool</Link>
                            </BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Logarithm Table</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="logarithm-table-container bg-white/40 dark:bg-transparent">
        <h2 className="logarithm-table-header text-center text-2xl font-bold mb-4">
          Logarithm Table (Base {base})
        </h2>

        <Card className="p-6 glass-card">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-center">Number</th>
                  <th className="px-6 py-3 text-center">Log₁₀(Number)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {values.map((value) => (
                  <tr key={value}>
                    <td className="px-6 py-4 text-center">{value}</td>
                    <td className="px-6 py-4 text-center">
                      {logBase10(value).toFixed(4)} {/* Rounding to 4 decimal places */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </>
  );
};
