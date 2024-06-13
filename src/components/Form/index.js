import React from 'react'
import { useForm } from 'react-hook-form';
import MainTitle from '../MainTitle';
import Swal from 'sweetalert2';
import './AppForm.css';


function AppForm() {

const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = (data) => {console.log(data);}

const EventHndler = () => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Check Your Inbox, Please.",
        showConfirmButton: false,
        timer: 1800
    });
}

return (
<>

<MainTitle mainTitle={'Personal info'} 
    subTitle={'Please provide your name, email address, and phone number.'} />

<form className='AppForm' method='get' action='#'
    onSubmit={handleSubmit(onSubmit)}>
    
    <label for='name'>Name</label>
    <input id='name' type="text" placeholder="e.g. Stephen King" {...register("Name", {required: true, maxLength: 20})}/>
    {errors.Name && <span>this filed is required</span>}
    
    <label for='email'>Email</label>
    <input type="email" placeholder="e.g. stephenking@lorem.com" {...register("EmailAdress", {required: true, pattern: /^\S+@\S+$/i})}/>
    {errors.EmailAdress && <span>this filed is required</span>}
    
    <label for='Number'>Number</label>
    <input type="text" placeholder="e.g. +1 234 567 890" {...register("PhoneNumber", {required: true, maxLength: 20})}/>
    {errors.PhoneNumber && <span>this filed is required</span>}


    <input type="submit" onClick={EventHndler} />
</form>
</>
)
}

export default AppForm;