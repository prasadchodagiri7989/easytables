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

export const DSTChangeGuide: React.FC = () => {
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
            <BreadcrumbPage>DST - When Do the Clocks Change</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="dst-guide-container bg-white/40 dark:bg-transparent">
        <h2 className="dst-guide-header text-center text-2xl font-bold mb-4">
          DST - When Do the Clocks Change
        </h2>

        <Card className="p-6 glass-card">
          {/* Australia Section */}
          <h3 className="text-lg font-medium mb-2">Australia</h3>
          <p>
            DST is used in Australian Capital, New South Wales, South Australia, Tasmania, and Victoria.
          </p>
          <p className="mt-4">
            <strong>Start:</strong> First Sunday of October — clocks are moved forward from 02:00 AM to 03:00 AM.
          </p>
          <p>
            <strong>End:</strong> First Sunday of April — clocks are moved back from 03:00 AM to 02:00 AM.
          </p>

          <h4 className="text-md font-semibold mt-6 mb-2">Australia DST Dates</h4>
          <pre className="my-4">
{`Year         Start (clocks go forward)    End (clocks go back)
2014-2015    October 5, 2014               April 5, 2015
2015-2016    October 4, 2015               April 3, 2016
2016-2017    October 2, 2016               April 2, 2017
2017-2018    October 1, 2017               April 1, 2018
2018-2019    October 7, 2018               April 7, 2019
2019-2020    October 6, 2019               April 5, 2020`}
          </pre>

          {/* Canada Section */}
          <h3 className="text-lg font-medium mt-8 mb-2">Canada</h3>
          <p>
            <strong>Start:</strong> Second Sunday of March — clocks are moved forward from 02:00 AM to 03:00 AM.
          </p>
          <p>
            <strong>End:</strong> First Sunday of November — clocks are moved back from 02:00 AM to 01:00 AM.
          </p>

          <h4 className="text-md font-semibold mt-6 mb-2">Canada DST Dates</h4>
          <pre className="my-4">
{`Year    Start (clocks go forward)    End (clocks go back)
2014    March 9                       November 2
2015    March 8                       November 1
2016    March 13                      November 6
2017    March 12                      November 5
2018    March 11                      November 4
2019    March 10                      November 3`}
          </pre>

          {/* United Kingdom Section */}
          <h3 className="text-lg font-medium mt-8 mb-2">United Kingdom</h3>
          <p>British Summer Time (BST) is observed.</p>
          <p className="mt-4">
            <strong>Start:</strong> Last Sunday of March — clocks are moved forward from 01:00 AM to 02:00 AM.
          </p>
          <p>
            <strong>End:</strong> Last Sunday of October — clocks are moved back from 02:00 AM to 01:00 AM.
          </p>

          <h4 className="text-md font-semibold mt-6 mb-2">United Kingdom DST Dates</h4>
          <pre className="my-4">
{`Year    Start (clocks go forward)    End (clocks go back)
2014    March 30                      October 26
2015    March 29                      October 25
2016    March 27                      October 30
2017    March 26                      October 29
2018    March 25                      October 28
2019    March 31                      October 27`}
          </pre>

          {/* United States Section */}
          <h3 className="text-lg font-medium mt-8 mb-2">United States</h3>
          <p>
            DST is not used in Arizona, Hawaii, and US overseas territories.
          </p>
          <p className="mt-4">
            <strong>Start:</strong> Second Sunday of March — clocks are moved forward from 02:00 AM to 03:00 AM.
          </p>
          <p>
            <strong>End:</strong> First Sunday of November — clocks are moved back from 02:00 AM to 01:00 AM.
          </p>

          <h4 className="text-md font-semibold mt-6 mb-2">United States DST Dates</h4>
          <pre className="my-4">
{`Year    Start (clocks go forward)    End (clocks go back)
2014    March 9                       November 2
2015    March 8                       November 1
2016    March 13                      November 6
2017    March 12                      November 5
2018    March 11                      November 4
2019    March 10                      November 3`}
          </pre>
        </Card>
      </div>
    </>
  );
};
