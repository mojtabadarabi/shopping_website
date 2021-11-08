import { Box, Grid } from '@material-ui/core'
import React, { PureComponent, useEffect, useState ,memo, useRef} from 'react'
import Product from './Product'
import useStyle from './style'
import { getDiscountedProduct } from '../../Services/products'
import { Rerousel } from 'rerousel';
import SliderContainer from '../Slider/SliderContainer'
import './style.css'
const DiscountedProducts=() => {
    const classes = useStyle()
    const [discountProducts, setdiscountProducts] = useState([])
    const ref = useRef(null)
    useEffect(async() => {
        try{
            const data = await getDiscountedProduct()
            setdiscountProducts(data)
        }
        catch(err){
            console.log(err)
        }
    }, [])
    var settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        rtl:true
      };
      function renderProducts() {
          if(!discountProducts){return <Box>در حال بارگذاری</Box>}
          if(discountProducts&&discountProducts.length===0){return null}
          if(discountProducts&&discountProducts.length!==0){return (
            discountProducts.map(product=>(
                <Product style={{flex: '0 0 350px'}} key={product.id} product={product}/>
            )) 
          )}
      }
      function click() {
          ref.current.style.paddingLeft=`${+500}px`
      }
      return (
          <Box className='container' ref={ref}>
              <button onClick={()=>click()}>
                  +
              </button>
                {renderProducts()}
              <button>
                  -
              </button>
          </Box>
            
    )
}

export default DiscountedProducts
