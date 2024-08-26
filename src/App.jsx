import "./App.css";
import Home from "./components/lgcomponents/home";
import NavBar from "./components/lgcomponents/NavBar";
import Sponser from "./components/lgcomponents/sponser";

function App() {
  return (
    <div className="h-[100rem] font-fontFAm">
      <NavBar />
      <Home />
      <Sponser />
    </div>
  );
}

export default App;
