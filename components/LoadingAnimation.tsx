import { BarLoader } from "react-spinners";

const LoadingAnimation = () => {
  return (
    <div className="loading-screen h-screen w-full z-50">
      <BarLoader color="#ff5c00" className="center-absolutely" />
    </div>
  );
};

export default LoadingAnimation;
