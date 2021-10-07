import React from 'react'
import useStyle from './style'
import adimage1 from '../../assets/images/add1.jpg'
import adimage2 from '../../assets/images/add2.jpg'
import { Link } from 'react-router-dom'
import ProductsSlider from '../Slider/ProductsSlider'
import { Grid } from '@material-ui/core'

function Header() {
  const classes = useStyle()

    return (
        <header>
          <Grid container spacing={2} className={classes.headerContainer}>
            <Grid item md={7}  xs={12} className={classes.itemContainer} >
              <ProductsSlider/>
            </Grid>
            <Grid item md={4} xs={12} className={classes.itemContainer}>
              <Grid item xs={12} className={classes.imgContainer}>
                <Link to='/products/id:2'>
                  <img className={classes.image} src={adimage1}/>
                </Link>
              </Grid>
              <Grid item xs={12} className={classes.imgContainer} style={{marginTop:"15px"}}>
                <Link to='/products/id:2'>
                  <img className={classes.image} src={adimage2}/>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </header>
    )
}

export default Header
