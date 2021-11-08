import { Box, TextField, Typography,Button } from '@material-ui/core';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { addCategorys } from '../../../Services/products';
import useStyle from "./style";

function AddCategorys() {
    const classes = useStyle();
    const [category, setcategory] = useState('')
    async function submitHandler(e) {
        e.preventDefault()
        const option = {
            name:category
        }
        try {
            const {status} = await addCategorys(option)
            if (status===201) {
                toast.success('با موفقیت اضافه شد')
            }
            setcategory('')
        } catch (error) {
            console.log(error)
            toast.success('مشکلی پیش آمده است')
        }
    }
    return (
        <Box className={classes.addbox}>
        <form className={classes.form} onSubmit={submitHandler}>
            <Typography variant="h5">افزودن دسته بندی</Typography>
            <TextField
            className={classes.txtbox}
            label="نام دسته بندی"
            variant="outlined"
            value={category}
            onChange={e=>setcategory(e.target.value)}
            fullWidth
            />
        <Button
          className={classes.submitbtn}
          fullWidth
          variant="contained"
          color="primary"
          type='submit'
        >
            <Typography variant="h6">افزودن</Typography>
        </Button>
        </form>
        </Box>
    )
}

export default AddCategorys
