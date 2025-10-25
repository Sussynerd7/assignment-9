

import React, { use, useState } from 'react';
import { AuthContext } from '../provider/Authprovider';
import { Link } from 'react-router';

import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
    const handlegoo=(e)=>{
         e.preventDefault()
    goo()
    .then((result)=>{
        setUser(result.user)
    })
    }
   const [toggle,setToggle] = useState(true)
    const {createUser,setUser,user,updateUser,goo} = use(AuthContext)
const handleregister =(e)=>{
    e.preventDefault()
    
const email = e.target.email.value;
const password = e.target.password.value;
const photo = e.target.photo.value;
const name = e.target.name.value;

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
if (!passwordRegex.test(password)) {
            toast('Password must be at least 6 characters long and include at least one uppercase and one lowercase letter.');
            return;
        }
        createUser(email,password)
     .then((result)=>{
       const userinfo = result.user;
       setUser(userinfo)
       
       updateUser({ displayName: name, photoURL: photo })
          .then(() => {

            setUser({ ...user, displayName: name, photoURL: photo });
          })
        
     })


    

}
const etoggle =()=>{
    setToggle(!toggle)
}
   
    return (
        <div>
            <title>Register</title>

           <div className="hero bg-base-200 ">
  <div className="hero-content flex-col ">
    
    <div className="card bg-base-100 w-[300px] shadow-2xl">
      <div className="card-body">
        <form  onSubmit={handleregister}>
        <fieldset className="fieldset">
             <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
             <label className="label">Photo URl </label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URl"
              required
            />
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name="password" type={toggle? "password":"text"} className="input" placeholder="Password" />
          <button title='password visibility toggle' onClick={etoggle} className='relative bottom-17 left-28'>{toggle?"(- _ -) ":"(^ _ ^)" }</button>
          <div><Link to={"/auth/preset"} className="link link-hover">Forgot password?</Link></div>
          <button className="btn btn-neutral mt-4">Register </button>
        </fieldset></form>
         <button onClick={handlegoo} className='btn btn-primary btn-soft'>use google</button>
        <h1>Already have an account?<Link to={"/auth/login"} className='text-secondary'>Login</Link></h1>
       
      </div>
    </div>
  </div>
</div>
<ToastContainer/>
        </div>
    );
};

export default Register;
