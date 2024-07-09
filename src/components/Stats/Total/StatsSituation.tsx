import styles from "./StatsSituation.module.css";
import StatsCard from "../../ui/Card/StatsCard/StatsCard.tsx";
import { SectionGlobalProps } from "../../../utils/types.ts";
import { nanoid } from "nanoid";
import { formatNumber } from "../../../utils/helpers.ts";
import Section from "../../ui/Section/Section.tsx";
import { PiFaceMask, PiSkull } from "react-icons/pi";
import { BiHappyBeaming } from "react-icons/bi";

type typeStatus = "confirmed" | "recovered" | "death";
const size = 75;
const icons = {
  confirmed: <PiFaceMask size={size} />,
  recovered: <BiHappyBeaming size={size} color={`var(--sec-color)`} />,
  death: <PiSkull size={size} color={`var(--danger-color)`} />,
};
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

function checkIconsStatus(status: typeStatus) {
  switch (status) {
    case "confirmed":
      return icons.confirmed;
    case "recovered":
      return icons.recovered;
    case "death":
      return icons.death;
    default:
      return icons.recovered;
  }
}

const StatsSituation = ({ globalStats }: SectionGlobalProps) => {
  return (
    <Section
      title="Global Situation"
      subtitle="Data Covid Berdasarkan Global"
      bgColor="bglight"
    >
      <div className={styles.StatsSituation__body}>
        {globalStats?.global.map((data) => (
          <span key={nanoid(5)}>
            <StatsCard
              status={data.status}
              colorStats={checkStatus(data.status as typeStatus)}
              stats={formatNumber(data.total)}
              icon={checkIconsStatus(data.status as typeStatus)}
            />
          </span>
        ))}
      </div>
    </Section>
  );
};

export default StatsSituation;
