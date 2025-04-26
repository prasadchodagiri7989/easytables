import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use next/link for Next.js
import { Card } from "@/components/ui/card";

export const Probability = () => {
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
            <BreadcrumbPage>Basic Probability</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="probability-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="probability-explanation-header text-center text-2xl font-bold mb-4">
          Basic Probability
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What is Probability?</h3>
          <p>
            Probability is the measure of the likelihood that a particular event will occur. It is quantified as a number between 0 and 1, where:
            <ul className="list-disc pl-5 space-y-2">
              <li>0 means the event will not occur.</li>
              <li>1 means the event will certainly occur.</li>
            </ul>
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Probability Formula</h3>
          <p>
            The basic formula for calculating the probability of an event is:
          </p>
          <pre className="my-4">
            P(A) = Number of favorable outcomes / Total number of possible outcomes
          </pre>
          <p>
            Where:
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>P(A)</strong>: The probability of event A occurring.</li>
              <li><strong>Number of favorable outcomes</strong>: The number of outcomes that result in the event occurring.</li>
              <li><strong>Total number of possible outcomes</strong>: The total number of all possible outcomes in the sample space.</li>
            </ul>
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Example</h3>
          <p>
            Suppose you have a standard six-sided die. The probability of rolling a 3 is:
          </p>
          <pre className="my-4">
            P(3) = 1 / 6 = 0.1667
          </pre>
          <p>
            There is 1 favorable outcome (rolling a 3) and 6 possible outcomes (1, 2, 3, 4, 5, 6). Thus, the probability of rolling a 3 is approximately 0.167 or 16.67%.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Types of Events</h3>
          <p>
            In probability, there are different types of events that can occur:
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Independent Events</strong>: Events that do not affect each other. For example, flipping a coin twice.</li>
              <li><strong>Dependent Events</strong>: Events where the outcome of one event affects the outcome of another. For example, drawing two cards from a deck without replacement.</li>
              <li><strong>Mutually Exclusive Events</strong>: Events that cannot happen at the same time. For example, getting heads and tails on a single coin flip.</li>
              <li><strong>Non-Mutually Exclusive Events</strong>: Events that can happen at the same time. For example, drawing a red card and a face card from a deck of cards.</li>
            </ul>
          </p>
        </Card>
      </div>
    </>
  );
};
