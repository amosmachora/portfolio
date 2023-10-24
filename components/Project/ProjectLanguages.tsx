import Image, { StaticImageData } from "next/image";

export const ProjectLanguages = ({
  languages,
  className,
}: {
  languages: string[] | StaticImageData[];
  className: string;
}) => {
  return (
    <div className={`gap-x-6 items-center flex flex-wrap ${className}`}>
      {languages.map((language, i) => {
        const isString = typeof language === "string";

        let isNext;

        if (isString) {
          isNext = language.includes("nextjs") || language.includes("clerk");
        } else {
          isNext =
            language.src.includes("nextjs") || language.src.includes("clerk");
          console.log(language);
        }

        console.log(isString);

        return (
          <Image
            src={language}
            alt="language"
            className={`${
              isNext ? "w-auto max-h-4" : "w-10 h-10"
            } object-cover`}
            key={i}
          />
        );
      })}
    </div>
  );
};
