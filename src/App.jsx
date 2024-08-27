import "./App.css";
import OurCommunity from "./components/lgcomponents/community";
import Feature from "./components/lgcomponents/Features";
import Home from "./components/lgcomponents/home";
import NavBar from "./components/lgcomponents/NavBar";
import Pricing from "./components/lgcomponents/pricing";
import Sponser from "./components/lgcomponents/sponser";

function App() {
  return (
    <div className="h-[100rem] font-fontFAm">
      <NavBar />
      <Home />
      <Sponser />
      <OurCommunity />
      <Feature />
      <Pricing />
    </div>
  );
}

export default App;
