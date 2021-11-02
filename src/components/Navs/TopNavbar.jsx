import React, { useState, useEffect } from "react";
import useStyle from "./navsStyle";
import { Link, withRouter } from "react-router-dom";
import { isLogin } from "../../utils/user";
import { useContextValue } from "../../context/ContextProvider";
import MailOutlineIcon from "@material-ui/icons/Person";
import { Box, Button, Typography } from "@material-ui/core";
import AccountMenu from "../menus/AccountMenu";
import MenuIcon from '@material-ui/icons/Menu';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function TopNavbar() {
  const [openMenu, setopenMenu] = useState(false);
  const [shownavmenu, setshownavmenu] = useState(false);
  const classes = useStyle();
  const userIsLogin = isLogin();
  const { user } = useContextValue();
    useEffect(() => {
        function handleResize() {
        if (window.innerWidth<583) {
            // setshownavmenu(true)
        }
        else{
            setshownavmenu(false)
        }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [])
  return (
    <nav className={classes.NavContainer}>
        <Button onClick={()=>setshownavmenu(prev=>!prev)} className={classes.menuicon}><MenuIcon className={classes.icon}/></Button>
        {
            shownavmenu&&(
            <Box className={classes.mainmenu} >
                <Button onClick={()=>setshownavmenu(prev=>!prev)} className={classes.menuicon}><HighlightOffIcon className={classes.icon}/></Button>
                <ul style={{flexDirection:"column",textAlign:"center",display:"flex",justifyContent:"center"}}>
                    <li>
                    <Link to="/" className={classes.link}>
                        خانه
                    </Link>
                    </li>
                    <li>
                    <Link to="/products" className={classes.link}>
                        محصولات
                    </Link>
                    </li>
                    <li>
                    <Link to="/about" className={classes.link}>
                        درباره ما
                    </Link>
                    </li>
                </ul>
            </Box>)
        }
      <ul className={classes.menu}>
        <li>
          <Link to="/" className={classes.link}>
            خانه
          </Link>
        </li>
        <li>
          <Link to="/products" className={classes.link}>
            محصولات
          </Link>
        </li>
        <li>
          <Link to="/about" className={classes.link}>
            درباره ما
          </Link>
        </li>
      </ul>

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
            <Link to="/login" className={classes.link}>
              ورود
            </Link>
          </li>
          <li>
            <Link to="/register" className={classes.link}>
              ثبت نام
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default TopNavbar;
