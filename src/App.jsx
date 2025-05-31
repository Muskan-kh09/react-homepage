import "./App.css";
import HeroSection from "./components/hero";
import Hero from "./components/hero";
import Navigation from "./components/navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default App;
