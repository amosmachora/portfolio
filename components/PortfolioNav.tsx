"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const PortfolioNav = () => {
  useEffect(() => {
    document.title = "Portfolio | Amos Machora";
  }, []);

  const pathname = usePathname();
  const currentPage = pathname.split("/")[pathname.split("/").length - 1];

  return (
    <div className="flex justify-between md:w-3/4 mx-auto my-20 sm:mt-5 mb-5 gap-x-7">
      <Link
        href="/portfolio/web-applications"
        className={`cursor-pointer pb-2 w-max ${
          (currentPage === "portfolio" || currentPage === "web-applications") &&
          "border-b-2 border-orange"
        }`}
      >
        Web apps
      </Link>
      <Link
        href="/portfolio/frontend-mentor"
        className={`cursor-pointer pb-2 w-max ${
          currentPage === "frontend-mentor" && "border-b-2 border-orange"
        }`}
      >
        Single Page Applications
      </Link>
      <Link
        href="/portfolio/websites"
        className={`cursor-pointer pb-2 w-max ${
          currentPage === "websites" && "border-b-2 border-orange"
        }`}
      >
        Landing pages
      </Link>
      <Link
        href="/portfolio/youtube-watchalongs"
        className={`cursor-pointer pb-2 w-max ${
          currentPage === "youtube-watchalongs" && "border-b-2 border-orange"
        }`}
      >
        Youtube Watchalongs
      </Link>
    </div>
  );
};
