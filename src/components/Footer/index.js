import React from "react";
import classNames from "classnames/bind";

import styles from "./Footer.module.scss";
import images from "../../assets/images";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper", "grid", "wide")}>
      <div className={cx("container")}>
        <div className={cx("footer__separate")}>
          <img src={images.footerLogo} alt="img" />
        </div>
        <div className={cx("footer__body")}>
          <div className={cx("footer__contact")}>
            <div className={cx("footer__contactTitle")}>
              Spaces that improve your quality of life - Request an estimate
            </div>
            <div className={cx("footer__contactInfo")}>
              <div className={cx("footer__contactInfoItem")}>
                <p>Phone</p>
                <a>+61 (0) 3 8376 6284</a>
              </div>
              <div className={cx("footer__contactInfoItem")}>
                <p>Mail</p>
                <a>noreply@envato.com</a>
              </div>
            </div>
          </div>
          <div className={cx("footer__info")}>
            <a>- shop</a>
            <a>- projects</a>
            <a>- faq</a>
            <a>- services</a>
            <a>- about us</a>
            <a>- contact</a>
          </div>
          <div className={cx("footer__info")}>
            <a>- chairs</a>
            <a>- beds</a>
            <a>- table</a>
            <a>- sofas</a>
          </div>
        </div>
        <div className={cx("footer__author")}>
          <div className={cx("footer__authorLink")}>
            <div>
              © 2023 Betheme by <a>Muffin group</a> | All Rights Reserved |
              Powered by
              <a> WordPress</a>
            </div>
          </div>
          <div className={cx("footer__authorIcon")}>
            <img src={images.footerPayPal} alt="img" />
            <img src={images.footerVisa} alt="img" />
            <img src={images.footerMastercard} alt="img" />
            <img src={images.footerMaestro} alt="img" />
            <img src={images.footerStripe} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
