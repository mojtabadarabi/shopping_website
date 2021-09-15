import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BottomNavigation } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    margin:"10px"    ,
    position:"relative",
    transition:'box-shadow ease .5s',
    '&:hover':{
        'box-shadow':
        "0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)"
    }
  },

});
function FeaturedProduct({product}) {

    const [isReadMore, setisReadMore] = useState(false)
    const [ProductRating, setProductRating] = useState(3)
    const classes = useStyles();
    return (
        <article >
            <Card className={classes.root}>
            <div>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                image={product.image}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">{!isReadMore?product.description.slice(0,50)+'...':product.description}</Typography>
                <Button size="small" onClick={()=>setisReadMore(!isReadMore)}>
                    Read More
                </Button>
                <Typography variant="h3" color="error" >{product.price+'$'}</Typography>
            </CardContent>
            </div>
                
            <CardActions style={{display:"flex",justifyContent:"space-between"}}>
                <Button size="small" variant="outlined"  color="primary">
                    More Information
                </Button>
                <Button size="small" variant="contained" color="primary">
                    Let's go buy?
                </Button>
            </CardActions>
        </Card>
            
        </article>
    )
}

export default FeaturedProduct
