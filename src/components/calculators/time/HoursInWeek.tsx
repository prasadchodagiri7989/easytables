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

export const HoursInWeek: React.FC = () => {
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
            <BreadcrumbPage>How Many Hours in a Week?</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="hours-in-week-container bg-white/40 dark:bg-transparent">
        <h2 className="text-center text-2xl font-bold mb-4">
          How Many Hours Are in a Week?
        </h2>

        <Card className="p-6 glass-card">
          <p>
            One week has <strong>7 days</strong>, and one day has <strong>24 hours</strong>:
          </p>

          <p className="mt-4 font-semibold">
            1 week = 7 days/week
          </p>

          <p className="mt-4 font-semibold">
            1 day = 24 hours/day
          </p>

          <p className="mt-4">
            Therefore, the total number of hours in a week is:
          </p>

          <p className="mt-4 font-semibold">
            (7 days/week) × (24 hours/day) = <strong>168 hours/week</strong>
          </p>
        </Card>
      </div>
    </>
  );
};
