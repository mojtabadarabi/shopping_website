import React from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ListIcon from '@material-ui/icons/List';
import { makeStyles, Divider, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import RouterIcon from '@material-ui/icons/Router';
import BusinessIcon from '@material-ui/icons/Business';
import ComputerIcon from '@material-ui/icons/Computer';

const useStyles = makeStyles((theme) => ({
    list: {
},
borderButtom: {
    display:"flex",
    margin:"2px",
},
}));
  
function ProductsListMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
        <div style={{display:"flex"}}>
            <Button aria-controls="simple-menu" onClick={handleClick}>
                <span className={classes.borderButtom}>
                    <ListIcon/> All Products <KeyboardArrowDownIcon/>
                </span>
            </Button>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{position:"absolute",top:"50px",left:"6px"}}
            
            >
                <Typography variant='h6'>
                    Computers
                </Typography>
                <List className={classes.list} style={{display:"flex",justifyContent:"space-around"}} >
                    <MenuItem onClick={handleClose} >
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <ComputerIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Peripherals" secondary="Jan 9, 2014" />
                        </ListItem>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <ImportantDevicesIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="accessories" secondary="Jan 9, 2014" />
                        </ListItem>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <BusinessIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Original parts" secondary="Jan 9, 2014" />
                        </ListItem>
                    </MenuItem>
                    
                </List>
                <Divider/>
                <Typography variant='h6'>
                    Phone
                </Typography>
                <List className={classes.list} style={{display:"flex",justifyContent:"space-around"}}>
                    <MenuItem onClick={handleClose}>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <PhoneAndroidIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Phones" secondary="Jan 9, 2014" />
                        </ListItem>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <ImportantDevicesIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="accessories" secondary="Jan 9, 2014" />
                        </ListItem>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <MobileScreenShareIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Worked" secondary="Jan 9, 2014" />
                        </ListItem>
                    </MenuItem>
                    
                </List>
                <Divider/>
                <Typography variant='h6'>
                    NetWorks
                </Typography>
                <List className={classes.list} style={{display:"flex",justifyContent:"space-around"}}>
                    <MenuItem onClick={handleClose}>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <RouterIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Communication equipment" secondary="Jan 9, 2014" />
                        </ListItem>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <WifiTetheringIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Network equipment" secondary="Jan 9, 2014" />
                        </ListItem>
                    </MenuItem>
                    
                    
                </List>
            </Menu>
        </div>
    )
}

export default ProductsListMenu
