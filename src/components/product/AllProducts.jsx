import { Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useContextActions, useContextValue } from '../../context/ContextProvider'
import Product from './Product'
import useStyle from './style'
import axios from 'axios'
import Products from './Products'
import { getAllProducts } from '../../Services/products'

function AllProducts() {
    const classes = useStyle()
    const dispatch = useContextActions()
    const state = useContextValue()
    const [products, setproducts] = useState(null)
    useEffect(async() => {
        if(!state.allproducts){
            try {
                const {data} = await getAllProducts()
                dispatch({type:"SET_ALLPRODUCTS",data})
                setproducts(data)
            } catch (error) {
                console.log(error)
            }
        }
        else{
            setproducts(state.allproducts)
        }
    }, [])

    function renderProducts() {
        if (!products) {return <Typography variant='h5' className={classes.textContainer}>در حال بارگذاری ...</Typography>}
        if (products&&products.length===0) {return <Typography variant='h5' className={classes.textContainer}>محصولی موجود نیست</Typography>}
        if (products) {return <Products products={products}/>}
    }
    return (
        <Grid container spacing={2} className={classes.allProductsContainer}>
            {renderProducts()}
        </Grid>
    )
}

export default AllProducts
