import styles from "./NavBar.module.scss";
import { navItem } from "./navItem";

export const NavBar = () => {
  return (
    <div className={styles.navContent}>
      <img alt="logo" src="/images/icon/logo.svg" className={styles.logo} />
      <nav className={styles.nav}>
        {navItem.map((item) => (
          <li key={item.id}>
            <img alt={item.name} src={item.image} className={styles.icons} />
          </li>
        ))}
      </nav>
      <img alt="logout" src="/images/icon/logout.svg" className={styles.logout} />
    </div>
  );
};
