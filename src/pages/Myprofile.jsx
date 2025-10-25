import React, { useContext } from 'react';
import { AuthContext } from '../provider/Authprovider';
import { toast } from 'react-toastify'; 

const Myprofile = () => {
    
    const { user, iconload, setUser, updateUser } = useContext(AuthContext);

    if (iconload) {
        return <div className="flex justify-center items-center h-screen"><span className="text-xl font-semibold text-blue-500 animate-pulse">Loading User Data...</span></div>;
    }
    if (!user) {
        return <div className="text-center p-12 text-red-500">Please log in to view your profile.</div>;
    }

    const { displayName, email, photoURL, uid } = user;

    const handlereset =(e)=>{
        e.preventDefault();

        const name =e.target.name.value;
        const photo =e.target.photo.value;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.info("Profile updated successfully!"); 
          })
          .catch((error) => {
            console.error(error);
            toast.error("Update failed. See console for details."); 
            setUser(user);
          });
        
    }
    
    return (
        <div className='py-10 bg-gray-50 min-h-screen'>
            <title>Profile</title>

            <div className='max-w-4xl mx-auto'>
                <div className='2xl:flex flex m-2 p-3 border border-blue-400/50 bg-blue-50 shadow-2xl rounded-2xl'>
                    <div className='flex items-center p-3 bg-white rounded-2xl shadow-xl'>

                        <img 
                            src={photoURL || 'https://via.placeholder.com/150'} 
                            className='w-[150px] h-[150px] object-cover rounded-full border-4 border-blue-500' 
                            alt="User Profile" 
                        />
                        <div className=' lg:text-lg xl:text-lg md:text-lg 2xl:text-lg  text-[12px] font-semibold p-5 space-y-3 text-gray-700'>
                            <h1 className="text-blue-700">User name: <span className="text-gray-900 font-bold">{displayName || 'N/A'}</span></h1>
                            <h1 className="text-blue-700">Email: <span className="text-gray-900 font-bold">{email}</span></h1>
                            <h1 className="text-blue-700">Unique Id: <span className="text-gray-900 font-bold break-all">{uid}</span></h1>
                        </div>
                    </div>
                </div>

                <div className="card bg-white w-[360px] mx-auto shadow-2xl mt-8">
                    <div className="card-body p-6">
                        <h2 className="text-2xl font-bold  text-blue-600 ">Update Credentials <br /></h2>
                        <h2 className=" font-bold mb-4 text-blue-600 border-b pb-2">You need to declare both Credentials <br /></h2>
                        
                        <form action="" onSubmit={handlereset}>
                            <fieldset className="fieldset">
                                <label className="label block text-sm font-medium text-gray-700">Name</label>
                                <input name='name' type="text" className="input w-full mt-1 p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500" placeholder={displayName || "Enter new name"} />
                                <label className="label block mt-4 text-sm font-medium text-gray-700">Photo URL</label>
                                <input name='photo' type="text" className="input w-full mt-1 p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500" placeholder={photoURL || "Enter new photo URL"} />
                                
                                <button className="btn btn-neutral mt-6 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">Update Profile</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myprofile;