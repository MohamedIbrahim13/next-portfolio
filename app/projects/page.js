import { Suspense } from "react";
import ProjectList from "../components/ProjectList";

export const metadata = {
  title: "mohamedibrahim | Projects",
  description:
    "This page shows the different apps which made with different skills & efforts ant time dedicated to frontend development and good knowledge of backend develpment.",
  openGraph: {
    title: "mohamedibrahim | Projects",
    description:
      "This page shows the different apps which made with different skills & efforts ant time dedicated to frontend development and good knowledge of backend develpment.",
  },
};

async function getData() {
  const res = await fetch("https://api.npoint.io/2e8b874cb210e4d800bc", {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function Projects() {
  const { portfolio } = await getData();
  return (
    <main>
      <section className="section sec3" id="portfolio">
        <div className="main-title">
          <h2>
            My <span>Web Projects</span>
            <span className="bg-text">My Work</span>
          </h2>
        </div>
        <p className="port-text">
          Here is some of my work that I&lsquo;ve done for educating myself.
        </p>
        <Suspense
          fallback={<p style={{ textAlign: "center" }}>Loading apps...</p>}
        >
          <ProjectList portfolio={portfolio} />
        </Suspense>
      </section>
    </main>
  );
}
