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

export const StandardDeviation = () => {
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
                    <Link to="/mathematics/probability">probability Tool</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Standard Deviation</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="standard-deviation-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="standard-deviation-explanation-header text-center text-2xl font-bold mb-4">
          Standard Deviation
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What is Standard Deviation?</h3>
          <p>
            <strong>Standard deviation</strong> is a measure of how spread out the values in a dataset are around the mean. It's the square root of the variance and gives a more interpretable measure of variability in the same unit as the data.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Formula</h3>
          <p>
            For a discrete random variable:
          </p>
          <pre className="my-4">
            σ = √Var(X) = √[Σ (xᵢ - μ)² × P(xᵢ)]
          </pre>
          <p>
            Where:
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>σ</strong>: Standard deviation</li>
              <li><strong>μ</strong>: Mean (expected value)</li>
              <li><strong>xᵢ</strong>: Each value of the variable</li>
              <li><strong>P(xᵢ)</strong>: Probability of xᵢ</li>
            </ul>
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Example</h3>
          <p>
            Suppose a dataset has values 2, 4, 4, 4, 5, 5, 7, 9:
          </p>
          <ul className="list-disc pl-5 mb-2">
            <li>Mean (μ) = 5</li>
            <li>Variance = [(2−5)² + (4−5)² × 3 + (5−5)² × 2 + (7−5)² + (9−5)²] / 8 = 4</li>
            <li>Standard Deviation = √4 = 2</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Interpretation</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>A lower standard deviation indicates values are close to the mean.</li>
            <li>A higher standard deviation shows greater spread in the data.</li>
            <li>It’s useful in finance, science, and many statistical analyses.</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Key Points</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Standard deviation is always non-negative.</li>
            <li>It’s more interpretable than variance since it has the same unit as the data.</li>
          </ul>
          <h3 className="text-lg font-medium mb-2">Advanced Concepts of Standard Deviation</h3>
  <p>
    While the concept of standard deviation is widely used to describe the spread of data, there are several advanced topics and extensions of this measure that can provide deeper insights into the distribution of data. Understanding these nuances is critical when applying standard deviation in various statistical analyses.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Population vs Sample Standard Deviation</h3>
  <p>
    One of the most important distinctions in calculating standard deviation is whether you're working with a <strong>population</strong> or a <strong>sample</strong>. 
    The formula provided above assumes that the dataset is the entire population. However, in many cases, you may be working with a sample from a larger population, and in such cases, the standard deviation formula needs to be adjusted.
  </p>
  <p>
    For a sample, the standard deviation is calculated using the following formula:
  </p>
  <pre className="my-4">
    s = √[ Σ (xᵢ - x̄)² / (n - 1) ]
  </pre>
  <p>
    Where:
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>s</strong>: Sample standard deviation</li>
      <li><strong>x̄</strong>: Sample mean</li>
      <li><strong>n</strong>: Sample size</li>
    </ul>
  </p>
  <p>
    The key difference between the population and sample standard deviation is the denominator. For the sample, we divide by <code>n - 1</code> instead of <code>n</code>. This adjustment, known as <strong>Bessel's correction</strong>, compensates for the fact that a sample tends to underestimate the true population standard deviation. By dividing by <code>n - 1</code>, we get a more accurate estimate of the population standard deviation.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Standard Deviation in Normal Distribution</h3>
  <p>
    The <strong>normal distribution</strong> (also called the Gaussian distribution) is one of the most important probability distributions in statistics, and it is often used to model real-world data. A key feature of the normal distribution is that it is completely characterized by its mean and standard deviation.
  </p>
  <p>
    In a normal distribution, about:
    <ul className="list-disc pl-5 space-y-2">
      <li>68.27% of data points lie within 1 standard deviation from the mean.</li>
      <li>95.45% lie within 2 standard deviations.</li>
      <li>99.73% lie within 3 standard deviations.</li>
    </ul>
  </p>
  <p>
    This is known as the <strong>68-95-99.7 rule</strong> or the empirical rule. It helps understand how spread out the data is in a normal distribution. The standard deviation gives a precise measure of this spread: the larger the standard deviation, the more spread out the data is, and the smaller the standard deviation, the more concentrated the data is around the mean.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Z-Scores and Standard Deviation</h3>
  <p>
    A <strong>z-score</strong> is a statistical measure that tells you how many standard deviations a data point is from the mean. It is calculated as:
  </p>
  <pre className="my-4">
    z = (x - μ) / σ
  </pre>
  <p>
    Where:
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>x</strong>: The value in question</li>
      <li><strong>μ</strong>: The mean</li>
      <li><strong>σ</strong>: The standard deviation</li>
    </ul>
  </p>
  <p>
    A z-score helps us determine how rare or common a particular data point is in a dataset. For example:
    <ul className="list-disc pl-5 space-y-2">
      <li>A z-score of 0 indicates that the data point is exactly at the mean.</li>
      <li>A z-score of 1 means the data point is 1 standard deviation above the mean.</li>
      <li>A z-score of -1 means the data point is 1 standard deviation below the mean.</li>
    </ul>
  </p>
  <p>
    Z-scores are particularly useful for comparing data points from different distributions. For example, you can use z-scores to compare test scores from two different exams, each with its own mean and standard deviation.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Coefficient of Variation (CV)</h3>
  <p>
    The <strong>coefficient of variation</strong> (CV) is another important statistic that helps compare the degree of variation between different datasets. It is calculated by dividing the standard deviation by the mean, often expressed as a percentage:
  </p>
  <pre className="my-4">
    CV = (σ / μ) × 100%
  </pre>
  <p>
    The CV provides a relative measure of variability. It is especially useful when comparing datasets with different units or scales. For example, if you are comparing the variability of two financial assets, one in dollars and the other in euros, the CV can help you understand which asset has more relative volatility.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Applications of Standard Deviation</h3>
  <p>
    Standard deviation is used in a wide range of fields, from finance to healthcare, to measure uncertainty, risk, and variability. Some of the most common applications include:
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">In Finance</h3>
  <p>
    In finance, standard deviation is used to measure the volatility of an asset or portfolio. A high standard deviation indicates a volatile asset, while a low standard deviation suggests that the asset's price is stable. This is critical for risk management, portfolio diversification, and investment decision-making.
  </p>
  <p>
    For example, if you are comparing two stocks, Stock A has a standard deviation of 5%, and Stock B has a standard deviation of 15%. This means that Stock B is more volatile than Stock A, and thus, investing in Stock B carries higher risk.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">In Quality Control</h3>
  <p>
    Standard deviation plays a key role in <strong>quality control</strong> processes, especially in manufacturing industries. It is used to monitor product consistency and detect any defects or abnormalities in production. A low standard deviation in manufacturing indicates that products are consistently produced within a specific tolerance, while a high standard deviation may indicate issues in the production process that need to be addressed.
  </p>
  <p>
    For example, if a factory is producing a certain component that needs to fit into a machine, and the standard deviation of the component’s size is small, it means the components are uniform and meet the required specifications.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">In Health and Medicine</h3>
  <p>
    In the healthcare field, standard deviation is often used to assess the variability of medical measurements, such as blood pressure, heart rate, or cholesterol levels. This helps doctors determine whether a patient's values are within a healthy range or whether they are an outlier that requires further investigation.
  </p>
  <p>
    For example, if a patient's blood pressure readings have a high standard deviation, this may indicate that their blood pressure is fluctuating significantly, which could be a sign of an underlying health condition.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">In Education</h3>
  <p>
    In education, standard deviation is used to analyze the variability of test scores. Teachers, administrators, and researchers use it to evaluate the consistency of student performance. A large standard deviation in test scores may indicate that there are significant differences in how students performed, while a small standard deviation suggests that most students performed similarly.
  </p>
  <p>
    For example, in a class of 30 students, if the standard deviation of their exam scores is large, it indicates that some students performed much better or worse than others, which may prompt educators to investigate the causes of these differences.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Conclusion</h3>
  <p>
    Standard deviation is a powerful statistical tool that provides valuable insights into the spread or variability of data. Whether you are working with simple datasets or complex models, understanding and interpreting standard deviation is crucial for making informed decisions. 
  </p>
  <p>
    As we've seen, the concept of standard deviation extends far beyond basic calculation and plays a significant role in fields like finance, quality control, healthcare, and education. By understanding how to apply and interpret standard deviation, you can better assess risk, variability, and uncertainty in a wide range of applications.
  </p>

        </Card>
      </div>
    </>
  );
};


