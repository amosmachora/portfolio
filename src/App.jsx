import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Heart from "./Assets/heart.png";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";
import { FormspreeProvider } from "@formspree/react";

export const Context = createContext();

function App() {
  const [smallScreen, setSmallScreen] = useState(false);

  /**
   * TODO -> Custom Cursor, Custom scroll bar, Animation on Scroll.
   */
  return (
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
      </Context.Provider>
    </div>
  );
}

export default App;
