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
      <BreadcrumbLink asChild>
        <Link to="/mathematics/symbols">symbols Tool</Link>
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

          <h3 className="text-lg font-medium mb-2">Types of Statistical Measures</h3>
  <p>
    In statistics, various measures are used to summarize data, identify patterns, and make predictions. These measures fall into several categories, such as measures of central tendency, variability, and position. Understanding these measures is crucial in interpreting statistical data and drawing meaningful conclusions.
  </p>

  <h4 className="text-md font-semibold mt-4 mb-2">Measures of Central Tendency</h4>
  <p>
    Measures of central tendency describe the center of a data set. They give a single value that represents the entire data set. The most common measures of central tendency are the mean, median, and mode.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Mean (μ or x̄)</strong>: The arithmetic average of all values in the data set. It is computed by summing all values and dividing by the total number of values.</li>
    <li><strong>Median</strong>: The middle value in a data set when the values are ordered from least to greatest. If the data set has an even number of values, the median is the average of the two middle values.</li>
    <li><strong>Mode</strong>: The value that appears most frequently in the data set. A data set can have no mode, one mode, or multiple modes.</li>
  </ul>

  <h4 className="text-md font-semibold mt-4 mb-2">Measures of Variability</h4>
  <p>
    Measures of variability (or dispersion) describe the spread or variability of the data. They indicate how much the data values differ from the central value (mean or median). Common measures of variability include range, variance, and standard deviation.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Range</strong>: The difference between the maximum and minimum values in the data set. It provides a simple measure of the spread of the data.</li>
    <li><strong>Variance (σ² or s²)</strong>: The average squared deviation from the mean. It quantifies the extent to which data points deviate from the mean. Variance is expressed in square units of the original data.</li>
    <li><strong>Standard Deviation (σ or s)</strong>: The square root of the variance. It provides a measure of the spread of data in the same units as the original data and is more interpretable than variance.</li>
  </ul>

  <h4 className="text-md font-semibold mt-4 mb-2">Measures of Position</h4>
  <p>
    Measures of position describe the relative standing of data values within a data set. They include percentiles, quartiles, and z-scores. These measures are used to compare individual data points to the overall distribution.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Percentiles</strong>: Percentiles divide the data into 100 equal parts. The pth percentile is the value below which p percent of the data fall.</li>
    <li><strong>Quartiles</strong>: Quartiles divide the data into four equal parts. The first quartile (Q1) is the 25th percentile, the second quartile (Q2) is the median, and the third quartile (Q3) is the 75th percentile.</li>
    <li><strong>Z-Score (z)</strong>: The z-score measures how many standard deviations a data point is from the mean. A z-score of 0 means the data point is exactly at the mean, while positive and negative values indicate data points above or below the mean.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Important Statistical Concepts</h3>
  <p>
    In addition to statistical symbols and measures, several fundamental concepts play an important role in statistical analysis. These concepts are essential for understanding the behavior of data and making informed decisions based on statistical findings.
  </p>

  <h4 className="text-md font-semibold mt-4 mb-2">Probability Distributions</h4>
  <p>
    A probability distribution describes the likelihood of different outcomes in a random experiment. It provides a model for understanding how probabilities are distributed across possible values of a random variable.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Normal Distribution</strong>: The normal distribution is one of the most important probability distributions in statistics. It is characterized by a bell-shaped curve and is used to model many types of data in the natural and social sciences. The mean and standard deviation are key parameters of a normal distribution.</li>
    <li><strong>Binomial Distribution</strong>: The binomial distribution models the number of successes in a fixed number of independent trials, each with the same probability of success. It is used to model discrete data in situations like coin flips or quality control tests.</li>
    <li><strong>Poisson Distribution</strong>: The Poisson distribution models the number of events occurring within a fixed interval of time or space, given a constant mean rate of occurrence. It is used for modeling rare events, such as the number of accidents at a traffic intersection.</li>
  </ul>

  <h4 className="text-md font-semibold mt-4 mb-2">Hypothesis Testing</h4>
  <p>
    Hypothesis testing is a statistical method used to make inferences or draw conclusions about a population based on a sample of data. The goal is to test whether there is enough evidence to reject a null hypothesis in favor of an alternative hypothesis.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Null Hypothesis (H₀)</strong>: The null hypothesis is a statement that there is no effect, relationship, or difference between groups. It is the hypothesis that researchers try to disprove or reject.</li>
    <li><strong>Alternative Hypothesis (H₁)</strong>: The alternative hypothesis is the statement that there is an effect, relationship, or difference between groups. It is what researchers seek to support through evidence.</li>
    <li><strong>P-Value</strong>: The p-value is the probability of observing a test statistic at least as extreme as the one obtained, assuming the null hypothesis is true. A smaller p-value indicates stronger evidence against the null hypothesis.</li>
    <li><strong>Type I Error</strong>: A type I error occurs when a true null hypothesis is incorrectly rejected (false positive).</li>
    <li><strong>Type II Error</strong>: A type II error occurs when a false null hypothesis is not rejected (false negative).</li>
  </ul>

  <h4 className="text-md font-semibold mt-4 mb-2">Confidence Intervals</h4>
  <p>
    A confidence interval provides a range of values within which the true population parameter is likely to fall. It is typically expressed as a range with an associated confidence level, such as a 95% confidence interval.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Confidence Level</strong>: The confidence level is the probability that the confidence interval contains the true population parameter. For example, a 95% confidence level means that if the experiment were repeated many times, 95% of the resulting intervals would contain the true parameter.</li>
    <li><strong>Margin of Error</strong>: The margin of error is the amount added or subtracted from the sample estimate to create the confidence interval. It depends on the sample size and the standard error of the estimate.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Advanced Statistical Techniques</h3>
  <p>
    In addition to basic statistical measures and hypothesis testing, there are several advanced statistical techniques used to model complex data, draw more accurate inferences, and make predictions.
  </p>

  <h4 className="text-md font-semibold mt-4 mb-2">Regression Analysis</h4>
  <p>
    Regression analysis is a powerful technique used to model the relationship between a dependent variable and one or more independent variables. It helps predict outcomes and quantify the strength of the relationship between variables.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Linear Regression</strong>: Linear regression models the relationship between a dependent variable and one or more independent variables by fitting a straight line to the data. The coefficients of the model represent the effect of each independent variable on the dependent variable.</li>
    <li><strong>Multiple Regression</strong>: Multiple regression extends linear regression to model the relationship between a dependent variable and multiple independent variables.</li>
    <li><strong>Logistic Regression</strong>: Logistic regression is used when the dependent variable is categorical (e.g., binary outcomes like success/failure). It models the probability of a particular outcome using the logistic function.</li>
  </ul>

  <h4 className="text-md font-semibold mt-4 mb-2">Factor Analysis</h4>
  <p>
    Factor analysis is a technique used to identify underlying factors that explain the correlations among a set of observed variables. It is often used in psychology and social sciences to reduce data dimensions and identify latent variables.
  </p>

  <h4 className="text-md font-semibold mt-4 mb-2">Time Series Analysis</h4>
  <p>
    Time series analysis is used to analyze data collected over time. It involves identifying patterns, trends, and seasonal effects in data to make forecasts and understand temporal dependencies.
  </p>
  <h3 className="text-lg font-medium mb-2">Inferential Statistics</h3>
  <p>
    Inferential statistics involves using a random sample of data taken from a population to make inferences about the population as a whole. This branch of statistics helps in drawing conclusions that extend beyond the immediate data at hand.
  </p>

  <h4 className="text-md font-semibold mt-4 mb-2">Sampling</h4>
  <p>
    Sampling is a critical technique in inferential statistics. Since it is often impractical or impossible to gather data from an entire population, a representative sample is chosen to make statistical inferences about the larger group.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Random Sampling</strong>: In random sampling, every member of the population has an equal chance of being selected. This method helps ensure that the sample is unbiased and representative of the population.</li>
    <li><strong>Stratified Sampling</strong>: Stratified sampling divides the population into subgroups (strata) based on certain characteristics, and then random samples are taken from each subgroup.</li>
    <li><strong>Systematic Sampling</strong>: In systematic sampling, every nth member of the population is selected. This method is simpler to implement than random sampling but may introduce biases if there is an underlying periodicity in the population.</li>
  </ul>

  <h4 className="text-md font-semibold mt-4 mb-2">Types of Errors in Inferential Statistics</h4>
  <p>
    In hypothesis testing, two types of errors can occur, which must be considered when interpreting statistical results. These errors are critical for understanding the reliability of statistical tests.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Type I Error (False Positive)</strong>: A Type I error occurs when the null hypothesis is incorrectly rejected when it is actually true. The probability of committing a Type I error is denoted by α (alpha), commonly set to 0.05.</li>
    <li><strong>Type II Error (False Negative)</strong>: A Type II error occurs when the null hypothesis is not rejected when it is actually false. The probability of committing a Type II error is denoted by β (beta).</li>
  </ul>

  <h4 className="text-md font-semibold mt-4 mb-2">Power of a Statistical Test</h4>
  <p>
    The power of a statistical test is the probability that it will correctly reject the null hypothesis when it is false. High power means a test is more likely to detect a true effect, while low power increases the likelihood of a Type II error.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Factors Influencing Power</strong>: The power of a test is influenced by several factors, including sample size, effect size, and significance level (α). Increasing the sample size or effect size can increase the power of a test.</li>
    <li><strong>Power Analysis</strong>: Power analysis is used to determine the minimum sample size required to detect an effect of a given size with a certain level of confidence. It helps researchers plan experiments and avoid underpowered studies.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Bayesian Statistics</h3>
  <p>
    Bayesian statistics is an approach to statistical inference that combines prior knowledge with new data to make probabilistic statements about parameters. This contrasts with frequentist statistics, which relies solely on the data at hand without incorporating prior beliefs.
  </p>

  <h4 className="text-md font-semibold mt-4 mb-2">Bayes' Theorem</h4>
  <p>
    Bayes' theorem is a fundamental result in Bayesian statistics that allows for the updating of beliefs based on new evidence. It is used to calculate the posterior probability of a hypothesis given prior knowledge and new data.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Formula</strong>: Bayes' theorem is given by the formula: <strong>P(H|D) = P(D|H) * P(H) / P(D)</strong>, where P(H|D) is the posterior probability, P(D|H) is the likelihood, P(H) is the prior probability, and P(D) is the marginal likelihood.</li>
    <li><strong>Prior Probability</strong>: The prior probability represents the initial belief about a hypothesis before new data is observed. It is based on previous knowledge or subjective judgment.</li>
    <li><strong>Posterior Probability</strong>: The posterior probability is the updated belief about a hypothesis after considering the new data. It reflects the likelihood of the hypothesis after incorporating the evidence.</li>
  </ul>

  <h4 className="text-md font-semibold mt-4 mb-2">Applications of Bayesian Statistics</h4>
  <p>
    Bayesian methods are used in a wide range of fields, including medicine, economics, and machine learning. They are particularly useful when prior knowledge is available and when data is scarce or uncertain.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Medical Diagnosis</strong>: In medicine, Bayesian methods can be used to update the probability of a disease based on test results and prior knowledge of the disease's prevalence in the population.</li>
    <li><strong>Machine Learning</strong>: Bayesian inference is used in machine learning algorithms to estimate model parameters and make predictions. It is particularly useful in probabilistic models and situations where uncertainty is important.</li>
    <li><strong>Economics and Finance</strong>: Bayesian methods are used in economics and finance to model uncertainty and incorporate prior beliefs into decision-making processes, such as estimating future stock prices or economic trends.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Multivariate Statistics</h3>
  <p>
    Multivariate statistics refers to techniques used to analyze data that involves more than one variable at a time. These techniques help identify relationships between multiple variables and can be used to reduce the dimensionality of complex data.
  </p>

  <h4 className="text-md font-semibold mt-4 mb-2">Principal Component Analysis (PCA)</h4>
  <p>
    Principal component analysis (PCA) is a technique used to reduce the dimensionality of a dataset while retaining as much variability as possible. PCA identifies the principal components (linear combinations of original variables) that explain the most variance in the data.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Application</strong>: PCA is widely used in fields like image processing, genomics, and market research to reduce data complexity and identify patterns in high-dimensional data.</li>
    <li><strong>Eigenvectors and Eigenvalues</strong>: The principal components are derived from the eigenvectors of the covariance matrix of the data, and the eigenvalues represent the amount of variance explained by each component.</li>
  </ul>

  <h4 className="text-md font-semibold mt-4 mb-2">Factor Analysis vs PCA</h4>
  <p>
    While both PCA and factor analysis are used for dimensionality reduction, they differ in their goals. PCA seeks to explain as much variance as possible with fewer variables, while factor analysis identifies latent factors that explain the correlations between observed variables.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Data Visualization in Statistics</h3>
  <p>
    Data visualization is an essential part of statistics, as it helps in interpreting and communicating statistical findings. Visualizations allow statisticians to identify patterns, trends, and outliers in the data, and they play a crucial role in presenting complex statistical results.
  </p>

  <h4 className="text-md font-semibold mt-4 mb-2">Common Types of Statistical Plots</h4>
  <p>
    Several types of plots and charts are used in statistics to visualize data. Some of the most commonly used types include histograms, scatter plots, box plots, and bar charts.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Histograms</strong>: Histograms are used to display the frequency distribution of a continuous variable. They provide insights into the shape of the distribution and the presence of skewness or outliers.</li>
    <li><strong>Scatter Plots</strong>: Scatter plots show the relationship between two continuous variables. They are used to identify trends, correlations, and potential outliers.</li>
    <li><strong>Box Plots</strong>: Box plots, also known as box-and-whisker plots, summarize the distribution of a variable by showing the median, quartiles, and potential outliers.</li>
    <li><strong>Bar Charts</strong>: Bar charts are used to compare categorical variables by displaying the frequency or count of each category.</li>
  </ul>
        </Card>
      </div>
    </>
  );
};
