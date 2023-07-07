import React from "react";

export const ProjectLanguages = ({
  languages,
  className,
}: {
  languages: string[];
  className: string;
}) => {
  return (
    <div className={`gap-x-3 items-center flex ${className}`}>
      {languages.map((language) => {
        const isNext = language.includes("next");
        return (
          <img
            src={language}
            alt="language"
            className={`${isNext ? "w-auto h-3" : "w-5 h-5"} object-cover`}
          />
        );
      })}
    </div>
  );
};
