// pages/[slug].js

import React from 'react';
import Navbar from 'src/components/navbar';
import Footer from 'src/components/home/footer';
import Image from 'next/image'
import vendorsData from '../../../utility/vendorsDataAll.json';

const SingleVendorPage = ({ vendor }) => {
  if (!vendor) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-bold mb-4">Vendor Not Found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8">
          <Image
          src={vendor.image}
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <h1 className="text-3xl font-bold mb-4">{vendor.name}</h1>
        <p className="text-gray-700 mb-4">{vendor.description}</p>
        <p className="text-gray-500">Category: {vendor.category}</p>
        <p className="text-gray-500">District: {vendor.district}</p>
        {/* Add more details about the vendor as needed */}
      </div>
      <Footer />
    </>
  );
};

export async function generateStaticParams() {
  const vendors = vendorsData;

    return vendors.map((vendor) => ({
    slug: vendor.slug,
  }))
}


export default function page({ params }) {
  const { slug } = params
  return <SingleVendorPage vendor={vendorsData.find((vendor) => vendor.slug === slug)} />
}