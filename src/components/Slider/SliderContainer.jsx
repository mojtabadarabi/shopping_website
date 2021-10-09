import React from 'react'
import Slider from "react-slick";
import useStyle from './style'

function SliderContainer({settings,children,classInfo}) {

    const classes=useStyle()

    return (
        <div className={classes[classInfo]} >
            <Slider {...settings} className={classes.sliderContainer}>
                {children}
            </Slider>
        </div>
    )
}

export default SliderContainer
