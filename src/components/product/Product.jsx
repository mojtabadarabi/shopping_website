import { Badge, Box, Button, Paper } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import clsx from 'clsx';
import React from 'react'
import { Link } from 'react-router-dom';
import product1 from '../../assets/images/product1.png'
import useStyle from './style'

function Product({product}) {
    const classes = useStyle()
    return (
        <Card className={classes.cardContainer}>
          <div className={classes.mediaContainer}>
            <CardMedia
              component="img"
              height="194"
              image={product1}
              alt="محصول "
              className={classes.media}
            />

          </div>
          <CardContent className={classes.contentContainer}>
            <Typography className={classes.description} variant="body2" color="secondary">
              {product.description}
            </Typography>
            <Typography className={clsx(product.discountedPrice&&classes.discount,classes.price)} variant="body2" color="secondary">
              {product.price}
            </Typography>
            {
              product.discountedPrice&&(
                <Box className={classes.discountContainer}>
                  <Typography className={classes.price} variant="body2" color="initial">
                    {product.discountedPrice}
                  </Typography>
                  <Badge color="secondary" badgeContent='10%' className={classes.discountBadge}/>

                </Box>

              )
            }
          </CardContent>
          <CardActions className={classes.cardActionContainer}>
            <Link to={`/products/${product.id}`}>
            <Button variant="contained" color='primary'>
                  <Typography className={classes.price} variant="body2" color="inherit">
                    افزودن به سبد خرید    
                  </Typography>
            </Button>
            </Link>
            <Box>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>

            </Box>
            
          </CardActions>
        </Card>
      );
}

export default Product
