import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import Product from './Product'
import useStyle from './style'

function DiscountedProducts() {
    const classes = useStyle()

    const [discountProducts, setdiscountProducts] = useState([
        {
            id:0,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
            discountedPrice:"160 تومان"
        },
        {
            id:0,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
            discountedPrice:"160 تومان"
        },
        {
            id:0,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
            discountedPrice:"160 تومان"
        },
        {
            id:0,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
            discountedPrice:"160 تومان"
        },
    ])

    return (
        <Grid container spacing={2} className={classes.discountcontainer}>
            {
                discountProducts.map(product=>(
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Product key={product.id} product={product}/>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default DiscountedProducts
