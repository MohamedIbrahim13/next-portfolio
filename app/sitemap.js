// import { headers } from "next/headers";

const URL = "https://mohamedibrahim13.vercel.app";

export default function sitemap() {
  //   const headersList = headers();
  //   const domain =
  //     headersList
  //       .get("host")
  //       ?.replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) ??
  //     "vercel.pub";
  const routes = [
    "",
    "/skills-experience",
    "/projects",
    "/blog",
    "/contact",
  ].map(route => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
  }));

  return [...routes];
}
