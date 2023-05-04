import React from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { navMiddleVariants } from "../../Framer";
import { Socials } from "./Socials";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "./Logo";
import close from "../../Assets/close.svg";

const NavBar = ({ smallScreen, setSmallScreen }) => {
  const { pathname } = useLocation();
  return (
    <motion.nav className="flex space-between ">
      <Logo />
      <motion.div
        className="nav-middle flex space-between"
        variants={navMiddleVariants}
        initial="initial"
        animate="animate"
      >
        <ul className="nav-links-1">
          <Link to={"/"}>
            <li className={pathname === "/" && "active"}>Start Page</li>
          </Link>
          <Link to={"about-me"}>
            <li className={pathname === "/about-me" && "active"}>About Me</li>
          </Link>
          <Link to={"projects"}>
            <li className={pathname === "/projects" && "active"}>Projects</li>
          </Link>
        </ul>
        <ul className="nav-links-2">
          <Link to={"contact"}>
            <li className={pathname === "/contact" && "active"}>Contact</li>
          </Link>
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
            <Link to="/">
              <li>Start Page</li>
            </Link>
            <Link to="about-me">
              <li>About Me</li>
            </Link>
            <Link to="projects">
              <li>projects</li>
            </Link>
            <Link to="contact">
              <li>Contact</li>
            </Link>
            <Socials className="mt-20 gap-x-4 gap-y-2" />
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default NavBar;
