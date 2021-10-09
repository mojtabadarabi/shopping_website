import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import Product from './Product'
import useStyle from './style'
import SliderContainer from "../Slider/SliderContainer"

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
            id:1,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
            discountedPrice:"160 تومان"
        },
        {
            id:2,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
            discountedPrice:"160 تومان"
        },
        {
            id:3,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
            discountedPrice:"160 تومان"
        },
        {
            id:4,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
            discountedPrice:"160 تومان"
        },
        {
            id:5,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
            discountedPrice:"160 تومان"
        },
        {
            id:6,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
            discountedPrice:"160 تومان"
        },
        {
            id:7,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
            discountedPrice:"160 تومان"
        },
        {
            id:8,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
            discountedPrice:"160 تومان"
        },
        {
            id:9,
            title:"گوشی موبایل apple",
            description:"موبایل برند اپل 11",
            price:"200 تومان",
            discountedPrice:"160 تومان"
        },
    ])

    var settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        rtl:true
      };
    return (
            <SliderContainer classInfo={'productSliderContainer'} settings={settings}>
                    {
                        discountProducts.map(product=>(
                            <Product key={product.id} product={product}/>
                        ))
                    }
            </SliderContainer>
    )
}

export default DiscountedProducts
