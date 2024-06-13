import React from 'react'
import BasicCard from '../Card';
import { Grid } from '@mui/material';
import imgArcade from '../../assets/images/icon-arcade.svg';
import imgAdvanced from '../../assets/images/icon-advanced.svg';
import imgPro from '../../assets/images/icon-pro.svg';


function SelectCards() {
return (

<Grid container spacing={{ xs: 12, md: 3 }}>

    <Grid item xs={12} md={4}>
        <BasicCard imgIcon={imgArcade}
        typeTitle={'Arcade'} price={'$9/mo'} />
    </Grid>

    <Grid item xs={12} md={4}>
        <BasicCard imgIcon={imgAdvanced}
        typeTitle={'Advanced'} price={'$12/mo'} />
    </Grid>

    <Grid item xs={12} md={4}>
        <BasicCard imgIcon={imgPro}
        typeTitle={'Pro'} price={'$15/mo'} />
    </Grid>

</Grid>

)
}

export default SelectCards;