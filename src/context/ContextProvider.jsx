import React, {
    createContext,
    useContext, useEffect, useReducer
} from "react";
import _ from 'lodash'
import { getAllProducts } from "../Services/products";
import axios from "axios";
import http from "../Services/httpServices";
import { loginUser, registerUser } from "../Services/user";
import {  toast } from 'react-toastify';
import { createBrowserHistory } from 'history';

const initialState={
  user:{
      info:{},
      isAuth:false,
  },
  allproducts:null,
  loading:false
}
const reducer = (state, action) => {


  switch (action.type) {
    case 'SET_ALLPRODUCTS':
      return {...state,allproducts:action.data}
    case 'login_user':
      localStorage.setItem('user',JSON.stringify({token:'da6f465ad4f5a4dfadf45a4df',user:[action.payload]}))
      return {...state,user:{info:action.payload,isAuth:true}}
    case 'logut_user':
      console.log(action)
      localStorage.clear()
      return {...state,user:{info:{},isAuth:false}}
    case 'set_loading':
      return {...state,loading:action.payload}
    default:
      console.log('default')
      return state
  }
  
};

const getRegister=(user)=>{
  return registerUser(user)
}



const context = createContext();
const contextDispatcer = createContext();
function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <context.Provider value={state}>
      <contextDispatcer.Provider value={dispatch}>
        {children}
      </contextDispatcer.Provider>
    </context.Provider>
  );
}

export default ContextProvider;

export const useContextValue = () => useContext(context);
export const useContextActions = () => useContext(contextDispatcer);

