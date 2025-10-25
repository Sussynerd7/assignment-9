import React, { use } from 'react';
import { FaStar, FaBox, FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router';
import { AuthContext } from '../provider/Authprovider';


const Cardpop = ({ info }) => {
    
   console.log(info)
    const { 
        toyId,
        toyName, 
        rating, 
        availableQuantity, 
        price, 
        pictureURL,
    } = info;
const { user } = use(AuthContext)

    const ned = user?`/info/${toyId}`:"/auth/login"
    return (
        
        <>
<div className='space-y-3 border border-info 2xl:w-88 2xl:h-[550px] h-[400px] w-50 flex p-3 2xl:p-5 flex-col justify-center items-center bg-gray-100 rounded-xl shadow-2xl transition-all duration-300 hover:border-green-700 hover:shadow-green-500'>
 <div>
     <img src={pictureURL} className='2xl:rounded-xl rounded-md border border-black 2xl:w-80 2xl:h-80 w-40 h-40' alt="" />
 </div>
 <h1 className='2xl:text-xl font-bold'>
 {toyName}</h1>
<div className='flex gap-20 2xl:gap-50 '>
     <h1>${price}</h1>
    <div className='flex items-center gap-1'>
      <h1>{rating} </h1><FaStar></FaStar>
        </div>

        </div>
 <div>
<h1 className='text-left mr-18 2xl:mr-52'>In stock : {availableQuantity}</h1>
               </div>
     <Link className="btn btn-info  font-semibold  w-full" to={ned}>          
 View More</Link>
        </div>
        </>
    );
};

export default Cardpop;