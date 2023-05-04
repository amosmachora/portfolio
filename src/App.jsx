import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Heart from "./Assets/heart.png";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import { FormspreeProvider } from "@formspree/react";
// import Tracker from "./Components/Tracker/Tracker";
import LoadingAnimation from "./Components/LoadingAnimation";

export const Context = createContext();

function App() {
  const [smallScreen, setSmallScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [, setLoadedImageCount] = useState(0);

  useEffect(() => {
    const images = document.querySelectorAll("img");

    images.forEach((image) => {
      image.addEventListener("load", () => {
        console.log("Loaded", image.src);
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
              Designed with <img src={Heart} alt="Heart" className="heart" />
            </div>
            {/* <Tracker /> */}
          </Context.Provider>
        </div>
      )}
    </>
  );
}

export default App;
