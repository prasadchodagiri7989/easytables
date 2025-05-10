import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { seoData } from "@/data/seoData_from_routes";

// Type for SEO metadata
interface SeoMeta {
  title: string | ((slug: string) => string);
  description: string | ((slug: string) => string);
}

const Seo: React.FC = () => {
  const { pathname } = useLocation();

  let meta: SeoMeta | undefined = undefined;

  // First, check for exact path match
  if (seoData[pathname]) {
    meta = seoData[pathname];
  } else {
    // Then, check for dynamic path match (e.g., /blog/:slug)
    const dynamicEntry = Object.keys(seoData).find((pattern) => {
      if (!pattern.includes(":slug")) return false;

      const regex = new RegExp(
        "^" + pattern.replace(":slug", "([\\w-]+)") + "$"
      );
      return regex.test(pathname);
    });

    if (dynamicEntry) {
      const slug = pathname.split("/").pop() || "";
      const dynamicMeta = seoData[dynamicEntry];

      meta = {
        title:
          typeof dynamicMeta.title === "function"
            ? dynamicMeta.title(slug)
            : dynamicMeta.title,
        description:
          typeof dynamicMeta.description === "function"
            ? dynamicMeta.description(slug)
            : dynamicMeta.description,
      };
    }
  }

  // Fallback title and description
  const title = typeof meta?.title === "string" ? meta.title : "My Site";
  const description =
    typeof meta?.description === "string"
      ? meta.description
      : "Default description for unmatched routes.";

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
