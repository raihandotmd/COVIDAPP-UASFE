// Common types
export type Status = "confirmed" | "recovered" | "death" | "treatment";

interface BaseStats {
  confirmed: number;
  recovered: number;
  death: number;
}

interface RegionBase {
  type: string;
  name: string;
}

// Specific interfaces
export interface TotalData {
  status: Status;
  total: number;
  detail: string;
}

export interface StatsData {
  last_update: string;
  indonesia: TotalData[];
}

export interface DataProvince {
  no?: number;
  kota?: string;
  kasus: number;
  sembuh: number;
  meninggal: number;
  dirawat: number;
}

export interface StatsDataProvinces {
  last_update: string;
  total_province: number;
  provinces: DataProvince[];
}

export interface GlobalRegion extends RegionBase {
  numbers: BaseStats;
}

export interface IndonesiaRegion extends RegionBase {
  numbers: BaseStats & {
    treatment: number;
  };
}

export interface StatEntry {
  status: Status;
  total: number;
}

export interface GlobalData {
  last_update: string;
  global: StatEntry[];
  regions: GlobalRegion[];
}

export interface IndonesiaData {
  last_update: string;
  indonesia: StatEntry[];
  regions: IndonesiaRegion[];
}

export interface SectionStatsProps {
  title: string;
  stats: GlobalData | IndonesiaData;
}
