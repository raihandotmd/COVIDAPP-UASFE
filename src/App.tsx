import Navbar from "./components/Navbar/Navbar.tsx";
import Home from "./types/pages/Home.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { CovidDataProvider } from "./contexts/DataCovidProvider.tsx";

function App() {
  return (
    <CovidDataProvider>
      <Navbar />
      <Home />
      <Footer />
    </CovidDataProvider>
  );
}

export default App;
