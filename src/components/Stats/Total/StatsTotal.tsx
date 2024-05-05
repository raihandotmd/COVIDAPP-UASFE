import styles from "./StatsTotal.module.css";
import StatsCard from "../Card/StatsCard";

const StatsTotal = () => {
  return (
    <div className={styles.StatsTotal}>
      <div className={styles.StatsTotal__header}>
        <h1 className={styles.StatsTotal__title}>Indonesia</h1>
        <p className={styles.StatsTotal__subtitle}>
          Covid Data Based on Indonesia.
        </p>
      </div>
      <div className={styles.StatsTotal__body}>
        <StatsCard status="Confirmed" colorStats="gray-color" stats={608.646} />
        <StatsCard status="Recovered" colorStats="sec-color" stats={90.023} />
        <StatsCard status="Death" colorStats="danger-color" stats={5.023} />
      </div>
    </div>
  );
};

export default StatsTotal;
