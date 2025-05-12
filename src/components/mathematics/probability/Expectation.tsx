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

      <div className="expectation-explanation-container bg-white/40 dark:bg-transparent mx-auto max-w-[900px]">
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

  <h3 className="text-lg font-medium mb-4">Introduction to Expected Value</h3>
  <p>
    The <strong>Expected Value</strong> (often denoted as E(X)) is a fundamental concept in probability and statistics that represents the average outcome of a random variable over a large number of experiments. It is essentially the long-run mean or the center of a probability distribution and is widely used in decision-making under uncertainty.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Understanding the Concept</h3>
  <p>
    Imagine repeating an experiment (like rolling a die) many times and recording the outcomes. While individual outcomes will vary, the average of all outcomes will converge to a certain value — this is the expected value. It's a weighted average where each possible outcome is weighted by its probability.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Mathematical Definition</h3>
  <p>
    For a <strong>discrete random variable</strong>, the expected value is calculated as:
  </p>
  <pre className="my-4">
    E(X) = Σ [xᵢ × P(xᵢ)]
  </pre>
  <p>
    Where:
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>xᵢ</strong>: Each possible outcome</li>
      <li><strong>P(xᵢ)</strong>: Probability of that outcome</li>
      <li><strong>Σ</strong>: Summation across all outcomes</li>
    </ul>
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Example with a Fair Die</h3>
  <p>
    For a six-sided fair die, each face (1 to 6) has an equal probability of 1/6:
  </p>
  <pre className="my-4">
    E(X) = (1×1/6) + (2×1/6) + (3×1/6) + (4×1/6) + (5×1/6) + (6×1/6) = 3.5
  </pre>
  <p>
    While you cannot roll a 3.5 on a die, the average value over many rolls would approach 3.5.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Expected Value for Continuous Variables</h3>
  <p>
    For <strong>continuous random variables</strong>, the expected value is calculated using an integral:
  </p>
  <pre className="my-4">E(X) = ∫ x · f(x) dx</pre>
  <p>
    Where <strong>f(x)</strong> is the probability density function of X. This approach is used when the variable can take infinitely many values within an interval (like height, weight, or time).
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Applications of Expected Value</h3>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Finance:</strong> Predicting expected return on investments or assets.</li>
    <li><strong>Insurance:</strong> Calculating premiums based on risk probabilities.</li>
    <li><strong>Gambling:</strong> Assessing fairness and profitability of games.</li>
    <li><strong>Economics:</strong> Modeling demand, pricing, and cost expectations.</li>
    <li><strong>Machine Learning:</strong> Used in loss functions and probabilistic models.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Decision-Making Based on Expected Value</h3>
  <p>
    Expected value plays a vital role in rational decision-making. Suppose you have two business projects to choose from:
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li>Project A: 60% chance to earn ₹1000, 40% chance to lose ₹500</li>
    <li>Project B: Guaranteed return of ₹200</li>
  </ul>
  <p>
    E(A) = (0.6 × 1000) + (0.4 × -500) = 600 - 200 = ₹400 <br />
    E(B) = ₹200
  </p>
  <p>
    Based on expected value, Project A is preferable, even though it involves more risk.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Expected Value in Gambling</h3>
  <p>
    Gambling games often rely on expected value to determine house advantage. For example, in a game where you win ₹100 with a probability of 0.4 and lose ₹50 with a probability of 0.6:
  </p>
  <pre className="my-4">E(X) = (0.4 × 100) + (0.6 × -50) = 40 - 30 = ₹10</pre>
  <p>
    A positive expected value (like ₹10) implies the game is favorable to the player. Most casino games, however, have a negative expected value for the player.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Law of Large Numbers</h3>
  <p>
    The <strong>Law of Large Numbers</strong> states that as an experiment is repeated many times, the sample mean approaches the expected value. This law supports the practical use of expected value in long-term scenarios such as insurance, trading, and statistics.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Expected Value vs. Median vs. Mode</h3>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Expected Value (Mean):</strong> Weighted average of outcomes.</li>
    <li><strong>Median:</strong> Middle value of ordered data.</li>
    <li><strong>Mode:</strong> Most frequently occurring value.</li>
  </ul>
  <p>
    These three may be different, especially in skewed distributions. Expected value considers all outcomes and their probabilities, making it more sensitive to outliers.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Limitations of Expected Value</h3>
  <ul className="list-disc pl-5 space-y-2">
    <li>It does not account for variability or risk — a high expected value with high variance might still be risky.</li>
    <li>Not always an achievable result (e.g., 3.5 from a die roll).</li>
    <li>Relies on accurate probability estimation, which may not always be possible in real-life scenarios.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Expected Value in Machine Learning</h3>
  <p>
    In machine learning and statistics, expected value helps define cost functions like <strong>mean squared error (MSE)</strong> or <strong>cross-entropy loss</strong>. Models aim to minimize expected loss over training data, making the concept essential in prediction accuracy and optimization.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Insurance and Risk Modeling</h3>
  <p>
    Insurance companies use expected value to calculate how much to charge customers. For instance, if the chance of a claim is 2% and the average claim amount is ₹50,000, the expected cost per policy is ₹1000. The company will then add overheads and profit margin to set premiums.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Expected Value in Business Strategy</h3>
  <p>
    In uncertain markets, business strategies often rely on expected value to choose among alternatives. Launching a new product, entering a new market, or pricing strategies can all be modeled using expected value projections.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Conclusion</h3>
  <p>
    Expected value is a powerful and widely applicable concept in statistics. It helps summarize the central tendency of a random variable and guides decision-making in uncertain situations. While it doesn't predict exact outcomes, it provides a rational foundation for analyzing risk and reward over time.
  </p>
  <p>
    By mastering expected value, you can better understand probability distributions, evaluate financial outcomes, optimize business strategies, and make data-informed decisions across many fields.
  </p>


        </Card>
      </div>
    </>
  );
};
