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
import { GuidanceSection } from "@/components/GuidanceSection";


export const QuadraticEquationExplanation = () => {
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
              <Link to="/mathematics/algebra">Algebra Tool</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Quadratic Equation Explanation</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="quadratic-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="quadratic-explanation-header text-center text-2xl font-bold mb-4">
          Quadratic Equation Explanation
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">Quadratic Equation Overview</h3>
          <p>A quadratic equation is a second-degree polynomial equation of the form:</p>
          <pre className="my-4">ax² + bx + c = 0</pre>

          <p>Where:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>a</strong>: The coefficient of x² (cannot be zero)</li>
            <li><strong>b</strong>: The coefficient of x</li>
            <li><strong>c</strong>: The constant term</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Discriminant</h3>
          <p>The discriminant of a quadratic equation is given by the formula:</p>
          <pre className="my-4">Δ = b² - 4ac</pre>

          <p>The discriminant helps determine the nature of the roots:</p>
          <ul className="list-decimal pl-5 space-y-2">
            <li>If Δ &gt; 0: The equation has two distinct real roots.</li>
            <li>If Δ = 0: The equation has exactly one real root (a repeated root).</li>
            <li>If Δ &lt; 0: The equation has two complex conjugate roots.</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Solving the Equation</h3>
          <p>The general method for solving a quadratic equation is by using the <em>quadratic formula</em>:</p>
          <pre className="my-4">x = (-b ± √Δ) / 2a</pre>

          <p>Where:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>±</strong>: Indicates two possible solutions — one with a plus sign and one with a minus sign.</li>
            <li><strong>√Δ</strong>: The square root of the discriminant (Δ).</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Example</h3>
          <p>Let's consider an example equation: <em>x² - 5x + 6 = 0</em>.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>For this equation, a = 1, b = -5, and c = 6.</li>
            <li>The discriminant is Δ = (-5)² - 4(1)(6) = 25 - 24 = 1.</li>
            <li>Since Δ &gt; 0, we know there are two real and distinct roots.</li>
            <li>
              Using the quadratic formula: <br />
              x = (5 ± √1) / 2(1) <br />
              x = (5 ± 1) / 2 <br />
              So, the solutions are x₁ = 3 and x₂ = 2.
            </li>
          </ul>
          
        </Card>
<GuidanceSection title="Quadratic Equation">
<h3 className="text-lg font-medium mb-2">Vertex Form of a Quadratic Equation</h3>
  <p>
    Another way to express a quadratic equation is in its vertex form, which provides insight into the shape and position of its graph:
  </p>
  <pre className="my-4">y = a(x - h)² + k</pre>
  <p>Where <strong>(h, k)</strong> is the vertex of the parabola. This form is useful for graphing and understanding transformations.</p>

  <h3 className="text-lg font-medium mt-6 mb-2">Factoring Method</h3>
  <p>
    If a quadratic equation can be factored easily, you can find its roots without using the quadratic formula. For example:
  </p>
  <pre className="my-4">x² - 7x + 12 = 0</pre>
  <p>
    We look for two numbers that multiply to 12 and add to -7. These numbers are -3 and -4:
  </p>
  <pre className="my-4">(x - 3)(x - 4) = 0</pre>
  <p>
    Therefore, the solutions are x = 3 and x = 4.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Completing the Square</h3>
  <p>
    Completing the square is another technique for solving quadratic equations. Let’s solve:
  </p>
  <pre className="my-4">x² + 6x + 5 = 0</pre>
  <p>
    First, move the constant term to the other side:
  </p>
  <pre>x² + 6x = -5</pre>
  <p>Add 9 to both sides (which is (6/2)²):</p>
  <pre>x² + 6x + 9 = 4</pre>
  <p>Now rewrite the left-hand side as a square:</p>
  <pre>(x + 3)² = 4</pre>
  <p>Take the square root of both sides:</p>
  <pre>x + 3 = ±2 → x = -1 or x = -5</pre>

  <h3 className="text-lg font-medium mt-6 mb-2">Graphical Interpretation</h3>
  <p>
    The graph of a quadratic equation is a parabola. The coefficient <strong>a</strong> determines its direction:
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li>If a &gt; 0: the parabola opens upward.</li>
    <li>If a &lt; 0: the parabola opens downward.</li>
  </ul>
  <p>
    The vertex is the highest or lowest point of the parabola. The axis of symmetry is the vertical line that passes through the vertex:
  </p>
  <pre className="my-4">x = -b / 2a</pre>

  <h3 className="text-lg font-medium mt-6 mb-2">Nature of Roots</h3>
  <p>
    Understanding how the discriminant affects roots is crucial:
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Real and distinct roots:</strong> Δ &gt; 0</li>
    <li><strong>Real and equal roots:</strong> Δ = 0</li>
    <li><strong>Complex roots:</strong> Δ &lt; 0</li>
  </ul>
  <p>
    If roots are complex, they appear as conjugates: <em>x = a ± bi</em>.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Applications of Quadratic Equations</h3>
  <p>
    Quadratic equations are used in various real-world scenarios such as:
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li>Projectile motion: modeling the height of an object over time.</li>
    <li>Area problems in geometry and optimization.</li>
    <li>Economics and finance: maximizing profit or minimizing cost.</li>
    <li>Physics: describing parabolic motion and forces.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Common Mistakes to Avoid</h3>
  <ul className="list-disc pl-5 space-y-2">
    <li>Forgetting that <strong>a</strong> must not be zero in a quadratic equation.</li>
    <li>Incorrectly applying the quadratic formula (especially signs).</li>
    <li>Misinterpreting the discriminant result.</li>
    <li>Not simplifying expressions fully when solving.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Using the Quadratic Formula Efficiently</h3>
  <p>
    Always simplify the discriminant first before applying the square root. When dealing with decimals, consider rounding only at the final step to avoid loss of precision.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Tip: Memorize the Quadratic Formula</h3>
  <p>
    Here’s a fun way to memorize the quadratic formula through rhythm:
  </p>
  <pre className="my-4">
    x = (-b ± √(b² - 4ac)) / (2a)
  </pre>
  <p>
    Try singing it to the tune of “Pop Goes the Weasel” — many students find this mnemonic helpful!
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">When to Use Which Method</h3>
  <ul className="list-disc pl-5 space-y-2">
    <li>Use <strong>factoring</strong> when the equation is simple and easily factorable.</li>
    <li>Use <strong>completing the square</strong> for derivations or when needed for vertex form.</li>
    <li>Use the <strong>quadratic formula</strong> for any quadratic — it's always applicable.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Practice Problem</h3>
  <p>Solve the equation: <strong>2x² - 4x - 6 = 0</strong></p>
  <p>
    Step 1: Identify coefficients: a = 2, b = -4, c = -6
  </p>
  <p>
    Step 2: Compute discriminant: Δ = (-4)² - 4×2×(-6) = 16 + 48 = 64
  </p>
  <p>
    Step 3: Apply quadratic formula:
  </p>
  <pre className="my-4">x = (4 ± √64) / (2×2) = (4 ± 8)/4</pre>
  <p>So, x = 3 or x = -1</p>

  <h3 className="text-lg font-medium mt-6 mb-2">Summary</h3>
  <p>
    Quadratic equations are fundamental in algebra and appear across science, engineering, and economics. Mastery of various solving techniques — factoring, completing the square, and using the quadratic formula — empowers learners to approach a wide range of problems. Recognizing the form of the equation and the nature of its roots is essential for deeper mathematical understanding and real-world application.
  </p>
  <h3 className="text-lg font-medium mb-2">Applications in Physics</h3>
  <p>
    Quadratic equations are crucial in many physical phenomena, especially in kinematics. For example, when analyzing the motion of an object under gravity, the height \(h\) of the object at any time \(t\) is given by a quadratic equation:
  </p>
  <pre className="my-4">h(t) = -16t² + v₀t + h₀</pre>
  <p>
    Where:
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>-16t²</strong>: The acceleration due to gravity (in feet per second squared).</li>
    <li><strong>v₀</strong>: The initial velocity of the object (in feet per second).</li>
    <li><strong>h₀</strong>: The initial height from which the object is thrown (in feet).</li>
  </ul>
  <p>
    By solving such quadratic equations, we can determine when the object will hit the ground (i.e., when \(h(t) = 0\)).
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Applications in Economics</h3>
  <p>
    Quadratic equations also play a role in economics, especially when maximizing or minimizing functions. For example, the profit function of a business might take the form of a quadratic equation:
  </p>
  <pre className="my-4">P(x) = ax² + bx + c</pre>
  <p>
    Where:
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>a</strong>: The coefficient representing the diminishing returns.</li>
    <li><strong>b</strong>: The coefficient related to the initial profitability.</li>
    <li><strong>c</strong>: The fixed costs.</li>
  </ul>
  <p>
    By finding the vertex of the parabola (using the vertex formula \(x = -\frac{"b"}{"2a"}\)), we can determine the optimal production level that maximizes profit.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Connections to Other Areas of Math</h3>
  <p>
    Quadratic equations are not just limited to algebra; they have connections to other areas of mathematics:
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Calculus:</strong> The derivative of a quadratic function provides the slope of the curve at any point, and the second derivative helps determine concavity.</li>
    <li><strong>Complex Numbers:</strong> When the discriminant (\(\Delta\)) is negative, the roots are complex conjugates, providing a bridge to the study of complex numbers.</li>
    <li><strong>Geometry:</strong> Parabolas, the graphs of quadratic functions, have important geometric properties like symmetry and the focus-directrix property.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Transformations of Quadratic Graphs</h3>
  <p>
    The graph of a quadratic equation, a parabola, can be transformed in several ways based on the values of its coefficients. Here are some key transformations:
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Vertical Shifts:</strong> The constant term \(c\) in the equation \(ax² + bx + c = 0\) causes the parabola to shift vertically. Increasing \(c\) shifts the graph upward, and decreasing \(c\) shifts it downward.</li>
    <li><strong>Horizontal Shifts:</strong> The coefficient \(b\) and the value of the vertex \(h\) in the vertex form of the equation \(y = a(x - h)² + k\) cause a horizontal shift of the graph. Positive \(h\) moves the graph to the right, and negative \(h\) shifts it to the left.</li>
    <li><strong>Vertical Stretching/Compressing:</strong> The coefficient \(a\) in the standard form \(ax² + bx + c\) affects the width of the parabola. If \(|a| {">"} 1\), the graph becomes narrower; if \(|a| {"<"} 1\), it becomes wider.</li>
    <li><strong>Reflections:</strong> If \(a\) is negative, the graph reflects over the x-axis, turning the parabola upside down.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Special Types of Quadratics</h3>
  <p>
    Some quadratic equations have special properties:
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Perfect Square Trinomials:</strong> A quadratic equation like \(x² - 6x + 9 = 0\) is a perfect square trinomial. It factors into \((x - 3)² = 0\), yielding a single solution \(x = 3\).</li>
    <li><strong>Difference of Squares:</strong> Equations of the form \(x² - 16 = 0\) can be factored as \((x - 4)(x + 4) = 0\), yielding two solutions, \(x = 4\) and \(x = -4\).</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Quadratic Inequalities</h3>
  <p>
    Quadratic equations can also be used in inequalities. Solving quadratic inequalities involves finding the values of \(x\) for which the quadratic expression is either greater than or less than zero. These solutions can be determined by:
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li>Finding the roots of the corresponding quadratic equation.</li>
    <li>Testing the sign of the quadratic expression in the intervals formed by the roots.</li>
  </ul>
  <p>
    Example: Solve the inequality \(x² - 5x + 6 {"<"} 0\).
  </p>
  <p>
    First, solve the equation \(x² - 5x + 6 = 0\) to find the roots \(x = 2\) and \(x = 3\).
  </p>
  <p>
    Next, test the sign of the quadratic expression in the intervals \( (-\infty, 2) \), \( (2, 3) \), and \( (3, \infty) \). The solution is \( 2 {"<"} x {"<"} 3 \).
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">The Role of Quadratic Functions in Real-World Data</h3>
  <p>
    Quadratic functions are not just theoretical; they are often used to model real-world situations. Here are a few examples:
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Projectile Motion:</strong> As discussed earlier, quadratic functions are used to model the trajectory of objects under the influence of gravity.</li>
    <li><strong>Revenue and Profit Maximization:</strong> Businesses often use quadratic functions to model their revenue and profit functions, helping them determine the optimal pricing strategy.</li>
    <li><strong>Physics and Engineering:</strong> Quadratic equations describe the relationship between various quantities in physical systems, such as acceleration, velocity, and time.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Historical Significance</h3>
  <p>
    The study of quadratic equations has a rich history. The ancient Babylonians, around 2000 BCE, were the first to solve quadratic-like problems using geometric methods. However, the systematic approach we use today was developed by ancient Greek and Islamic mathematicians. The famous Indian mathematician Brahmagupta made significant contributions to solving quadratic equations, introducing the concept of negative solutions and the quadratic formula.
  </p>
  <p>
    Today, quadratic equations are foundational in algebra, calculus, physics, engineering, and many other disciplines. Understanding their properties is essential for solving a wide range of problems in mathematics and science.
  </p>
</GuidanceSection>
      </div>
    </>
  );
};
