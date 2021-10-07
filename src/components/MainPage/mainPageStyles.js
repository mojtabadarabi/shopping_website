import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  mainContainer:{
    width:"100%",
  },

  link:{
    position:"relative",
    padding:"8px 20px",
    transition:"all ease .4s",
    borderRadius:"8px",
    '&::before':{
        content: "''",
        position: 'absolute',
        height: '5px',
        bottom:"0",
        left:"0",
        direction:"ltr",
        width: '0%',
        backgroundColor:"red",
        transition:"all ease .4s",
        borderRadius:"8px"
    },
    '&:hover':{
        '&::before':{
            width:"100%",
        }
    },


    
  },
  
}))