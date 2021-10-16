import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <section >
            <Typography variant='h1'>
                صفحه ی مورد نظر پیدا نشد
            </Typography>
            <Link to='/'>
                <Button color='primary' variant='contained' fullWidth>
                    بازگشت به صفحه اول
                </Button>
            </Link>
        </section>
    )
}

export default NotFoundPage
