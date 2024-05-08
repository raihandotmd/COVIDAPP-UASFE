import styles from "./Form.module.css";
import formImage from "../../assets/images/form.png";
import { useState, ChangeEvent } from "react";
import { nanoid } from "nanoid";
import { useCovidDataCtx } from "../../contexts/DataCovidProvider.tsx";
import { DataProvince } from "../../types/data.ts";

type status = "sembuh" | "meninggal" | "dirawat";

const Form = () => {
  const { dataCovid, setDataCovid } = useCovidDataCtx();
  const [selectedKotaValue, setSelectedKotaValue] = useState("Jakarta");
  const [selectedStatusValue, setSelectedStatusValue] =
    useState<status>("sembuh");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleKotaChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedKotaValue(e.target.value);
  };
  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatusValue(e.target.value as status);
  };
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(
      "Submitted value:",
      inputValue,
      selectedKotaValue,
      selectedStatusValue,
    );

    const updatedProvinces = dataCovid.provinces.map(
      (province: DataProvince) => {
        if (province.kota === selectedKotaValue) {
          return {
            ...province,
            kasus: province.kasus + parseInt(inputValue, 10),
            [selectedStatusValue]:
              province[selectedStatusValue] + parseInt(inputValue, 10),
          };
        }
        return province; // Or return null if you prefer
      },
    );

    setDataCovid((prevState: DataProvince[]) => ({
      ...prevState,
      provinces: updatedProvinces as DataProvince[],
    }));

    console.log(dataCovid); // This will now show the updated data
  };
  return (
    <div className={styles.form}>
      <div className={styles.form__image}>
        <img src={formImage} alt="Form IMG Illustration" />
      </div>
      <div className={styles.form__content}>
        <h1 className={styles.form__title}>Form Covid</h1>
        <form action="">
          <label className={styles.form__label} htmlFor="provinces">
            Provinsi
          </label>
          <select
            className={styles.form__input}
            name="provinces"
            id="provinces"
            value={selectedKotaValue}
            onChange={handleKotaChange}
          >
            {dataCovid.provinces.map((province: DataProvince) => (
              <option key={nanoid(3)} value={province.kota}>
                {province.kota}
              </option>
            ))}
          </select>
          <label className={styles.form__label} htmlFor="status">
            Status
          </label>
          <select
            className={styles.form__input}
            name="status"
            id="status"
            value={selectedStatusValue}
            onChange={handleStatusChange}
          >
            <option value="sembuh">Sembuh</option>
            <option value="dirawat">Di Rawat</option>
            <option value="meninggal">Meninggal</option>
          </select>
          <label className={styles.form__label} htmlFor="total">
            Jumlah
          </label>
          <input
            className={styles.form__input}
            type="number"
            name="total"
            id="total"
            placeholder="0"
            value={inputValue}
            onChange={handleInputChange}
          ></input>
          <button className={styles.form__button} onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
