import React from "react";
import "./NavBar.css";
import Hamburger from "../../Assets/hamburger.svg";
import Close from "../../Assets/close.svg";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  svgVariants,
  pathVariants,
  navMiddleVariants,
  socialsVariants,
} from "../../Framer";

const NavBar = ({ smallScreen, setSmallScreen }) => {
  const { pathname } = useLocation();
  return (
    <motion.nav className="flex space-between ">
      <motion.svg
        className="logo"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="243.000000pt"
        height="234.000000pt"
        viewBox="0 0 243.000000 234.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        {" "}
        <g
          transform="translate(0.000000,234.000000) scale(0.100000,-0.100000)"
          fill="#fff"
          stroke="none"
        >
          {" "}
          <motion.path
            variants={pathVariants}
            d="M883 2239 c-12 -4 -26 -16 -31 -26 -6 -10 -12 -198 -15 -433 -5 -342 -3 -436 10 -533 15 -114 15 -119 -3 -132 -29 -20 -51 -71 -74 -170 -12 -49 -25 -101 -30 -115 -5 -14 -11 -38 -13 -55 -3 -16 -28 -124 -57 -240 -83 -338 -91 -383 -76 -420 10 -23 22 -34 42 -38 16 -3 168 -4 337 -3 330 3 326 2 327 53 0 36 -30 44 -142 38 -272 -13 -470 -16 -483 -5 -10 9 -9 25 5 88 38 164 92 391 115 487 14 55 27 111 29 125 6 40 37 154 46 169 7 13 18 -15 25 -64 2 -11 11 -60 20 -110 10 -49 19 -101 22 -115 2 -14 13 -65 25 -115 11 -49 24 -108 29 -130 18 -85 25 -100 52 -109 43 -15 95 14 99 56 3 30 -5 120 -17 193 -5 35 -13 114 -20 208 -3 38 -7 72 -9 75 -2 4 -7 58 -10 121 -4 62 -8 116 -10 120 -2 3 -7 49 -11 101 -7 92 -9 113 -19 210 -6 60 -18 188 -20 225 -1 17 -5 44 -9 60 -3 17 -9 75 -12 130 -4 55 -8 102 -10 105 -1 3 -6 55 -10 115 -4 69 -12 115 -20 124 -16 17 -53 21 -82 10z m71 -17 c2 -4 12 -84 20 -177 9 -94 18 -190 21 -215 5 -52 42 -445 50 -535 3 -33 7 -78 10 -100 2 -22 7 -69 10 -105 3 -36 8 -85 10 -110 3 -25 7 -67 9 -95 21 -215 33 -332 42 -411 6 -46 4 -53 -14 -63 -33 -17 -80 -14 -86 7 -12 41 -57 251 -91 422 -20 102 -38 197 -41 213 -7 32 -19 35 -34 7 -16 -30 -211 -870 -208 -894 2 -14 13 -22 33 -26 17 -3 155 -2 309 3 291 9 313 6 290 -31 -10 -15 -41 -17 -329 -20 -285 -2 -320 -1 -337 14 -10 10 -18 27 -18 40 0 39 203 882 222 919 5 11 21 29 34 41 25 20 25 21 12 95 -19 109 -16 1008 3 1020 17 11 76 12 83 1z"
          />{" "}
          <motion.path
            variants={pathVariants}
            d="M951 1665 c-1 -17 3 -66 8 -110 5 -44 12 -115 15 -157 10 -135 19 -232 22 -248 1 -8 3 -27 3 -42 1 -16 6 -28 12 -28 9 0 8 47 -6 170 -2 19 -7 71 -11 115 -3 44 -8 87 -9 96 -2 8 -6 55 -10 105 -8 94 -23 157 -24 99z"
          />{" "}
          <motion.path
            variants={pathVariants}
            d="M1011 1020 c1 -29 16 -80 19 -65 1 6 1 24 0 40 -2 37 -20 60 -19 25z"
          />{" "}
          <motion.path
            variants={pathVariants}
            d="M1807 274 c-2 -3 -22 -5 -43 -6 -21 0 -43 -4 -49 -8 -5 -4 -22 -10 -36 -13 -57 -14 -115 -88 -107 -139 l3 -23 240 0 240 0 3 39 c3 34 -1 43 -40 80 -27 25 -61 46 -88 53 -51 15 -116 23 -123 17z m135 -39 c57 -20 111 -76 106 -111 l-3 -25 -230 0 -230 0 0 23 c0 22 4 23 95 28 l94 5 -3 54 -3 54 64 -6 c35 -3 84 -13 110 -22z m-192 -25 l0 -40 -76 0 c-70 0 -75 1 -63 17 15 17 106 63 127 63 7 0 12 -15 12 -40z"
          />{" "}
        </g>{" "}
      </motion.svg>
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
          <Link to={"portfolio"}>
            <li className={pathname === "/portfolio" && "active"}>Portfolio</li>
          </Link>
        </ul>
        <ul className="nav-links-2">
          <Link to={"contact"}>
            <li className={pathname === "/contact" && "active"}>Contact</li>
          </Link>
        </ul>
      </motion.div>
      <Socials />
      <img
        src={Hamburger}
        alt="Hamburger"
        className="hamburger cursor"
        onClick={() => setSmallScreen(true)}
      />
      {smallScreen && (
        <div className="small-screen">
          <div className="close" onClick={() => setSmallScreen(false)}>
            <img src={Close} alt="Close" />
          </div>
          <div className="small-screen-links">
            <Link to="/">
              <li>Start Page</li>
            </Link>
            <Link to="about-me">
              <li>About Me</li>
            </Link>
            <Link to="portfolio">
              <li>Portfolio</li>
            </Link>
            <Link to="contact">
              <li>Contact</li>
            </Link>
            <Socials context="small" />
          </div>
        </div>
      )}
    </motion.nav>
  );
};

