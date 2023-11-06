import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import { GlobalDataProvider } from "@/hooks/useGlobalData";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Dancing_Script, Public_Sans } from "next/font/google";
import Image from "next/image";
import heart from "../../public/heart.png";
import "../globals.css";

export const metadata: Metadata = {
  title: "Amos Machora",
  description: "Welcome to my personal website 🍓",
  icons: {
    icon: ["https://amosmachora.vercel.app/favicons/favicon.ico"],
    apple: ["https://amosmachora.vercel.app/favicons/apple-touch-icon.png"],
    shortcut: ["https://amosmachora.vercel.app/favicons/apple-touch-icon.png"],
  },
  manifest: "/favicons/site.webmanifest",
  twitter: {
    title: "My Personal Website",
    creator: "@amos_machora",
    images: ["https://amosmachora.vercel.app/me.jpg"],
    card: "summary_large_image",
  },
  openGraph: {
    title: "Amos Machora",
    description: "Welcome to my personal website 🍓",
    emails: "amosmachora13@gmail.com",
    images: ["https://amosmachora.vercel.app/me.jpg"],
    url: "https://amosmachora.vercel.app/",
    type: "website",
  },
};

const publicSans = Public_Sans({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathName = usePathname();

  // if (pathName.includes("studio")) {
  //   <html lang="en">
  //     <body className={publicSans.className}>{children}</body>
  //   </html>;
  // }

  return (
    <html lang="en">
      <body className={publicSans.className}>
        <GlobalDataProvider>
          <NavBar />
          {children}
          <Footer />
        </GlobalDataProvider>
        <div
          className={`${dancingScript.className} designed-with-love flex align-center font-semibold`}
        >
          Designed with
          <Image src={heart} alt="heart" className="heart" />
        </div>
      </body>
    </html>
  );
}
