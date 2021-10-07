import React from 'react'
import adimage1 from '../../assets/images/add2.jpg'
import useStyle from './style'
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function ProductsSlider() {
    const classes=useStyle()

    return (
        <div  className={classes.itemContainer} >
            <button className={classes.next}>+</button>
            <button className={classes.prev}>-</button>
            <img src={adimage1} className={classes.image}/>

        </div>
    )
}

export default ProductsSlider
