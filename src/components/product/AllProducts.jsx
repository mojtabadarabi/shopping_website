import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import Product from './Product'
import useStyle from './style'

function AllProducts() {
    const classes = useStyle()

    const [allProducts, setallProducts] = useState([
        {
            id:0,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
        },
        {
            id:0,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
        },
        {
            id:0,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
        },
        {
            id:0,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
        },
        {
            id:0,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
        },
        {
            id:0,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
        },
        {
            id:0,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
        },
        {
            id:0,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
        },
        {
            id:0,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
        },
    ])

    return (
        <Grid container spacing={2} className={classes.allProductsContainer}>
                {
                    allProducts.map(product=>(
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Product key={product.id} product={product}/>
                        </Grid>
                    ))
                }
        </Grid>
    )
}

export default AllProducts
