import Card from "../Card";
import styles from "./Stats.module.css";

type StyleStatsCard = {
  status: string;
  colorStats?: string;
  stats: string;
};

const StatsCard = ({ status, colorStats, stats }: StyleStatsCard) => {
  return (
    <Card>
      <h4 className={styles.StatsTotal__CardTitle}>{status}</h4>
      <p
        className={styles.StatsTotal__CardStats}
        style={{ color: `var(--${colorStats})` }}
      >
        {stats}
      </p>
    </Card>
  );
};

export default StatsCard;
