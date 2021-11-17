import React, { useEffect, useState } from 'react'
import TopNavbar from '../Navs/TopNavbar'
import '../../App.css'
import useStyle from './style'
import Footer from '../footer/Footer'
import { useContextActions, useContextValue } from '../../context/ContextProvider'
import Loading from '../loading/Loading'
import { getUserFromDb } from '../../Services/user'
import { getAllProducts } from '../../Services/products'
import { GlobalState } from '../../context/globalProvider/globalProvider'
import {auth} from '../../firebase.js'

function MainLayout({children}) {
    const classes = useStyle()
    const state=useContextValue()
    const dispatch = useContextActions()
    const [loadingPage, setloadingPage] = useState(state.loading)
    useEffect(async() => {
        setloadingPage(state.loading)
    }, [loadingPage])
    useEffect(async() => {
        dispatch({type:"set_loading",payload:true})
        if (auth.currentUser) {
            dispatch({type:"login_user",payload:auth.currentUser._delegate})
        }
        console.log(auth.currentUser)
        dispatch({type:"set_loading",payload:false})
    }, [])

    return (
        <main className={classes.mainContainer}>
            {state.loading&&<Loading/>}
            <div style={{display:`${state.loading?'none':'block'}`}}>
                <TopNavbar/>
                {children}
                <Footer/>
            </div>
        </main>
    )
}

export default MainLayout
