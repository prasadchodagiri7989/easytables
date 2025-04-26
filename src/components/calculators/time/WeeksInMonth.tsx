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

export const WeeksInMonth: React.FC = () => {
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
            <BreadcrumbPage>How Many Weeks Are in a Month?</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="weeks-in-month-container bg-white/40 dark:bg-transparent">
        <h2 className="text-center text-2xl font-bold mb-4">
          How Many Weeks Are in a Month?
        </h2>

        <Card className="p-6 glass-card space-y-6">
          <section>
            <p className="font-semibold text-xl">For 31 Days in a Month:</p>
            <p>31 days ÷ 7 days/week = <strong>4.4286 weeks</strong> = 4 weeks + 3 days</p>
          </section>

          <section>
            <p className="font-semibold text-xl">For 30 Days in a Month:</p>
            <p>30 days ÷ 7 days/week = <strong>4.2857 weeks</strong> = 4 weeks + 2 days</p>
          </section>

          <section>
            <p className="font-semibold text-xl">For 28 Days in a Month:</p>
            <p>28 days ÷ 7 days/week = <strong>4 weeks</strong></p>
          </section>

          <section>
            <p className="font-semibold text-xl">For 29 Days in a Month:</p>
            <p>29 days ÷ 7 days/week = <strong>4.1429 weeks</strong> = 4 weeks + 1 day</p>
          </section>

          <section>
            <h3 className="font-semibold mt-4">Weeks in Each Month:</h3>
            <table className="mt-2 w-full border-separate border-spacing-1">
              <thead>
                <tr>
                  <th className="text-left">Month</th>
                  <th className="text-left">Days in Month</th>
                  <th className="text-left">Weeks in Month</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>January</td>
                  <td>31 days</td>
                  <td>4 weeks + 3 days</td>
                </tr>
                <tr>
                  <td>February (Common Year)</td>
                  <td>28 days</td>
                  <td>4 weeks</td>
                </tr>
                <tr>
                  <td>February (Leap Year)</td>
                  <td>29 days</td>
                  <td>4 weeks + 1 day</td>
                </tr>
                <tr>
                  <td>March</td>
                  <td>31 days</td>
                  <td>4 weeks + 3 days</td>
                </tr>
                <tr>
                  <td>April</td>
                  <td>30 days</td>
                  <td>4 weeks + 2 days</td>
                </tr>
                <tr>
                  <td>May</td>
                  <td>31 days</td>
                  <td>4 weeks + 3 days</td>
                </tr>
                <tr>
                  <td>June</td>
                  <td>30 days</td>
                  <td>4 weeks + 2 days</td>
                </tr>
                <tr>
                  <td>July</td>
                  <td>31 days</td>
                  <td>4 weeks + 3 days</td>
                </tr>
                <tr>
                  <td>August</td>
                  <td>31 days</td>
                  <td>4 weeks + 3 days</td>
                </tr>
                <tr>
                  <td>September</td>
                  <td>30 days</td>
                  <td>4 weeks + 2 days</td>
                </tr>
                <tr>
                  <td>October</td>
                  <td>31 days</td>
                  <td>4 weeks + 3 days</td>
                </tr>
                <tr>
                  <td>November</td>
                  <td>30 days</td>
                  <td>4 weeks + 2 days</td>
                </tr>
                <tr>
                  <td>December</td>
                  <td>31 days</td>
                  <td>4 weeks + 3 days</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="mt-4">
            <p className="font-semibold">Note:</p>
            <p className="text-sm">Leap years occur every 4 years, such as 2016, 2020, 2024, etc.</p>
          </section>
        </Card>
      </div>
    </>
  );
};
