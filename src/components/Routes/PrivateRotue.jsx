import React, { useState,useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContextValue } from '../../context/ContextProvider';
import { getUserFromDb } from '../../Services/user';

const PrivateRoute = ({component: Component, ...rest}) => {

    const isLogin=async()=>{
        const token=JSON.parse(localStorage.getItem('access_token'))
        console.log(token)
        
    }

    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;