import React from 'react';
import VendorItem from './VendorItem';
import vendorsData from '../utility/vendorsData.json'; // Import your JSON data

const VendorList = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5 p-2 ">
      {vendorsData.map((vendor) => (
        <div key={vendor.id} className="flex flex-col h-full">
          <VendorItem vendor={vendor} />
        </div>
      ))}
    </div>
  );
};

export default VendorList;
