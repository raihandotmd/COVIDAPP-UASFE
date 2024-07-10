import { formatNumber } from "../../../../utils/helpers";
import { IndonesiaRegion } from "../../../../utils/types";

interface ProvTableDataProps {
  regions: IndonesiaRegion;
  no: number;
}

const ProvinceTableData = ({ regions, no }: ProvTableDataProps) => {
  return (
    <tr>
      <td>
        <b>{no}</b>
      </td>
      <td>{regions.name}</td>
      <td>{formatNumber(regions.numbers.confirmed)}</td>
      <td>{formatNumber(regions.numbers.recovered)}</td>
      <td>{formatNumber(regions.numbers.treatment)}</td>
      <td>{formatNumber(regions.numbers.death)}</td>
    </tr>
  );
};

export default ProvinceTableData;
