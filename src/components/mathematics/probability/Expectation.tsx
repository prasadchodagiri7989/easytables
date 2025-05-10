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

export const Expectation = () => {
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
            <BreadcrumbPage>Expected Value</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="expectation-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="expectation-explanation-header text-center text-2xl font-bold mb-4">
          Expectation (Expected Value)
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What is Expected Value?</h3>
          <p>
            The <strong>expected value</strong> (or <em>mathematical expectation</em>) of a random variable is a measure of the center of its distribution — essentially, it's the long-term average outcome if an experiment is repeated many times.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Expected Value Formula</h3>
          <p>For a discrete random variable:</p>
          <pre className="my-4">
            E(X) = Σ [xᵢ × P(xᵢ)]
          </pre>
          <p>
            Where:
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>xᵢ</strong>: Each possible value of the random variable</li>
              <li><strong>P(xᵢ)</strong>: The probability of that value occurring</li>
              <li><strong>Σ</strong>: Summation across all possible values</li>
            </ul>
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Example</h3>
          <p>
            Suppose you roll a fair six-sided die. The expected value of the outcome is:
          </p>
          <pre className="my-4">
            E(X) = (1×1/6) + (2×1/6) + (3×1/6) + (4×1/6) + (5×1/6) + (6×1/6) = 3.5
          </pre>
          <p>
            Although you can never roll a 3.5, over many rolls, the average will approach 3.5.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Applications</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Economics and finance (e.g., expected return on investment)</li>
            <li>Gambling and games of chance</li>
            <li>Insurance and risk assessment</li>
            <li>Statistical decision-making</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Important Notes</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Expected value doesn’t guarantee an outcome in a single trial.</li>
            <li>It assumes the process is repeated many times.</li>
            <li>It can be used for both discrete and continuous variables.</li>
          </ul>

          <h3 className="text-lg font-medium mb-2">Understanding the Expected Value Concept</h3>
  <p>
    The <strong>expected value</strong> provides crucial insights into the average outcome of a random process, considering all possible outcomes and their probabilities. While it does not predict a specific outcome for any single trial, it allows you to understand the long-term behavior of random variables and experiments. In essence, it acts as the "balancing point" of the distribution of outcomes.
  </p>
  
  <h4 className="text-md font-medium mt-6 mb-2">Why is Expected Value Important?</h4>
  <p>
    The expected value is one of the most fundamental concepts in probability theory and statistics. It plays a critical role in diverse areas, including decision-making, risk analysis, and economic modeling. In particular, expected value enables individuals and organizations to quantify the average outcome of uncertain situations. By understanding the expected value, businesses and investors can make informed decisions, even in the face of randomness.
  </p>
  
  <h4 className="text-md font-medium mt-6 mb-2">Interpreting Expected Value in Real-Life Scenarios</h4>
  <p>
    In practice, expected value helps in assessing scenarios involving chance and risk. For instance, in the stock market, investors can calculate the expected return on investment, which helps them weigh the potential risks and rewards before making a decision. Similarly, when evaluating a game of chance, such as betting or gambling, the expected value provides a measure of how much one can expect to win or lose over the long run.
  </p>
  
  <h4 className="text-md font-medium mt-6 mb-2">Continuous Random Variables</h4>
  <p>
    While the previous example focused on discrete random variables (where the outcomes are countable), the concept of expected value also extends to <strong>continuous random variables</strong>. For continuous random variables, the expected value is computed using an integral instead of a summation. For example, if you were analyzing the lifetime of a machine, which can take any value in a range, the expected value would be calculated as the integral of the product of the variable’s value and its probability density function.
  </p>
  
  <pre className="my-4">
    E(X) = ∫ x * f(x) dx
  </pre>

  <h4 className="text-md font-medium mt-6 mb-2">Risk and Reward: Expected Value in Investment</h4>
  <p>
    In financial decision-making, the expected value can be applied to assess risk and reward. Investors often use expected value to calculate the anticipated return of different investment options based on historical data or projected outcomes. In such cases, a higher expected value can signal a more favorable investment, assuming the risk level is acceptable. 
  </p>
  
  <h4 className="text-md font-medium mt-6 mb-2">Comparing Multiple Outcomes</h4>
  <p>
    One of the primary uses of expected value is in comparing different possible outcomes in a situation involving uncertainty. For instance, imagine you are given the option to choose between two different investment opportunities, both with varying levels of risk and potential return. By calculating the expected value for each option, you can compare the average outcome for each, aiding in the decision-making process.
  </p>
  
  <h4 className="text-md font-medium mt-6 mb-2">Expected Value and Gambling</h4>
  <p>
    In gambling, the expected value can be used to determine the fairness of a game. For example, in a fair coin toss, where you win $1 for heads and lose $1 for tails, the expected value of the game is 0. This implies that over a large number of flips, you will break even. However, many gambling games, such as roulette or slot machines, have a negative expected value for the player, meaning that the average outcome results in a loss. Casinos design games to have a negative expected value to ensure profitability over time.
  </p>
  
  <h4 className="text-md font-medium mt-6 mb-2">Expected Value in Insurance</h4>
  <p>
    Insurance companies frequently use the concept of expected value to assess risk and set premiums. They calculate the expected value of claims they might have to pay out based on historical data about accidents, damages, and health risks. By calculating the expected cost of claims and factoring in the probability of various events, insurance companies can determine how much to charge their customers while ensuring profitability.
  </p>
  
  <h4 className="text-md font-medium mt-6 mb-2">Law of Large Numbers</h4>
  <p>
    A key concept closely related to expected value is the <strong>law of large numbers</strong>. This law states that as the number of trials or experiments increases, the observed average outcome (or sample mean) will tend to converge towards the expected value. This principle is crucial in areas like insurance, stock market predictions, and gambling, where long-term averages become more predictable as more data points are collected.
  </p>
  
  <h4 className="text-md font-medium mt-6 mb-2">Mathematical Expectation in Discrete vs. Continuous Distributions</h4>
  <p>
    As mentioned earlier, expected value can be calculated for both discrete and continuous random variables. In the case of a <strong>discrete distribution</strong>, where the outcomes are finite or countably infinite, the expected value is the sum of each outcome’s value multiplied by its probability. For a <strong>continuous distribution</strong>, the expected value is computed using an integral of the product of the variable’s value and its probability density function.
  </p>
  
  <h4 className="text-md font-medium mt-6 mb-2">Expected Value vs. Variance</h4>
  <p>
    While the expected value provides an average or central tendency of a random variable, it does not give any information about the variability or spread of the outcomes. To understand the dispersion of outcomes, we use the concept of <strong>variance</strong>. Variance is a measure of how far the values of a random variable are spread out from the expected value. The standard deviation, which is the square root of the variance, is another important measure used to quantify the uncertainty in random processes.
  </p>
  
  <h4 className="text-md font-medium mt-6 mb-2">Real-World Examples of Expected Value</h4>
  <p>
    - In healthcare, expected value can be used to estimate the cost of a treatment plan by considering the probabilities of different treatment outcomes.
    - In sports, coaches can use expected value to assess the performance of players, factoring in various performance metrics and probabilities of different plays.
    - In economics, businesses use expected value to predict future revenue and costs based on market conditions and consumer behavior.
  </p>

  <h4 className="text-md font-medium mt-6 mb-2">Challenges in Using Expected Value</h4>
  <p>
    While the expected value is a useful tool, it does have limitations. One key limitation is that it assumes that the same conditions will hold over repeated trials, which may not always be the case in the real world. In addition, the expected value does not capture the potential for extreme outcomes (outliers) or provide any insight into the likelihood of rare events. For situations where extreme outcomes are significant, other measures, such as the variance or risk-adjusted return, may be more appropriate.
  </p>
        </Card>
      </div>
    </>
  );
};
