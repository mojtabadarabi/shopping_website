import * as React from 'react';

import { Box, Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper } from '@material-ui/core';
import { useContextActions } from '../../context/ContextProvider';

export default function AccountMenu({open,setOpen}) {
    const dispatch = useContextActions()
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
      
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const handleLogout = () => {
    setOpen(false);
    dispatch({type:"logut_user"})
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Box  spacing={2} style={{zIndex:"100",position:"absolute",top:"75px",left:"30px",width:"250px"}}>
      <Paper>
      <ClickAwayListener onClickAway={handleClose}>
        <MenuList style={{flexDirection:"column"}}>
          <MenuItem style={{placeContent:"center"}}>Profile</MenuItem>
          <MenuItem style={{placeContent:"center"}}>My account</MenuItem>
          <MenuItem style={{placeContent:"center"}} onClick={handleLogout}>Logout</MenuItem>
        </MenuList>

      </ClickAwayListener>
      </Paper>
      <div >

        <Box
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal

        >
        </Box>
      </div>
    </Box>
  );
}