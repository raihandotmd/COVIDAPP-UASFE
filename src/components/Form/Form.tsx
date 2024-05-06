import styles from "./Form.module.css";
import formImage from "../../assets/images/form.png";

const Form = () => {
  return (
    <div className={styles.form}>
      <div className={styles.form__image}>
        <img src={formImage} alt="Form IMG Illustration" />
      </div>
      <div className={styles.form__content}>
        <h1 className={styles.form__title}>Form Covid</h1>
        <form action="">
          <label className={styles.form__label} htmlFor="province">
            Provinsi
          </label>
          <input
            className={styles.form__input}
            type="text"
            name="province"
            id="province"
            placeholder="Jakarta.."
          ></input>
          <label className={styles.form__label} htmlFor="status">
            Status
          </label>
          <input
            className={styles.form__input}
            type="text"
            name="status"
            id="status"
            placeholder="Positif.."
          ></input>
          <label className={styles.form__label} htmlFor="total">
            Jumlah
          </label>
          <input
            className={styles.form__input}
            type="text"
            name="total"
            id="total"
            placeholder="2.."
          ></input>
          <button className={styles.form__button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
