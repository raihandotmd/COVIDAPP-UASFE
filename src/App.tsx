import Navbar from "./components/Navbar/Navbar.tsx";
import Hero from "./components/Hero/Hero.tsx";
import StatsTotal from "./components/Stats/Total/StatsTotal.tsx";
import StatsProvince from "./components/Stats/Province/StatsProvince.tsx";
import Form from "./components/Form/Form.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsTotal />
      <StatsProvince />
      <Form />
      <Footer />
    </>
  );
}

export default App;
