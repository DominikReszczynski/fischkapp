import React from "react";
import styles from "./AppLayout.module.css";
interface AppLayoutProps {
  children: any;
}
export const AppLayout: React.FC<AppLayoutProps> = (props) => (
  <div className={styles.layout}>{props.children}</div>
);
