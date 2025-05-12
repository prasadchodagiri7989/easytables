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
                  <BreadcrumbLink asChild>
                    <Link to="/mathematics/probability">probability Tool</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Basic Probability</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="probability-explanation-container bg-white/40 dark:bg-transparent mx-auto max-w-[900px]">
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


          <h3 className="text-lg font-medium mb-2">Advanced Probability Concepts</h3>
  <p>
    As you delve deeper into probability theory, you will encounter more advanced concepts that expand on the foundational ideas. These include conditional probability, Bayes' theorem, and probability distributions. Let's explore these concepts in more detail.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Conditional Probability</h3>
  <p>
    Conditional probability is the probability of an event occurring given that another event has already occurred. It is denoted as <strong>P(A|B)</strong>, which is the probability of event A happening given that event B has occurred.
  </p>
  <p>
    The formula for conditional probability is:
  </p>
  <pre className="my-4">
    P(A|B) = P(A ∩ B) / P(B)
  </pre>
  <p>
    Where:
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>P(A|B)</strong>: The probability of event A occurring given event B.</li>
      <li><strong>P(A ∩ B)</strong>: The probability that both events A and B occur simultaneously.</li>
      <li><strong>P(B)</strong>: The probability of event B.</li>
    </ul>
  </p>
  <p>
    Example: Suppose you have a deck of cards. If you draw one card and it is a King, what is the probability that the card is also a Heart, given that it is a King? There are 4 Kings in a deck, and 1 of them is a King of Hearts. Thus, the conditional probability is:
  </p>
  <pre className="my-4">
    P(Heart|King) = 1 / 4 = 0.25
  </pre>

  <h3 className="text-lg font-medium mt-6 mb-2">Bayes' Theorem</h3>
  <p>
    Bayes' theorem is a powerful tool in probability theory that describes the probability of an event, based on prior knowledge of conditions related to the event. It provides a way of updating the probability of an event in light of new evidence. The theorem is expressed as:
  </p>
  <pre className="my-4">
    P(A|B) = [P(B|A) * P(A)] / P(B)
  </pre>
  <p>
    Where:
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>P(A|B)</strong>: The probability of A given B (posterior probability).</li>
      <li><strong>P(B|A)</strong>: The probability of B given A (likelihood).</li>
      <li><strong>P(A)</strong>: The prior probability of A.</li>
      <li><strong>P(B)</strong>: The probability of B.</li>
    </ul>
  </p>
  <p>
    Example: Suppose there is a 1% chance that a person has a certain disease (P(A) = 0.01). A test is 95% accurate, meaning if the person has the disease, the test will correctly identify it 95% of the time (P(B|A) = 0.95). If the test result is positive, what is the probability that the person actually has the disease? Using Bayes' Theorem, you can calculate this conditional probability, which will typically be much lower than the 95% accuracy of the test, due to the low prior probability of the disease.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Probability Distributions</h3>
  <p>
    Probability distributions describe how the probabilities of a random variable are distributed across its possible values. There are two main types of probability distributions:
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Discrete Probability Distributions</strong>: These describe random variables that take on a finite or countably infinite number of values. An example is the roll of a fair die.</li>
    <li><strong>Continuous Probability Distributions</strong>: These describe random variables that can take on an infinite number of values within a given range. An example is the height of people in a population.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">The Binomial Distribution</h3>
  <p>
    The binomial distribution is a discrete probability distribution that describes the number of successes in a fixed number of independent Bernoulli trials (i.e., trials with two outcomes, such as success/failure). The probability mass function for the binomial distribution is:
  </p>
  <pre className="my-4">
    P(X = k) = (n choose k) * p<sup>k</sup> * (1 - p)<sup>n - k</sup>
  </pre>
  <p>
    Where:
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>n</strong>: The number of trials.</li>
      <li><strong>k</strong>: The number of successes.</li>
      <li><strong>p</strong>: The probability of success on each trial.</li>
    </ul>
  </p>
  <p>
    Example: Suppose you flip a fair coin 5 times. What is the probability of getting exactly 3 heads? Using the binomial distribution formula, you would calculate the probability of this outcome.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">The Normal Distribution</h3>
  <p>
    The normal distribution, often referred to as the Gaussian distribution, is a continuous probability distribution that is symmetric about its mean. It is one of the most widely used distributions in statistics and is characterized by its bell-shaped curve. The probability density function (PDF) of the normal distribution is:
  </p>
  <pre className="my-4">
    f(x) = (1 / (σ√(2π))) * e<sup>-(x - μ)² / (2σ²)</sup>
  </pre>
  <p>
    Where:
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>μ</strong>: The mean (average) of the distribution.</li>
      <li><strong>σ</strong>: The standard deviation of the distribution.</li>
      <li><strong>e</strong>: Euler's number, a constant approximately equal to 2.718.</li>
    </ul>
  </p>
  <p>
    The normal distribution is important because many statistical tests and real-world phenomena, such as height, IQ, and measurement errors, follow this distribution. In fact, by the Central Limit Theorem, the sum of a large number of independent, identically distributed random variables will tend to follow a normal distribution, regardless of the original distribution.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">The Central Limit Theorem (CLT)</h3>
  <p>
    The Central Limit Theorem is one of the most important results in probability and statistics. It states that the sampling distribution of the sample mean will approach a normal distribution as the sample size increases, regardless of the shape of the original population distribution. This theorem allows us to make inferences about population parameters using the normal distribution, even if the population itself is not normally distributed.
  </p>
  <p>
    The CLT is a key concept behind many statistical methods, such as hypothesis testing and confidence intervals. It ensures that, given a sufficiently large sample size, we can approximate the population mean with a normal distribution and make reliable statistical conclusions.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Conclusion</h3>
  <p>
    Understanding the fundamentals of probability is crucial for navigating a wide range of disciplines, from statistics and data analysis to economics, finance, and engineering. As you continue to explore probability theory, you will encounter various techniques and tools, such as distributions, Bayes' theorem, and the Central Limit Theorem, that provide deeper insights into the behavior of random phenomena. Whether you're assessing risk, making predictions, or analyzing patterns in data, a solid understanding of probability will serve as a foundation for making informed decisions.
  </p>
  <h3 className="text-lg font-medium mb-2">Applications of Probability</h3>
  <p>
    Probability theory plays a significant role in various fields, such as statistics, finance, engineering, and science. It helps model uncertainty and risk, guiding decision-making processes. Below are some areas where probability is used in practical applications:
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Finance and Economics</h3>
  <p>
    In finance, probability is used to model uncertainty in the markets, assess risks, and make investment decisions. One key area where probability is applied is in portfolio theory, which uses the concept of expected returns and the variance of returns to assess the risk of an investment portfolio.
  </p>
  <p>
    For example, when investing in a stock, an investor may estimate the probability of various returns (positive or negative) based on historical data. They can then use this probability to calculate the expected return of the stock, which helps determine whether the stock is a good investment. Similarly, financial models like the Black-Scholes model for pricing options rely on probability distributions, particularly the normal distribution, to estimate the likelihood of different outcomes.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Insurance and Risk Management</h3>
  <p>
    The insurance industry heavily relies on probability to assess risk and determine premium rates. Actuaries use probability distributions to model the likelihood of different events (such as accidents or natural disasters) and estimate the expected losses. This helps insurance companies determine how much to charge for insurance policies while ensuring they remain profitable.
  </p>
  <p>
    For example, if an insurance company wants to assess the risk of a car accident occurring in a given year, they may use historical data on accident rates and apply probability to calculate the likelihood of an accident happening. Based on this probability, the company can then set appropriate premiums for their customers.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Medicine and Healthcare</h3>
  <p>
    In medicine, probability is used extensively in the evaluation of medical tests, diagnosis, and treatment planning. One of the key areas where probability is applied is in the evaluation of diagnostic tests. A test is often not perfect, and the probability of a true positive, false positive, true negative, or false negative result needs to be understood.
  </p>
  <p>
    For instance, if a medical test has a 95% accuracy rate, this does not mean it will correctly identify the disease 95% of the time. Using Bayes' Theorem, we can incorporate prior probabilities (such as the prevalence of the disease) to calculate the likelihood of a patient having the disease given a positive test result.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Game Theory and Decision Making</h3>
  <p>
    Game theory is another area where probability plays an important role. In game theory, probability is used to model situations where the outcome depends not only on the player's decisions but also on the decisions of other participants, each of whom may have their own strategies and motivations.
  </p>
  <p>
    An example of probability in game theory is the "prisoner's dilemma," a scenario where two suspects are arrested for a crime and must decide whether to cooperate or betray the other. The probabilities of each outcome (cooperate or betray) help determine the best strategy for each player.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Sports and Gambling</h3>
  <p>
    Probability is a major factor in sports betting and gambling, as it helps bettors estimate the likelihood of various outcomes, such as the chance of a team winning a match or a player achieving a specific performance. Statistical models are used to predict outcomes based on historical data and current conditions, such as team form, player injuries, and other factors.
  </p>
  <p>
    In gambling, probability is used to determine the odds for various games of chance, such as roulette, blackjack, or poker. The concept of expected value is particularly useful in gambling, as it helps players understand the long-term profitability of a bet.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Machine Learning and Artificial Intelligence</h3>
  <p>
    Probability is a cornerstone of machine learning and artificial intelligence (AI), particularly in algorithms that deal with uncertainty and make predictions based on data. Many machine learning models, such as Naive Bayes classifiers and hidden Markov models, are built on probabilistic concepts. These models predict outcomes based on the likelihood of various events happening, given the input data.
  </p>
  <p>
    For example, in a spam email classifier, a machine learning model might calculate the probability that a given email is spam based on features such as the frequency of certain words, the sender's address, and other patterns found in the data. By training the model with historical data, the algorithm learns to estimate these probabilities and make accurate predictions.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Monte Carlo Simulations</h3>
  <p>
    Monte Carlo simulations are a powerful tool that uses random sampling to model and understand complex systems that are difficult to predict deterministically. The simulation generates a large number of random outcomes based on known probability distributions and uses these outcomes to estimate the probability of various results.
  </p>
  <p>
    Monte Carlo simulations are used in a variety of fields, including finance (to model stock prices), engineering (to simulate the behavior of complex systems), and physics (to model particle interactions). The accuracy of the simulation improves as more random samples are generated, providing more reliable estimates of the probabilities of different outcomes.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Probability in Artificial Neural Networks</h3>
  <p>
    Artificial neural networks (ANNs), which are inspired by the human brain's structure and function, use probability to model complex relationships between input and output data. In particular, probabilistic neural networks (PNNs) are a type of ANN that apply statistical principles to classify data based on probability distributions.
  </p>
  <p>
    In the training of ANNs, the concept of likelihood and probability distributions is used to update the weights of the network's neurons based on the observed data. This process allows the network to learn and make predictions with a high degree of accuracy, especially when dealing with uncertain or noisy data.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Understanding Uncertainty and Forecasting</h3>
  <p>
    One of the fundamental applications of probability is in understanding uncertainty. In many real-world problems, uncertainty arises due to incomplete information, random variation, or inherent unpredictability in systems. Probability theory helps quantify this uncertainty and enables the development of models that predict future outcomes with a certain level of confidence.
  </p>
  <p>
    Forecasting is a key area where probability is applied. From predicting the weather to forecasting sales for a business, probability models provide a way to estimate future outcomes based on historical data and current trends. The accuracy of these forecasts can be quantified by the likelihood of different outcomes, allowing decision-makers to plan accordingly.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Conclusion</h3>
  <p>
    Probability theory is a powerful tool that provides a framework for understanding and quantifying uncertainty in a wide range of fields. Whether you're making financial decisions, assessing risk, analyzing data, or making predictions, probability helps you navigate the complexities of the real world by providing a way to model and manage uncertainty. By applying probability to everyday situations, we can make better-informed decisions and improve our ability to predict future events.
  </p>
  <p>
    As you continue exploring probability, you'll discover even more advanced techniques, such as stochastic processes, Markov chains, and Bayesian networks, that provide deeper insights into the behavior of random systems. Whether you're studying probability for academic purposes or applying it in practical settings, a solid understanding of its principles is essential for tackling complex problems and making sound decisions.
  </p>
        </Card>
      </div>
    </>
  );
};
