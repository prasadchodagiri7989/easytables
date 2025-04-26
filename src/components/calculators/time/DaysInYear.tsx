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

export const DaysInYear: React.FC = () => {
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
            <BreadcrumbPage>How Many Days in a Year?</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="days-in-year-container bg-white/40 dark:bg-transparent">
        <h2 className="text-center text-2xl font-bold mb-4">
          How Many Days Are in a Year?
        </h2>

        <Card className="p-6 glass-card">
          {/* Gregorian Calendar */}
          <h3 className="text-lg font-medium mb-2">Gregorian Calendar Year</h3>
          <p>
            One calendar common year has <strong>365 days</strong>:
          </p>
          <p className="mt-2">
            <strong>1 common year = 365 days</strong>
          </p>
          <p className="mt-4">
            One calendar leap year has <strong>366 days</strong>:
          </p>
          <p className="mt-2">
            <strong>1 leap year = 366 days</strong>
          </p>
          <p className="mt-4">
            Leap years occur every 4 years, except for years that are divisible by 100 but not divisible by 400.
          </p>
          <p className="mt-4">
            So, the mean length of a Gregorian calendar year is:
          </p>
          <p className="mt-2 font-semibold">
            1 mean year = (365 + 1/4 - 1/100 + 1/400) days = 365.2425 days
          </p>

          {/* Julian Year */}
          <h3 className="text-lg font-medium mt-8 mb-2">Julian Year</h3>
          <p>
            The Julian year is used for astronomical calculations (such as defining a light year).
          </p>
          <p className="mt-4 font-semibold">
            1 Julian year = 365.25 days
          </p>

          {/* Sidereal Year */}
          <h3 className="text-lg font-medium mt-8 mb-2">Sidereal Year</h3>
          <p>
            A sidereal year is the time it takes the Earth to complete a single orbit around the Sun relative to fixed stars.
          </p>
          <p className="mt-4 font-semibold">
            1 sidereal year = 365.25636 days
          </p>

          {/* Tropical Year */}
          <h3 className="text-lg font-medium mt-8 mb-2">Tropical Year</h3>
          <p>
            A tropical year measures the cycle of the four seasons, based on Earth's position relative to the Sun.
          </p>
          <p className="mt-4 font-semibold">
            1 tropical year = 365.242189 days
          </p>
        </Card>
      </div>
    </>
  );
};
