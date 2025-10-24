import { IconButton } from "@mui/material";
import styles from "./InfoMessage.module.scss";
import CloseIcon from "@mui/icons-material/Close";

export const InfoMessage = () => {
  return (
    <div className={styles.ConMessage}>
      <p className={styles.hi}>
        Hi, Phyllis! You have 14 days left in your trial.
      </p>
      <div className={styles.WTextBt}>
        <p className={styles.link}>Ghost Link</p>
        <IconButton aria-label="close" className={styles.closeBtn}>
          <CloseIcon />
        </IconButton>
      </div>
    </div>
  );
};
