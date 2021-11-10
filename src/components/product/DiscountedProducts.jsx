import { Box, Grid } from '@material-ui/core'
import React, { PureComponent, useEffect, useState ,memo, useRef} from 'react'
import Product from './Product'
import useStyle from './style'
import { getDiscountedProduct } from '../../Services/products'
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const DiscountedProducts=() => {
    const [itemsshowslider, setitemsshowslider] = useState(3)
    const classes = useStyle()
    const [discountProducts, setdiscountProducts] = useState([])

        function handleClickOutside() {
            if(window.innerWidth<600){
                setitemsshowslider(1)
            }
            else if(window.innerWidth<850){
                setitemsshowslider(2)
            }
            else if(window.innerWidth<1150){
                setitemsshowslider(3)
            }
            else{
                setitemsshowslider(4)
            }
        }

        window.addEventListener("resize", handleClickOutside);

    useEffect(async() => {
        handleClickOutside()
        try{
            const data = await getDiscountedProduct()
            setdiscountProducts(data)
        }
        catch(err){
            console.log(err)
        }
    }, [])
      function renderProducts() {
          if(!discountProducts){return <Box>در حال بارگذاری</Box>}
          if(discountProducts&&discountProducts.length===0){return null}
          if(discountProducts&&discountProducts.length!==0){return (
            discountProducts.map((product,index)=>(
                <SwiperSlide key={index}>
                    <Product style={{flex: '0 0 350px'}} key={product.id} product={product}/>
                </SwiperSlide>
            )) 
          )}
      }
      return (
       
        <div className='swiper'>
        <Swiper
            dir={'rtl'} 
            spaceBetween={5}
            slidesPerView='auto'
            freeMode
            breakpoints={{}}
            slidesPerView={itemsshowslider}
            onSwiper={(swiper) => {
            }}  
            onSlideChange={(swiper) => {
            }}
            >
                {renderProducts()}
            </Swiper>
        </div>
            
    )
}

export default DiscountedProducts
