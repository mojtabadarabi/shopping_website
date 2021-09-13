import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.jpg';
import slide3 from '../../images/slide3.jpg';

function SlideShow() {

    const [Products, setProducts] = useState([
        {
            id:"0",
            title:"New iPhone",
            src:slide1,
            body:"Epsom Lorem ipsum dolor sit amet, consectetur adipiscing elit. The graphic designer uses this text as an element of composition to fill the page and present the initial appearance and overall shape of the custom design, to graphically represent the type and size of the font and the appearance of the text."
        },
        {
            id:"1",
            title:"New Binoculars",
            src:slide2,
            body:"Epsom Lorem ipsum dolor sit amet, consectetur adipiscing elit. The graphic designer uses this text as an element of composition to fill the page and present the initial appearance and overall shape of the custom design, to graphically represent the type and size of the font and the appearance of the text."
        },
        {
            id:"2",
            title:"New Products",
            src:slide3,
            body:"Epsom Lorem ipsum dolor sit amet, consectetur adipiscing elit. The graphic designer uses this text as an element of composition to fill the page and present the initial appearance and overall shape of the custom design, to graphically represent the type and size of the font and the appearance of the text."
        },
    ])
    
    return (
        <div>
            <Carousel autoPlay={true} showThumbs={false} showStatus={false}>
                {
                    Products.map(prodcut=>(
                        <div>
                            <img src={prodcut.src} style={{height:'650px'}}/>
                            <div className="legend" style={{backgroundColor: '#efefef',color:"black",opacity: 1,zIndex:"10",height:'50%',textAlign:"initial",width:"45%"}} >
                                <div style={{margin:"30px",display: 'grid'}}>
                                    <Typography  variant='h3'>{prodcut.title}</Typography>
                                    <Typography style={{margin:"20px auto"}} variant='subtitle2'>{prodcut.body}</Typography>
                                    <Button variant="contained" color="primary" disableElevation>
                                        Go Buy
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default SlideShow
