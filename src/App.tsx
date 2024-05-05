import Navbar from "./components/Navbar/Navbar.tsx";
import Hero from "./components/Hero/Hero.tsx";
import StatsTotal from "./components/Stats/Total/StatsTotal.tsx";
import StatsProvince from "./components/Stats/Province/StatsProvince.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsTotal />
      <StatsProvince />
    </>
  );
}

export default App;
