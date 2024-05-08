import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <nav className={styles.footer}>
      <div>
        <h3 className={styles.footer__brand}>Covid ID</h3>
        <p className={styles.footer__credit}>Developed by @raihandotmd</p>
      </div>
      <ul className={styles.footer__list}>
        <li className={styles.footer__item}>
          <a href="https://github.com/raihandotmd" target="_blank">
            <FaGithub />
            GitHub
          </a>
        </li>
        <li className={styles.footer__item}>
          <a href="www.linkedin.com/in/raihandotmd" target="_blank">
            <FaLinkedin />
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
