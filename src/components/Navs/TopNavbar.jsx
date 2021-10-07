import React from 'react'
import useStyle from './navsStyle'
import {Link} from 'react-router-dom'

function TopNavbar() {
    const classes = useStyle()

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
        </nav>
    )
}

export default TopNavbar
