
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

export const GeometrySymbols = () => {
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
            <BreadcrumbPage>Geometry Symbols</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="geometry-symbols-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="geometry-symbols-header text-center text-2xl font-bold mb-4">
          Geometry Symbols
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What Are Geometry Symbols?</h3>
          <p>
            <strong>Geometry symbols</strong> represent various shapes, angles, and other fundamental components in geometric analysis and problem-solving.
            These symbols are used in diagrams and equations to describe the properties of space, shapes, and figures.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Common Geometry Symbols</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>∠</strong>: Angle symbol</li>
            <li><strong>⊥</strong>: Perpendicular</li>
            <li><strong>∥</strong>: Parallel lines</li>
            <li><strong>≅</strong>: Congruent (equal in shape and size)</li>
            <li><strong>∅</strong>: Empty set (null set)</li>
            <li><strong>Δ</strong>: Triangle (used to denote a triangle, often with a specific property)</li>
            <li><strong>π</strong>: Pi (ratio of a circle's circumference to its diameter)</li>
            <li><strong>°</strong>: Degree (used for angles)</li>
            <li><strong>√</strong>: Square root (often used in Pythagorean Theorem)</li>
            <li><strong>⊙</strong>: Circumcircle (circle passing through all vertices of a polygon)</li>
            <li><strong>R</strong>: Radius of a circle</li>
            <li><strong>A</strong>: Area (e.g., A = πr² for the area of a circle)</li>
            <li><strong>S</strong>: Side length (e.g., S = length of a side of a square)</li>
            <li><strong>⌀</strong>: Diameter of a circle</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Examples in Use</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>∠ABC = 90°</strong> – Angle ABC is 90 degrees</li>
            <li><strong>AB ⊥ CD</strong> – Line AB is perpendicular to line CD</li>
            <li><strong>Circle with center O and radius R</strong> – Equation of a circle in geometry</li>
            <li><strong>ΔABC ≅ ΔDEF</strong> – Triangle ABC is congruent to triangle DEF</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Why They Matter</h3>
          <p>
            Geometry symbols are essential in visualizing and solving geometric problems, from simple shapes to complex constructions.
            They help in accurately describing geometric relationships and the properties of shapes.
          </p>
        </Card>
      </div>
    </>
  );
};
