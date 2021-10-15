import * as React from 'react';

import { Box, Button, ButtonBase, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Typography } from '@material-ui/core';
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
    dispatch({type:'set_loading',payload:true})
    setOpen(false);
    dispatch({type:"logut_user"})
    dispatch({type:'set_loading',payload:false})
  };

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
          <MenuItem style={{placeContent:"center"}}>
            <Typography variant='subtitle2'>
              پروفایل
            </Typography>
          </MenuItem>
          <MenuItem style={{placeContent:"center"}}>
            <Typography variant='subtitle2'>
              سبد خرید
            </Typography>
          </MenuItem>
          <MenuItem style={{placeContent:"center"}} onClick={handleLogout}>
              <Button variant='outlined' color='secondary' fullWidth>
                <Typography variant='subtitle2'>
                  خروج
                </Typography>
              </Button>
          </MenuItem>
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