import React from "react";
import classNames from "classnames/bind";
import { Rate } from "antd";

import styles from "./ShopItem.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function ShopItem({ src, name, star, price, priceHidden, sale }) {
  return (
    <Link
      to={"/test2_idocnet/sofasproduct"}
      state={{ src, name, star, price, priceHidden, sale }}
    >
      <div className={cx("shopItem__wrapper")}>
        <div className={cx("shopItem__img")}>
          <img src={src} alt="img" />
          <div className={cx("shopItem__sale")}>on sale</div>
        </div>
        <div className={cx("shopItem__name")}>{name}</div>
        <div className={cx("shopItem__rate")}>
          <Rate
            disabled={true}
            className={cx("shopItem__rateStar")}
            defaultValue={star}
          />
        </div>
        <div className={cx("shopItem__price")}>
          <div className={cx("shopItem__priceHidden")}>{priceHidden}</div>
          <div className={cx("shopItem__priceShow")}>{price}</div>
        </div>
      </div>
    </Link>
  );
}

export default ShopItem;
