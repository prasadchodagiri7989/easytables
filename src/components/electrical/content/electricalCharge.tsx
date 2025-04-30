import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const Equation = ({ children }) => (
  <div className="my-2 px-4 py-2 bg-gray-100 dark:bg-transparent border rounded text-sm font-mono">
    {children}
  </div>
);

const Section = ({ title, children }) => (
  <div className="my-6">
    <h2 className="text-xl font-semibold mb-2 dark:text-white">{title}</h2>
    <div className="text-base text-gray-800 dark:text-white">{children}</div>
  </div>
);

const ElectricCharge = () => {
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
                                                        <Link to="/electrical/basic-terms">Basic Electrical terms</Link>
                                                      </BreadcrumbLink>
                                                    </BreadcrumbItem>
                                                    <BreadcrumbSeparator />
                                                    <BreadcrumbItem>
                                                      <BreadcrumbPage>Electrical charge</BreadcrumbPage>
                                                    </BreadcrumbItem>
                                                  </BreadcrumbList>
                                              </Breadcrumb>
    <div className="max-w-3xl p-6 bg-white/40 dark:bg-transparent dark:text-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6">Electric Charge</h1>

      <Section title="What is Electric Charge?">
        Electric charge generates an electric field and influences other charges via electric force.
        This force is mutual and acts equally in opposite directions.
      </Section>

      <Section title="Types of Electric Charge">
        <ul className="list-disc list-inside">
          <li>
            <strong>Positive charge (+)</strong>: More protons than electrons (Np &gt; Ne). Attracts negative charges and repels positive ones.
          </li>
          <li>
            <strong>Negative charge (-)</strong>: More electrons than protons (Ne &gt; Np). Attracts positive charges and repels negative ones.
          </li>
        </ul>
      </Section>

      <Section title="Electric Force Direction">
        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-400 dark:border-white w-full text-sm">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="border px-2 py-1">q1/q2 charges</th>
                <th className="border px-2 py-1">Force on q1</th>
                <th className="border px-2 py-1">Force on q2</th>
                <th className="border px-2 py-1">Interaction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">- / -</td>
                <td className="border px-2 py-1">←⊝</td>
                <td className="border px-2 py-1">⊝→</td>
                <td className="border px-2 py-1">Repulsion</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">+ / +</td>
                <td className="border px-2 py-1">←⊕</td>
                <td className="border px-2 py-1">⊕→</td>
                <td className="border px-2 py-1">Repulsion</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">- / +</td>
                <td className="border px-2 py-1">⊝→</td>
                <td className="border px-2 py-1">←⊕</td>
                <td className="border px-2 py-1">Attraction</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">+ / -</td>
                <td className="border px-2 py-1">⊕→</td>
                <td className="border px-2 py-1">←⊝</td>
                <td className="border px-2 py-1">Attraction</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Charge of Elementary Particles">
        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-400 dark:border-white w-full text-sm">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="border px-2 py-1">Particle</th>
                <th className="border px-2 py-1">Charge (C)</th>
                <th className="border px-2 py-1">Charge (e)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Electron</td>
                <td className="border px-2 py-1">-1.602 × 10⁻¹⁹ C</td>
                <td className="border px-2 py-1">-e</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Proton</td>
                <td className="border px-2 py-1">1.602 × 10⁻¹⁹ C</td>
                <td className="border px-2 py-1">+e</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Neutron</td>
                <td className="border px-2 py-1">0 C</td>
                <td className="border px-2 py-1">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Coulomb Unit">
        Electric charge is measured in <strong>coulombs (C)</strong>.<br />
        One coulomb equals the charge of approximately 6.242 × 10¹⁸ electrons:
        <Equation>1 C = 6.242 × 10¹⁸ e</Equation>
      </Section>

      <Section title="Electric Charge Calculation">
        For a constant current:
        <Equation>Q = I × t</Equation>
        <ul className="list-disc list-inside">
          <li><strong>Q</strong>: Electric charge (C)</li>
          <li><strong>I</strong>: Current (A)</li>
          <li><strong>t</strong>: Time (s)</li>
        </ul>
        For a time-varying current:
        <Equation>Q(t) = ∫₀ᵗ i(τ) dτ</Equation>
        <ul className="list-disc list-inside">
          <li><strong>i(t)</strong>: Instantaneous current (A)</li>
          <li><strong>t</strong>: Time interval (s)</li>
        </ul>
      </Section>
    </div>
    </>
  );
};

export default ElectricCharge;
