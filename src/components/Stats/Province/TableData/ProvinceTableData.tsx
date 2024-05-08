import React from "react";
import { DataProvince } from "../../../../types/data.ts";

const ProvinceTableData: React.FC<DataProvince> = (data) => {
  // Destructure directly from the prop
  const { no, kota, sembuh, meninggal, dirawat, kasus } = data;

  return (
    <tr>
      <td>
        <b>{no}</b>
      </td>
      <td>{kota}</td>
      <td>{kasus}</td>
      <td>{sembuh}</td>
      <td>{dirawat}</td>
      <td>{meninggal}</td>
    </tr>
  );
};

export default ProvinceTableData;
