import Image from "next/image";

export const ProjectLanguages = ({
  languages,
  className,
}: {
  languages: string[];
  className: string;
}) => {
  return (
    <div className={`gap-6 items-center flex flex-wrap ${className}`}>
      {languages.map((language, i) => {
        let isNext =
          language.includes("nextjs") ||
          language.includes("clerk") ||
          language.includes("next");

        return (
          <Image
            src={`/${language}.svg`}
            alt={language}
            className={`${isNext ? "" : "w-10 h-10"} object-cover`}
            key={i}
            width={100}
            height={100}
          />
        );
      })}
    </div>
  );
};
