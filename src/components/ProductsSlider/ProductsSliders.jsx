import React, { Component } from "react";
import ReactDOM from "react-dom";
import data from "./data";
import cx from "classnames";
import NonPassiveTouchTarget from "./NonPassiveTouchTarget.jsx";
import TouchCarousel, { clamp } from "react-touch-carousel";
import touchWithMouseHOC from "react-touch-carousel/lib/touchWithMouseHOC";
import "./styles.css";
import { Typography, Button } from "@material-ui/core";
import product1 from '../../images/product1.jpeg'

function ProductsSliders() {
    const cardSize = 300;
    const cardPadCount = 3;
    const carouselWidth = clamp(window.innerWidth, 0, 960);
    const Container = touchWithMouseHOC(CarouselContainer);
    function CarouselContainer(props) {
        const {
            cursor,
            carouselState: { active, dragging },
            ...rest
          } = props;
          let current = -Math.round(cursor) % data.length;
          while (current < 0) {
            current += data.length;
          }
          // Put current card at center
          const translateX =
            (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2;
          return (
            <NonPassiveTouchTarget
              className={cx("carousel-container", {
                "is-active": active,
                "is-dragging": dragging
              })}
            >
              <NonPassiveTouchTarget
                className="carousel-track"
                style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
                {...rest}
              />
        
              <div className="carousel-pagination-wrapper">
                <ol className="carousel-pagination">
                  {data.map((_, index) => (
                    <li key={index} className={current === index ? "current" : ""} />
                  ))}
                </ol>
              </div>
            </NonPassiveTouchTarget>
          );
    }
    function renderCard(index, modIndex) {
        const item = data[modIndex];
        return (
          <div
            key={index}
            className="carousel-card"
            onClick={() => console.log(`clicked card ${1 + modIndex}`)}
          >
            <div
              className="carousel-card-inner"style={{display:"flex",flexDirection:"row-reverse",padding:"8px"}}
            >
                <div className="body-container" style={{width:"50%",position:"relative",marginLeft:"22px"}}>
                    <div className="carousel-title">{item.title}</div>
                    <div className="carousel-text" >{item.text}</div>
                    <Button style={{position:"absolute",bottom:"0",left:"0"}} variant="contained" fullWidth={true} color="primary" disableElevation>
                        Go Buy
                    </Button>
                </div>
                <div  style={{width:"50%",height:"100%"}}><img className="carousel-image" src={item.src} /></div>
            </div>
          </div>
        );
    }
    return (
        <div className='container'>
            <Typography variant='h2'>
                Top Products
            </Typography>
            <TouchCarousel
              component={Container}
              cardSize={cardSize}
              cardCount={data.length}
              cardPadCount={cardPadCount}
              loop={true}
              renderCard={renderCard}
              onRest={index => console.log(`rest at index ${index}`)}
              onDragStart={() => console.log("dragStart")}
              onDragEnd={() => console.log("dragEnd")}
              onDragCancel={() => console.log("dragCancel")}
            />

        </div>
    )
}

export default ProductsSliders
