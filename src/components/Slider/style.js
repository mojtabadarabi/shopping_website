import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  sliderContainer:{
    width:"100%",
    overflowX:"auto",
    animation: 'slide 5s infinite',
    position:'relative',
  },
  productSliderContainer:{
    width:"100%",
    textAlign:"center",
    placeContent:"right",
    backgroundColor:"crimson",
    margin:"0",
  },
  nextSlide:{
    
    backgroundColor:'blue'
  },
  prevSlide:{
    marginLeft:'auto',
    backgroundColor:'blue'
  },
  headerSliderContainer:{
    width:"100%",
    borderRadius:"8px",
    height:"100%",
    margin:"0",
    padding:"0",
    '& *':{
      height:"100% !important"
    },
    '& img':{
      borderRadius:"8px",
      height:"100%",
    },
    
  },
  slide:{
    
  },
  "@keyframes slide ": {
    "0%": {
      marginRight: "0(0)"
    },
    "100%": {
      marginRight: "-400px"
    }
  }
  
}))