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
  kota: string;
  kasus: number;
  sembuh: number;
  meninggal: number;
  dirawat: number;
}

export interface StatsDataProvinces {
  last_update: string;
  total_province: number;
  provinces: [DataProvince];
}
