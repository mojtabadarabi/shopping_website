import React, { useState } from 'react'
import useStyle from './navsStyle'
import {Link,withRouter} from 'react-router-dom'
import {isLogin} from '../../utils/user'
import { useContextValue } from '../../context/ContextProvider'
import MailOutlineIcon from '@material-ui/icons/Person';
import { Typography } from '@material-ui/core'
import AccountMenu from '../menus/AccountMenu'

function TopNavbar({location}) {
    const [openMenu, setopenMenu] = useState(false)
    const classes = useStyle()
    const userIsLogin= isLogin()
    const {user} = useContextValue()
    return (
        <nav className={classes.NavContainer}>
            <ul>
                <li >
                    <Link to='/' className={classes.link}>
                            خانه
                    </Link>
                </li>
                <li>
                    <Link to='/products'  className={classes.link}>
                    محصولات
                    </Link>
                </li>
                <li>
                    <Link to='/about'  className={classes.link}>
                    درباره ما
                    </Link>
                </li>
            </ul>    
                {
                    userIsLogin?(
                        <ul>
                            <li style={{position:"relative"}} onClick={()=>setopenMenu(prevState=>!prevState)}>
                                    <Typography variant='h6' className={classes.link}>
                                        <MailOutlineIcon className={classes.userIcon}/>
                                        {user.info.name} {'\u00A0'}
                                        خوش آمدید
                                    </Typography>
                                {openMenu&&<AccountMenu open={openMenu} setOpen={setopenMenu}/>}
                            </li>
                        </ul>
                    ):(
                        <ul>
                            <li>
                                <Link to='/login'  className={classes.link}>
                                ورود
                                </Link>
                            </li>
                            <li>
                                <Link to='/register'  className={classes.link}>
                                ثبت نام
                                </Link>
                            </li>
                        
                        </ul>
                    )
                }
        </nav>
    )
}

export default withRouter(TopNavbar)
