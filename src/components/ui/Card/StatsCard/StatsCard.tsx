import { capitalizeFirstLetter } from "../../../../utils/helpers";
import Card from "../Card";
import styles from "./StatsCard.module.css";

interface StyleStatsCard {
  status: string;
  colorStats?: string;
  stats: string;
}

const StatsCard = ({ status, colorStats, stats }: StyleStatsCard) => {
  return (
    <Card>
      <h4 className={styles.StatsTotal__CardTitle}>
        {capitalizeFirstLetter(status)}
      </h4>
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
