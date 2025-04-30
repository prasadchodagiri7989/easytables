import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const InductorInfo = () => {
  return (
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">What is an Inductor?</h1>
      <p className="mb-4">
        An <strong>inductor</strong> is an electrical component that stores energy in a magnetic field. It is typically made of a coil of conducting wire.
      </p>
      <p className="mb-4">
        In circuit schematics, an inductor is marked with the letter <strong>L</strong>. The inductance is measured in units of <strong>Henry (H)</strong>.
      </p>
      <p className="mb-6">
        Inductors oppose changes in current. They reduce current in AC circuits and act like short circuits in DC circuits.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Inductor Symbols</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Inductor</li>
        <li>Iron Core Inductor</li>
        <li>Variable Inductor</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Inductors in Series</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">
        L<sub>Total</sub> = L₁ + L₂ + L₃ + ...
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Inductors in Parallel</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">
        1 / L<sub>Total</sub> = 1 / L₁ + 1 / L₂ + 1 / L₃ + ...
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Inductor's Voltage</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">
        v<sub>L</sub>(t) = L × d(i<sub>L</sub>(t)) / dt
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Inductor's Current</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">
        i<sub>L</sub>(t) = i<sub>L</sub>(0) + (1 / L) × ∫₀ᵗ v<sub>L</sub>(τ) dτ
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Energy Stored in Inductor</h2>
      <pre className="bg-gray-100 p-3 rounded mb-6 dark:text-black">
        E<sub>L</sub> = (1 / 2) × L × I²
      </pre>

      <h2 className="text-2xl font-semibold mb-2">AC Circuits</h2>
      <h3 className="text-xl font-medium mb-1">Inductor's Reactance</h3>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">
        X<sub>L</sub> = ωL
      </pre>

      <h3 className="text-xl font-medium mb-1">Inductor's Impedance</h3>
      <p className="mb-1">Cartesian form:</p>
      <pre className="bg-gray-100 p-3 rounded mb-2 dark:text-black">
        Z<sub>L</sub> = jX<sub>L</sub> = jωL
      </pre>
      <p className="mb-1">Polar form:</p>
      <pre className="bg-gray-100 p-3 rounded mb-6 dark:text-black">
        Z<sub>L</sub> = X<sub>L</sub> ∠ 90º
      </pre>
    </div>
  );
};

export default InductorInfo;
