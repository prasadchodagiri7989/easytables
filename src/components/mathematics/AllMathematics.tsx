import NumberTools from "./numbers/NumberTools";
import AlgebraTools from "./algebra/AlgebraTools";
import CalculusTools from "./calculus/CalculusTools";
import ProbabilityStatisticsTools from "./probability/ProbabilityTools";
import MathSymbolsTools from "./symbols/SymbolTools";
import TrigonometryTools from "./trignometry/TrignometryTools";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


export default function AllMathematics() {
    return(
        <>
              <Breadcrumb className="mb-4">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </BreadcrumbList>
              </Breadcrumb>
            <NumberTools />
            <AlgebraTools />
            <TrigonometryTools />
            <ProbabilityStatisticsTools />
            <CalculusTools />
            <MathSymbolsTools />
        </>
    )

}