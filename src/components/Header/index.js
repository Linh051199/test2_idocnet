import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import HeaderNav from "./HeaderNav";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("header__wrapper", "grid")}>
      <HeaderTop />
      <HeaderBottom />
      <HeaderNav />
    </div>
  );
}

export default Header;
