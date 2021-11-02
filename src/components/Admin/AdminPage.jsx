import { Box, Grid } from '@material-ui/core'
import React from 'react'
import AddProduct from './Actions/AddProduct';
import useStyle from './style'

function AdminPage() {
    const classes = useStyle();
    return (
        <section>
            <Grid container spacing={2} className={classes.container}> 
                <Grid item lg={4} md={2} sm={6} xs={12}>
                    <AddProduct/>
                </Grid>
                <Grid item lg={8} md={8} sm={6} xs={12}>
                    <AddProduct/>
                </Grid>
            </Grid>
        </section>
    )
}

export default AdminPage
