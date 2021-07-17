/** @format */

import React from "react";
import { routes } from "../../routes";
import NavigationOption from "../navigationOption/NavigationOption";
import { AiFillHome, AiOutlineLink } from "react-icons/ai";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavigationOption
        Icon={AiOutlineLink}
        title="My Blog"
        direction={routes.home}
      />
      <ul className={styles.navbar__list}>
        <NavigationOption
          Icon={AiFillHome}
          title="Strona główna"
          direction={routes.home}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
