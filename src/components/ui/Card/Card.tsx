import styles from "./Card.module.css";

interface CardProps {
  children: JSX.Element[] | JSX.Element;
}

const Card = ({ children }: CardProps) => {
  return <div className={styles.Card}>{children}</div>;
};

export default Card;
