import { Tooltip } from "@mui/material";
import styles from "./NavBar.module.scss";
import { navItem } from "./navItem";

export const NavBar = () => {
  return (
    <div className={styles.navContent}>
      <img alt="logo" src="images/icon/logo.svg" className={styles.logo} />
      <nav className={styles.nav}>
        {navItem.map((item) => (
          <li key={item.id} className={styles.li}>
            <Tooltip
              title={item.name}
              arrow={false}
              classes={{
                tooltip: styles.tooltip,
                popper: styles.tooltipPopper,
              }}
              placement="right"
            >
              <img alt={item.name} src={item.image} className={styles.icons} />
            </Tooltip>
          </li>
        ))}
      </nav>
      <button className={styles.button}>
        <img
          alt="logout"
          src="images/icon/logout.svg"
          className={styles.logout}
        />
      </button>
    </div>
  );
};
