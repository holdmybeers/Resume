// layout.tsx
import 'globals.css';
import { TopNavBar } from 'components/TopNavBar';
import { Analytics } from '@vercel/analytics/react';
import Footer from 'components/Footer'; // Note: Import without curly braces for default exports

export const metadata = {
  title: 'ResumeHQ - Online Resume Builder',
  description: 'Buat Resume Standard ATS GRATIS! Tes Screening Resume Online GRATIS!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteUrl = 'https://resume.lokerhq.com';
  const imageUrl = `${siteUrl}/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhq.28c06242.png&w=1080&q=75`;

  return (
    <html lang="en-id">
      <head>
      <script
        defer
        data-domain="resume.lokerhq.com"
        src="https://analytics.istock.id/js/script.js"
      ></script>

      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={imageUrl} />

      </head>
      <body>
        <TopNavBar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}


// import "globals.css";
// import PageHead from 'components/Head';
// import { TopNavBar } from "components/TopNavBar";
// import { Analytics } from "@vercel/analytics/react";
// import Footer from "components/Footer"; // Note: Import without curly braces for default exports


// export const metadata = {
//   title: "ResumeHQ - Online Resume Maker",
//   description:
//     "ResumeHQ - Buat resume online gratis gak pake ribet!",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en-id">
//       <PageHead />
//       <script defer data-domain="resume.lokerhq.com" src="https://analytics.istock.id/js/script.js"></script>
//       <body>
//         <TopNavBar />
//         {children}
//         <Analytics />
//         <Footer />
//       </body>
//     </html>
//   );
// }
