import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    allProductsContainer:{
        width:"100%",
        padding:"60px",
        textAlign:"center",
        placeContent:"center"
    },
    cardContainer:{
        transition:"all ease .4s",
        cursor:"pointer",
        '&:hover':{
            marginTop:"-10px"
        }
    },
    media:{
        '&hover':{
            transform: 'translate(14px, 17px) scale(1)'
        }

    }
    
  
  
}))