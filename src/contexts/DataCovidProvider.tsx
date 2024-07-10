import {
  useState,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { StatsDataProvinces } from "../utils/types.ts";
import data from "../utils/constants/provinces.ts";

interface CovidDataContextType {
  dataCovid: StatsDataProvinces;
  setDataCovid: Dispatch<SetStateAction<StatsDataProvinces>>;
}

interface CovidDataProviderProps {
  children: ReactNode;
}

export const CovidDataCtx = createContext<CovidDataContextType | undefined>(
  undefined,
);

export function useCovidDataCtx() {
  const covidData = useContext(CovidDataCtx);

  if (covidData === undefined) {
    throw new Error("useCovidDataCtx must be used within a CovidDataProvider");
  }

  return covidData;
}

export const CovidDataProvider: React.FC<CovidDataProviderProps> = ({
  children,
}) => {
  const [dataCovid, setDataCovid] = useState<StatsDataProvinces>(data);

  const value: CovidDataContextType = {
    dataCovid,
    setDataCovid,
  };

  return (
    <CovidDataCtx.Provider value={value}>{children}</CovidDataCtx.Provider>
  );
};
