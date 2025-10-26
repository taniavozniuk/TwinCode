import { Button, Link } from "@mui/material";
import styles from "./WorkingLoad.module.scss";

export const WorkingLoad = () => {
  return (
    <div className={styles.WCon}>
      <div className={styles.workHeader}>
        <div className={styles.wrapH}>
          <img
            src="images/icon/loads-black.svg"
            alt="loads"
            className={styles.image}
          />
          <p className={styles.titleHeared}>Working load</p>
        </div>

        <Link className={styles.link}>View all</Link>
      </div>
      <div className={styles.mainCon}>
        <p className={styles.mainT}>Book a load</p>
        <p className={styles.MainD}>To see results, find a load and mark it as "booked".</p>
        <Button className={styles.button}>Find Loads</Button>
      </div>
    </div>
  );
};
