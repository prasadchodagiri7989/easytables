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

export const SecondsInHour: React.FC = () => {
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
            <BreadcrumbPage>How Many Seconds in an Hour?</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="seconds-in-hour-container bg-white/40 dark:bg-transparent">
        <h2 className="text-center text-2xl font-bold mb-4">
          How Many Seconds Are in an Hour?
        </h2>

        <Card className="p-6 glass-card space-y-6">
          <section>
            <p>
              One hour has <strong>60 minutes</strong> and one minute has <strong>60 seconds</strong>.
            </p>
            <p className="mt-4">
              Therefore, to calculate the number of seconds in one hour:
            </p>
            <p className="mt-2 font-semibold">
              1 hour = 60 minutes/hour × 60 seconds/minute
            </p>
            <p className="mt-2 font-bold text-lg">
              = <strong>3,600 seconds/hour</strong>
            </p>
          </section>
        </Card>
      </div>
    </>
  );
};
