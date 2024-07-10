import React from "react";
import { nanoid } from "nanoid";
import styles from "./StatsSituation.module.css";
import StatsCard from "../../ui/Card/StatsCard/StatsCard";
import { StatEntry, Status } from "../../../utils/types";
import { formatNumber } from "../../../utils/helpers";
import Section from "../../ui/Section/Section";
import { PiFaceMask, PiSkull } from "react-icons/pi";
import { BiHappyBeaming } from "react-icons/bi";

const size = 75;
const icons = {
  confirmed: <PiFaceMask size={size} />,
  recovered: <BiHappyBeaming size={size} color={`var(--sec-color)`} />,
  death: <PiSkull size={size} color={`var(--danger-color)`} />,
};

function checkStatus(status: Status) {
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

function checkIconsStatus(status: Status) {
  return icons[status] || icons.recovered;
}

interface StatsSituationProps {
  title: string;
  subtitle: string;
  stats: StatEntry[];
}

const StatsSituation = ({ title, subtitle, stats }: StatsSituationProps) => {
  return (
    <Section title={title} subtitle={subtitle} bgColor="bglight">
      <div className={styles.StatsSituation__body}>
        {stats.map((data) => (
          <span key={nanoid(5)}>
            <StatsCard
              status={data.status}
              colorStats={checkStatus(data.status)}
              stats={formatNumber(data.total)}
              icon={checkIconsStatus(data.status)}
            />
          </span>
        ))}
      </div>
    </Section>
  );
};

export default StatsSituation;
