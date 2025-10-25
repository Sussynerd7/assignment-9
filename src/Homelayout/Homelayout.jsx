import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Homelayout = () => {
    
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <>
            <div className=' 2xl:px-0 min-h-screen flex-col flex justify-center mx-auto'>
                <header className='px-1 bg-white border-b border-info  sticky top-0 z-10  shadow-md'>
                    <Navbar></Navbar>
                </header>
                <main className='grow mx-auto px-1'>
                    <Outlet></Outlet>


                </main>

                <footer>
                    <Footer></Footer>
                </footer>
                <ToastContainer position="top-right" autoClose={3000} />
            </div>
        </>
    );
};

export default Homelayout;