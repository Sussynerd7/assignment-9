import React from 'react';
import error from "../assets/error-404.png"
const Error = () => {
    return (
        <div className='flex justify-center '>
            <img className="mx-auto 2xl:w-[700px] lg:w-[600px] w-[400px]" src={error} alt="" />
        </div>
    );
};

export default Error;