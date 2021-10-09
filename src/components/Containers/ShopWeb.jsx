import { Switch ,Route } from 'react-router-dom'
import React from 'react'
import MainLayout from './MainLayout'
import MainPage from '../MainPage/MainPage'
import Login from '../login/Login'
import Register from '../register/Register'
import AllProducts from '../product/AllProducts'
import About from '../about/About'

function ShopWeb() {
    return (
        <MainLayout>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/register' exact component={Register}/>
                <Route path='/products' exact component={AllProducts}/>
                <Route path='/about' exact component={About}/>
            </Switch>
        </MainLayout>
    )
}

export default ShopWeb
