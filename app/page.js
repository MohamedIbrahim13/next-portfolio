import Image from "next/image";
import ProfilePic from "../public/assets/profile.jpg";
import { getData } from "@/lib/utils";
import Link from "next/link";

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

export default async function Home() {
  const { main } = await getData();
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
            Hi, I&lsquo;m <span>{main.firstname}. </span>A {main.jobdescription}
            .
          </h1>
          <p>
            I have a passion for Web Development, I love to create beautiful and
            functional websites.
          </p>
          <div className="btn-con">
            <Link
              href={`${main.pdfversion}`}
              download={`${main.pdfversion}`}
              className="main-btn"
            >
              <span className="btn-text">Download CV</span>
              <span className="btn-icon">
                <i className="fas fa-download"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
