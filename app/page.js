import Image from "next/image";
import ProfilePic from "../public/assets/profile.jpg";

export const metadata = {
  title: "mohamedibrahim",
  description:
    "A unique website made to show how JavaScript or the programming in general, was a turning point in my life to become a frontend web developer.",
  openGraph: {
    title: "mohamedibrahim",
    description:
      "A unique website made to show how JavaScript or the programming in general, was a turning point in my life to become a frontend web developer.",
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

export default async function Home() {
  const info = await getData();
  //console.log(info.profilepic);
  return (
    <header className="section sec1 header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <Image src={ProfilePic} alt="mohamedibrahim" priority />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hi, I&lsquo;m <span>{info?.main.firstname}. </span>A{" "}
            {info?.main.jobdescription}.
          </h1>
          <p>
            I have a passion for Web Development, I love to create beautiful and
            functional websites.
          </p>
          <div className="btn-con">
            <a
              href={info?.main.pdfversion}
              download={info?.main.pdfversion}
              className="main-btn"
            >
              <span className="btn-text">Download CV</span>
              <span className="btn-icon">
                <i className="fas fa-download"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
