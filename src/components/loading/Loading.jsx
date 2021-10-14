import { Typography } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import React from 'react'
import ReactLoading from 'react-loading';
import useStyle from './style'

function Loading() {
    const classes = useStyle()
    return (
        <div className={classes.loadingContainer}>
            <ReactLoading type='spinningBubbles' color='crimson' width={180} height={180} className={classes.loading} />
            <Typography variant='h5'>
                لطفا صبور باشید ...
            </Typography>

        </div>
    )
}

export default Loading
