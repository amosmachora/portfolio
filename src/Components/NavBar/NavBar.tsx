import React from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { navMiddleVariants } from "../../Framer";
import { Socials } from "./Socials";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "./Logo";
import { pages } from "../../App";
import { assets } from "../../Assets/assets";

const { close } = assets;

const NavBar = ({
  smallScreen,
  setSmallScreen,
}: {
  smallScreen: boolean;
  setSmallScreen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { pathname } = useLocation();
  return (
    <motion.nav className="flex space-between items-start">
      <Logo />
      <motion.div
        className="nav-middle flex space-between"
        variants={navMiddleVariants}
        initial="initial"
        animate="animate"
      >
        <ul className="nav-links-1">
          {pages.slice(0, 1).map((page) => (
            <Link to={page === "start-page" ? "/" : page}>
              <li
                className={`first-letter:uppercase ${
                  pathname === "/" && "active"
                }`}
              >
                {page.split("-").join(" ")}
              </li>
            </Link>
          ))}
          {pages.slice(1, 3).map((page) => (
            <Link to={page === "start-page" ? "/" : page}>
              <li
                className={`first-letter:uppercase ${
                  pathname === "/" + page && "active"
                }`}
              >
                {page.split("-").join(" ")}
              </li>
            </Link>
          ))}
        </ul>
        <ul className="nav-links-2">
          {pages.slice(3, 4).map((page) => (
            <Link to={page === "start-page" ? "/" : page}>
              <li
                className={`first-letter:uppercase ${
                  pathname === "/" + page && "active"
                }`}
              >
                {page.split("-").join(" ")}
              </li>
            </Link>
          ))}
        </ul>
      </motion.div>
      <Socials className="hidden sm:flex" />
      <FontAwesomeIcon
        icon={faBars}
        onClick={() => setSmallScreen(true)}
        className="hamburger cursor"
      />
      {smallScreen && (
        <div className="small-screen fixed top-0 right-0 h-screen w-screen z-50">
          <div
            className="bg-white p-3 absolute right-3 top-3"
            onClick={() => setSmallScreen(false)}
          >
            <img src={close} alt="Close" className="w-7 h-7" />
          </div>
          <div className="text-center list-none absolute top-1/4 right-1/2 translate-x-1/2">
            {pages.map((page) => (
              <Link
                to={page === "start-page" ? "/" : page}
                onClick={() => {
                  setSmallScreen(false);
                  window.scroll({
                    behavior: "smooth",
                    left: 0,
                    top: 0,
                  });
                }}
              >
                <li>{page}</li>
              </Link>
            ))}
            <Socials className="mt-20 gap-x-4 gap-y-2" />
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default NavBar;
