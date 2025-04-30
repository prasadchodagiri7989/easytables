import TextTools from "./text/TextTools";
import AllLinux from "./linux/AllLinux";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



export default function AllCode(){
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
                  <BreadcrumbPage>All Commands</BreadcrumbPage>
                </BreadcrumbList>
              </Breadcrumb>
            <AllLinux />
            <TextTools />
        </>
    )
}