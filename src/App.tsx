import Navbar from "./components/Navbar/Navbar.tsx";
import Hero from "./components/Hero/Hero.tsx";
import StatsTotal from "./components/Stats/Total/StatsTotal.tsx";
import StatsProvinces from "./components/Stats/Province/StatsProvinces.tsx";
import Form from "./components/Form/Form.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { CovidDataProvider } from "./contexts/DataCovidProvider.tsx";

function App() {
  return (
    <CovidDataProvider>
      <Navbar />
      <Hero />
      <StatsTotal />
      <StatsProvinces />
      <Form />
      <Footer />
    </CovidDataProvider>
  );
}

export default App;
