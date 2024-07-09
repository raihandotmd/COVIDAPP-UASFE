import RegionsCard from "../../ui/Card/RegionsCard/RegionsCard";
import styles from "./StatsRegions.module.css";
import { Region, SectionGlobalProps } from "../../../utils/types";
import { nanoid } from "nanoid";
import Section from "../../ui/Section/Section";

const StatsRegions = ({ globalStats }: SectionGlobalProps) => {
  return (
    <Section
      title="Situation By Regions"
      subtitle="Data Berdasarkan dengan daerah."
      bgColor="light"
    >
      <div className={styles.StatsRegions__body}>
        {globalStats?.regions.map((data: Region) => (
          <span key={nanoid(5)}>
            <RegionsCard region={data.name} numbers={data.numbers} />
          </span>
        ))}
      </div>
    </Section>
  );
};

export default StatsRegions;
