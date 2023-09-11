import ThemeBtn from "./components/ThemeBtn";
import ThemeProvider from "../lib/ThemeContext";
import "./globals.css";
import { Poppins } from "next/font/google";
import Controllers from "./components/Controllers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://mohamedibrahim13.vercel.app"),
  generator: "mohamedibrahim",
  applicationName: "mohamedibrahim",
  keywords: [
    "frontend",
    "backend",
    "frontend developer",
    "javascript developer",
    "backend developer",
    "web developer",
    "mern stack developer",
    "react developer",
    "reactjs",
    "developer",
    "nextjs",
    "node developer",
    "nodejs",
  ],
  authors: [
    {
      name: "Mohamed Ibrahim Mohamed Yossef",
      url: "https://mohamedibrahim13.vercel.app/",
    },
  ],
  twitter: {
    card: "summary_large_image",
    title: "mohamedibrahim",
    description:
      "A unique website made to show how JavaScript or the programming in general, was a turning point in my life to become a frontend web developer.",
    creator: "@mohamedibrahim13",
  },
  creator: "Mohamed Ibrahim Mohamed Yossef",
  publisher: "Mohamed Ibrahim Mohamed Yossef",
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  appleWebApp: {
    statusBarStyle: "#0A36AF",
  },
  category: "technology",
  themeColor: "#0A36AF",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>
          {children}
          <Controllers />
          <ThemeBtn />
        </ThemeProvider>
      </body>
    </html>
  );
}
