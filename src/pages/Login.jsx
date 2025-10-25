import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/Authprovider';

const Login = () => {
   const [toggle,setToggle] = useState(true)

    const { signinUser ,setUser,goo} = use(AuthContext)

const handlegoo=(e)=>{
         e.preventDefault()
    goo()
    .then((result)=>{
        setUser(result.user)
    })
    }
    const handlelogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signinUser(email,password)
        .then((result)=>{
            console.log(result)
        })


    }
    const etoggle =()=>{
    setToggle(!toggle)
}
    return (
        <div>
            <title>Login</title>

            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col ">

          <div className="card bg-base-100 w-[300px] shadow-2xl">
 <div className="card-body">
  <form action="" onSubmit={handlelogin}>
    <fieldset className="fieldset">
         
     <label className="label">Email</label>
      <input type="email" name="email" className="input" placeholder="Email" />
 <label className="label">Password</label>
   <input name="password" type={toggle? "password":"text"} className="input" placeholder="Password" />
   <button title='password visibility toggle' onClick={etoggle} className='relative bottom-17 left-28'>{toggle?"(- _ -) ":"(^ _ ^)" }</button>
 <div><Link to={"/auth/preset"} className="link link-hover">Forgot password?</Link></div>
     <button className="btn btn-neutral mt-4">Login</button>
    
     </fieldset>
 </form> 
 <button onClick={handlegoo} className='btn btn-primary btn-soft'>use google</button>
    <h1>do not have an account?<Link to={"/auth/register"} className='text-secondary'>Register</Link></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;


