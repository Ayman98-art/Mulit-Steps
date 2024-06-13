import React from 'react';
import MainTitle from '../MainTitle';
import TotalPrice from '../TotalPrice';
import { Box } from '@mui/material';

function Finishing() {

return (
<>
<MainTitle
        mainTitle={"Finishing up"}
        subTitle={"Double-check everything looks OK before confirming."}
    />

    <Box sx={{padding:'20px'}} className='bg_SelectPick bg_SelectPick--modify'>
        <TotalPrice 
        titleHead={'Arcade (Monthly)'} 
        subTitleHead={'Change'} 
        price={'$9/mo'}
        price2={'$0/mo'}/>

        <hr className='py-5'/>

        <TotalPrice 
        subTitleHead={'Online service'} 
        subTitleHead2={'Larger storage'} 
        price={'+$1/mo'} 
        price2={'+$2/mo'}/>
    </Box>

    <Box sx={{padding:'10px 30px'}}>
        <TotalPrice 
        titleHead={'Total (per month/year)'} 
        price={'$12/mo'}
        />
    </Box>

</>
)
}

export default Finishing;