import { useState, createContext, useContext, ReactNode } from "react";
import { StatsDataProvinces } from "../types/data.ts";
import data from "../utils/constants/provinces.ts";

interface CovidDataProviderProps {
  children: ReactNode;
}

export const CovidDataCtx = createContext(data);

export function useCovidDataCtx() {
  const covidData = useContext(CovidDataCtx);

  if (covidData === undefined) {
    throw new Error("it must have the StatsDataProvincesType");
  }

  return covidData;
}

export const CovidDataProvider: React.FC<CovidDataProviderProps> = ({
  children,
}) => {
  const [dataCovid, setDataCovid] = useState<StatsDataProvinces>(data);
  return (
    <CovidDataCtx.Provider value={{ dataCovid, setDataCovid }}>
      {children}
    </CovidDataCtx.Provider>
  );
};
