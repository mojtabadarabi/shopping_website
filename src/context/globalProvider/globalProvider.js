import React, { useEffect } from 'react'
import { createContext, useContext, useState } from "react";

const GlobalProviderContext = createContext()
const GlobalProviderContextSetState = createContext()


function GlobalProvider({children}) {
    const [showAccountMenu, setshowAccountMenu] = useState(false)
    const [showCartMenu, setshowCartMenu] = useState(false)

    return (
        <GlobalProviderContext.Provider value={{showAccountMenu,showCartMenu}}>
            <GlobalProviderContextSetState.Provider value={{setshowAccountMenu,setshowCartMenu}}>
                {children}
            </GlobalProviderContextSetState.Provider>
        </GlobalProviderContext.Provider>
    )}
// check if undefined
function GlobalState(){
    const {showAccountMenu,showCartMenu} = useContext(GlobalProviderContext);
    if (showAccountMenu===undefined||showCartMenu===undefined) {
        throw new Error("render <globalProvider /> at top of the tree");
    }
    return {
        showAccountMenu,
        showCartMenu
    }
}

function GlobalSetState(){
    const {setshowAccountMenu,setshowCartMenu} = useContext(GlobalProviderContextSetState)
    if (setshowAccountMenu===undefined||setshowCartMenu===undefined) {
        throw new Error("render <globalProvider /> at top of the tree");
    }
    return {
        setshowAccountMenu,
        setshowCartMenu
    }
}
// !---- check if undefined ----!
// change states context ---->
function ShowAccountMenuChange(){
    const {setshowAccountMenu} = GlobalSetState()
    const changeAccountMenuShow=(bool)=>{
        setshowAccountMenu(bool)
    }
    return {changeAccountMenuShow}
}
function ShowCartMenuChange(){
    const {setshowCartMenu} = GlobalSetState()
    const changeCartMenuShow=(bool)=>{
        setshowCartMenu(bool)
    }
    return {changeCartMenuShow}
}
// change states --->
export {
    GlobalState,
    ShowAccountMenuChange,
    ShowCartMenuChange
}
export default GlobalProvider
