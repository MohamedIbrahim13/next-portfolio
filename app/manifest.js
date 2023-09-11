export default function manifest() {
  return {
    short_name: "mohamedibrahim",
    name: "mohamedibrahim",
    orientation: "portrait-primary",
    description:
      "A unique website made to show how JavaScript or the programming in general, was a turning point in my life to become a frontend web developer.",
    scope: "/",
    icons: [
      {
        src: "/icons/favicon-16x16",
        sizes: "16x16",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    start_url: "/",
    display: "standalone",
    theme_color: "#0A36AF",
    background_color: "#ffffff",
    shortcuts: [
      {
        name: "mohamedibrahim | Skills & Experience",
        short_name: "SkillsAndExperience",
        url: "/skills-experience",
        description:
          "This page shows the educational background, the skills, the certificates, the experience in the field of web development, and building a clean code.",
      },
      {
        name: "mohamedibrahim | Projects",
        short_name: "Projects",
        url: "/projects",
        description:
          "This page shows the different apps which made with different skills & efforts ant time dedicated to frontend development and good knowledge of backend develpment.",
      },
      {
        name: "mohamedibrahim | Blog",
        short_name: "Blog",
        url: "/blog",
        description:
          "This page shares many rising articles about JavaScript, Frontend Development, Backend Development and helps developers to get jobs in Software Development field.",
      },
      {
        name: "mohamedibrahim | Contact Mohamed",
        short_name: "ContactMohamed",
        url: "/contact",
        description:
          "If you are interested in hiring a full-stack web developer, don't hesitate and send me at once. The website is available 24/7.",
      },
    ],
    splash_pages: null,
    display_override: ["window-controls-overlay"],
  };
}
