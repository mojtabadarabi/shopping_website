
import { CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import useStyle from './style'
import loginImage from '../../assets/images/login.png'

function Login() {
        const classes = useStyle()
        return (
            <form className={classes.formContainer}>
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
                <input className={classes.inputTxt} type="text"placeholder='نام کاربری یا ایمیل' />
                <input className={classes.inputTxt} type="password"placeholder='رمز عبور' />
                <button className={classes.submitBtn} type="submit">ورود</button>
            </form>
        )
    
}

export default Login