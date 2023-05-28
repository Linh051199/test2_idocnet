import React from "react";
import classNames from "classnames/bind";

import styles from "./HeaderTop.module.scss";
import images from "../../../assets/images";

const cx = classNames.bind(styles);
function HeaderTop() {
  return (
    <div className={cx("headerTop__wrapper", "grid")}>
      <div className={cx("headerTop__body", "grid", "wide")}>
        <div className={cx("headerTop__welcome")}>Welcome to Our Store!</div>
        <div className={cx("headerTop__highLight")}>
          <div className={cx("headerTop__highLightItem")}>
            <img src={images.air} />
            <p>Free delivery over $200</p>
          </div>
          <div className={cx("headerTop__highLightItem")}>
            <img src={images.coin} />
            <p>Money back guarantee</p>
          </div>
          <div className={cx("headerTop__highLightItem")}>
            <img src={images.tag} />
            <p>Weekly new arrivals</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
