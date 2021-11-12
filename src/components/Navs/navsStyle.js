import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  NavContainer: {
    padding: '18px',
    display:"flex",
    justifyContent:"space-between",
    backgroundColor:"#6200ee",

    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
  },

  link:{
    position:"relative",
    color:'#fff',
    placeContent:'center',
    padding:"8px 20px",
    transition:"all ease .4s",
    borderRadius:"8px",
    display:"flex",
    userSelect:"none",
    cursor:"pointer",
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
  },

  menuicon:{
    padding:"2px !important",
    cursor:"pointer",
    display:"none",
    transition:"all ease .5s",
    [theme.breakpoints.down('xs')]: {
      display:"block ",
  },
  '&:hover':{
    color:"red"
  }
  },
  icon:{
    fontSize:"45px"
  },
  userinfo:{
    margin:"auto"
  },
  mainmenu:{
    position:"absolute",
    top:"0",
    left:"0",
    zIndex:"1001",
    placeContent:"center",
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    width:"100%",
    backgroundColor:"#f5f5f5",
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
    padding:"15px"
  },
  
}))