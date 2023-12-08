import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Herosection from "./components/Herosection";
import Section2 from "./components/Section2";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import "bootstrap/dist/js/bootstrap.min.js";
import Carddata from "./components/Carddata";
import Footersec from "./components/Footersec";

function App() {
  return (
    <div className="App">
      <Herosection />
      <Section2 />
      <Carddata />
      <Section4 />
      <Section5 />
      <Footersec />
    </div>
  );
}

export default App;
