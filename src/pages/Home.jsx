import React from 'react';
import SimpleSlider from '../components/Sliderfirst';
import Daiysi from '../components/daiysi';
import { useLoaderData } from 'react-router';
import Popular from '../components/Popular';
import Reviw from '../components/Reviw';
import SalesDetail from '../components/Saledetail';

const Home = () => {
    const info=useLoaderData();
   
  const slice=  info.slice(0, 10)   
     

    return (
        <div
        >
            
            <title>TOY Topia Home</title>
            <div className='mx-auto text-center mb-2'>
                <h1 className='text-4xl font-bold'>Our Popular toys </h1>
                <h1 className='text-gray-500 mt-3'>View our trending toys using arroy keys/swipe </h1>
            </div>
            <div className=' 2xl:w-[1250px]  md:w-[690px] w-[400px] p-3 h-60  2xl:h-[430px]  shadow-2xl items-center mx-auto flex bg-gray-100 rounded-3xl'>
            <Daiysi key={slice.toyId} slice={slice}></Daiysi>

            </div>
            <div className='flex 2xl:w-[1200px] md:w-[770px] w-[420px] mx-auto items-center'>
            <Popular key={info.toyId} info={info} ></Popular>
        </div>
        <Reviw></Reviw>
        <SalesDetail></SalesDetail>


        </div>
    );
};

export default Home;