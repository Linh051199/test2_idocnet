import { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Cart.module.scss";
import { CartContext, actions } from "../../store";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import images from "../../assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function Cart() {
  const [state, dispatch] = useContext(CartContext);
  const [isEmpty, setIsEmpty] = useState(true);
  const { cartList } = state;
  console.log("arr length: ", cartList.length);
  console.log("🚀 ~ isEmpty:", isEmpty);

  useEffect(() => {
    if (cartList.length > 0) {
      setIsEmpty(false);
    }
  }, [cartList]);

  return (
    <div>
      <Header />
      <div className={cx("cart__wrapper", "grid")}>
        <div className={cx("title")}>Cart</div>
        <div className={cx("step")}>
          <div>
            <p className={cx("active")}>1</p>
            <span>Cart</span>
            <i className="fa-solid fa-chevron-right"></i>
          </div>

          <div>
            <p>2</p>
            <span>Checkout</span>
            <i className="fa-solid fa-chevron-right"></i>
          </div>

          <div>
            <p>3</p>
            <span>Order</span>
          </div>
        </div>

        {isEmpty ? (
          <div className={cx("cartEmpty")}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Your cart is currently empty.</span>
            <Link to={"/test2_idocnet/"}>
              <button>Return to shop</button>
            </Link>
          </div>
        ) : (
          <div className={cx("cart", "grid", "wide")}>
            <div className={cx("cart__info")}></div>
            <div className={cx("cart__totals")}>
              <h2> Cart totals</h2>
              <div className={cx("cart__subtotal")}>
                <p>Subtotal</p>
                <span>$1,598.00</span>
              </div>
              <span className={cx("cart__separate")}></span>
              <div className={cx("cart__shipping")}>
                <p>Shipping</p>
                <div>
                  <p>Free shipping</p>
                  <span>
                    Shipping to <strong>CA.</strong>
                  </span>
                  <a href="/#">Change address </a>
                </div>
              </div>
              <span className={cx("cart__separate")}></span>
              <div className={cx("cart__total")}>
                <p>Total</p>
                <span>$1,598.00</span>
              </div>
              <button className={cx("cart__btn")}> Procced to checkout</button>
              <div className={cx("cart__continute")}>Continute shooping</div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
