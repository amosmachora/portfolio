import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link className="w-12 h-12" href={"/"}>
      <FontAwesomeIcon icon={faTerminal} className="w-full h-full" />
    </Link>
  );
};
