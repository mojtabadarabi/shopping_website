import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  sliderContainer:{
    width:"98%"
  },
  productSliderContainer:{
    width:"100%",
    textAlign:"center",
    placeContent:"right",
    backgroundColor:"crimson",
    margin:"0",
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
  
}))