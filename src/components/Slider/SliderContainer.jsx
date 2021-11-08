import React from 'react'
import Slider from "react-slick";
import { Rerousel } from 'rerousel';
import useStyle from './style'
import { Box,Button } from '@material-ui/core';

function SliderContainer({settings,children,classInfo}) {
    const classes=useStyle()

    return (
        <Box className={classes.sliderContainer}>
            {/* {children} */}
        </Box>            
    )
}

export default SliderContainer
