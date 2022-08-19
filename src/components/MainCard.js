import { CardActions, CardHeader, Card, Button, CardContent, Divider, Typography } from '@mui/material';
import { StyledNotifcation } from 'layout/Header/flex';
import { forwardRef } from 'react';

const MainCard = () => {
    return (
        <Card>
            <CardHeader action={<Button>Hello Menu</Button>} title="Hello Title" />
            <CardContent>Hello Content</CardContent>
        </Card>
    );
};

export default MainCard;
