import styles from "./StatsProvinces.module.css";
import ProvinceTableData from "./TableData/ProvinceTableData";
import { StatsDataProvinces } from "../../../types/data";
import data from "../../../utils/constants/provinces";
import { nanoid } from "nanoid";

const StatsProvinces = () => {
  const statsDataProvince: StatsDataProvinces = data as StatsDataProvinces;
  return (
    <div className={styles.StatsProvince}>
      <div className={styles.StatsProvince__header}>
        <h1 className={styles.StatsProvince__title}>Provinsi</h1>
        <p className={styles.StatsProvince__subtitle}>
          Data Covid Berdasarkan Indonesia
        </p>
      </div>
      <div className={styles.StatsProvince__tableContainer}>
        <table className={styles.StatsProvince__table}>
          <thead>
            <tr className={styles.StatsProvince__tableth}>
              <th>No</th>
              <th>Provinsi</th>
              <th>Positif</th>
              <th>Sembuh</th>
              <th>Dirawat</th>
              <th>Meninggal</th>
            </tr>
          </thead>
          <tbody>
            {statsDataProvince.provinces.map((data, index) => (
              <ProvinceTableData key={nanoid(5)} no={index + 1} {...data} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatsProvinces;
