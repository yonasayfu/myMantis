import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Notification } from './Notification';
import { StyledNotifcation } from './flex';
export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <StyledNotifcation>
                    <Toolbar>
                        <Notification />
                    </Toolbar>
                </StyledNotifcation>
            </AppBar>
        </Box>
    );
}
