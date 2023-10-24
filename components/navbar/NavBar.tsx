"use client";

import { assets } from "@/assets/assets";
import { navMiddleVariants } from "@/framer/Framer";
import { pages } from "@/util/utils";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import "./NavBar.css";
import { Socials } from "./Socials";

const NavBar = () => {
  const pathname = usePathname();
  const [smallScreen, setSmallScreen] = useState(false);

  return (
    <nav className="flex space-between items-start">
      <Logo />
      <div className="nav-middle hidden sm:flex space-between">
        <ul className="nav-links-1">
          {pages.slice(0, 1).map((page, i) => (
            <Link href={page === "start-page" ? "/" : `/${page}`} key={i}>
              <li
                className={`first-letter:uppercase ${
                  pathname === "/" && "active"
                }`}
              >
                {page.split("-").join(" ")}
              </li>
            </Link>
          ))}
          {pages.slice(1, 3).map((page, i) => (
            <Link href={page === "start-page" ? "/" : `/${page}`} key={i}>
              <li
                className={`first-letter:uppercase ${
                  pathname.includes(page) && "active"
                }`}
              >
                {page.split("-").join(" ")}
              </li>
            </Link>
          ))}
        </ul>
        <ul className="nav-links-2">
          {pages.slice(3, 4).map((page, i) => (
            <Link href={page === "start-page" ? "/" : `/${page}`} key={i}>
              <li
                className={`first-letter:uppercase ${
                  pathname.includes(page) && "active"
                }`}
              >
                {page.split("-").join(" ")}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Socials className="hidden sm:flex" />
      <FontAwesomeIcon
        icon={faBars}
        onClick={() => setSmallScreen(true)}
        className="bars h-4 overflow-visible cursor block md:hidden"
      />
      <AnimatePresence>
        {smallScreen && (
          <motion.div
            className="small-screen fixed top-0 right-0 h-screen w-screen z-50"
            initial={{
              x: 1000,
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: 1000,
            }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <div
              className="bg-white p-3 absolute right-3 top-3"
              onClick={() => setSmallScreen(false)}
            >
              <Image src={assets.close} alt="Close" className="w-7 h-7" />
            </div>
            <div className="text-center list-none absolute top-1/4 right-1/2 translate-x-1/2 w-3/4">
              {pages.map((page, i) => (
                <Link
                  href={page === "start-page" ? "/" : `/${page}`}
                  onClick={() => {
                    setSmallScreen(false);
                    window.scroll({
                      behavior: "smooth",
                      left: 0,
                      top: 0,
                    });
                  }}
                  key={i}
                >
                  <li className="first-letter:capitalize mb-3">
                    {page.replace("-", " ")}
                  </li>
                </Link>
              ))}
              <Socials className="mt-20 gap-x-4 gap-y-2" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
