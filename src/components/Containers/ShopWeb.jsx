import { Switch ,Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import MainLayout from './MainLayout'
import MainPage from '../MainPage/MainPage'
import Login from '../login/Login'
import Register from '../register/Register'
import AllProducts from '../product/AllProducts'
import About from '../about/About'
import ContextProvider, { useContextActions, useContextValue } from '../../context/ContextProvider'
import http from '../../Services/httpServices'
import PublicRoute from '../Routes/PublicRoutes'
import PrivateRoute from '../Routes/PrivateRotue'

function ShopWeb() {

    return (

        <MainLayout>
            <Switch>
                <PublicRoute restricted={false} path='/' exact component={MainPage}/>
                <PublicRoute restricted={true} path='/login' exact component={Login}/>
                <PublicRoute restricted={true} path='/register' exact component={Register}/>
                <PublicRoute restricted={false} path='/products' exact component={AllProducts}/>
                <PublicRoute restricted={false} path='/about' exact component={About}/>
            </Switch>
        </MainLayout>
    )
}

export default ShopWeb
