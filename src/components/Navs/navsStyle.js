import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  NavContainer: {
    padding: '18px',
    display:"flex",
    justifyContent:"space-between",
    backgroundColor:"#f9f9f9",
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
  },

  link:{
    position:"relative",
    padding:"8px 20px",
    transition:"all ease .4s",
    borderRadius:"8px",
    display:"flex",
    '&::before':{
        content: "''",
        position: 'absolute',
        height: '5px',
        width:'0%',
        bottom:"0",
        left:"0",
        direction:"ltr",
        backgroundColor:"red",
        transition:"all ease .3s",
        borderRadius:"8px"
    },
    '&:hover':{
        '&::before':{
            width:"100%"
        },
    },
    '& svg':{
      margin:"0 5px",
      border:"2px solid black",
      padding:"8px",
      borderRadius:"50%"

    },
    btn:{
      border:"none !important",
      cursor:"pointer",

    }
    


    
  },
  
}))