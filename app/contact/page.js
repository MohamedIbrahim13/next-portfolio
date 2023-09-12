import { getData } from "@/lib/utils";
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

export default async function Contact() {
  const { main, resume } = await getData();
  return <Form main={main} resume={resume} />;
}
