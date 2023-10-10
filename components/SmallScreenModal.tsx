import React from "react";

export const SmallScreenModal = ({
  smallScreenErrorModalLink,
}: {
  smallScreenErrorModalLink: string;
}) => {
  return (
    <div className="w-full bg-primaryBg mx-auto px-10 py-5 text-center">
      <p className="mb-5">
        You are trying to view a desktop only project from a relatively small
        screen you can view anyway but you might not like what you see
      </p>
      <p
        className="text-white bg-orange mx-auto w-max p-3 rounded"
        onClick={() => window.open(smallScreenErrorModalLink)}
      >
        View Anyway
      </p>
    </div>
  );
};
