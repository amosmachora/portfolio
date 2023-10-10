export const ProjectLanguages = ({
  languages,
  className,
}: {
  languages: string[];
  className: string;
}) => {
  return (
    <div className={`gap-x-3 items-center flex ${className}`}>
      {languages.map((language, i) => {
        const isNext = language.includes("next");
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={language}
            alt="language"
            className={`${isNext ? "w-auto h-3" : "w-5 h-5"} object-cover`}
            key={i}
          />
        );
      })}
    </div>
  );
};
