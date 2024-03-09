import "./App.css";
import Screens from "./components/Screens/Screens";
import ScreenTwo from "./components/screenTwo/ScreenTwo";

function App() {

  const handleClick = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth"});
    }
  };

  return (
    <div className="App">
      <div className="nav">
        <button
          onClick={() => {
            handleClick("scrollScreenOne");
          }}
        >
         Screen One
        </button>
        <button
          onClick={() => {
            handleClick("scrollScreenTwo");
          }}
        >
          Screen Two
        </button>
        <button
          onClick={() => {
            handleClick("bottom");
          }}
        >
          Screen Three
        </button>
      </div>
      <Screens ScreenName={"Screen One"} id="scrollScreenOne" />
      <ScreenTwo id="scrollScreenTwo" />
      <Screens ScreenName={"Screen Three"} id="bottom" />
      
    </div>
  );
}

export default App;
