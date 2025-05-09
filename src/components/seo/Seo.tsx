import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { seoData } from "@/data/seoData";

// Type for dynamic SEO meta information
interface SeoMeta {
  title: string | ((slug: string) => string);
  description: string | ((slug: string) => string);
}

const Seo: React.FC = () => {
  const { pathname } = useLocation();

  // Handle dynamic routes like /blog/:slug
  const dynamicSeo = Object.keys(seoData).find((path) =>
    pathname.match(new RegExp(path.replace(":slug", "([\\w-]+)")))
  );

  // Get the SEO meta for the current page
  const meta = dynamicSeo
    ? {
        title:
          typeof seoData[dynamicSeo].title === "function"
            ? seoData[dynamicSeo].title(pathname.split("/")[2])
            : seoData[dynamicSeo].title,
        description:
          typeof seoData[dynamicSeo].description === "function"
            ? seoData[dynamicSeo].description(pathname.split("/")[2])
            : seoData[dynamicSeo].description,
      }
    : seoData[pathname] || {
        title: "My Site",
        description: "Default description for unmatched routes.",
      };

  // Ensure the title and description are strings before passing them to Helmet
  const title = typeof meta.title === "string" ? meta.title : "";
  const description = typeof meta.description === "string" ? meta.description : "";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <link rel="canonical" href={`https://yourdomain.com${pathname}`} />
    </Helmet>
  );
};

export default Seo;
