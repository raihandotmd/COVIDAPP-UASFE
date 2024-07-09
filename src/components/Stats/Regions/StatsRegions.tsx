import { SectionGlobalProps } from "../../../types/data";
import RegionsCard from "../../ui/Card/RegionsCard/RegionsCard";
import styles from "./StatsRegions.module.css";
import { Region } from "../../../types/data";
import { nanoid } from "nanoid";

const StatsRegions = ({ title, globalStats }: SectionGlobalProps) => {
  return (
    <div className={styles.StatsRegions}>
      <div className={styles.StatsRegions__container}>
        <div className={styles.StatsRegions__header}>
          <h1 className={styles.StatsRegions__title}>Situation By {title}</h1>
          <p className={styles.StatsRegions__subtitle}>
            Data Covid Berdasarkan {title}
          </p>
        </div>
        <div className={styles.StatsRegions__body}>
          {globalStats?.regions.map((data: Region) => (
            <span key={nanoid(5)}>
              <RegionsCard region={data.name} numbers={data.numbers} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsRegions;
