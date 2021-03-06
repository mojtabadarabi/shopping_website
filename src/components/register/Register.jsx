
import { CardMedia, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import useStyle from './style'
import registerImage from '../../assets/images/register.png'
import { useContextActions } from '../../context/ContextProvider'
import { toast } from 'react-toastify'
import { withRouter } from 'react-router'
import { registerUser } from '../../Services/user'
import { useAuth } from '../../context/AuthContext'
import {auth} from '../../firebase.js'
function Register({history}) {
        const classes = useStyle()
        const dispatch = useContextActions()
        const { signup } = useAuth()
        const [user, setuser] = useState({name:'',userName:'',phone:'',password:''})
        async function submitRegisterHandler(e) {
            e.preventDefault()
            if(user.name!==''&&user.name!==' '&&user.userName!==''&&user.userName!==' '&&user.phone!==''&&user.phone!==' '&&user.password!==''&&user.password!==' '){
                dispatch({type:'set_loading',payload:true})
                try {
                    await signup(user.userName,user.password)
                    .then(function(result) {
                        result.user.updateProfile({
                          displayName:user.name
                        })
                      }).catch(function(error) {
                        console.log(error);
                      });
                      console.log(auth.currentUser)
                    dispatch({type:'set_loading',payload:false})
                    toast.success('با موفقیت ثبت نام شدید')
                    history.push('/login')
                    setuser({name:'',userName:'',phone:'',password:''})
                  } catch (err){
                    console.log(err)
                    toast.error('ایمیل توسط شخص دیگری استفاده شده')
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
        return (
            <form className={classes.formContainer} onSubmit={(e)=>submitRegisterHandler(e)}>
                <Typography variant="h3">
                     ثبت نام در سایت  
                </Typography>
                <CardMedia
                    className={classes.media}
                    image={registerImage}
                    title="ثبت نام"
                    
                    />
                <Typography variant="subtitle2">
                    با ثبت نام در سایت  ، از مزایا بهره مند شوید 
               </Typography>
                <input className={classes.inputTxt} type="text" value={user.name} name='name' onChange={(e)=>setState(e)} spellCheck='false' placeholder='نام' />
                <input className={classes.inputTxt} type="text" value={user.userName} name='userName' onChange={(e)=>setState(e)} spellCheck='false' placeholder='نام کاربری یا ایمیل' />
                <input className={classes.inputTxt} type="number" value={user.phone} name='phone' onChange={(e)=>setState(e)} placeholder='شماره همراه   ' />
                <input className={classes.inputTxt} type="password" value={user.password} name='password' onChange={(e)=>setState(e)} placeholder='رمز عبور' />
                <button className={classes.submitBtn} type="submit">ثلت نام</button>
            </form>
        )
    
}

export default withRouter(Register)
