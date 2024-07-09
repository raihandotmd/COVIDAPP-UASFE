import styles from "./StatsSituation.module.css";
import StatsCard from "../../ui/Card/StatsCard/StatsCard.tsx";
import { SectionGlobalProps } from "../../../utils/types.ts";
import { nanoid } from "nanoid";
import { formatNumber } from "../../../utils/helpers.ts";
import Section from "../../ui/Section/Section.tsx";

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

const StatsSituation = ({ globalStats }: SectionGlobalProps) => {
  return (
    <Section
      title="Global Situation"
      subtitle="Data Covid Berdasarkan Global"
      bgColor="bglight"
    >
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
    </Section>
  );
};

export default StatsSituation;
