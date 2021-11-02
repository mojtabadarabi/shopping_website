import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  nav:{
      display:"flex",
      justifyContent:"space-between",
      padding:"15px",
      backgroundColor:"#A480E9",
      boxShadow: '0 3px 19px rgb(0 0 0 / 0.2)',
  },
  navbtn:{
  },
  navlink:{
    color:"#fff ",
    border:"1px solid #fff",
    borderRadius:"8px",
    padding:"8px 24px",
    '&:hover':{
        backgroundColor:"#fff",

    }

  },
  exitlink:{
    color:"#fff ",
    border:"1px solid #fff",
    borderRadius:"8px",
    padding:"8px 24px",
    '&:hover':{
        backgroundColor:"red",
        color:"#fff"

    }

  }
}))