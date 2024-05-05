import React from "react";

// Define an interface for the province data
interface ProvinceData {
  no: number;
  province: string;
  positive: number;
  recovered: number;
  treated: number;
  death: number;
}

const ProvinceTableData: React.FC<ProvinceData> = (data) => {
  // Destructure directly from the prop
  const { no, province, positive, treated, death, recovered } = data;

  return (
    <tr>
      <td>{no}</td>
      <td>{province}</td>
      <td>{positive}</td>
      <td>{recovered}</td>
      <td>{treated}</td>
      <td>{death}</td>
    </tr>
  );
};

export default ProvinceTableData;
