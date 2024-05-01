import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <h2 className={styles.navbar__brand}>Covid ID</h2>
      </div>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__item}>About</li>
        <li className={styles.navbar__item}>Indonesia</li>
        <li className={styles.navbar__item}>Province</li>
      </ul>
    </nav>
  );
};

export default Navbar;
