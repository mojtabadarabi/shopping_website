import React, { useState, useEffect, useRef } from "react";
import useStyle from "./navsStyle";
import { Link, NavLink, withRouter } from "react-router-dom";
import { isLogin } from "../../utils/user";
import { useContextValue } from "../../context/ContextProvider";
import MailOutlineIcon from "@material-ui/icons/Person";
import { Box, Button, Typography } from "@material-ui/core";
import AccountMenu from "../menus/AccountMenu";
import MenuIcon from '@material-ui/icons/Menu';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { BsCart3 } from 'react-icons/bs';
import { IoIosLogIn } from 'react-icons/io';

import styles from './styles.module.css'

function TopNavbar() {
  const [openMenu, setopenMenu] = useState(false);
  const [shownavmenu, setshownavmenu] = useState(false);
  const classes = useStyle();
  const userIsLogin = isLogin();
  const { user } = useContextValue();
  const menu = useRef(null)
  const icon = useRef(null)
  
  function openMenuResponsive(e) {
    icon.current.classList.toggle(styles.active);
    menu.current.classList.toggle(styles.active);
  }
  function closeMenu() {
    icon.current.classList.remove(styles.active);
    menu.current.classList.remove(styles.active);
  }
  function handleClickOutside(event) {
    if (menu.current && !menu.current.contains(event.target)&&!icon.current.contains(event.target)) {
      closeMenu()
    }
    
  }
  useEffect(() => {
      icon.current.addEventListener("click", openMenuResponsive);
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("scroll", closeMenu);
        return function cleanup() {
          icon.current.removeEventListener("click", openMenuResponsive);
          document.addEventListener("mousedown", handleClickOutside);
          document.addEventListener("scroll", closeMenu);
        };
}, []);
  return (
    <nav className={classes.NavContainer}>
      <ul className={styles.menu} ref={menu}>
        <li >
          <NavLink  to='/' onClick={()=>closeMenu()}>
          <button className={styles.menubtn}>
            خانه

          </button>
          </NavLink>
        </li>
        <li >
          <NavLink  to="/products" onClick={()=>closeMenu()}>
          <button className={styles.menubtn}>
            محصولات

          </button>
          </NavLink>
        </li>
        <li >
          <NavLink  to="/about" onClick={()=>closeMenu()}>
          <button className={styles.menubtn} >
            درباره ما

          </button>
          </NavLink>
        </li>
      </ul>
      <div className={styles.hamburger} ref={icon}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
      </div>
      {userIsLogin ? (
        <ul>
          <li
            style={{ position: "relative" }}
            onClick={() => setopenMenu((prevState) => !prevState)}
          >
            <Box className={classes.link}>
              <MailOutlineIcon className={classes.userIcon} />
                <Typography variant='h6' className={classes.userinfo} >
                    {user.info.name} {"\u00A0"}
                    خوش آمدید
                </Typography>
            </Box>
            {openMenu && <AccountMenu open={openMenu} setOpen={setopenMenu} />}
          </li>
        </ul>
      ) : (
        <ul>
        <li>
          <NavLink to="/login" >
          <button className={styles.userbtn}>
          <IoIosLogIn/>

          </button>
          </NavLink>
        </li>
          
          <li >
            <button className={styles.userbtn}>
              <BsCart3/>
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default TopNavbar;
