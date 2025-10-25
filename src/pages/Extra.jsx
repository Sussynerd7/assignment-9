import React from 'react';
import img1 from '../assets/dfs.jpg'
import img2 from '../assets/sdfg.jpg'
import img3 from '../assets/download.jpg'
import { FaStar, FaUserCircle } from 'react-icons/fa';

const Extra = () => {
    return (
        <>
            <title>Parent tips</title>

         <div className=' my-10  flex flex-col space-y-5'>
        <div data-aos="fade-right" className='2xl:mr-50 flex border shadow-2xl gap-2 p-3 rounded-2xl justify-center font-bold items-center '>
            <img src={img1} className='rounded-md lg:w-[200px] w-[180px] 2xl:w-[270px]'  alt="" />
            <h1  > kids also get bored without any <br />toys  n be like: i am angry on <br /> you now!!</h1>
        </div>
        <div data-aos="fade-left" className='2xl:ml-50  flex flex-row-reverse  border shadow-2xl gap-2 p-3 rounded-2xl justify-center font-bold items-center '>
            <img src={img2} className='rounded-md lg:w-[200px] w-[180px] 2xl:w-[270px]'  alt="" />
            <h1  > so you need some toys urgent <br /> otherwise there will be consequences!</h1>
        </div>
        <div data-aos="fade-right" className='2xl:mr-50  flex border shadow-2xl gap-2 p-3 rounded-2xl justify-center font-bold items-center '>
            <img src={img3} className='rounded-md lg:w-[200px] w-[180px] 2xl:w-[270px]'  alt="" />
            <h1  > and here is out collection <br />of toys  you kid will like <br /></h1>
        </div>

       </div>
        <div className="py-20 bg-gray-50 overflow-hidden">
           
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div 
                    className="text-center mb-16" 
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    <h2 className="text-5xl md:text-6xl font-extrabold text-indigo-700 mb-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300 ease-in-out inline-block">
                        Toy Topia: Your Playtime Paradise!
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Step into Toy Topia, where imagination knows no bounds! We meticulously curate the finest, safest, and most enchanting toys for every age, ensuring smiles and endless adventure. From educational wonders to thrilling action figures and cuddly companions, our shelves burst with joy. We champion quality, foster creativity, and believe every child deserves a magical playtime experience. Discover why families trust Toy Topia to spark wonder and build cherished memories.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
                    
                    <div 
                        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 flex flex-col items-center"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="800"
                    >
                        <FaUserCircle className="text-5xl text-blue-400 mb-4" />
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Emily R.</h4>
                        <div className="flex text-yellow-500 mb-3">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <p className="text-gray-600 italic text-center">
                            "Toy Topia is simply the best! Their selection is unparalleled, and I always find unique, high-quality toys. My kids absolutely adore everything we get from here."
                        </p>
                    </div>

                    <div 
                        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 flex flex-col items-center"
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="800"
                    >
                        <FaUserCircle className="text-5xl text-green-400 mb-4" />
                        <h4 className="text-xl font-bold text-gray-800 mb-2">David L.</h4>
                        <div className="flex text-yellow-500 mb-3">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <p className="text-gray-600 italic text-center">
                            "I appreciate their commitment to educational value. The customer service is fantastic, and the toys are durable. It's our family's first stop for gifts."
                        </p>
                    </div>
                    
                    <div 
                        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 flex flex-col items-center"
                        data-aos="fade-up"
                        data-aos-delay="600"
                        data-aos-duration="800"
                    >
                        <FaUserCircle className="text-5xl text-purple-400 mb-4" />
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Sarah W.</h4>
                        <div className="flex text-yellow-500 mb-3">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <p className="text-gray-600 italic text-center">
                            "Five stars! The website is easy to navigate, and the shipping is fast. Their building block sets are amazing quality and keep my daughter busy for hours!"
                        </p>
                    </div>

                </div>
            </div>
        </div></>
    );
};

export default Extra;
 
