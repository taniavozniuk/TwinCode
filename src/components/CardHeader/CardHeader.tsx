import { IconButton, InputAdornment, TextField } from "@mui/material";
import styles from "./CardHeader.module.scss";
import SearchIcon from "@mui/icons-material/Search";
export const CardHeader = () => {
  return (
    <div className={styles.CHCon}>
      <h2 className={styles.title}>
        Hi Phyllis, let`s get those wheels on the ground.
      </h2>
      <TextField
        fullWidth
        className={styles.input}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end" className={styles.search}>
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />

      {/* <SearchIcon className={styles.icon} /> */}
    </div>
  );
};
