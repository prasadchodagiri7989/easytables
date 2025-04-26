import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";

export const MonthsOfYear: React.FC = () => {
  return (
    <>
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <a href="/">Home</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Months of the Year</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="months-of-year-container bg-white/40 dark:bg-transparent">
        <h2 className="text-center text-2xl font-bold mb-4">Months of the Year</h2>

        <Card className="p-6 glass-card space-y-6">
          <h3 className="font-semibold text-xl">Months and Days in Each Month:</h3>
          <table className="w-full table-auto border-separate border-spacing-1">
            <thead>
              <tr>
                <th className="text-left">#</th>
                <th className="text-left">Month</th>
                <th className="text-left">Days in Month</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>January</td>
                <td>31 days</td>
              </tr>
              <tr>
                <td>2</td>
                <td>February</td>
                <td>28 days (common year), 29 days (leap year*)</td>
              </tr>
              <tr>
                <td>3</td>
                <td>March</td>
                <td>31 days</td>
              </tr>
              <tr>
                <td>4</td>
                <td>April</td>
                <td>30 days</td>
              </tr>
              <tr>
                <td>5</td>
                <td>May</td>
                <td>31 days</td>
              </tr>
              <tr>
                <td>6</td>
                <td>June</td>
                <td>30 days</td>
              </tr>
              <tr>
                <td>7</td>
                <td>July</td>
                <td>31 days</td>
              </tr>
              <tr>
                <td>8</td>
                <td>August</td>
                <td>31 days</td>
              </tr>
              <tr>
                <td>9</td>
                <td>September</td>
                <td>30 days</td>
              </tr>
              <tr>
                <td>10</td>
                <td>October</td>
                <td>31 days</td>
              </tr>
              <tr>
                <td>11</td>
                <td>November</td>
                <td>30 days</td>
              </tr>
              <tr>
                <td>12</td>
                <td>December</td>
                <td>31 days</td>
              </tr>
            </tbody>
          </table>

          <section className="mt-4">
            <p className="font-semibold">Leap Year Information:</p>
            <p className="text-sm">
              Leap year occurs every 4 years, except for years divisible by 100 and not divisible by 400.
            </p>
          </section>
        </Card>
      </div>
    </>
  );
};
