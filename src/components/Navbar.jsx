import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import notloggeduser from '../assets/user.png'
import { AuthContext } from '../provider/Authprovider';
const Navbar = () => {
    const {user,signout,iconload} = use(AuthContext);
    const {displayName,photoURL} = {...user}
 
    
const tooltipText = user 
        ? displayName || "User (Name not set)" 
        : "User name (login korte hobe first)";
    return (
        <div className='flex     justify-between mx-auto max-w-[1200px] items-center my-5'>
          <button className='btn text-lg h-10 font-extrabold text-white 
                   bg-linear-to-r 
                   from-blue-600 via-sky-300 to-fuchsia-400
                   hover:from-blue-700 hover:to-fuchsia-500 border-none'>
     Toy Toupia
</button>
           <div className='flex gap-3 md:text-[18px] sm:text-[18px] text-[10px]'>
            <NavLink className={({ isActive }) => 
                        isActive 
                            ? "text-sky-500 font-bold border-b-2 border-sky-500"
                            : "text-gray-600 hover:text-sky-500" 
                    } to={"/"}>Home</NavLink>
            <NavLink className={({ isActive }) => 
                        isActive 
                            ? "text-sky-500 font-bold border-b-2 border-sky-500" 
                            : "text-gray-600 hover:text-sky-500"
                    } to={user?"/myprofile":"/auth/login"}>My profile</NavLink>
                    <NavLink className={({ isActive }) => 
                        isActive 
                            ? "text-sky-500 font-bold border-b-2 border-sky-500"
                            : "text-gray-600 hover:text-sky-500" 
                    } to={user? "/extra":"/auth/login"}>Parent tips </NavLink>
            
           </div>
             <div className="flex gap-2 bg-gray-200 p-1 rounded-md items-center">
                {iconload? <span className="loading loading-spinner loading-lg"></span> :<img referrerPolicy='no-referrer' title={tooltipText} className='rounded-full w-[35px]'  src={user? `${photoURL}` : notloggeduser} alt="" /> }
           <Link 
    to={user ? "/" : "/auth/login"} 
    onClick={() => {user ? signout() : null}} 
    className='btn btn-info'
>
    {user ? "Logout" : "Login"}
</Link>
             </div>
         
        </div>
    );
};

export default Navbar;