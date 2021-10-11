
import { CardMedia, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import useStyle from './style'
import registerImage from '../../assets/images/register.png'
import { useContextActions } from '../../context/ContextProvider'
import { toast } from 'react-toastify'
import { withRouter } from 'react-router'

function Register({history}) {
        const classes = useStyle()
        const dispatch = useContextActions()
        const [user, setuser] = useState({name:'',userName:'',phone:'',password:''})
        function submitRegisterHandler(e) {
            e.preventDefault()
            if(user.name!==''&&user.name!==' '&&user.userName!==''&&user.userName!==' '&&user.phone!==''&&user.phone!==' '&&user.password!==''&&user.password!==' '){
                const info= {
                    user,history,setuser
                }
                dispatch({type:'register_user',payload:info})
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
