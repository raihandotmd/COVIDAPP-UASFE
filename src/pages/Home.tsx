import { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import StatsRegions from "../components/Stats/Regions/StatsRegions";
import StatsSituation from "../components/Stats/Total/StatsSituation";
import { GlobalData } from "../utils/types";
import axios from "axios";
import ENDPOINTS from "../utils/constants/endpoints";

const Home = () => {
  const [globalStats, setGlobalStats] = useState<GlobalData>();

  useEffect(() => {
    async function fetchGlobalData() {
      const res = await axios(ENDPOINTS.GLOBAL);

      setGlobalStats(res.data);
    }

    fetchGlobalData();
  }, []);

  return (
    <>
      <Hero />
      {globalStats ? (
        <>
          <StatsSituation
            title="Global Situation"
            subtitle="Data Covid Berdasarkan Global"
            stats={globalStats.global}
          />

          <StatsRegions stats={globalStats.regions} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Home;
