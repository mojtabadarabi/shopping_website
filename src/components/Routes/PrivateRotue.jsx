import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContextValue } from '../../context/ContextProvider';

const PrivateRoute = ({component: Component, ...rest}) => {
    const state = useContextValue()
    const isLogin=()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        if (user&&state.user.isAuth) {
            return true
        }
        else{
            return false
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