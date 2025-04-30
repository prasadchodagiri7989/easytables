import { useParams } from 'react-router-dom';
import { conversions } from './conversions'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const ConversionPage: React.FC = () => {
  const { slug } = useParams();
  const conversion = conversions.find(c => c.slug === slug);

  if (!conversion) {
    return <div className="p-6 text-red-600 text-lg">Conversion not found.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{conversion.title}</h1>
      <p className="text-gray-700 mb-6">{conversion.description}</p>

      {conversion.formulas.map((formula, index) => (
        <div key={index} className="bg-gray-100 p-4 mb-4 rounded shadow-sm dark:bg-transparent border">
          <h2 className="font-semibold text-lg">{formula.type}</h2>
          <p><strong>Formula:</strong> {formula.expression}</p>
          <p><strong>Example:</strong> {formula.example}</p>
        </div>
      ))}
    </div>
  );
};

export default ConversionPage;
