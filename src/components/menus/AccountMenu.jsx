import { useContextActions } from "../../context/ContextProvider";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { FaPowerOff } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { useEffect, useRef } from "react";
import {
  ShowAccountMenuChange,
} from "../../context/globalProvider/globalProvider";
import ToggleMenu from "./ToggleMenu";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../firebase.js";

export default function AccountMenu({usericon,close}) {
  const dispatch = useContextActions();
  const { currentUser } = useAuth()
  const {displayName,email,photoURL} = currentUser._delegate
  const handleLogout = async() => {
    dispatch({ type: "set_loading", payload: true });
    dispatch({ type: "logut_user" });
    dispatch({ type: "set_loading", payload: false });
  };
  return (
      <ToggleMenu iconRef={usericon} close={close}>
        <ul className={styles.usermenulistitem}>
          <li style={{ placeContent: "center" }}>
            <Link to="/admin">
              <button
                className={`${styles.button} ${styles.userbtn} ${styles.infobtn}`}
              >
                <span className={styles.icon}>
                  {
                    !photoURL?<FaUserCircle />:(
                      <img src={photoURL} alt="avatar" />
                    )
                  }
                </span>
                <div className={styles.info}>
                  <span>{displayName}</span>
                  <span>{email}</span>
                </div>
              </button>
            </Link>
          </li>

          <li>
            <button
              className={`${styles.button} ${styles.userbtn} ${styles.normalbtn}`}
            >
              <BsHouseDoor />
              پنل کاربری
            </button>
          </li>
          <li>
            <button
              className={`${styles.button} ${styles.userbtn} ${styles.normalbtn}`}
            >
              <AiOutlineSetting />
              تنظیمات
            </button>
          </li>
          <li onClick={handleLogout}>
            <button className={`${styles.button} ${styles.exitbtn}`}>
              <FaPowerOff />
            </button>
          </li>
        </ul>
      </ToggleMenu>
  );
}
