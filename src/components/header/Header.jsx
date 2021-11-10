import React from 'react'
import useStyle from './style'
import adimage1 from '../../assets/images/add1.jpg'
import adimage2 from '../../assets/images/add2.jpg'
import { Link } from 'react-router-dom'
import { CardMedia, Grid } from '@material-ui/core'
import addImg from '../../assets/images/add1.jpg'
import addImg2 from '../../assets/images/add2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import styles from './styles.module.css'

function Header() {

  const classes = useStyle()
  SwiperCore.use([Pagination, Autoplay]);
    return (
        <header>
          <div className={styles.gridcontainer}>
            <div className={`${styles.item} ${styles.litem}`}>
              <Swiper classInfo={'headerSliderContainer'} 
                      autoplay={{ delay: 2500 }}
                      slidesPerView={1.1}
                      pagination={{
                        el: "#ctaref",
                        clickable: true,
                        renderBullet: (index, classwiper) => {
                          return '<span class="' + classwiper + '"></span>';
                        },
                      }}
                      spaceBetween={10}
                      centeredSlides
                      loop={true}
                      loopFillGroupWithBlank={true}
             >
                {
                  [addImg,addImg2].map((image,index)=>(
                      <SwiperSlide>
                        <img src={image} className={styles.image1} key={index} alt="" />
                      </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
            <div className={`${styles.item} ${styles.sitem1}`}>
                <img className={styles.image2} src={adimage1}/>
            </div >
            <div className={`${styles.item} ${styles.sitem2}`}>
                <img className={styles.image2} src={adimage2}/>
            </div>
          </div>
        </header>
    )
}

export default Header
