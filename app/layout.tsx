import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import { GlobalDataProvider } from "@/hooks/useGlobalData";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Dancing_Script, Public_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amos Machora",
  description: "Welcome to my website 🎂",
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
        <GlobalDataProvider>
          <NavBar />
          {children}
          <Footer />
        </GlobalDataProvider>
        <div
          className={`${dancingScript.className} designed-with-love flex align-center font-semibold`}
        >
          Designed with
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={"/heart.png"} alt="heart" className="heart" />
        </div>
      </body>
    </html>
  );
}
