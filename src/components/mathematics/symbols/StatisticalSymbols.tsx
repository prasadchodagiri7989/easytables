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

export const StatisticalSymbols = () => {
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
            <BreadcrumbPage>Statistical Symbols</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="statistical-symbols-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="statistical-symbols-header text-center text-2xl font-bold mb-4">
          Statistical Symbols
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What Are Statistical Symbols?</h3>
          <p>
            <strong>Statistical symbols</strong> are used to represent different statistical measures and concepts in data analysis and interpretation. These symbols help in expressing data summaries, central tendency, variability, and distributions.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Common Statistical Symbols</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>μ</strong>: Population mean (average of a population)</li>
            <li><strong>x̄</strong>: Sample mean (average of a sample)</li>
            <li><strong>σ</strong>: Population standard deviation</li>
            <li><strong>s</strong>: Sample standard deviation</li>
            <li><strong>σ²</strong>: Population variance</li>
            <li><strong>s²</strong>: Sample variance</li>
            <li><strong>Σ</strong>: Summation (sum of a series of values)</li>
            <li><strong>n</strong>: Sample size (number of observations in a sample)</li>
            <li><strong>N</strong>: Population size (number of observations in a population)</li>
            <li><strong>P</strong>: Probability of an event</li>
            <li><strong>r</strong>: Pearson correlation coefficient (measure of linear relationship between variables)</li>
            <li><strong>z</strong>: Z-score (measure of how many standard deviations a data point is from the mean)</li>
            <li><strong>t</strong>: t-statistic (used in t-tests)</li>
            <li><strong>χ²</strong>: Chi-squared statistic (used in hypothesis testing)</li>
            <li><strong>β</strong>: Beta coefficient (used in regression analysis)</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Examples in Use</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>x̄ = Σx / n</strong> – The formula for the sample mean, where Σx is the sum of all values and n is the sample size.</li>
            <li><strong>z = (x - μ) / σ</strong> – The formula for the z-score, which measures how many standard deviations a value is from the population mean.</li>
            <li><strong>r = Σ[(xi - x̄)(yi - ȳ)] / √Σ(xi - x̄)²Σ(yi - ȳ)²</strong> – The formula for the Pearson correlation coefficient.</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Why They Matter</h3>
          <p>
            Statistical symbols help standardize the representation of data and statistical measures. They enable concise, clear, and consistent communication of statistical findings and ensure that formulas and results are universally understood.
          </p>
        </Card>
      </div>
    </>
  );
};
