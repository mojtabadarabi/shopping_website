import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    allProductsContainer:{
        width:"100%",
        padding:"60px",
        // textAlign:"center",
        // placeContent:"end",
        margin:"0",
        // direction:"rtl"
    },
    textContainer:{
        margin:"0 auto ",
        direction:"ltr"
    },
    cardContainer:{
        transition:"all ease .4s",
        margin:"10px",
        '&:hover':{
            transform: 'translateY(-10px)',
        },
        '& img':{
            transition:"all ease .4s",
            zIndex:"-1",
            '&:hover':{
                transform: 'scale(1.2)',
            },
    
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
        justifyContent:"space-between"
    }
    
  
  
}))