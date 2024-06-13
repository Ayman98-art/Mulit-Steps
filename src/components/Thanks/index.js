/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import MainTitle from '../MainTitle';
import thanksIcon from '../../assets/images/icon-thank-you.svg';
import'./AppThanks.css';

function Thanks() {
return (
<>
<div className='AppThanks'>

    <div>
        <img 
        src={thanksIcon} title='All Steps is Compelated.' 
        loading='lazy' 
        />
    </div>

    <div className='TitleCollaps'>
        <MainTitle 
        mainTitle={'Thanks You !'}
        subTitle={`
        Thanks for confirming your subscription! We hope you have
        fun using our platform. If you ever need support, please
        feel free to email us at ayman.goud99@gmail.com 👽...`}/>
    </div>

</div>
</>
)
}

export default Thanks;