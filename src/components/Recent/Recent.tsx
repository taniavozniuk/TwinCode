import { Link } from "@mui/material";
import styles from "./Recent.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { ItemRecent } from "./ItemRecent";

export const Recent = () => {
  return (
    <div className={styles.RCon}>
      <div className={styles.workHeader}>
        <div className={styles.wrapH}>
          <SearchIcon className={styles.image} />
          <p className={styles.titleHeared}>Recent searches</p>
        </div>
        <Link className={styles.link}>View all</Link>
      </div>
      <div className={styles.mainCon}>
        {ItemRecent.map((item) => (
          <div className={styles.city} key={item.id}>
            <h3 className={styles.start}>
              {item.start}
              <span className={styles.span}>&rsaquo;</span>
              {item.end}
            </h3>
            <p className={styles.miles}>{item.mils}</p>
            <p className={styles.types}>
              {item.tyles.map((type) => (
                <span key={type} className={styles.typeTag}>
                  {type}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
