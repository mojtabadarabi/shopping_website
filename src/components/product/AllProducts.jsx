import { Grid } from '@material-ui/core'
import React from 'react'
import Product from './Prodcut'
import useStyle from './style'

function AllProducts() {
    const classes = useStyle()
    return (
        <Grid container spacing={2} className={classes.allProductsContainer}>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Product/>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Product/>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Product/>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Product/>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Product/>
            </Grid>
            
        </Grid>
    )
}

export default AllProducts
