import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Card.css';

export default function BasicCard({imgIcon,typeTitle, price}) {
return (
<Card sx={{ maxWidth: '100%' }} >
    <CardContent className='CardContent'>

    <div className='imgIcon'>
        <img src={imgIcon} alt={typeTitle} title={typeTitle} 
        loading='lazy'/>
    </div>

    <Typography variant="body2">
        <h3>{typeTitle}</h3>
        <span>{price}</span>
    </Typography>

    </CardContent>
</Card>
);
}