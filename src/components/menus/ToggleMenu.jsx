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

function useOutsideAlerter(menu,usericon,close) {
  useEffect(() => {
    function handleClickOutside(e) {
      if (menu.current && !menu.current.contains(e.target)&&usericon&&!usericon.current.contains(e.target)){
        close();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu]);
}

export default function ToggleMenu({children,iconRef,close}) {

  const menu = useRef(null);
  useOutsideAlerter(menu,iconRef,close);

  return (
    <div className={styles.usermenucontainer} ref={menu}>
      {children}
    </div>
  );
}
