import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";

export const TechStack = () => {
  const stack = [
    {
      title: "Next.js",
      src: "/images/logos/next.png",
      className: "h-10 w-14",
    },
    {
      title: "Java",
      src: "/images/logos/java.svg",
      className: "h-10 w-10",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",
      className: "h-10 w-24",
    },
    {
      title: "Javascript",
      src: "/images/logos/javascript.svg",
      className: "h-10 w-10",
    },

    {
      title: "Firebase",
      src: "/images/logos/firebase.svg",
      className: "h-10 w-10",
    },
    {
      title: "Figma",
      src: "/images/logos/figma.png",
      className: "h-10 w-8",
    },
    {
      title: "Firestore",
      src: "/images/logos/firestore.svg",
      className: "h-10 w-10",
    },
    {
      title: "Mysql",
      src: "/images/logos/mysql.svg",
      className: "h-10 w-10",
    },
    {
      title: "React",
      src: "/images/logos/react.svg",
      className: "h-10 w-10",
    },
    {
      title: "Spring",
      src: "/images/logos/springboot.svg",
      className: "h-10 w-12",
    },
    {
      title: "Typescript",
      src: "/images/logos/typescript.svg",
      className: "h-10 w-10",
    },
    {
      title: "Node",
      src: "/images/logos/node.png",
      className: "h-10 w-12",
    },
    {
      title: "Convex",
      src: "/images/logos/convex.svg",
      className: "h-10 w-20",
    },
    {
      title: "Clerk",
      src: "/images/logos/clerk.svg",
      className: "h-10 w-20",
    },
    {
      title: "Turso",
      src: "/images/logos/turso.svg",
      className: "h-10 w-8",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",
      className: "h-10 w-24",
    },
  ];

  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
