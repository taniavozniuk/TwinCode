import styles from "./Advertis.module.scss";

export const Advertis = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.textContent}>
        <p className={styles.badge}>Premium</p>
        <h3>
          Premium Services
          <br />
          For Maximum Satisfaction
        </h3>
        <p className={styles.update}>+20 Update features</p>
        <button className={styles.button}>Try Now</button>
      </div>
      <img
        src="images/Group.png"
        alt="container"
        className={styles.image}
      />
    </div>
  );
};
