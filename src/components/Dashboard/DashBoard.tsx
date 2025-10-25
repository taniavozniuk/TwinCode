import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import styles from "./DashBoard.module.scss";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { SetStateAction, useState } from "react";

export const DashBoard = () => {
    const [carrier, setCarrier] = useState("");

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setCarrier(event.target.value);
  };
  return (
    <div className={styles.ConDash}>
      <p className={styles.title}>Dashboard</p>
      <div className={styles.WUser}>
        <IconButton aria-label="close" className={styles.button}>
          <HelpOutlineIcon className={styles.icon} />
        </IconButton>
        <IconButton aria-label="close" className={styles.button}>
          <NotificationsNoneIcon className={styles.icon} />
        </IconButton>

        <div className={styles.user}>
          <div className={styles.userInfo}>
            <img
              alt="user"
              className={styles.img}
              src="images/user/user.svg"
            />
            <p className={styles.name}>Phyllis Yang</p>
          </div>

          <FormControl className={styles.FormControl}>
            <InputLabel
              id="demo-simple-select-label"
              className={styles.InputLabel}
            >
              Carrier
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={carrier}
              label="Carrier"
              onChange={handleChange}
            >
              <MenuItem value={10}>FedEx</MenuItem>
              <MenuItem value={20}>UKR Poshta</MenuItem>
              <MenuItem value={30}>Nova Poshta</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};
