import { Link } from "react-router-dom";

const gradeCalculators = [
  { label: "Grade Calculators", path: "/calculator/grade" },
  { label: "College GPA Calculator", path: "/calculator/college-gpa" },
  { label: "Final Grade Calculator", path: "/calculator/final-grade" },
  { label: "GPA Calculator", path: "/calculator/gpa" },
  { label: "Grade Calculator", path: "/calculator/grade-basic" },
  { label: "GPA Calculation", path: "/calculator/gpa-calc" },
  { label: "Grade Calculation", path: "/calculator/grade-calc" },
  { label: "GPA to Letter Grade Conversion", path: "/calculator/gpa-to-letter" },
  { label: "High School GPA Calculator", path: "/calculator/highschool-gpa" },
  { label: "Letter Grade to GPA Conversion", path: "/calculator/letter-to-gpa" },
  { label: "Test Calculator", path: "/calculator/test" }
];

export default function AllGradeCalculators() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Grade & GPA Calculators</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {gradeCalculators.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className="block bg-white hover:bg-gray-100 p-4 rounded-xl shadow-md transition duration-200 dark:bg-transparent border"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
