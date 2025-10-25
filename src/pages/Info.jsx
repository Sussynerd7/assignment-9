import React from 'react';
import { useLoaderData, useParams } from 'react-router'; 
import { toast } from 'react-toastify';

const Info = () => {
const info = useLoaderData() || [];     
const { id } = useParams();

const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("successful!!");
}

const that = info.find((item) => (
  item.toyId == id
));

const { 
  toyName, 
  sellerName, 
  sellerEmail, 
  price, 
  rating, 
  availableQuantity, 
  description, 
  pictureURL,
  subCategory
} = that;

return (
<div className="min-h-screen rounded-2xl bg-gray-50 p-4 sm:p-8 lg:p-12">
            <title>Info page</title>

<div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
    
<div className="p-6 sm:p-10 bg-indigo-600 text-white">
  <h1 className="text-4xl font-extrabold">{toyName}</h1>
  <p className="text-indigo-200 mt-2 text-lg">{subCategory}</p>
</div>

<div className="lg:flex p-6 sm:p-10 gap-10">
  <div className="lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
    <img 
      src={pictureURL} 
      alt={toyName} 
      className="w-full max-w-xs sm:max-w-md 2xl:max-w-[700px] h-auto rounded-lg shadow-xl object-contain transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]" 
    />
  </div>

  <div className="lg:w-1/2 space-y-8">
    <div className="flex justify-between items-center pb-4 border-b">
      <div>
        <p className="text-4xl font-bold text-red-600">${price.toFixed(2)}</p>
        <p className="text-sm text-gray-500 mt-1">
          {availableQuantity} available in stock
        </p>
      </div>
      <div className="flex items-center text-yellow-500">
        <span className="text-3xl font-bold mr-2">{rating}</span>
        <span>⭐</span> 
      </div>
    </div>

    <div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">Product Overview</h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>

    <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Seller Details</h3>
      <p className="text-gray-700">
        <span className="font-medium">Name:</span> {sellerName}
      </p>
      <p className="text-gray-700">
        <span className="font-medium">Contact:</span> 
        <a href={`mailto:${sellerEmail}`} className="text-indigo-600 hover:underline ml-1">
          {sellerEmail}
        </a>
      </p>
    </div>
    
    
  </div>
</div>

</div>
<div className="flex justify-center items-center w-full">
  <div className="card-body w-full max-w-[1200px] mx-auto">
    <form onSubmit={handleSubmit}>
      <fieldset className="fieldset">
        <label className="label">Email</label>
        <input type="email" name="email" className="input w-full" placeholder="Email" />
        <label className="label">name</label>
        <input name="name" type="name" className="input w-full" placeholder="name" />
        <button className="btn btn-neutral mt-4 w-full">try now</button>
      </fieldset>
    </form>
  </div>
</div>
</div>
);
};

export default Info;