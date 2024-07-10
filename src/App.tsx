import Home from "./pages/Home.tsx";
import { CovidDataProvider } from "./contexts/DataCovidProvider.tsx";
import Layout from "./layouts/index.tsx";
import { Routes, Route } from "react-router-dom";
import Indonesia from "./pages/Indonesia.tsx";
import Province from "./pages/Province.tsx";
import About from "./pages/About.tsx";

function App() {
  return (
    <CovidDataProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/indonesia" element={<Indonesia />} />
          <Route path="/province" element={<Province />} />
        </Routes>
      </Layout>
    </CovidDataProvider>
  );
}

export default App;
