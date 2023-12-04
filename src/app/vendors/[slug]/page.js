// pages/[slug].js

import React from 'react';
import Navbar from 'src/components/navbar';
import Footer from 'src/components/home/footer';
import Image from 'next/image'
import vendorsData from '../../../utility/vendorsDataAll.json';
import Calendar from 'src/components/calander';

const SingleVendorPage = ({ vendor }) => {
  // const handleBooking = () => {
  //   // Handle booking logic, e.g., send data to a server, display confirmation, etc.
  //   alert('Booking submitted!');
  // };
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
        <Image
          src={vendor.image}
          className="max-h-80 object-cover w-full opacity-60"
          width={1000}
          height={100}
          alt="Vendor Image"
        />
        <div className="absolute top-0 left-20 w-full h-full flex pt-48 ">
          <div className="text-brown text-start">
          <div className="flex  mt-2">
              {/* {vendor.tags.map((tag) => (
                <span key={tag} className="mr-2 text-sm bg-rose text-white p-1 rounded-md">{tag}</span>
              ))} */}
              <span className="mr-2 text-sm bg-rose text-brown p-1 rounded-md">test</span>
              <span className="mr-2 text-sm bg-rose text-brown p-1 rounded-md">Best</span>
            </div>
            <h1 className="text-3xl font-bold">{vendor.name}</h1>
            <div className="flex mt-2">
              <span className="">★ 9.2</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex">
        {/* Vendor Details */}
        <div className="flex-1">
          <p className="text-gray-700 mb-4">{vendor.description}</p>
          <p className="text-gray-500">Category: {vendor.category}</p>
          <p className="text-gray-500">District: {vendor.district}</p>

          {/* Booking Form */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Book {vendor.name}</h2>
            <form>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                Select Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full border p-2"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Your Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border p-2"
                required
              ></textarea>
            </div>

            <button
              type="button"
              className="bg-primary-700 text-white py-2 px-4 rounded hover:bg-primary-800"
            >
              Book Now
            </button>
          </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-1/4 ml-8">
          {/* Calendar Component */}
          <div className="bg-gray-200 p-4 rounded-md mb-4">
            {/* Your calendar component goes here */}
            <p>Calendar</p>
            <Calendar />
          </div>

          {/* Check Availability Button */}
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