import { Suspense } from "react";
import Skills from "../components/Skills";

export const metadata = {
  title: "mohamedibrahim | Skills & Experience",
  description:
    "This page shows the educational background, the skills, the certificates, the experience in the field of web development, and building a clean code.",
  openGraph: {
    title: "mohamedibrahim | Skills & Experience",
    description:
      "This page shows the educational background, the skills, the certificates, the experience in the field of web development, and building a clean code.",
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

export default async function Porfolio() {
  const { resume } = await getData();
  return (
    <main>
      <section className="section sec2 about" id="about">
        <div className="main-title">
          <h2>
            My<span>Skills & Experience</span>
            <span className="bg-text">stats</span>
          </h2>
        </div>
        <div className="about-container">
          <div className="right-about">
            <div className="about-item">
              <div className="abt-text">
                <p className="large-text">150+</p>
                <p className="small-text">
                  Projects <br /> Completed
                </p>
              </div>
            </div>
            <div className="about-item">
              <div className="abt-text">
                <p className="large-text">0</p>
                <p className="small-text">
                  Years of <br /> experience
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-stats">
          <h4 className="stat-title">My Skills</h4>
          <Suspense
            fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
          >
            <Skills skills={resume.skills} />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
