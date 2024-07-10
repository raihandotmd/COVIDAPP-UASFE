import RegionsCard from "../../ui/Card/RegionsCard/RegionsCard";
import styles from "./StatsRegions.module.css";
import { nanoid } from "nanoid";
import Section from "../../ui/Section/Section";
import { GlobalRegion } from "../../../utils/types";

interface StatsRegionProps {
  stats: GlobalRegion[];
}

const StatsRegions = ({ stats }: StatsRegionProps) => {
  return (
    <Section
      title="Situation By Regions"
      subtitle="Data Berdasarkan dengan daerah."
      bgColor="light"
    >
      <div className={styles.StatsRegions__body}>
        {stats?.map((data: GlobalRegion) => (
          <span key={nanoid(5)}>
            <RegionsCard region={data.name} numbers={data.numbers} />
          </span>
        ))}
      </div>
    </Section>
  );
};

export default StatsRegions;
