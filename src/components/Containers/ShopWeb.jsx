import { Switch ,Route } from 'react-router-dom'
import React from 'react'
import MainLayout from './MainLayout'
import MainPage from '../MainPage/MainPage'
import Login from '../login/Login'
import Register from '../register/Register'
import AllProducts from '../product/AllProducts'

function ShopWeb() {
    return (
        <MainLayout>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/register' exact component={Register}/>
                <Route path='/products' exact component={AllProducts}/>
            </Switch>
        </MainLayout>
    )
}

export default ShopWeb
