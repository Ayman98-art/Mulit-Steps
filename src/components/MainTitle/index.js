import React from 'react'
import { Typography } from '@mui/material';
import './MainTitle.css';

function MainTitle({mainTitle, subTitle}) {
return (
<div className='MainTitleLeft'>

    <Typography className='mainTitle'>
        <h1 className='mainTitle_res'>{mainTitle}</h1>
    </Typography>

    <Typography className='subTitle' variant="p" component="p">
        {subTitle}
    </Typography>

</div>
)
}

export default MainTitle;