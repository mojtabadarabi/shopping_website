import { useContextActions } from "../../context/ContextProvider";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { FaPowerOff } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { useEffect, useRef } from "react";
import {
  ShowAccountMenuChange,
} from "../../context/globalProvider/globalProvider";
import ToggleMenu from "./ToggleMenu";
import picture1 from '../../assets/images/product1.png'

export default function CartToggleMenu({usericon,close}) {

  return (
      <ToggleMenu iconRef={usericon} close={close}>
        <ul className={`${styles.usermenulistitem} ${styles.cartmenulistitem}`}>
          <li>
            <div
              className={`${styles.cartrow} ${styles.userbtn} ${styles.normalbtn}`}
            >
              <h3 className={styles.producttitle}>
                  نام محصول
              </h3>
              <div className={styles.flexContainer}>
                  <div className={styles.imagecontainer}>
                    <img src={picture1}/>
                  </div >
                  <div className={`${styles.infoContainer}`}>
                      <li>سایز xl</li>
                      <li>رنگ  سفید</li>
                      <li>وزن 240گرم</li>
                  </div>
                  <div className={styles.priceContainer}>
                    <h5>200 تومان</h5>
                    <h5>150 تومان</h5>
                  </div>
              </div>
            <div className={styles.countContainer}>
                <button><AiOutlineMinusCircle/></button>
                <span>3</span>
                <button ><AiOutlinePlusCircle/></button>
            </div>
            </div>
          </li>
          <li>
            <div
              className={`${styles.cartrow} ${styles.userbtn} ${styles.normalbtn}`}
            >
              <h3 className={styles.producttitle}>
                  نام محصول
              </h3>
              <div className={styles.flexContainer}>
                  <div className={styles.imagecontainer}>
                    <img src={picture1}/>
                  </div >
                  <div className={`${styles.infoContainer}`}>
                      <li>سایز xl</li>
                      <li>رنگ  سفید</li>
                      <li>وزن 240گرم</li>
                  </div>
                  <div className={styles.priceContainer}>
                    <h5>200 تومان</h5>
                    <h5>150 تومان</h5>
                  </div>
              </div>
            <div className={styles.countContainer}>
                <button><AiOutlineMinusCircle/></button>
                <span>3</span>
                <button ><AiOutlinePlusCircle/></button>
            </div>
            </div>
          </li>
          <li>
            <div
              className={`${styles.cartrow} ${styles.userbtn} ${styles.normalbtn}`}
            >
              <h3 className={styles.producttitle}>
                  نام محصول
              </h3>
              <div className={styles.flexContainer}>
                  <div className={styles.imagecontainer}>
                    <img src={picture1}/>
                  </div >
                  <div className={`${styles.infoContainer}`}>
                      <li>سایز xl</li>
                      <li>رنگ  سفید</li>
                      <li>وزن 240گرم</li>
                  </div>
                  <div className={styles.priceContainer}>
                    <h5>200 تومان</h5>
                    <h5>150 تومان</h5>
                  </div>
              </div>
            <div className={styles.countContainer}>
                <button><AiOutlineMinusCircle/></button>
                <span>3</span>
                <button ><AiOutlinePlusCircle/></button>
            </div>
            </div>
          </li>
          <li>
            <div
              className={`${styles.cartrow} ${styles.userbtn} ${styles.normalbtn}`}
            >
              <h3 className={styles.producttitle}>
                  نام محصول
              </h3>
              <div className={styles.flexContainer}>
                  <div className={styles.imagecontainer}>
                    <img src={picture1}/>
                  </div >
                  <div className={`${styles.infoContainer}`}>
                      <li>سایز xl</li>
                      <li>رنگ  سفید</li>
                      <li>وزن 240گرم</li>
                  </div>
                  <div className={styles.priceContainer}>
                    <h5>200 تومان</h5>
                    <h5>150 تومان</h5>
                  </div>
              </div>
            <div className={styles.countContainer}>
                <button><AiOutlineMinusCircle/></button>
                <span>3</span>
                <button ><AiOutlinePlusCircle/></button>
            </div>
            </div>
          </li>
          <li>
            <div
              className={`${styles.cartrow} ${styles.userbtn} ${styles.normalbtn}`}
            >
              <h3 className={styles.producttitle}>
                  نام محصول
              </h3>
              <div className={styles.flexContainer}>
                  <div className={styles.imagecontainer}>
                    <img src={picture1}/>
                  </div >
                  <div className={`${styles.infoContainer}`}>
                      <li>سایز xl</li>
                      <li>رنگ  سفید</li>
                      <li>وزن 240گرم</li>
                  </div>
                  <div className={styles.priceContainer}>
                    <h5>200 تومان</h5>
                    <h5>150 تومان</h5>
                  </div>
              </div>
            <div className={styles.countContainer}>
                <button><AiOutlineMinusCircle/></button>
                <span>3</span>
                <button ><AiOutlinePlusCircle/></button>
            </div>
            </div>
          </li>
          <li>
            <div
              className={`${styles.cartrow} ${styles.userbtn} ${styles.normalbtn}`}
            >
              <h3 className={styles.producttitle}>
                  نام محصول
              </h3>
              <div className={styles.flexContainer}>
                  <div className={styles.imagecontainer}>
                    <img src={picture1}/>
                  </div >
                  <div className={`${styles.infoContainer}`}>
                      <li>سایز xl</li>
                      <li>رنگ  سفید</li>
                      <li>وزن 240گرم</li>
                  </div>
                  <div className={styles.priceContainer}>
                    <h5>200 تومان</h5>
                    <h5>150 تومان</h5>
                  </div>
              </div>
            <div className={styles.countContainer}>
                <button><AiOutlineMinusCircle/></button>
                <span>3</span>
                <button ><AiOutlinePlusCircle/></button>
            </div>
            </div>
          </li>
          <li>
            <div
              className={`${styles.cartrow} ${styles.userbtn} ${styles.normalbtn}`}
            >
              <h3 className={styles.producttitle}>
                  نام محصول
              </h3>
              <div className={styles.flexContainer}>
                  <div className={styles.imagecontainer}>
                    <img src={picture1}/>
                  </div >
                  <div className={`${styles.infoContainer}`}>
                      <li>سایز xl</li>
                      <li>رنگ  سفید</li>
                      <li>وزن 240گرم</li>
                  </div>
                  <div className={styles.priceContainer}>
                    <h5>200 تومان</h5>
                    <h5>150 تومان</h5>
                  </div>
              </div>
            <div className={styles.countContainer}>
                <button><AiOutlineMinusCircle/></button>
                <span>3</span>
                <button ><AiOutlinePlusCircle/></button>
            </div>
            </div>
          </li>
          <li>
            <div
              className={`${styles.cartrow} ${styles.userbtn} ${styles.normalbtn}`}
            >
              <h3 className={styles.producttitle}>
                  نام محصول
              </h3>
              <div className={styles.flexContainer}>
                  <div className={styles.imagecontainer}>
                    <img src={picture1}/>
                  </div >
                  <div className={`${styles.infoContainer}`}>
                      <li>سایز xl</li>
                      <li>رنگ  سفید</li>
                      <li>وزن 240گرم</li>
                  </div>
                  <div className={styles.priceContainer}>
                    <h5>200 تومان</h5>
                    <h5>150 تومان</h5>
                  </div>
              </div>
            <div className={styles.countContainer}>
                <button><AiOutlineMinusCircle/></button>
                <span>3</span>
                <button ><AiOutlinePlusCircle/></button>
            </div>
            </div>
          </li>
          <li>
            <div
              className={`${styles.cartrow} ${styles.userbtn} ${styles.normalbtn}`}
            >
              <h3 className={styles.producttitle}>
                  نام محصول
              </h3>
              <div className={styles.flexContainer}>
                  <div className={styles.imagecontainer}>
                    <img src={picture1}/>
                  </div >
                  <div className={`${styles.infoContainer}`}>
                      <li>سایز xl</li>
                      <li>رنگ  سفید</li>
                      <li>وزن 240گرم</li>
                  </div>
                  <div className={styles.priceContainer}>
                    <h5>200 تومان</h5>
                    <h5>150 تومان</h5>
                  </div>
              </div>
            <div className={styles.countContainer}>
                <button><AiOutlineMinusCircle/></button>
                <span>3</span>
                <button ><AiOutlinePlusCircle/></button>
            </div>
            </div>
          </li>
          <li>
            <div
              className={`${styles.cartrow} ${styles.userbtn} ${styles.normalbtn}`}
            >
              <h3 className={styles.producttitle}>
                  نام محصول
              </h3>
              <div className={styles.flexContainer}>
                  <div className={styles.imagecontainer}>
                    <img src={picture1}/>
                  </div >
                  <div className={`${styles.infoContainer}`}>
                      <li>سایز xl</li>
                      <li>رنگ  سفید</li>
                      <li>وزن 240گرم</li>
                  </div>
                  <div className={styles.priceContainer}>
                    <h5>200 تومان</h5>
                    <h5>150 تومان</h5>
                  </div>
              </div>
            <div className={styles.countContainer}>
                <button><AiOutlineMinusCircle/></button>
                <span>3</span>
                <button ><AiOutlinePlusCircle/></button>
            </div>
            </div>
          </li>
        </ul>
        <button className={`${styles.button} ${styles.buybtn}`}>
            تسویه حساب
        </button>
      </ToggleMenu>
  );
}
