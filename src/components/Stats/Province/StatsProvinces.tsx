import styles from "./StatsProvinces.module.css";
import ProvinceTableData from "./TableData/ProvinceTableData";
import { nanoid } from "nanoid";
import { useCovidDataCtx } from "../../../contexts/DataCovidProvider";
import { DataProvince } from "../../../types/data";

const StatsProvinces = () => {
  const { dataCovid, setDataCovid } = useCovidDataCtx();
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
              <th>Kasus</th>
              <th>Sembuh</th>
              <th>Dirawat</th>
              <th>Meninggal</th>
            </tr>
          </thead>
          <tbody>
            {dataCovid.provinces.map((data: DataProvince, index: number) => (
              <ProvinceTableData key={nanoid(5)} no={index + 1} {...data} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatsProvinces;
