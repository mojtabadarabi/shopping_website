import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContextValue } from '../../context/ContextProvider';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
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
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;