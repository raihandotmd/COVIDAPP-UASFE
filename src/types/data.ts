export interface StatsTotal {
  status: string;
  total: number;
  detail: string;
}

export interface StatsData {
  last_update: string;
  indonesia: [StatsTotal];
}
