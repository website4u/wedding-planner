import React from 'react';
import VendorItem from '../VendorItem';

const SimilarVendors = ({ currentVendor, vendors }) => {
  // Filter vendors based on the current vendor's category
  const similarVendors = vendors.filter((vendor) => vendor.category === currentVendor.category);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Similar Vendors</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 p-2">
        {similarVendors.map((vendor) => (
          <div key={vendor.id} className="flex flex-col h-full">
            <VendorItem vendor={vendor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarVendors;
