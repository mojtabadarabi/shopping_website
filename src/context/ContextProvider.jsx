import React, {
    createContext,
    useContext, useEffect, useReducer
} from "react";
import _ from 'lodash'
import { getAllProducts } from "../Services/products";
import axios from "axios";
import http from "../Services/httpServices";
import { registerUser } from "../Services/user";
import {  toast } from 'react-toastify';
import { createBrowserHistory } from 'history';

const initialState={
  user:{
      info:{},
      isAuth:false,
  },
  allproducts:null
}
const reducer = async (state, action) => {


  switch (action.type) {
    case 'SET_ALLPRODUCTS':
      return {...state,allproducts:action.data}
    case 'register_user':
      const req = await registerUser(action.payload.user)
      if (req) {
        toast.success('با موفقیت ثبت نام شد')
        action.payload.history.push('/login')
        action.payload.setuser({name:'',userName:'',phone:'',password:''})
      }
      else{
        toast.error('با مشکل مواجه شد')
      }
      return state
    default:
      console.log('default')
      return state
  }
  
};

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

