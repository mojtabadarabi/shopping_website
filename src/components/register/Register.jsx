
import { CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import useStyle from './style'
import registerImage from '../../assets/images/register.png'

function Register() {
        const classes = useStyle()
        return (
            <form className={classes.formContainer}>
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
                <input className={classes.inputTxt} type="text"placeholder='نام' />
                <input className={classes.inputTxt} type="text"placeholder='نام کاربری یا ایمیل' />
                <input className={classes.inputTxt} type="number"placeholder='شماره همراه   ' />
                <input className={classes.inputTxt} type="password"placeholder='رمز عبور' />
                <button className={classes.submitBtn} type="submit">ورود</button>
            </form>
        )
    
}

export default Register
