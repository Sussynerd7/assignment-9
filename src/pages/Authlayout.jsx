import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import { AuthContext } from '../provider/Authprovider';
import { ToastContainer } from 'react-toastify';

const Authlayout = () => {
    
    return (
        <div className='px-1'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer/>
        </div>
    );
};

export default Authlayout;