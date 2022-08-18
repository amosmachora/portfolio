import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Heart from "./Assets/heart.png";
import StartPage from "./Components/Start/StartPage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <StartPage />
      <Footer />
      <div className="designed-with-love flex align-center">
        Designed with <img src={Heart} alt="Heart" className="heart" />
      </div>
    </div>
  );
}

export default App;
