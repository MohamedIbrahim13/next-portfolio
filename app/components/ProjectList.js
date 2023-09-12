import Image from "next/image";
import Link from "next/link";

export default function ProjectList({ portfolio }) {
  return (
    <div className="portfolios">
      {portfolio.projects?.map(project => {
        return (
          <div className="portfolio-item" key={project.id}>
            <div className="image">
              <Image
                src={`/${project.src}`}
                alt=""
                width="1280"
                height="250"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="hover-items">
              <h3>{project.title}</h3>
              <div className="icons">
                <Link href={`${project.github}`} className="icon">
                  <i className="fab fa-github"></i>
                </Link>
                <Link
                  href={`${project.url}`}
                  target="_blank"
                  className="icon"
                  rel="noreferrer"
                >
                  <i className="fas fa-globe"></i>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
