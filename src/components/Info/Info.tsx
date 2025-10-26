import styles from "./Info.module.scss";
import { InfoItem } from "./ItemInfo";

export const Info = () => {
  return (
    <div className={styles.InfoCon}>
      {InfoItem.map((item) => (
        <div className={styles.box} key={item.id}>
          <div className={styles.left}>
            <img alt={item.name} src={item.image} className={styles.image} />
            <div className={styles.wrapAT}>
              <p className={styles.count}>{item.count}</p>
              <p className={styles.name}>{item.name}</p>
            </div>
          </div>
          <img
            alt="arrow"
            src="images/icon/arrow-right.svg"
            className={styles.arrow}
          />
        </div>
      ))}
    </div>
  );
};
