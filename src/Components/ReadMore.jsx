import { Link } from "react-router-dom";
import "./ReadMore.css";

export function ReadMore({ className, text, link, Arrow }) {
  return (
    <Link to={`/${link}`}>
      <div
        className={`flex w-[90%] sm:w-[70%] link pb-5 border-b border-orange hover:border-white mt-7 justify-between cursor-pointer duration-300 ease-in-out transition-all font-semibold text-white ${className}`}
      >
        <p className="read-more capitalize-first">{text}</p>
        <img src={Arrow} alt="Arrow" />
      </div>
    </Link>
  );
}
