import styles from "./StatsProvince.module.css";
import ProvinceTableData from "./TableData/ProvinceTableData";

const StatsProvince = () => {
  const fakedata1 = {
    no: 1,
    province: "jakarta",
    positive: 10,
    treated: 20,
    death: 8,
    recovered: 4,
  };
  const fakedata2 = {
    no: 2,
    province: "aceh",
    positive: 30,
    treated: 25,
    death: 8,
    recovered: 4,
  };

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
            <ProvinceTableData {...fakedata1} />
            <ProvinceTableData {...fakedata2} />
            <ProvinceTableData {...fakedata2} />
            <ProvinceTableData {...fakedata2} />
            <ProvinceTableData {...fakedata2} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatsProvince;
