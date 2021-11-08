import React, { useEffect, useState } from 'react'
import TopNavbar from '../Navs/TopNavbar'
import '../../App.css'
import useStyle from './style'
import Footer from '../footer/Footer'
import { useContextActions, useContextValue } from '../../context/ContextProvider'
import Loading from '../loading/Loading'
import { getUserFromDb } from '../../Services/user'
import { getAllProducts } from '../../Services/products'

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
        const localUser = localStorage.getItem('user')
        if (localUser) {
            const userReq = JSON.parse(localStorage.getItem('user')).user[0]
            if(Object.keys(state.user.info).length === 0){
                try {
                    const data = await getUserFromDb(userReq)
                    console.log(data)
                    dispatch({type:"login_user",payload:data})
                } catch (error) {
                    console.log(error)
                }
            }
        }
        if(!state.allproducts){
            try {
                const {data} = await getAllProducts()
                dispatch({type:"SET_ALLPRODUCTS",data})
            } catch (error) {
                console.log(error)
            }
        }
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
