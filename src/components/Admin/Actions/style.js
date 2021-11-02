import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    addbox:{
        borderRadius:"5px",
        padding:"15px",
        backgroundColor:"#fff",
        boxShadow: '0 3px 19px rgb(0 0 0 / 0.2)',
    },
    form:{
        
    },
    pricebox:{
        display:"flex",
        justifyContent:"space-evenly"
    },
    checkboxcontainer:{
        display:'flex'
    },
    removetagbtn:{
        padding:"2px",
        margin:"2px",
        '&:hover':{
            color:"red"
        }
    },
    submitbtn:{
        margin:"18px 0"
    },
    checkbox:{
        margin:"auto"
    },
    txtbox:{
        margin:"12px 0"
    }
}))