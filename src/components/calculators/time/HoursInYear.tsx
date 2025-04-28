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

export const HoursInYear: React.FC = () => {
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
            <BreadcrumbPage>How Many Hours Are in a Year?</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="hours-in-year-container bg-white/40 dark:bg-transparent">
        <h2 className="text-center text-2xl font-bold mb-4">
          How Many Hours Are in a Year?
        </h2>

        <Card className="p-6 glass-card space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-2">Gregorian Calendar Year</h3>
            <p>
              One calendar common year has <strong>365 days</strong>:
            </p>
            <p className="mt-2 font-semibold">
              1 common year = 365 days = (365 days) × (24 hours/day) = <strong>8760 hours</strong>
            </p>
            <p className="mt-4">
              One calendar leap year has <strong>366 days</strong> (occurs every 4 years, when February has 29 days):
            </p>
            <p className="mt-2 font-semibold">
              1 leap year = 366 days = (366 days) × (24 hours/day) = <strong>8784 hours</strong>
            </p>
            <p className="mt-4">
              One mean calendar year:
            </p>
            <p className="mt-2 font-semibold">
              1 mean year = (365 + 1/4 - 1/100 + 1/400) days = (365.2425 days) × (24 hours/day) = <strong>8765.82 hours</strong>
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">Julian Year</h3>
            <p>
              Julian year is used for astronomical calculations (light year definition).
            </p>
            <p className="mt-2 font-semibold">
              1 year = (365.25 days) × (24 hours/day) = <strong>8766 hours</strong>
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">Sidereal Year</h3>
            <p>
              One sidereal year is the time it takes the Earth to do a single rotation around the Sun.
            </p>
            <p className="mt-2 font-semibold">
              1 year = (365.25636 days) × (24 hours/day) = <strong>8766.15264 hours</strong>
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">Tropical Year</h3>
            <p>
              One tropical year is the time it takes the Earth to complete a single cycle of the 4 seasons.
            </p>
            <p className="mt-2 font-semibold">
              1 year = (365.242189 days) × (24 hours/day) = <strong>8765.812536 hours</strong>
            </p>
          </section>
        </Card>
      </div>
    </>
  );
};
