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

export const SecondsInYear: React.FC = () => {
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
              <Link to="/all-calculators">All Calculators</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/time/all">Time Calculators</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>How Many Seconds Are in a Year?</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="seconds-in-year-container bg-white/40 dark:bg-transparent">
        <h2 className="text-center text-2xl font-bold mb-4">
          How Many Seconds Are in a Year?
        </h2>

        <Card className="p-6 glass-card space-y-6">
          <section>
            <p>One Gregorian calendar year has approximately <strong>365.2425 days</strong>.</p>
            <p className="mt-4">
              Therefore:
            </p>
            <p className="font-semibold">
              1 year = 365.2425 days × 24 hours/day × 3600 seconds/hour
            </p>
            <p className="font-bold text-lg mt-2">
              = <strong>31,556,952 seconds</strong>
            </p>
          </section>

          <section>
            <p>One Julian astronomical year has <strong>365.25 days</strong>:</p>
            <p className="font-semibold mt-2">
              1 year = 365.25 days × 24 hours/day × 3600 seconds/hour
            </p>
            <p className="font-bold text-lg mt-2">
              = <strong>31,557,600 seconds</strong>
            </p>
          </section>

          <section>
            <p>One calendar common year has <strong>365 days</strong>:</p>
            <p className="font-semibold mt-2">
              1 year = 365 days × 24 hours/day × 3600 seconds/hour
            </p>
            <p className="font-bold text-lg mt-2">
              = <strong>31,536,000 seconds</strong>
            </p>
          </section>

          <section>
            <p>One calendar leap year has <strong>366 days</strong>:</p>
            <p className="font-semibold mt-2">
              1 leap year = 366 days × 24 hours/day × 3600 seconds/hour
            </p>
            <p className="font-bold text-lg mt-2">
              = <strong>31,622,400 seconds</strong>
            </p>
          </section>
        </Card>
      </div>
    </>
  );
};
