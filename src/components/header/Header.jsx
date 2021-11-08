import React from 'react'
import useStyle from './style'
import adimage1 from '../../assets/images/add1.jpg'
import adimage2 from '../../assets/images/add2.jpg'
import { Link } from 'react-router-dom'
import { CardMedia, Grid } from '@material-ui/core'
import SliderContainer from '../Slider/SliderContainer'
import addImg from '../../assets/images/add1.jpg'
import addImg2 from '../../assets/images/add2.jpg'

function Header() {
  const classes = useStyle()

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    rtl:true,
    pauseOnHover:true,
    autoplay:true,
    adaptiveHeight:true,
  };

    return (
        <header>
          <Grid container spacing={2} className={classes.headerContainer}>
            <Grid item md={7}  xs={12} className={classes.itemContainer} >
              <SliderContainer  settings={settings} classInfo={'headerSliderContainer'}>
                {
                  [addImg,addImg2].map((image,index)=>(
                      <CardMedia
                      key={index}
                      component="img"
                      height="100%"
                      image={image}
                      alt="اسلاید "

                    />
                  ))
                }
              </SliderContainer>
            </Grid>
            <Grid item md={4} xs={12} className={classes.itemContainer}>
              <Grid item xs={12} className={classes.imgContainer}>
                <Link to='/products/id:2'>
                  <img className={classes.image} src={adimage1}/>
                </Link>
              </Grid>
              <Grid item xs={12} className={classes.imgContainer} style={{marginTop:"15px"}}>
                <Link to='/products/id:2'>
                  <img className={classes.image} src={adimage2}/>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </header>
    )
}

export default Header
