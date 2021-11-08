import React, { useState,useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContextValue } from '../../context/ContextProvider';
import { getUserFromDb } from '../../Services/user';

const PrivateRoute = ({component: Component, ...rest}) => {

    const isLogin=async()=>{
        const userReq=JSON.parse(localStorage.getItem('user'))
        if(userReq!==null){
          try {
            const data = await getUserFromDb(userReq.user[0])
            return true
          } catch (error) {
            console.log(error)
            return false
          }
        }
        
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