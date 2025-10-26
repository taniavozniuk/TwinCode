import { useState } from "react";
import { IconButton, Link } from "@mui/material";
import styles from "./InfoMessage.module.scss";
import CloseIcon from "@mui/icons-material/Close";

export const InfoMessage = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className={styles.ConMessage}>
      <p className={styles.hi}>
        Hi, Phyllis! You have 14 days left in your trial.
      </p>
      <div className={styles.WTextBt}>
        <Link className={styles.link}>Ghost Link</Link>
        <IconButton
          aria-label="close"
          className={styles.closeBtn}
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon />
        </IconButton>
      </div>
    </div>
  );
};
