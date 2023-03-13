import React from "react";
import { BarLoader } from "react-spinners";

const LoadingAnimation = () => {
  return (
    <div className="loading-screen">
      <BarLoader color="#ff5c00" className="center-absolutely" />
    </div>
  );
};

export default LoadingAnimation;
