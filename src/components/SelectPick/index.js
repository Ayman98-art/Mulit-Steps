import React from 'react'
import { Box, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import './SelectPick.css';


function SelectPick({boolean, titleHead, subTitleHead, price}) {
return (
<>
    <Grid container spacing={2} 
    justifyContent='space-between'
    alignItems='center'
    className='bg_SelectPick'
    >

    <Grid item xs={8} md={8} className='item1'>
        <Box sx={{display:'flex', 
            justifyContent:'space-between',
            alignItems:'center'}}
        >

        <FormControlLabel sx={{paddingRight:'10px'}}
            control={<Checkbox defaultChecked={boolean} />} />
        <Box sx={{textAlign:'left'}} >

        <Typography  >
            <h4>{titleHead}</h4>
            <p>{subTitleHead}</p>
        </Typography>

        </Box>

        </Box>
    </Grid>

    <Grid item xs={4} md={4} className='item1'>
        <h5>{price}</h5>
    </Grid>

    </Grid>
</>
)
}

export default SelectPick;