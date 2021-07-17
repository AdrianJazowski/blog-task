/** @format */

import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavigationOptions.module.css";

const NavigationOption = ({ direction, Icon, title }) => {
  return (
    <li className={styles.navigation}>
      <Link className={styles.navigation__link} to={direction}>
        <Icon className={styles.navigation__link__icon} />
        <span className={styles.navigation__link__title}>{title}</span>
      </Link>
    </li>
  );
};

export default NavigationOption;
