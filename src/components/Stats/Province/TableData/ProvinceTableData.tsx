import { formatNumber } from "../../../../utils/helpers";
import { DataProvince, IndonesiaRegion } from "../../../../utils/types";

interface ProvTableDataProps {
  regions: IndonesiaRegion | DataProvince;
  no: number;
}

const isIndonesiaRegion = (
  region: IndonesiaRegion | DataProvince,
): region is IndonesiaRegion => {
  return "numbers" in region;
};

const ProvinceTableData = ({ regions, no }: ProvTableDataProps) => {
  if (isIndonesiaRegion(regions)) {
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
  } else {
    return (
      <tr>
        <td>
          <b>{no}</b>
        </td>
        <td>{regions.kota}</td>
        <td>{formatNumber(regions.kasus)}</td>
        <td>{formatNumber(regions.sembuh)}</td>
        <td>{formatNumber(regions.dirawat)}</td>
        <td>{formatNumber(regions.meninggal)}</td>
      </tr>
    );
  }
};

export default ProvinceTableData;