function Socials({ context }) {
  return (
    <motion.div
      className={`socials flex space-between ${context}`}
      variants={socialsVariants}
      initial="initial"
      animate="animate"
    >
      <a
        href="https://www.codewars.com/users/amosmachora"
        target="_blank"
        rel="noopener noreferrer"
        className="codewars"
      >
        C
      </a>
      <a
        href="https://www.frontendmentor.io/profile/AmohPrince"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          height="2500"
          viewBox="136.85 110.11 225.33 222.9"
          width="1961"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m254.2 123v155.67" fill="#ffffff" />
          <path
            d="m244.2 123v155.67c0 12.87 20 12.89 20 0v-155.67c0-12.87-20-12.89-20 0zm112.54 44.79c-20 9.33-40 18.67-60 28-1.67.78-1.6 3.52 0 4.32 19.33 9.67 38.67 19.33 58 29 2.87 1.43 5.41-2.88 2.52-4.32-19.33-9.67-38.67-19.33-58-29v4.32c20-9.33 40-18.67 60-28 2.92-1.36.38-5.67-2.52-4.32z"
            fill="#ffffff"
          />
          <path
            d="m138.18 223.14c11.34 53.74 54.41 96.35 108.32 107.04 9.04 1.79 18.28 2.8 27.5 2.82 6.43.01 6.44-9.99 0-10-50.08-.06-96.35-29.49-117.24-75.11-4.01-8.75-6.96-18-8.94-27.41-1.33-6.29-10.97-3.63-9.64 2.66z"
            fill="#ffffff"
          />
        </svg>
      </a>
      <a
        href="https://github.com/amosmachora"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="256px"
          height="250px"
          viewBox="0 0 256 250"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
        >
          <g>
            <path
              d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z"
              fill="#ffffff"
            ></path>
          </g>
        </svg>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/amos-machora"
        rel="noopener noreferrer"
      >
        <svg
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        >
          <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z" />
        </svg>
      </a>
      <a
        target="_blank"
        href="https://stackoverflow.com/users/16018684/amos-machora"
        rel="noopener noreferrer"
      >
        <svg
          viewBox="0 0 169.61 200"
          xmlns="http://www.w3.org/2000/svg"
          width="2120"
          height="2500"
        >
          <path
            d="M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z"
            fill="#ffffff"
          />
          <path
            d="M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z"
            fill="#ffffff"
          />
        </svg>
      </a>
    </motion.div>
  );
}

export default NavBar;
