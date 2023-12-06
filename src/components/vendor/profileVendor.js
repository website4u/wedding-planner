import React from 'react';

const VendorProfile = ({ vendor }) => {

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
            <h1 className='text-2xl font-bold p-4 md:pb-16 text-center' id="vendorP">Vendor Profile</h1>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow my-4">
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={vendor.image} alt={`${vendor.name} image`} />
                    <h5 className="mb-1 text-xl font-medium text-gray-900">{vendor.name}</h5>
                    <span className="text-sm text-gray-500">{vendor.category}</span>
                    <div className="flex mt-4 md:mt-6">
                        <a href={`https://maps.app.goo.gl/H7frSPTtj2ZG4Mx16`} target='_blank' className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Location</a>
                        <a href={generateWhatsAppLink()} target='_blank' className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ms-3">WhatsApp</a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default VendorProfile;
