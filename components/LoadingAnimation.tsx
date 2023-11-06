import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoadingAnimation = () => {
  return (
    <div className="relative h-[50vh] w-full z-50">
      <FontAwesomeIcon
        icon={faSpinner}
        spin
        color="#ff5c00"
        className="center-absolutely"
      />
    </div>
  );
};

export default LoadingAnimation;
