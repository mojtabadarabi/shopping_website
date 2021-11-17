
import { CardMedia, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import useStyle from './style'
import loginImage from '../../assets/images/login.png'
import { useContextActions, useContextValue } from '../../context/ContextProvider'
import { withRouter } from 'react-router'
import { toast } from 'react-toastify'
import { loginUser, registerUser } from '../../Services/user'
import { useAuth } from '../../context/AuthContext'
import {db} from '../../firebase.js'
import { getAuth } from "firebase/auth";

function Login({history}) {
        const auth = getAuth();
        const classes = useStyle()
        const { login ,signUpWithGoogle} = useAuth()
        const dispatch = useContextActions()
        const [user, setuser] = useState({userName:'',password:''})
        async function submitLoginHandler(e) {
            e.preventDefault()
            if(user.name!==''&&user.name!==' '&&user.userName!==''&&user.userName!==' '&&user.phone!==''&&user.phone!==' '&&user.password!==''&&user.password!==' '){
                dispatch({type:'set_loading',payload:true})
                try {
                    const userReq = await login(user.userName,user.password)
                    dispatch({type:'login_user',payload:userReq.user._delegate})
                    history.push('/')
                    dispatch({type:'set_loading',payload:false})  
                    toast.success('با موفقیت وارد شدید')        
                } catch (error) {
                    console.log(error)
                    dispatch({type:'set_loading',payload:false})
                }
            }
            else{
                toast.error('لطفا فیلد ها را با دقت پر کنید')
            }
        }
        function setState(e) {
            setuser({...user,[e.target.name]:e.target.value})
        }
        async function handleLoginWithGoogle(){
            const {user} = await signUpWithGoogle()
            console.log(user)
            dispatch({type:'login_user',payload:user})
            history.push('/')
            toast.success('با موفقیت وارد شدید') 
        }
        return (
            <form className={classes.formContainer} onSubmit={(e)=>submitLoginHandler(e)}>
                <Typography variant="h3">
                    ورود به سایت 
                </Typography>
                <CardMedia
                    className={classes.media}
                    image={loginImage}
                    title="ورود"
                    
                    />
                <Typography variant="subtitle2">
                    با ورود به حساب کاربری خود ، از مزایای کاربران سایت بهره مند شوید 
               </Typography>
                <input className={classes.inputTxt} value={user.userName} name='userName' onChange={(e)=>setState(e)} spellCheck='false' type="text"placeholder='نام کاربری یا ایمیل' />
                <input className={classes.inputTxt} value={user.password} name='password' onChange={(e)=>setState(e)} type="password"placeholder='رمز عبور' />
                <button className={classes.submitBtn} onClick={handleLoginWithGoogle}>ورود با جیمیل</button>
                <button className={classes.submitBtn} type="submit">ورود</button>
            </form>
        )
    
}

export default withRouter(Login)
