import React, { useEffect, useState } from 'react'
import TopNavbar from '../Navs/TopNavbar'
import '../../App.css'
import useStyle from './style'
import Footer from '../footer/Footer'
import { useContextActions, useContextValue } from '../../context/ContextProvider'
import Loading from '../loading/Loading'

function MainLayout({children}) {
    const classes = useStyle()
    const {loading}=useContextValue()
    const [loadingPage, setloadingPage] = useState(loading)
    useEffect(() => {
        setloadingPage(loading)
    }, [loadingPage])
    return (
        <main className={classes.mainContainer}>
            {loading&&<Loading/>}
            <div style={{display:`${loading?'none':'block'}`}}>
                <TopNavbar/>
                {children}
                <Footer/>
            </div>
        </main>
    )
}

export default MainLayout
