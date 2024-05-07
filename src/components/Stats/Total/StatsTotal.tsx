import styles from "./StatsTotal.module.css";
import StatsCard from "../Card/StatsCard";
import { StatsData } from "../../../types/data.ts";
import data from "../../../utils/constants/indonesia.js";
import { nanoid } from "nanoid";

type typeStatus = "Positif" | "Sembuh" | "Meninggal";
function checkStatus(status: typeStatus) {
  switch (status) {
    case "Positif":
      return "gray-color";
    case "Sembuh":
      return "sec-color";
    case "Meninggal":
      return "danger-color";
    default:
      return "primary-color";
  }
}

// Untuk format nomor agar memiliki decimal
function formatNumber(number: number): string {
  // Use toLocaleString for formatting
  return number.toLocaleString("en-US", {
    style: "decimal",
  });
}

const StatsTotal = () => {
  const statsData: StatsData = data as StatsData;
  return (
    <div className={styles.StatsTotal}>
      <div className={styles.StatsTotal__container}>
        <div className={styles.StatsTotal__header}>
          <h1 className={styles.StatsTotal__title}>Indonesia</h1>
          <p className={styles.StatsTotal__subtitle}>
            Covid Data Berdasarkan Indonesia.
          </p>
        </div>
        <div className={styles.StatsTotal__body}>
          {statsData.indonesia.map((data) => (
            <StatsCard
              key={nanoid(1)}
              status={data.status}
              colorStats={checkStatus(data.status as typeStatus)}
              stats={formatNumber(data.total)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsTotal;
