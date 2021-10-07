import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({

    itemContainer: {
        height:"385px",
        position:"relative",
  },

  image:{
      width:"100%",
      height:"100%",
      borderRadius:"8px",
  },
  next:{
    position:"absolute",
    padding:"8px",
    left:"0",
    top:"45%",
    margin:"0 8px",
    cursor:"pointer",
    border:"none",
    backgroundColor:"transparent",
    borderRadius:"50%",
    display:"flex",
    transition:"all ease .4s",
    '&:hover':{
        backgroundColor:"#f8f8f8"
    }
    
  },
  prev:{
    position:"absolute",
    padding:"8px",
    right:"0", 
    top:"45%",
    margin:"0 8px",
    cursor:"pointer",
    border:"none",
    backgroundColor:"transparent",
    borderRadius:"50%",
    display:"flex",
    transition:"all ease .4s",
    '&:hover':{
        backgroundColor:"#f8f8f8"
    }
  },
  

  
}))