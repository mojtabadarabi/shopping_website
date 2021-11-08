import { Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useContextActions, useContextValue } from '../../context/ContextProvider'
import Product from './Product'
import useStyle from './style'
import Products from './Products'
import { getAllProducts } from '../../Services/products'

function AllProducts() {
    const classes = useStyle()
    const dispatch = useContextActions()
    const [allproducts, setallproducts] = useState(null)
    async function fetch() {
        const {data}=await getAllProducts()
        setallproducts(data)
    }
    useEffect(() => {
        fetch()
    }, [])
    function renderProducts() {
        if (!allproducts) {return <Typography variant='h5' className={classes.textContainer}>در حال بارگذاری ...</Typography>}
        if (allproducts&&allproducts.length===0) {return <Typography variant='h5' className={classes.textContainer}>محصولی موجود نیست</Typography>}
        if (allproducts) {return <Products products={allproducts}/>}
    }
    return (
        <Grid container spacing={2} className={classes.allProductsContainer}>
            {renderProducts()}
        </Grid>
    )
}

export default AllProducts
