import React from 'react';
import Link from 'next/link';

const VendorItem = ({ vendor }) => (
  <div className="max-w-sm bg-brown border h-full border-gray-200 rounded-lg shadow relative">
    <Link href="/vendors/[slug]" as={`/vendors/${vendor.slug}`}>
      <div className="relative">
        <img className="rounded-t-lg" src={vendor.image} alt={vendor.name} />
        <div className="absolute bottom-2 left-2 p-2 py-1 border rounded-lg border-ash bg-ash ">
          <p className="text-xs md:text-sm italic mb-1">{vendor.category}</p>
        </div>
      </div>
    </Link>
    <div className="p-5">
      <Link href="/vendors/[slug]" as={`/vendors/${vendor.slug}`}>
        <h5 className="mb-2 text-base md:text-lg font-bold tracking-tight text-white">{vendor.name}</h5>
      </Link>
      <p className="mb-3 text-sm md:text-sm font-normal text-lrose">{vendor.description}</p>
      <Link
        href="/vendors/[slug]"
        as={`/vendors/${vendor.slug}`}
        className="inline-flex items-center px-3 align-bottom py-2 text-sm font-medium text-center text-white bg-lbule rounded-lg hover:bg-lrose hover:text-brown focus:ring-4 focus:outline-none"
      >
        View Vendor
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </Link>
    </div>
  </div>
);

export default VendorItem;
