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
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div className="App">
          <Context.Provider value={{ setSmallScreen: setSmallScreen }}>
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
