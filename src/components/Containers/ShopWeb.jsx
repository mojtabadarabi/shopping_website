import { Switch ,Route } from 'react-router-dom'
import React from 'react'
import MainLayout from './MainLayout'
import MainPage from '../MainPage/MainPage'
import Login from '../login/Login'
import Register from '../register/Register'

function ShopWeb() {
    return (
        <MainLayout>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/register' exact component={Register}/>
            </Switch>
        </MainLayout>
    )
}

export default ShopWeb
