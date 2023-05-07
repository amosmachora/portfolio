import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { pages } from "../App";
import "./ReadMore.css";

export function ReadMore({
  className,
  text,
  link,
}: {
  className?: string;
  text: string;
  link: (typeof pages)[number];
}) {
  return (
    <Link to={`/${link}`}>
      <div
        className={`flex w-[90%] sm:w-[70%] link pb-5 border-b border-orange hover:border-white mt-7 justify-between cursor-pointer duration-300 ease-in-out transition-all font-semibold ${
          className ? className : "text-white"
        }`}
      >
        <p className="read-more capitalize-first">{text}</p>
        <FontAwesomeIcon icon={faCaretRight} />
      </div>
    </Link>
  );
}
