import styles from "./Statistics.module.css";

const Languages = ({ languages }) => {
  return (
    <ul className={styles.flatlist}>
      <span style={{ fontSize: 14 }}>Languages</span>
      {languages?.map((lng, i) => (
        <li key={i} className={styles.list}>
          {lng}
        </li>
      ))}
    </ul>
  );
};

export default Languages;
