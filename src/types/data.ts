interface totalData {
  status: string;
  total: number;
  detail: string;
}

export interface StatsData {
  last_update: string;
  indonesia: [totalData];
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

export interface Region {
  type: string;
  name: string;
  numbers: {
    confirmed: number;
    recovered: number;
    death: number;
  };
}

export interface Global {
  last_update: string;
  global: {
    status: string;
    total: number;
  }[];
  regions: Region[];
}

export interface SectionGlobalProps {
  title: string;
  globalStats: Global;
}
