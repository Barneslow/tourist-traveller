import styles from "./Statistics.module.css";

const Statistic = ({ text, title }) => {
  return (
    <div>
      <span style={{ fontSize: 14, textAlign: "center" }}>{title}</span>
      <p className={styles.statistic}>{text}</p>
    </div>
  );
};

export default Statistic;
