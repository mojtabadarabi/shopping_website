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
  allproducts:null
}
const reducer = (state, action) => {


  switch (action.type) {
    case 'SET_ALLPRODUCTS':
      return {...state,allproducts:action.data}
    case 'register_user':
      const registerReq = getRegister(action.payload.user)
      if (registerReq) {
        toast.success('با موفقیت ثبت نام شد')
        action.payload.history.push('/login')
        action.payload.setuser({name:'',userName:'',phone:'',password:''})
      }
      return state
    case 'login_user':
      localStorage.setItem('user',JSON.stringify({token:'da6f465ad4f5a4dfadf45a4df',user:[action.payload]}))
      return {...state,user:{info:action.payload,isAuth:true}}
      
    case 'logut_user':
      console.log(action)
      localStorage.clear()
      return {...state,user:{info:{},isAuth:false}}
      
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

