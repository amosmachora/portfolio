export const ProjectLanguages = ({
  languages,
  className,
}: {
  languages: string[];
  className: string;
}) => {
  return (
    <div className={`gap-x-6 items-center flex flex-wrap ${className}`}>
      {languages.map((language, i) => {
        const isNext = language.includes("next");
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={language}
            alt="language"
            className={`${isNext ? "w-auto h-3" : "w-10 h-10"} object-cover`}
            key={i}
          />
        );
      })}
    </div>
  );
};
