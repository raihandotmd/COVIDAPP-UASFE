import Home from "./pages/Home.tsx";
import { CovidDataProvider } from "./contexts/DataCovidProvider.tsx";
import Layout from "./layouts/index.tsx";
import { Routes, Route } from "react-router-dom";
import Indonesia from "./pages/Indonesia.tsx";

function App() {
  return (
    <CovidDataProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/indonesia" element={<Indonesia />} />
        </Routes>
      </Layout>
    </CovidDataProvider>
  );
}

export default App;
