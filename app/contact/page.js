import Form from "../components/Form";

export const metadata = {
  title: "mohamedibrahim | Contact Mohamed",
  description:
    "If you are interested in hiring a full-stack web developer, don't hesitate and send me at once. The website is available 24/7.",
  openGraph: {
    title: "mohamedibrahim | Contact Mohamed",
    description:
      "If you are interested in hiring a full-stack web developer, don't hesitate and send me at once. The website is available 24/7.",
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

export default async function Contact() {
  const { main, resume } = await getData();
  return <Form main={main} resume={resume} />;
}
