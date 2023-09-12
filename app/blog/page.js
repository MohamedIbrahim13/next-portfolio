import { Suspense } from "react";
import Articles from "../components/Articles";
import Jobs from "../components/Jobs";
import { getArticles, getJobs } from "@/lib/utils";

export const metadata = {
  title: "mohamedibrahim | Blog",
  description:
    "This page shares many rising articles about JavaScript, Frontend Development, Backend Development and helps developers to get jobs in Software Development field.",
  openGraph: {
    title: "mohamedibrahim | Blog",
    description:
      "This page shares many rising articles about JavaScript, Frontend Development, Backend Development and helps developers to get jobs in Software Development field.",
  },
};

export default async function Blog() {
  const [jobs, articles] = await Promise.all([getJobs(), getArticles()]);
  //console.log(articles);
  return (
    <main>
      <section className="section sec4 " id="blogs">
        <div className="blogs-content">
          <div className="main-title">
            <h2>
              My <span>Blog</span>
              <span className="bg-text">Blog</span>
            </h2>
          </div>
          <Suspense
            fallback={
              <p style={{ textAlign: "center" }}>Loading articles...</p>
            }
          >
            <Articles articles={articles} />
          </Suspense>
        </div>
        <br />
        <hr />
        <br />
        <div className="main-title">
          <h2>
            remotive<span>.io</span>
            <span className="bg-text">jobs</span>
          </h2>
        </div>
        <h4 className="stat-title">Jobs displayed are delayed by 24 hours</h4>
        <Suspense
          fallback={
            <p style={{ textAlign: "center" }}>Loading remote jobs...</p>
          }
        >
          <Jobs jobs={jobs} />
        </Suspense>
      </section>
    </main>
  );
}
