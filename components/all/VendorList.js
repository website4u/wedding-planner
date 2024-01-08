import React from 'react';
import VendorItem from './VendorItem';
import vendorsData from '@/lib/vendorsDataAll.json';

const VendorList = () => {
  const limitedVendors = vendorsData.slice(0, 10);

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5 p-2 ">
      {limitedVendors.map((vendor) => (
        <div key={vendor.id} className="flex flex-col h-full">
          <VendorItem vendor={vendor} />
        </div>
      ))}
    </div>
  );
};

export default VendorList;
