import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    allProductsContainer:{
        width:"100%",
        padding:"60px",
        textAlign:"center",
        placeContent:"center",
        margin:"0"
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
        overflow:"hidden"
    },
    
    discountcontainer:{
        width:"100%",
        textAlign:"center",
        placeContent:"right",
        backgroundColor:"crimson",
        margin:"0"
        

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