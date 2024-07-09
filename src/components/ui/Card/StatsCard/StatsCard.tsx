import { capitalizeFirstLetter } from "../../../../utils/helpers";
import Card from "../Card";
import styles from "./StatsCard.module.css";

interface StyleStatsCard {
  status: string;
  colorStats?: string;
  stats: string;
  icon: React.ReactNode;
}

const StatsCard = ({ status, colorStats, stats, icon }: StyleStatsCard) => {
  return (
    <Card>
      <div className={styles.StatsCard}>
        <div className={styles.StatsCard__header}>
          {icon}
          <h4 className={styles.StatsCard__title}>
            {capitalizeFirstLetter(status)}
          </h4>
        </div>
        <p
          className={styles.StatsCard__data}
          style={{ color: `var(--${colorStats})` }}
        >
          {stats}
        </p>
      </div>
    </Card>
  );
};

export default StatsCard;
