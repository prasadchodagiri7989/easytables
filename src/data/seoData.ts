export interface SeoMeta {
    title: string | ((slug: string) => string);
    description: string | ((slug: string) => string);
  }
  
  export const seoData: Record<string, SeoMeta> = {
    "/": {
      title: "Home - My Site",
      description: "Welcome to the homepage of my React + Vite site.",
    },
    "/about": {
      title: "About Us - My Site",
      description: "Learn more about our team and mission.",
    },
    "/contact": {
      title: "Contact Us - My Site",
      description: "Get in touch with us for any inquiries.",
    },
    "/blog/:slug": {
      title: (slug: string) => `Blog - ${slug} - My Site`,
      description: (slug: string) => `Read the latest article on ${slug}.`,
    },
  };
  