import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    allProductsContainer:{
        width:"100%",
        padding:"20px",
        textAlign:"center",
        // placeContent:"end",
        margin:"0",
        // direction:"rtl"
    },
    productdescription:{
        width:"100%",
        padding:"20px",
        textAlign:"left",

        margin:"0",
    },
    textContainer:{
        margin:"0 auto ",
        direction:"ltr"
    },
    pricecontainer:{
        display:"flex",
        justifyContent:"space-evenly",
        margin:"8px 0"
    },
    cardContainer:{
        transition:"all ease .4s",
        height:"50vh",
        position:"relative",
        margin:"10px",
        '&:hover':{
            transform: 'translateY(-10px)',
        },
        
        
    },
    mediaContainer:{
        overflow:"hidden",
        userSelect:"none",
    },
    contentContainer:{
        userSelect:"none",
    },
    
    discountcontainer:{
        width:"100%",
        textAlign:"center",
        placeContent:"right",
        backgroundColor:"crimson",
        margin:"0",
        
    },
    productSliderContainer:{
        display:'flex',
        width:"100%",
        textAlign:"center",
        placeContent:"right",
        backgroundColor:"crimson",
        margin:"0",
      },
    discountCard:{
        maxWidth:"200px !important"
    },
    discount:{
        opacity:".7",
        textDecoration:"line-through"
    },
    price:{
        fontWeight:"700",
 
    },
    discountBadge:{
        margin:"auto 25px"
    },
    discountContainer:{
        display:"flex",
        placeContent:"center",
        margin:"5px"
    },
    cardActionContainer:{
        display:'flex',
        position:"absolute",
        bottom:"0",
        justifyContent:"space-between"
    }
    
  
  
}))