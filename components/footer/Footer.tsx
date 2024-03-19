"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { ReadMore } from "../ReadMore/ReadMore";
import "./Footer.css";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer>
      <div className="flex footer-content space-between">
        <div className="footer-left">
          <h3>Values</h3>
          <p className="bluish capitalize">
            Self-Discipline <br /> Reliability <br /> A+ Communication skills
          </p>
        </div>
        <div className="flex footer-content-right">
          <div>
            <h2>
              Available <br /> for projects
            </h2>
            <p className="bluish">
              I have been writing and managing projects for a few years now all
              over the globe, i have over 50+ satisfied clients.
            </p>
            <ReadMore
              text={pathname === "/contact" ? "Home" : "Contact Now"}
              link={pathname === "/contact" ? "" : "contact"}
            />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src="https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Desktop set up"
            className="desktop-setup"
            width={1260}
            height={750}
          />
        </div>
      </div>
      <div className="footer-bottom flex space-between">
        <p className="bluish"> © 2022 Amos. All rights reversed</p>
        <div className="flex">
          <a href="mailto:amosmachora13@gmail.com">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="48.000000pt"
              height="48.000000pt"
              viewBox="0 0 48.000000 48.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <metadata>
                Created by potrace 1.16, written by Peter Selinger 2001-2019
              </metadata>
              <g
                transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
                fill="#fff"
                stroke="none"
              >
                <path
                  d="M56 384 c-23 -23 -23 -265 0 -288 23 -24 345 -24 368 0 23 23 23 265
0 288 -23 24 -345 24 -368 0z m322 -20 c42 -12 24 -38 -58 -82 l-80 -43 -80
43 c-79 43 -101 71 -62 81 26 7 254 8 280 1z m-136 -164 c9 0 51 19 93 41 l77
42 -3 -76 c-3 -42 -8 -79 -12 -84 -11 -10 -303 -10 -314 0 -4 5 -9 42 -11 84
l-4 75 79 -41 c43 -23 86 -41 95 -41z"
                />
              </g>
            </svg>
          </a>
          <a href="https://github.com/AmohPrince" className="git">
            git
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
