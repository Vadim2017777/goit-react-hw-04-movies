import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = () => (
  <ul>
    <li className={styles.Navigaton_list}>
      <NavLink
        exact
        to={"/"}
        className={styles.Navigation_link}
        activeClassName={styles.Navigation_link_active}
      >
        Home
      </NavLink>
    </li>
    <li className={styles.Navigaton_list}>
      <NavLink
        to={"/movies"}
        className={styles.Navigation_link}
        activeClassName={styles.Navigation_link_active}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
