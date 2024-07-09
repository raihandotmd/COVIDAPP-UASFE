import styles from "./StatsSituation.module.css";
import StatsCard from "../../ui/Card/StatsCard/StatsCard.tsx";
import {  SectionGlobalProps } from "../../../types/data.ts";
import { nanoid } from "nanoid";
import { formatNumber } from "../../../utils/helpers.ts";

type typeStatus = "confirmed" | "recovered" | "death";
function checkStatus(status: typeStatus) {
  switch (status) {
    case "confirmed":
      return "gray-color";
    case "recovered":
      return "sec-color";
    case "death":
      return "danger-color";
    default:
      return "primary-color";
  }
}


const StatsSituation = ({ title, globalStats }: SectionGlobalProps) => {
  return (
    <div className={styles.StatsTotal}>
      <div className={styles.StatsTotal__container}>
        <div className={styles.StatsTotal__header}>
          <h1 className={styles.StatsTotal__title}>{title} Situation</h1>
          <p className={styles.StatsTotal__subtitle}>
            Data Covid Berdasarkan {title}
          </p>
        </div>
        <div className={styles.StatsTotal__body}>
          {globalStats?.global.map((data) => (
            <span key={nanoid(5)}>
              <StatsCard
                status={data.status}
                colorStats={checkStatus(data.status as typeStatus)}
                stats={formatNumber(data.total)}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSituation;
