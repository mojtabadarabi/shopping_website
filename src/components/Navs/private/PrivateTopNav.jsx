import { Box, Button, ButtonBase } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react'
import { Link } from 'react-router-dom';
import useStyle from './style'

function PrivateTopNav() {
    const classes = useStyle();
    return (
        <nav className={classes.nav}>
            <Box>
                <ul>
                    <li >
                        <Button className={classes.navbtn}>
                            <Link to='/' className={classes.navlink}>
                                <Typography variant='subscribe2'>
                                    افزودن محصول
                                </Typography>
                            </Link>
                        </Button>
                    </li>
                    <li >
                        <Button className={classes.navbtn}>
                            <Link to='/' className={classes.navlink}>
                                <Typography variant='subscribe2'>
                                    حذف محصول
                                </Typography>
                            </Link>
                        </Button>
                    </li>
                    <li >
                        <Button className={classes.navbtn}>
                            <Link to='/' className={classes.navlink}>
                                <Typography variant='subscribe2'>
                                    ویرایش محصول
                                </Typography>
                            </Link>
                        </Button>
                    </li>
                    <li >
                        <Button className={classes.navbtn}>
                            <Link to='/' className={classes.navlink}>
                                <Typography variant='subscribe2'>
                                    لیست محصولات
                                </Typography>
                            </Link>
                        </Button>
                    </li>
                </ul>
            </Box>
            <Box>
                <ul>
                    <li >
                        <Button className={classes.navbtn}>
                            <Link to='/' className={classes.exitlink}>
                                <Typography variant='subscribe2'>
                                     خروج از سایت  
                                </Typography>
                            </Link>
                        </Button>
                    </li>
                </ul>
            </Box>
        </nav>
    )
}

export default PrivateTopNav
