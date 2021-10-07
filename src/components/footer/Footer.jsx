import React from 'react'
import useStyle from './style'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Footer() {
    const classes = useStyle()
    return (
        <footer className={classes.footerContainer}>
            <a href='#'>
                <GitHubIcon/>
            </a>
            <a href='#'>
                <LinkedInIcon/>
            </a>
            <a href='#'>
                <InstagramIcon/>
            </a>
            <a href='#'>
                <MailOutlineIcon/>
            </a>
        </footer>
    )
}

export default Footer
