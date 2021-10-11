import { Grid } from '@material-ui/core'
import React from 'react'
import Product from './Product'

function Products({products}) {
    return (
        products.map(product=>(
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Product key={product.id} product={product}/>
            </Grid>
        ))
    )
}

export default Products
