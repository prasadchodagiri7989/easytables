import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";

const howToItems = [
  { name: "How to Save Electricity", path: "/howto/save-electricity" },
  { name: "How to Save Energy", path: "/howto/save-energy" },
];

const HowTo = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>How To Guides</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-bold mt-6 mb-4">How To Guides</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {howToItems.map((item) => (
          <Card key={item.path}>
            <CardContent className="p-4">
              <Link
                to={item.path}
                className="text-blue-600 hover:underline text-lg font-medium"
              >
                {item.name}
              </Link>
                    {/* Introduction and Value Section */}
      <div className="mt-10 text-gray-700 text-sm leading-relaxed space-y-4">
        <p>
          Our "How To Guides" are designed to help individuals take meaningful action through simple, step-by-step instructions. From saving energy to organizing
          your workspace, each guide is practical, clear, and built for real-world application.
        </p>
        <p>
          Whether you're a student, professional, or just someone looking to simplify your life, our guides cover diverse topics that contribute to daily efficiency,
          better habits, and smarter living.
        </p>
        <p>
          In an age of information overload, these guides offer clarity. Our goal is to help you accomplish tasks with confidence—whether it's troubleshooting a
          device, learning a command-line trick, or building better financial habits.
        </p>
      </div>

      {/* More How-To Items */}
      <h2 className="text-2xl font-bold mt-10 mb-4">More Popular Guides</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <Link to="/howto/fix-slow-computer" className="text-blue-600 hover:underline text-lg font-medium">
              How to Fix a Slow Computer
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <Link to="/howto/organize-workspace" className="text-blue-600 hover:underline text-lg font-medium">
              How to Organize Your Workspace
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <Link to="/howto/start-budgeting" className="text-blue-600 hover:underline text-lg font-medium">
              How to Start Budgeting Your Finances
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <Link to="/howto/backup-data" className="text-blue-600 hover:underline text-lg font-medium">
              How to Back Up Your Data Safely
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <Link to="/howto/set-goals" className="text-blue-600 hover:underline text-lg font-medium">
              How to Set and Achieve Personal Goals
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <Link to="/howto/speed-up-internet" className="text-blue-600 hover:underline text-lg font-medium">
              How to Speed Up Your Internet Connection
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Thematic Guide Sections */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Browse by Category</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Home & Lifestyle</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
            <li><Link to="/howto/reduce-waste" className="text-blue-600 hover:underline">How to Reduce Waste at Home</Link></li>
            <li><Link to="/howto/clean-faster" className="text-blue-600 hover:underline">How to Clean More Efficiently</Link></li>
            <li><Link to="/howto/organize-kitchen" className="text-blue-600 hover:underline">How to Organize Your Kitchen</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Technology</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
            <li><Link to="/howto/set-up-vpn" className="text-blue-600 hover:underline">How to Set Up a VPN</Link></li>
            <li><Link to="/howto/use-cloud-storage" className="text-blue-600 hover:underline">How to Use Cloud Storage</Link></li>
            <li><Link to="/howto/remove-malware" className="text-blue-600 hover:underline">How to Remove Malware</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Productivity</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
            <li><Link to="/howto/prioritize-tasks" className="text-blue-600 hover:underline">How to Prioritize Tasks</Link></li>
            <li><Link to="/howto/focus-better" className="text-blue-600 hover:underline">How to Improve Focus</Link></li>
            <li><Link to="/howto/use-to-do-lists" className="text-blue-600 hover:underline">How to Use To-Do Lists Effectively</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Finance</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
            <li><Link to="/howto/save-money" className="text-blue-600 hover:underline">How to Save Money Consistently</Link></li>
            <li><Link to="/howto/cut-expenses" className="text-blue-600 hover:underline">How to Cut Monthly Expenses</Link></li>
            <li><Link to="/howto/track-spending" className="text-blue-600 hover:underline">How to Track Your Spending</Link></li>
          </ul>
        </div>
      </div>

      {/* Final Encouragement Section */}
      <div className="mt-10 text-gray-700 text-sm leading-relaxed space-y-4">
        <p>
          Mastering practical skills doesn’t have to be overwhelming. With clear, step-by-step guidance, you can tackle everyday challenges with ease. These how-to
          guides are crafted with real-world needs in mind and are constantly updated to reflect the latest tools, methods, and best practices.
        </p>
        <p>
          Be sure to bookmark this section and check back often—we’re always adding new tutorials to help you live smarter, save time, and gain confidence in
          everyday tasks.
        </p>
      </div>

            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HowTo;
