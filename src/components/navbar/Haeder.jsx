import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import React from 'react'
import logo from './../../images/logo.png'
import styles from './Header.module.css'
import ProductsListMenu from './Menu/ProductsListMenu'
import SearchBox from './SearchBox'

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function Haeder() {
    const classes = useStyles();
    return (
        <header className={styles.headerContainer}>
            <div className={styles.leftSide}>
                <a href="#" className={styles.logoLink}><img className={styles.logo} src={logo} alt="React Logo" /></a>
                <ProductsListMenu/>
                <SearchBox/>
            </div>
            <div className={styles.rightSide}>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={
                    <Badge color="secondary" overlap="circular" badgeContent=" " variant="dot">
                        <AccountCircleIcon />
                    </Badge>
                }
            >
                Account
            </Button>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={
                    <Badge color="secondary" badgeContent={0} showZero>
                        <ShoppingCartIcon />
                    </Badge>
                }
            >
                Cart
            </Button>
            </div>
        </header>
    )
}

export default Haeder
