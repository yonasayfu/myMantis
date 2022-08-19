import { useRef, useState } from 'react';
import { IconButton, Popper, Button, ClickAwayListener } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MainCard from 'components/MainCard';
//import { current } from '../../../node_modules/@reduxjs/toolkit/dist/index';

export const Notification = () => {
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const anchorRef = useRef(null);
    /*Check how it works in bottom of this code. */
    return (
        <>
            <IconButton ref={anchorRef} onClick={handleToggle}>
                <NotificationsNoneIcon />
                {/* {console.log(open)} */}
            </IconButton>
            <Popper anchorEl={anchorRef.current} open={open}>
                <MainCard />
            </Popper>
        </>
    );
};

/*When a child component needs to reference its parent component’s  current node, the parent component needs a way to send down its ref to the child. The technique is called ref forwarding. 
    Why we need here?
    1) The MainCard shold render the postion of under notification icon
    by passing the props "anchorEl={anchorRef.current}" into the poper tag. (anchorEl is responsible for postioning in this case we take the postion anchorRef.current and default is bottom)

    N.B => if we set "ref={anchorRef}" some ware in the component the poper will pop under the refernced component. 
    
    2) The outside click event handeler (ClickAwayListener) should detect the parent element otherwise when we clicked the poped card it toggle => off. This is handle by handleclose method and passing the condition "anchorRef.current.contains(event.target)) else setOpen(false)"
    */
