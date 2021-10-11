import React, { useEffect } from 'react'
import TopNavbar from '../Navs/TopNavbar'
import '../../App.css'
import useStyle from './style'
import Footer from '../footer/Footer'
import { useContextActions, useContextValue } from '../../context/ContextProvider'

function MainLayout({children}) {
    const classes = useStyle()

    return (
        <main className={classes.mainContainer}>
            <TopNavbar/>
            {children}
            <Footer/>
        </main>
    )
}

export default MainLayout
