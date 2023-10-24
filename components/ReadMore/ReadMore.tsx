import { pages } from "@/util/utils";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import "./read-more.css";

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
    <Link
      href={`/${link}`}
      className={twMerge(
        `text-white flex w-[90%] sm:w-[70%] pb-5 border-b border-orange link mt-7 justify-between cursor-pointer duration-300 ease-in-out transition-all font-semibold`,
        className
      )}
    >
      <p className="read-more capitalize-first">{text}</p>
      <FontAwesomeIcon icon={faCaretRight} />
    </Link>
  );
}
