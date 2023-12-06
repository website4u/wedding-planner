
import React from 'react';
import Navbar from 'src/components/navbar';
import Footer from 'src/components/home/footer';
import NextImage from 'next/image'
import vendorsData from '../../../utility/vendorsDataAll.json';
import Calendar from 'src/components/calander';

import { Space, Rate, Tag, Image } from 'antd';
import BookingForm from 'src/components/vendor/bookingForm';
import VendorNav from 'src/components/vendor/vendorNav';
import AddRating from 'src/components/vendor/addRating';
import ProjectList from 'src/components/vendor/projectList';
import SimilarVendors from 'src/components/vendor/SimilarVendors';
import VendorProfile from 'src/components/vendor/profileVendor';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

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
      <div className="relative">
        <NextImage
          src={vendor.image}
          className="max-h-96 object-cover w-full opacity-60"
          width={1000}
          height={100}
          alt="Vendor Image"
        />
        <div className="absolute top-0 left-5 md:left-20 w-full h-full flex pt-20 md:pt-48 ">
          <div className="text-brown text-start">
            <div className="flex  mt-2">
              {vendor.tags.map((tag) => (
                <Tag key={tag} >{tag}</Tag>
              ))}
            </div>
            <h1 className="text-3xl font-bold py-2">{vendor.name}</h1>
            <p className="py-2">Category: {vendor.category}</p>
            <Space className='py-2'>
              <Rate tooltips={desc} value={vendor.ratings.average} />
              <span className="text-base">
                {vendor.ratings.average} ({vendor.ratings.count})
              </span>
            </Space>
          </div>
        </div>
      </div>
      <VendorNav />
      <div className="container mx-auto mt-8 flex flex-col md:flex-row px-4">
        <div className="flex-1">
          <div className=''>
            <h2 className="text-2xl font-bold pb-4 md:pb-16" id='img-gallery'>Images</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {vendor.images.map((image, index) => (
                <div key={index} className="relative overflow-hidden">
                  <Image
                    src={image}
                    className="object-cover w-full h-48"
                    width={400}
                    height={300}
                    alt={`Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <h1 className='text-2xl font-bold py-4 md:py-16' id="decription">Description</h1>
          <div>
            <div dangerouslySetInnerHTML={{ __html: vendor.longDescription }} />
          </div>
          <h1 className='text-2xl font-bold py-4 md:py-16' id='projects'>Projects</h1>
          <div className='p-4'>
            <ProjectList projects={vendor.projects} />
          </div>
          <h2 className="text-2xl font-bold md:pt-20 md:pb-8 py-4" id='reviews'>Add New Rating</h2>
          <AddRating />
          <SimilarVendors currentVendor={vendor} vendors={vendorsData} />
        </div>

        {/* Sidebar */}
        <div className="md:w-1/4 md:ml-8 p-4 max-h-screen">
          {/* Calendar Component */}
          <VendorProfile vendor={vendor} />
          <div className="bg-gray-200 p-4 rounded-md mb-4">
            <p>Calendar</p>
            <Calendar />
          </div>

          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Check Availability
          </button>
        </div>
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