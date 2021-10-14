import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    loadingContainer:{
        textAlign:"center",
        placeContent:"center",
        position:"absolute",
        width:"100%",
        height:"100%",
        backgroundColor:"#f9f9f9",
        zIndex:"200",
        display:"flex",
        userSelect:"none",
        flexDirection:"column",
        
    },
    loading:{
        margin:"0 auto",
        width:"180px",
        height:"180px",
        color:'crimson'
    }
    
  

  
}))