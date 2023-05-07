import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import { FormspreeProvider } from "@formspree/react";
// import Tracker from "./Components/Tracker/Tracker";
import { heart } from "./Assets/assets";
import LoadingAnimation from "./Components/LoadingAnimation";

export const Context = createContext<{
  setSmallScreen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}>(null as any);

export const pages = ["start-page", "about-me", "projects", "contact"];

function App() {
  const [smallScreen, setSmallScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [, setLoadedImageCount] = useState(0);

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
              setSmallScreen: setSmallScreen,
              setIsLoading: setIsLoading,
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
            {/* <Tracker /> */}
          </Context.Provider>
        </div>
      )}
    </>
  );
}

export default App;
