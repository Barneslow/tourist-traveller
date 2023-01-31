import styles from "./Statistics.module.css";

const Statistic = ({ text, title }) => {
  return (
    <div>
      <span className={styles.title}>{title}</span>
      <p className={styles.statistic}>{text}</p>
    </div>
  );
};

export default Statistic;
