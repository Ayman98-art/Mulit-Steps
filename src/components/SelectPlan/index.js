import React from 'react';
import MainTitle from '../MainTitle';
import SelectCards from '../SelectCards';
import SwitchIcon from '../SwitchIcon';
import './SelectPlan.css';

function SelectPlan() {
return (
<>
<MainTitle mainTitle={'Select your plan'} 
    subTitle={'You have the option of monthly or yearly billing.'} />

<div className='p-12'>
    <SelectCards />
</div>

<div className='p-12'>
    <SwitchIcon />
</div>

</>
)
}

export default SelectPlan;