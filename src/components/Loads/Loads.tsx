import { Link } from "@mui/material";
import styles from "./Loads.module.scss";
import { daysData, ItemLoads, monthlyData } from "./ItemLoads";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const Loads = () => {
  return (
    <div className={styles.LCon}>
      {/* Header */}
      <div className={styles.workHeader}>
        <div className={styles.wrapH}>
          <img
            src="images/icon/loads-black.svg"
            alt="loads"
            className={styles.image}
          />
          <p className={styles.titleHeared}>My loads</p>
        </div>
        <Link className={styles.link}>View all</Link>
      </div>

      <div className={styles.content}>
        <div className={styles.box}>
          {ItemLoads.map((item) => (
            <div className={styles.boxes} key={item.id}>
              <div className={styles.BoxCon}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.count}>{item.count}</p>
              </div>
              <img
                alt="arrow"
                src="images/icon/arrow-right.svg"
                className={styles.arrow}
              />
            </div>
          ))}
        </div>

        <div className={styles.charts}>
          <div className={styles.card}>
            <h3 className={styles.datTitle}>Busiest day</h3>
            <p className={styles.booked}>Most booked on</p>
            <div className={styles.barList}>
              {daysData.map((d) => (
                <div key={d.day} className={styles.barItem}>
                  <div
                    className={styles.bar}
                    style={{ width: `${d.value}%` }}
                  ></div>
                  <span className={styles.day}>{d.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly loads */}
          <div className={styles.card}>
            <h3 className={styles.booked}>Monthly loads</h3>
            <p className={styles.booked}>Loads delivered per month</p>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={monthlyData}>
                <XAxis dataKey="name" />
                <YAxis hide />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="loads"
                  stroke="#56bbed"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
