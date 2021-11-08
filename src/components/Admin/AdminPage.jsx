import { Box, Grid } from '@material-ui/core'
import React ,{useEffect} from 'react'
import AddProduct from './Actions/AddProduct';
import useStyle from './style'
import { useContextActions, useContextValue } from '../../context/ContextProvider'
import { Redirect } from 'react-router';
import AddCategorys from './Actions/AddCategorys';

function AdminPage() {
    const classes = useStyle();
    const user = useContextValue()
    console.log(user)
    if (JSON.parse(localStorage.getItem('user')).user[0].type!=='admin') {
        return <Redirect to='/'/>
    }
    return (
        <section>
            <Grid container spacing={2} className={classes.container}> 
                <Grid item lg={4} md={2} sm={6} xs={12}>
                    <AddCategorys/>
                </Grid>
                <Grid item lg={8} md={8} sm={6} xs={12}>
                    <AddProduct/>
                </Grid>
            </Grid>
        </section>
    )
}

export default AdminPage
