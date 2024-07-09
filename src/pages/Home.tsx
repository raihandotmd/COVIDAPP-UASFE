import { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import StatsRegions from "../components/Stats/Regions/StatsRegions";
import StatsSituation from "../components/Stats/Total/StatsSituation";
import { Global } from "../types/data";
import axios from "axios";

const Home = () => {
  const [globalStats, setGlobalStats] = useState<Global>();

  useEffect(() => {
    async function fetchGlobalData() {
      const res = await axios(
        "https://covid-fe-2023.vercel.app/api/global.json",
      );

      setGlobalStats(res.data);
    }

    fetchGlobalData();
  }, []);

  return (
    <>
      <Hero />
      <StatsSituation title="Global" globalStats={globalStats as Global} />
      <StatsRegions title="Regions" globalStats={globalStats as Global} />
    </>
  );
};

export default Home;
