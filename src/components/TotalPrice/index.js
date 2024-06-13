import React from 'react'
import { Grid, Typography } from '@mui/material';

function TotalPrice({titleHead, subTitleHead, subTitleHead2, price, price2}) {
return (  
<>
<Grid container spacing={2} 
    alignItems={'center'}
    justifyContent={'center'}
    >

    <Grid item xs={8} md={8} className='item1'>
        <Typography  sx={{textAlign:'start'}}>
            <h4>{titleHead}</h4>
            <p>{subTitleHead}</p>
            <p>{subTitleHead2}</p>
        </Typography>
    </Grid>

    <Grid item xs={4} md={4} sx={{textAlign:'end'}} className='item1'>
        <h5>{price}</h5>
        <h5>{price2}</h5>
    </Grid>

    </Grid>
</>
) 
}

export default TotalPrice;    