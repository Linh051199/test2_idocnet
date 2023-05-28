import React from "react";
import classNames from "classnames/bind";

import styles from "./HeaderBottom.module.scss";
import images from "../../../assets/images";

const cx = classNames.bind(styles);
function HeaderBottom() {
  return (
    <div className={cx("headerBottom_wrapper", "grid")}>
      <div className={cx("headerBottom_body", "grid", "wide")}>
        <div className={cx("headerBottom__logo")}>
          <img src={images.logo} alt="logo" width="182px" height="60px" />
        </div>
        <div className={cx("headerBottom__search")}>
          <form className={cx("headerBottom__form")}>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" />
          </form>
        </div>
        <div className={cx("headerBottom__contact")}>
          <div className={cx("headerBottom__contactItem")}>
            <i class="fa-regular fa-heart"></i>
          </div>

          <div className={cx("headerBottom__contactItem")}>
            <div className={cx("headerBottom__contactItemNumber")}>0</div>
            <img src={images.cart} alt="img" />
          </div>

          <div className={cx("headerBottom__contactItem")}>
            <div className={cx("headerBottom__contactItemNumber")}>0</div>

            <img src={images.user} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
