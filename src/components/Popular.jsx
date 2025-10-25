
import React from 'react';
import Cardpop from './Cardpop';

const Popular = ({info}) => {
const infoi=info.slice(0,9);
    return (
        <div className='grid md:grid-cols-3 my-5 2xl:grid-cols-3 2xl:gap-5 grid-cols-2 gap-3 mx-auto'>
        {infoi.map((info)=>(<Cardpop key={info.toyId} info={info}></Cardpop>))}
        </div>
    );
};

export default Popular;