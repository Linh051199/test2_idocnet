import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import styles from "./Sofas.module.scss";
import FilterByPrice from "../Shop/FilterByPrice";
import ShopItem from "../Shop/ShopItem";
import HeaderFixed from "../../components/Header/HeaderFixed";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import SideBarAd from "../../components/SideBarAd";

const cx = classNames.bind(styles);

function Sofas() {
  const [show, setShow] = useState(false);
  const [show60, setShow60] = useState(true);
  const [show120, setShow120] = useState(false);
  const [show240, setShow240] = useState(false);
  const [show360, setShow360] = useState(false);
  const [showFilterOverlay, setShowFilterOverlay] = useState(false);
  const [showFilterNav, setShowFilterNav] = useState(false);

  const controlHeader = () => {
    if (window.scrollY > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, []);

  const handleShow60 = () => {
    setShow60(true);
    setShow120(false);
    setShow240(false);
    setShow360(false);
  };
  const handleShow120 = () => {
    setShow60(false);
    setShow120(true);
    setShow240(false);
    setShow360(false);
  };
  const handleShow240 = () => {
    setShow60(false);
    setShow120(false);
    setShow240(true);
    setShow360(false);
  };
  const handleShow360 = () => {
    setShow60(false);
    setShow120(false);
    setShow240(false);
    setShow360(true);
  };

  const handleOnClickFilter = () => {
    setShowFilterNav(true);
    setShowFilterOverlay(true);
  };
  const handleOnClickOverlay = () => {
    setShowFilterOverlay(false);
    setShowFilterNav(false);
  };
  return (
    <div>
      {show && <HeaderFixed />}
      <SideBarAd />
      <Header />
      <div className={cx("shop__container", "grid", "wide")}>
        <div className={cx("shop__title")}>sofas</div>
        <div className={cx("shop__filter")}>
          <div className={cx("shop__filterTitle")}>Showing all 3 results</div>
          <div className={cx("shop__filterContainer")}>
            <div className={cx("shop__filterShow")}>
              <div>Show:</div>
              <p
                className={show60 ? cx("activeShow") : cx("")}
                onClick={handleShow60}
              >
                60
              </p>
              <p
                className={show120 ? cx("activeShow") : cx("")}
                onClick={handleShow120}
              >
                120
              </p>
              <p
                className={show240 ? cx("activeShow") : cx("")}
                onClick={handleShow240}
              >
                240
              </p>
              <p
                className={show360 && cx("activeShow")}
                onClick={handleShow360}
              >
                360
              </p>
            </div>
            <div className={cx("shop__filterIcon")}>2</div>
            <select className={cx("shop__filterSelect")}>
              <option>Default sorting</option>
              <option>Sort by popularity</option>
              <option>Sort by rating</option>
              <option>Sort by latest</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
            </select>
            <div
              className={cx("shop__filterNav")}
              onClick={handleOnClickFilter}
            >
              <i className="fa-solid fa-list"></i>
              Filters
              {showFilterNav && (
                <div className={cx("shop__filterNavContainer")}>
                  <div className={cx("shop__filterNavMaterials")}>
                    <p className={cx("shop__filterNavMaterialsTitle")}>
                      Materials
                    </p>
                    <div className={cx("shop__filterNavMaterialsList")}>
                      <Tippy content="Aluminum">
                        <p>Aluminum</p>
                      </Tippy>
                      <Tippy content="Leather">
                        <p>Leather</p>
                      </Tippy>
                      <Tippy content="Textile">
                        <p>Textile</p>
                      </Tippy>
                      <Tippy content="Metal">
                        <p>Metal</p>
                      </Tippy>
                      <Tippy content="Velvet">
                        <p>Velvet</p>
                      </Tippy>
                      <Tippy content="Wood">
                        <p>Wood</p>
                      </Tippy>
                    </div>
                  </div>
                  <div className={cx("shop__filterNavSeparate")}></div>
                  <FilterByPrice
                    setShowFilterOverlay={setShowFilterOverlay}
                    setShowFilterNav={setShowFilterNav}
                  />
                  <div className={cx("shop__filterNavSeparate")}></div>

                  <div className={cx("shop__filterNavRoom")}>
                    <div className={cx("shop__filterNavRoomTitle")}>Room</div>
                    <div className={cx("shop__filterNavRoomItem")}>
                      <input type="checkbox" id="bedroom" />
                      <label htmlFor="bedroom">Bedroom</label>
                    </div>

                    <div className={cx("shop__filterNavRoomItem")}>
                      <input type="checkbox" id="dinning" />{" "}
                      <label htmlFor="dinning">Dining room</label>
                    </div>

                    <div className={cx("shop__filterNavRoomItem")}>
                      <input type="checkbox" id="kitchen" />{" "}
                      <label htmlFor="kitchen">Kitchen</label>
                    </div>

                    <div className={cx("shop__filterNavRoomItem")}>
                      <input type="checkbox" id="livingRoom" />
                      <label htmlFor="livingRoom"> Living room</label>
                    </div>

                    <div className={cx("shop__filterNavRoomItem")}>
                      <input type="checkbox" id="office" />{" "}
                      <label htmlFor="office">Office</label>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {showFilterOverlay && (
              <div
                className={cx("shop__filterNavOverlay")}
                onClick={handleOnClickOverlay}
              ></div>
            )}
          </div>
        </div>
        <div className={cx("shop__list")}>
          <div className={cx("shop__item")}>
            <ShopItem
              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic20-800x800.webp"
              name="Cosy RTV sofa"
              star="5"
              price="$1,600.00"
              priceHidden="$1,300.00"
            />
          </div>

          <div className={cx("shop__item")}>
            <ShopItem
              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic21-800x800.webp"
              name="Puffy sofa Orlando"
              star="4"
              price="$1,670.00"
              priceHidden="$1,599.00"
            />
          </div>

          <div className={cx("shop__item")}>
            <ShopItem
              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic19-800x800.webp"
              name="Sleeper sofa Cubic"
              star="3"
              price="$1,299.00"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sofas;
