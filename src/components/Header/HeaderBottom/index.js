import React, { useState } from "react";
import classNames from "classnames/bind";
import isEmpty from "validator/lib/isEmpty";

import styles from "./HeaderBottom.module.scss";
import images from "../../../assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function HeaderBottom() {
  const [showLoinForm, setShowLoinForm] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [messErr, setMessErr] = useState({});

  const handleOnChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const validateAll = () => {
    const errArr = {};
    if (isEmpty(userName)) {
      errArr.userName = "Please enter your Username or Email!";
    }
    if (isEmpty(password)) {
      errArr.password = "Please enter your password!";
    }

    console.log(errArr);
    setMessErr(errArr);
    if (Object.keys(errArr).length > 0) return false;
    return true;
  };

  const handleOnSubmitFromLogin = () => {
    const isValid = validateAll();
    if (!isValid) return;
  };

  return (
    <div className={cx("headerBottom_wrapper", "grid")}>
      <div className={cx("headerBottom_body", "grid", "wide")}>
        <Link to={"/test2_idocnet"}>
          <div className={cx("headerBottom__logo")}>
            <img src={images.logo} alt="logo" width="182px" height="60px" />
          </div>
        </Link>
        <div className={cx("headerBottom__search")}>
          <form className={cx("headerBottom__form")}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" />
          </form>
        </div>
        <div className={cx("headerBottom__contact")}>
          <div className={cx("headerBottom__contactItem")}>
            <i className="fa-regular fa-heart"></i>
          </div>

          <div
            className={cx("headerBottom__contactItem")}
            onClick={() => setShowCart(true)}
          >
            <div className={cx("headerBottom__contactItemNumber")}>0</div>
            <img src={images.cart} alt="img" />
          </div>

          <div
            className={cx("headerBottom__contactItem")}
            onClick={() => setShowLoinForm(!showLoinForm)}
          >
            <div className={cx("headerBottom__contactItemNumber")}>0</div>

            <img src={images.user} alt="img" />
          </div>
        </div>
        {showLoinForm && (
          <div className={cx("headerBottom__Login")}>
            <div className={cx("headerBottom__formLoginHeader")}>
              <p>Login</p>
              <i
                class="fa-solid fa-xmark"
                onClick={() => setShowLoinForm(false)}
              ></i>
            </div>
            <div className={cx("headerBottom__LoginForm")}>
              <form>
                <i class="fa-solid fa-user"></i>
                <input
                  type="text"
                  placeholder="Username or email*"
                  onChange={handleOnChangeUserName}
                />
              </form>
              <p>{messErr.userName}</p>
              <form>
                <i class="fa-solid fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password*"
                  onChange={handleOnChangePassword}
                />
              </form>
              <p>{messErr.password}</p>
              <div className={cx("headerBottom__LoginFormCheckBox")}>
                <input type="checkbox" /> Remember me
              </div>
            </div>
            <div
              className={cx("headerBottom__LoginBtn")}
              onClick={handleOnSubmitFromLogin}
            >
              Login
            </div>
            <div className={cx("headerBottom__LoginLostPass")}>
              Lost your password?
            </div>
          </div>
        )}

        {showCart && (
          <>
            <div className={cx("headerBottom__overlay")}></div>

            <div className={cx("headerBottom__cart")}>
              <div className={cx("headerBottom__cartHeader")}>
                <i
                  class="fa-solid fa-xmark"
                  onClick={() => setShowCart(false)}
                ></i>
                <img src={images.buyBlack} alt="img" />
                <p>CART</p>
              </div>
              <div className={cx("headerBottom__cartBody")}>
                <img src={images.buyBlack} alt="img" />
                <p>Your cart is currently empty.</p>
              </div>
              <div className={cx("headerBottom__cartFooter")}>
                <div className={cx("headerBottom__subTotal")}>
                  <span>Subtotal</span>
                  <p>$0.00</p>
                </div>
                <div className={cx("headerBottom__total")}>
                  <span>Total</span>
                  <p>$0.00</p>
                </div>
                <div className={cx("headerBottom__checkoutBtn")}>
                  Proceed to checkout
                </div>
                <div className={cx("headerBottom__viewCart")}>View cart</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default HeaderBottom;
