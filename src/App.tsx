import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import { FormspreeProvider } from "@formspree/react";
// import Tracker from "./Components/Tracker/Tracker";
import { Video } from "./Components/Video";
import { assets } from "./Assets/assets";
import LoadingAnimation from "./Components/LoadingAnimation";

export const Context = createContext<{
  setSmallScreen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentYoutubeId: React.Dispatch<React.SetStateAction<string | null>>;
}>(null as any);

export const pages = ["start-page", "about-me", "projects", "contact"];

const { heart } = assets;

function App() {
  const [smallScreen, setSmallScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [, setLoadedImageCount] = useState(0);
  const [currentYoutubeId, setCurrentYoutubeId] = useState<null | string>(null);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    images.forEach((image) => {
      image.addEventListener("load", () => {
        setLoadedImageCount((prev) => prev + 1);
      });
    });

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div className="App">
          <Context.Provider
            value={{
              setSmallScreen,
              setIsLoading,
              setCurrentYoutubeId,
            }}
          >
            <NavBar smallScreen={smallScreen} setSmallScreen={setSmallScreen} />
            <FormspreeProvider project="2017027895586717162">
              <Outlet />
            </FormspreeProvider>
            <Footer />
            <div className="designed-with-love flex align-center">
              Designed with
              <img src={heart} alt="heart" className="heart" />
            </div>
            {currentYoutubeId && (
              <Video
                id={currentYoutubeId}
                onClick={() => setCurrentYoutubeId(null)}
              />
            )}
            {/* <Tracker /> */}
          </Context.Provider>
        </div>
      )}
    </>
  );
}

export default App;
