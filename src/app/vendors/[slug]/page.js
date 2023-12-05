
import React from 'react';
import Navbar from 'src/components/navbar';
import Footer from 'src/components/home/footer';
import NextImage from 'next/image'
import vendorsData from '../../../utility/vendorsDataAll.json';
import Calendar from 'src/components/calander';

import { Space, Rate , Tag , Image } from 'antd';
import BookingForm from 'src/components/vendor/bookingForm';
import VendorNav from 'src/components/vendor/vendorNav';
import AddRating from 'src/components/vendor/addRating';
import ProjectList from 'src/components/vendor/projectList';
import SimilarVendors from 'src/components/vendor/SimilarVendors';
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
    const encodeURIString = (str) => encodeURIComponent(str);

    // Function to generate the WhatsApp link
    const generateWhatsAppLink = () => {
      const phoneNumber = '9471234567'; // Replace with the actual vendor's phone number
      const message = `Hello ${vendor.name}, I'm contacting you through the True Wedding Planner. Can you please help me with my project?`;
      const encodedMessage = encodeURIString(message);
      return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    };

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
        <div className="absolute top-0 left-20 w-full h-full flex pt-48 ">
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
      <div className="container mx-auto mt-8 flex">
        <div className="flex-1">
          <h1 className='text-2xl font-bold pb-16' id="vendorP">Vendor Profile</h1>
          <div>
            <p className="text-brown mb-4">{vendor.description}</p>
            <p className="text-brown">Category: {vendor.category}</p>
            <p className="text-brown">District: {vendor.district}</p>
            <p className='text-brown'>Mobile: +94 75 1 234 567</p>
            <div className='flex gap-4'>
              <p>Location :</p>
              <a href='https://maps.app.goo.gl/H7frSPTtj2ZG4Mx16' target='_blank' className='text-lbule underline'>MAP</a>
            </div>
            <div className='flex gap-4'>
              <p>WhatsApp :</p>
              <a href={generateWhatsAppLink()} target='_blank' className="text-lbule underline">
              +94 75 1 234 567
            </a>
            </div>
          </div>
          <div className=''>
            <h2 className="text-2xl font-bold py-16" id='img-gallery'>Images</h2>
            <div className="grid grid-cols-3 gap-4">
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
          <h1 className='text-2xl font-bold py-16' id="decription">Description</h1>
          <div>
            <div dangerouslySetInnerHTML={{ __html: vendor.longDescription }} />
          </div>
          <h1 className='text-2xl font-bold py-16' id='projects'>Projects</h1>
          <ProjectList projects={vendor.projects} />
          <h2 className="text-2xl font-bold pt-20 pb-8" id='reviews'>Add New Rating</h2>
          <AddRating />
          <SimilarVendors currentVendor={vendor} vendors={vendorsData} />
        </div>

        {/* Sidebar */}
        <div className="w-1/4 ml-8 max-h-screen">
          {/* Calendar Component */}
          <div className="bg-gray-200 p-4 rounded-md mb-4">
            {/* Your calendar component goes here */}
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