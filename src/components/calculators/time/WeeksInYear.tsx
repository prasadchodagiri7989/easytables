import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

export const WeeksInYear: React.FC = () => {
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
            <BreadcrumbPage>How Many Weeks Are in a Year?</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="weeks-in-year-container bg-white/40 dark:bg-transparent">
        <h2 className="text-center text-2xl font-bold mb-4">How Many Weeks Are in a Year?</h2>

        <Card className="p-6 glass-card space-y-6">
          <section>
            <p className="font-semibold text-xl">Weeks in a Common Year:</p>
            <p>1 common year = 365 days = 365 ÷ 7 = <strong>52.142857 weeks</strong> = 52 weeks + 1 day</p>
          </section>

          <section>
            <p className="font-semibold text-xl">Weeks in a Leap Year:</p>
            <p>1 leap year = 366 days = 366 ÷ 7 = <strong>52.285714 weeks</strong> = 52 weeks + 2 days</p>
          </section>

          <section>
            <h3 className="font-semibold mt-4">Weeks in a Year (By Year):</h3>
            <table className="mt-2 w-full border-separate border-spacing-1">
              <thead>
                <tr>
                  <th className="text-left">Year</th>
                  <th className="text-left">Leap Year</th>
                  <th className="text-left">Weeks in Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2013</td>
                  <td>No</td>
                  <td>52 weeks + 1 day</td>
                </tr>
                <tr>
                  <td>2014</td>
                  <td>No</td>
                  <td>52 weeks + 1 day</td>
                </tr>
                <tr>
                  <td>2015</td>
                  <td>No</td>
                  <td>52 weeks + 1 day</td>
                </tr>
                <tr>
                  <td>2016</td>
                  <td>Yes</td>
                  <td>52 weeks + 2 days</td>
                </tr>
                <tr>
                  <td>2017</td>
                  <td>No</td>
                  <td>52 weeks + 1 day</td>
                </tr>
                <tr>
                  <td>2018</td>
                  <td>No</td>
                  <td>52 weeks + 1 day</td>
                </tr>
                <tr>
                  <td>2019</td>
                  <td>No</td>
                  <td>52 weeks + 1 day</td>
                </tr>
                <tr>
                  <td>2020</td>
                  <td>Yes</td>
                  <td>52 weeks + 2 days</td>
                </tr>
                <tr>
                  <td>2021</td>
                  <td>No</td>
                  <td>52 weeks + 1 day</td>
                </tr>
                <tr>
                  <td>2022</td>
                  <td>No</td>
                  <td>52 weeks + 1 day</td>
                </tr>
                <tr>
                  <td>2023</td>
                  <td>No</td>
                  <td>52 weeks + 1 day</td>
                </tr>
                <tr>
                  <td>2024</td>
                  <td>Yes</td>
                  <td>52 weeks + 2 days</td>
                </tr>
                <tr>
                  <td>2025</td>
                  <td>No</td>
                  <td>52 weeks + 1 day</td>
                </tr>
                <tr>
                  <td>2026</td>
                  <td>No</td>
                  <td>52 weeks + 1 day</td>
                </tr>
                <tr>
                  <td>2027</td>
                  <td>No</td>
                  <td>52 weeks + 1 day</td>
                </tr>
                <tr>
                  <td>2028</td>
                  <td>Yes</td>
                  <td>52 weeks + 2 days</td>
                </tr>
                <tr>
                  <td>2029</td>
                  <td>No</td>
                  <td>52 weeks + 1 day</td>
                </tr>
                <tr>
                  <td>2030</td>
                  <td>No</td>
                  <td>52 weeks + 1 day</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="mt-4">
            <p className="font-semibold">How Many Weeks So Far in 2025?</p>
            <p>There are <strong>16 weeks and 4 days</strong> so far in the year 2025.</p>
          </section>

          <section className="mt-4">
            <p className="font-semibold">How Many School Weeks in a Year?</p>
            <p className="text-sm">In the US, schools typically have 32-36 weeks in an academic year.</p>
            <p className="text-sm">In Canada, schools typically have 37-39 weeks in an academic year.</p>
          </section>

          <section className="mt-4">
            <p className="font-semibold">Weeks in a Month:</p>
            <p>There are <strong>4 weeks</strong> to <strong>4 weeks + 3 days</strong> in a month (See: Weeks in a month).</p>
          </section>
        </Card>
      </div>
    </>
  );
};
