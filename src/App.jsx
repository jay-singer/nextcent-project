import "./App.css";
import Blogs from "./components/lgcomponents/blogs";
import OurCommunity from "./components/lgcomponents/community";
import Feature from "./components/lgcomponents/Features";
import Footer from "./components/lgcomponents/footer";
import Home from "./components/lgcomponents/home";
import NavBar from "./components/lgcomponents/NavBar";
import Pricing from "./components/lgcomponents/pricing";
import Sponser from "./components/lgcomponents/sponser";
import Work from "./components/lgcomponents/work";

function App() {
  return (
    <div className="pb-[50rem] font-fontFAm">
      <NavBar />
      <Home />
      <Sponser />
      <OurCommunity />
      <Feature />
      <Pricing />
      <Work />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
