import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <h2 className={styles.navbar__brand}>Covid ID</h2>
      </div>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__item}>
          <a href="#about">About</a>
        </li>
        <li className={styles.navbar__item}>
          <a href="#indonesia">Indonesia</a>
        </li>
        <li className={styles.navbar__item}>
          <a href="#provinces">Province</a>
        </li>
        <li className={styles.navbar__item}>
          <a href="#form">Form</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
