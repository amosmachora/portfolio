import { Link } from "react-router-dom";
import "./ReadMore.css";

export function ReadMore({ border, text, link, Arrow }) {
  return (
    <Link to={`/${link}`}>
      <div className={`flex link ${border} space-between cursor`}>
        <p className="read-more capitalize-first">{text}</p>
        <img src={Arrow} alt="Arrow" />
      </div>
    </Link>
  );
}
