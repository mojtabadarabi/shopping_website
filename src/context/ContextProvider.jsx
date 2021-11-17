import React, {
    createContext,
    useContext, useEffect, useReducer
} from "react";
import _ from 'lodash'
import { getAllProducts } from "../Services/products";
import axios from "axios";
import http from "../Services/httpServices";
import { getUserFromDb, loginUser, registerUser } from "../Services/user";
import {  toast } from 'react-toastify';
import { createBrowserHistory } from 'history';
import { ShowAccountMenuChange } from "./globalProvider/globalProvider";
import {auth} from '../firebase.js'

const initialState={
  user:{
    info:{},
    isAuth:false,
  },
  allproducts:null,
  loading:false
}
const Reducer = (state, action) => {
  const {changeAccountMenuShow} = ShowAccountMenuChange()
  changeAccountMenuShow(false)
  switch (action.type) {
    case 'SET_ALLPRODUCTS':
      return {...state,allproducts:action.data}
      case 'login_user':
        console.log(action)
        const user = {
          id:action.payload.uid,
          name:action.payload.displayName,
          avatar:action.payload.photoURL,
          phone_number:action.payload.phoneNumber,
          email:action.payload.email,
        }
        
        localStorage.setItem('user',JSON.stringify(user))
        localStorage.setItem('access_token',JSON.stringify(action.payload.accessToken))
      return {...state,user:{info:action.payload,isAuth:true}}
    case 'logut_user':
      auth.signOut()
      localStorage.clear()
      return {...state,user:{info:{},isAuth:false}}
    case 'set_loading':
      return {...state,loading:action.payload}
      default:
        console.log('default')
        return state
      }
  
    };

  const context = createContext();
  const contextDispatcer = createContext();
  function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  useEffect(async() => {
    if(auth.currentUser){
      try {
        dispatch({type:'login_user',payload:auth.currentUser._delegate})
      } catch (error) {
        dispatch({type:'logut_user'})
        console.log(error)
      }
    }
  }, [])
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

