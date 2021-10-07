import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    formContainer:{
        display:"flex",
        flexDirection:"column",
        padding:"8px",
        backgroundColor:"#fff",
        margin:"25px auto",
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
        width:"30rem",
        textAlign:"center",
        borderRadius:"8px"
    },
    submitBtn:{
        border:'none',
        padding:"8px",
        fontWeight:"800",
        fontSize:"18px",
        borderRadius:"8px",
        margin:"15px ",
        cursor:"pointer",
        backgroundColor:"#68E1FD",
        transition:"all ease .4s",
        '&:hover':{
            backgroundColor:"#69BACD"
        }
    },
    inputTxt:{
        border:'none',
        padding:"8px",
        fontWeight:"800",
        backgroundColor:"#E4FAFF",
        borderRadius:"8px",
        margin:"15px ",
        fontSize:"18px"
    },
    media: {
        height: 0,
        paddingTop: '100%',
        margin:"15px "
      },
    mediaContainer:{
        width:"100%",
        height:"500px"
    }
    
  

  
}))