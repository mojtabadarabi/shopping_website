import { Box, Button, Card, CardHeader, CardMedia, Divider, Grid, Menu, MenuItem, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import http from '../../Services/httpServices'
import useStyle from './style'
import product1 from '../../assets/images/product1.png'
import Star from '@material-ui/icons/Star';
import ClipLoader from "react-spinners/ClipLoader";
import StorefrontIcon from '@material-ui/icons/Storefront';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function ProductInfoPage({match}) {
    const classes = useStyle()
    const [product, setproduct] = useState(null)
    const {params}=match
    useEffect(async() => {
        const {data} = await http.get(`/allproducts/${params.id}`)
        setproduct(data)
    }, [])
    function renderComponent(product) {
        return (
            <React.Fragment>
                <Grid container spacing={2} className={classes.allProductsContainer}>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <CardMedia
                            component="img"
                            height="400"
                            image={product1}
                            alt="محصول "
                            className={classes.media}
                            style={{borderRadius:"8px",filter: 'drop-shadow(0 0 0.75rem black)'}}
                            />
                    </Grid>

                    <Grid item lg={4} md={4} sm={6} xs={12} style={{textAlign:"start",padding:"15px"}}>
                        <Typography variant='subtitle2'>{product.title}</Typography>
                        <Divider style={{margin:"15px 0"}}/>
                        <Box >
                            <Star style={{color:"orange"}}/>
                            <Typography variant='caption' style={{verticalAlign:"top",paddingTop:"0",fontWeight:"600",fontSize:"15px"}}>3.2</Typography>
                            <Button variant='text' color='primary' style={{verticalAlign:"top",paddingTop:"0",fontWeight:"600",fontSize:"15px"}}>24 دیدگاه</Button>
                        </Box>
                        <Box>
                            {product.properties.map(prop=>(
                                <MenuItem>{prop}</MenuItem>
                            ))}

                        </Box>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Card style={{padding:"8px",textAlign:"right"}} >
                            <Box style={{padding:"8px",margin:"10px"}}>
                                <Typography variant='h6' >
                                    فروشنده
                                </Typography>
                            </Box>
                            <Box>
                                <StorefrontIcon style={{margin:"auto 10px"}}/>
                                <Typography variant='body'>
                                    آرسسیل
                                </Typography>
                                <Box style={{display:"flex",justifyContent:"space-evenly"}}>
                                    <Box>
                                        <Typography variant='body' style={{color:"#311b92",margin:"5px"}}>
                                            66% 
                                        </Typography>
                                        <Typography variant='body'>
                                            رضایت مشتریان
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant='body' >
                                            عملکرد
                                        </Typography>
                                        <Typography variant='body' style={{color:"#4caf50",margin:"5px"}}>
                                            عالی
                                        </Typography>
                                    </Box>
                                </Box>

                            </Box>
                            <Divider style={{margin:"15px 0"}}/>
                            <Box>
                                <Box>
                                    <VerifiedUserIcon style={{margin:"auto 10px"}}/>
                                    <Typography variant='body' style={{opacity:".7"}}>
                                    گارانتی اصالت و سلامت فیزیکی کالا
                                    </Typography>
                                </Box>
                            </Box>
                            <Divider style={{margin:"15px 0"}}/>
                            <Box>
                                <Box>
                                    <Typography variant='h6' style={{opacity:".7"}}>
                                        قیمت فروشنده
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant='h6' style={!(product.discount===''||product.discount===null)?{textDecoration:'line-through' }:null} color='secondary' align='right'>
                                        {product.price} تومان
                                    </Typography> 
                                    {
                                        !(product.discount===''||product.discount===null)?(
                                            <Box>
                                                <Typography variant='h6' align='right'>
                                                    {product.discount}%
                                                </Typography>
                                                <Typography variant='h6' align='right'>
                                                    {product.price-((product.price*product.discount)/100)} تومان
                                                </Typography>
                                            </Box>
                                        ):null
                                    }
                                </Box>
                            </Box>
                            <Button variant='contained' fullWidth color='primary' style={{margin:"15px 0"}}>
                                افزودن به سبد خرید
                            </Button>
                        </Card>
                    </Grid>
                </Grid>
                <Divider/>
                <Grid container spacing={2} className={classes.productdescription} >
                    <pre>

                        {product.description} 
                    </pre>
                </Grid>

            </React.Fragment>
        )
    }
    return (
        <section style={{textAlign:"center",direction:"rtl"}}>
           {
               !product?(
                    <div style={{margin:"20px"}}>
                        <ClipLoader color='#68E1FD' size={50} margin={2}/>
                    </div>
               ):renderComponent(product)
           }
                   
        </section>
    )
}

export default ProductInfoPage
