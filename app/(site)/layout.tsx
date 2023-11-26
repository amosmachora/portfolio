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
    icon: ["/favicons/favicon.ico"],
    apple: ["/favicons/apple-touch-icon.png"],
    shortcut: ["/favicons/apple-touch-icon.png"],
  },
  manifest: "/favicons/site.webmanifest",
  twitter: {
    title: "Welcome to my personal website 🍓",
    creator: "@amos_machora",
    images: ["/me.jpg"],
    card: "summary_large_image",
  },
  openGraph: {
    title: "Amos Machora",
    description: "Welcome to my personal website 🍓",
    emails: "amosmachora13@gmail.com",
    images: ["/me.jpg"],
    url: "https://amosmachora.vercel.app/",
    type: "website",
  },
  metadataBase: new URL("https://amosmachora.vercel.app"),
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
