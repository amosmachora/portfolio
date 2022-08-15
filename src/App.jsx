import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Heart from "./Assets/heart.png";
import StartPage from "./Components/Start/StartPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <StartPage />
      <div className="designed-with-love flex align-center">
        Designed with <img src={Heart} alt="Heart" className="heart" />
      </div>
    </div>
  );
}

export default App;
