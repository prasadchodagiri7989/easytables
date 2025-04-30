import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const CapacitorInfo = () => {
  return (
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">What is a Capacitor?</h1>
      <p className="mb-4">
        A <strong>capacitor</strong> is an electronic component that stores electric charge. It consists of two close conductors (usually plates) separated by a dielectric material. When connected to a power source, one plate accumulates positive charge while the other accumulates negative charge.
      </p>
      <p className="mb-4">
        The <strong>capacitance</strong> is the amount of electric charge stored at a voltage of 1 Volt, and it is measured in <strong>Farads (F)</strong>.
      </p>
      <p className="mb-6">
        Capacitors block current in DC circuits and act as short circuits in AC circuits.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Capacitor Symbols</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Capacitor</li>
        <li>Polarized Capacitor</li>
        <li>Variable Capacitor</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Capacitance Formula</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">C = Q / V</pre>
      <p className="mb-4">
        Where C is capacitance (F), Q is electric charge (C), and V is voltage (V).
      </p>

      <h2 className="text-2xl font-semibold mb-2">Capacitance of a Plate Capacitor</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">C = ε × (A / d)</pre>
      <p className="mb-6">
        ε is the permittivity (F/m), A is plate area (m²), and d is distance between plates (m).
      </p>

      <h2 className="text-2xl font-semibold mb-2">Capacitors in Series</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">
        1 / C<sub>Total</sub> = 1 / C₁ + 1 / C₂ + 1 / C₃ + ...
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Capacitors in Parallel</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">C<sub>Total</sub> = C₁ + C₂ + C₃ + ...</pre>

      <h2 className="text-2xl font-semibold mb-2">Capacitor's Current</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">
        i<sub>c</sub>(t) = C × d(v<sub>c</sub>(t)) / dt
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Capacitor's Voltage</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">
        v<sub>c</sub>(t) = v<sub>c</sub>(0) + (1 / C) × ∫₀ᵗ i<sub>c</sub>(τ) dτ
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Energy Stored in Capacitor</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">
        E<sub>C</sub> = (C × V<sub>C</sub>²) / 2
      </pre>

      <h2 className="text-2xl font-semibold mb-2">AC Circuits</h2>
      <p className="mb-2">Angular frequency:</p>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">ω = 2πf</pre>
      <p className="mb-4">ω in rad/s, f in Hz</p>

      <h2 className="text-2xl font-semibold mb-2">Capacitor's Reactance</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">
        X<sub>C</sub> = -1 / (ω × C)
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Capacitor's Impedance</h2>
      <p className="mb-1">Cartesian form:</p>
      <pre className="bg-gray-100 p-3 rounded mb-2 dark:text-black">
        Z<sub>C</sub> = -j / (ω × C)
      </pre>
      <p className="mb-1">Polar form:</p>
      <pre className="bg-gray-100 p-3 rounded mb-6 dark:text-black">
        Z<sub>C</sub> = X<sub>C</sub> ∟ -90º
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Types of Capacitors</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Variable Capacitor</li>
        <li>Electrolytic Capacitor</li>
        <li>Spherical Capacitor</li>
        <li>Power Capacitor</li>
        <li>Ceramic Capacitor</li>
        <li>Tantalum Capacitor</li>
        <li>Mica Capacitor</li>
        <li>Paper Capacitor</li>
      </ul>
    </div>
  );
};

export default CapacitorInfo;
