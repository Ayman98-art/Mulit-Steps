import React from 'react';
import Switch from '@mui/material/Switch';
import './SwitchIcon.css';

function SwitchIcon() {
const label = { inputProps: { 'aria-label': 'Switch demo' } };

return (
<>
<div className='bg_Switch'>
    <h5>Monthly</h5>
    <Switch {...label} defaultChecked />
</div>
</>
)
}

export default SwitchIcon;