
import { CardMedia, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import useStyle from './style'
import loginImage from '../../assets/images/login.png'
import { useContextActions, useContextValue } from '../../context/ContextProvider'
import { withRouter } from 'react-router'
import { toast } from 'react-toastify'
import { loginUser, registerUser } from '../../Services/user'

function Login({history}) {
        const classes = useStyle()
        const dispatch = useContextActions()
        const [user, setuser] = useState({userName:'',password:''})
        async function submitLoginHandler(e) {
            e.preventDefault()
            if(user.name!==''&&user.name!==' '&&user.userName!==''&&user.userName!==' '&&user.phone!==''&&user.phone!==' '&&user.password!==''&&user.password!==' '){
                dispatch({type:'set_loading',payload:true})
                const userInfo= await loginUser(user)
                if (typeof userInfo!=='string') {
                    dispatch({type:'login_user',payload:userInfo})
                    history.push('/')
                    setuser({name:'',userName:'',phone:'',password:''})
                    dispatch({type:'set_loading',payload:false})
                    toast.success('با موفقیت وارد شدید')
                }
                else{
                    dispatch({type:'set_loading',payload:false})
                    toast(userInfo)
                }
                    
            }
            else{
                toast.error('لطفا فیلد ها را با دقت پر کنید')
            }
        }
        function setState(e) {
            setuser({...user,[e.target.name]:e.target.value})
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
                <button className={classes.submitBtn} type="submit">ورود</button>
            </form>
        )
    
}

export default withRouter(Login)
