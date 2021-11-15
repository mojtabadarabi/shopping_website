import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { isLogin } from "../../utils/user";
import { useContextValue } from "../../context/ContextProvider";
import AccountMenu from "../menus/AccountMenu";
import { BsCart3 } from "react-icons/bs";
import { IoIosLogIn } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

import styles from "./styles.module.css";
import {
  GlobalState,
  ShowAccountMenuChange,
  ShowCartMenuChange,
} from "../../context/globalProvider/globalProvider";
import CartToggleMenu from "../menus/CartToggleMenu";

function useOutsideAlerter(
  menu,
  openMenuResponsive,
  closeMenu,
  handleClickOutside,
  icon
) {
  useEffect(() => {
    icon.current.addEventListener("click", openMenuResponsive);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", closeMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", closeMenu);
    };
  }, [menu]);
}
function TopNavbar() {
  const { changeAccountMenuShow } = ShowAccountMenuChange();
  const { changeCartMenuShow } = ShowCartMenuChange();
  const [openMenu, setopenMenu] = useState(false);
  const userIsLogin = isLogin();
  const { user } = useContextValue();
  const menu = useRef(null);
  const usericon = useRef(null);
  const cartIcon = useRef(null);
  const icon = useRef(null);
  const { showAccountMenu ,showCartMenu} = GlobalState();

  function openMenuResponsive(e) {
    icon.current.classList.toggle(styles.active);
    menu.current.classList.toggle(styles.active);
  }
  function closeMenu() {
    icon.current.classList.remove(styles.active);
    menu.current.classList.remove(styles.active);
  }
  function handleClickOutside(event) {
    if (
      menu &&
      !menu.current.contains(event.target) &&
      icon &&
      !icon.current.contains(event.target)
    ) {
      closeMenu();
    }
  }
  useOutsideAlerter(
    menu,
    openMenuResponsive,
    closeMenu,
    handleClickOutside,
    icon
  );
  return (
    <nav className={styles.NavContainer}>
      <ul className={styles.menu} ref={menu}>
        <li>
          <NavLink to="/" onClick={() => closeMenu()}>
            <button className={styles.menubtn}>خانه</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" onClick={() => closeMenu()}>
            <button className={styles.menubtn}>محصولات</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => closeMenu()}>
            <button className={styles.menubtn}>درباره ما</button>
          </NavLink>
        </li>
      </ul>
      <div className={styles.hamburger} ref={icon}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <ul>
        {userIsLogin ? (
          <React.Fragment>
            <li
              ref={usericon}
              style={{ position: "relative" }}
              onClick={() => changeAccountMenuShow(prev=>!prev)}
            >
              <button className={styles.userbtn}>
                <FaRegUserCircle />
              </button>
            </li>
            {showAccountMenu && (
              <AccountMenu usericon={usericon} close={()=>changeAccountMenuShow(false)}/>
            )}
          </React.Fragment>
        ) : (
          <li>
            <NavLink to="/login">
              <button className={styles.userbtn}>
                <IoIosLogIn />
              </button>
            </NavLink>
          </li>
        )}
        <li>
          <React.Fragment>
            <li
              ref={cartIcon}
              style={{ position: "relative" }}
              onClick={() => changeCartMenuShow(prev=>!prev)}
            >
              <button className={styles.userbtn}>
              <BsCart3 />
              </button>
            </li>
            {showCartMenu && (
              <CartToggleMenu close={()=>changeCartMenuShow(false)} usericon={cartIcon} />
            )}
          </React.Fragment>
        </li>
      </ul>
    </nav>
  );
}

export default TopNavbar;
