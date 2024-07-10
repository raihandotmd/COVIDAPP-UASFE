import { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import axios from "axios";
import { IndonesiaData } from "../utils/types";
import StatsSituation from "../components/Stats/Total/StatsSituation";
import StatsProvinces from "../components/Stats/Province/StatsProvinces";

const Indonesia = () => {
  const [indoStats, setIndoStats] = useState<IndonesiaData>();

  useEffect(() => {
    async function fetchIndoData() {
      const res = await axios(
        "https://covid-fe-2023.vercel.app/api/indonesia.json",
      );

      setIndoStats(res.data);
    }

    fetchIndoData();
  }, []);
  return (
    <>
      <Hero />
      {indoStats?.indonesia ? (
        <StatsSituation
          title="Indonesia Situation"
          subtitle="Data Covid Berdasarkan Indonesia"
          stats={indoStats.indonesia}
        />
      ) : (
        <p>Loading...</p>
      )}
      {indoStats?.regions ? (
        <StatsProvinces regions={indoStats.regions} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Indonesia;
