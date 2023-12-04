import React from 'react';

const VendorItem = ({ vendor }) => (  
  <div className="max-w-sm bg-white border h-full border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-900">
    <a href="#">
      <img className="rounded-t-lg" src={vendor.image} alt={vendor.name} />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-base md:text-lg font-bold tracking-tight text-gray-900 dark:text-white">{vendor.name}</h5>
      </a>
      <p className="mb-3 text-sm md:text-sm font-normal text-gray-700 dark:text-gray-400">{vendor.description}</p>
      <p className="text-xs md:text-sm  text-gray-500 mb-4">{vendor.category}</p>
      <a href="#" className="inline-flex items-center px-3 align-bottom py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        View Vendor
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    </div>
  </div>
);

export default VendorItem;
