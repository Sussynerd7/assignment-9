import React, { use } from 'react';
import { AuthContext } from '../provider/Authprovider';
import { toast, ToastContainer } from 'react-toastify';

const Preset = () => {
    const {resetpass}= use(AuthContext)
const handleresetpas=(e) =>{

    e.preventDefault()
   
    const email = e.target.email.value;
  toast.success("Resetting password proccess was started check you mail spam folder")
 
    
    

resetpass(email)
  
  .catch((error) => {
    toast.error(error.message);
  });

 

}
    return (
        <div>
           
            <title>Reset Password</title>

            <h1 className='text-2xl text-center'>Reset your password</h1>
            <div className="card bg-base-100  w-[360px] mx-auto  shadow-2xl">
      <div className="card-body">
        <form action="" onSubmit={handleresetpas} >
        <fieldset className="fieldset">
          <label className="label">email</label>
          <input required name='email' type="email" className="input" placeholder="Email" />
          
          
          <button className="btn btn-neutral mt-4">reset</button>
        </fieldset>
        </form>
      </div>
    </div>
    
        </div>
    );
};

export default Preset;

