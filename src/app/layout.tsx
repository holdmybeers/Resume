import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";
import Footer from "components/Footer"; // Note: Import without curly braces for default exports


export const metadata = {
  title: "ResumeHQ - Online Resume Maker",
  description:
    "ResumeHQ - Buat resume online gratis gak pake ribet!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-id">
      <script defer data-domain="resume.lokerhq.com" src="https://analytics.istock.id/js/script.js"></script>
      <body>
        <TopNavBar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
