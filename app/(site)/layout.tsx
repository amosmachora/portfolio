import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import { GlobalDataProvider } from "@/hooks/useGlobalData";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Dancing_Script, Public_Sans } from "next/font/google";
import Image from "next/image";
import Script from "next/script";
import heart from "../../public/heart.png";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Amos Machora",
    default: "Amos Machora",
  },
  description: "Welcome to my personal website 🍓",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
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
  return (
    <html lang="en">
      <body className={publicSans.className}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-S4BGGLNFJK" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-S4BGGLNFJK');
        `}
        </Script>
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
