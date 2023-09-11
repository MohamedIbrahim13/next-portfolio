export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://mohamedibrahim13.vercel.app/sitemap.xml",
  };
}
