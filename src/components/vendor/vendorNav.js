import React from 'react';

const VendorNav = () => {
  return (
    <div className='flex gap-6 container p-4 pl-24 border-b-2 sticky top-0 bg-rose z-40'>
      <a className='border-r pr-6 border-brown' href='#vendorP'>
        Vendor Profile
      </a>
      <a className='border-r pr-6 border-brown' href='#img-gallery'>
        Images
      </a>
      <a className='border-r pr-6 border-brown' href='#decription'>
      Description 
      </a>
      <a className='border-r pr-6 border-brown' href='#projects'>
        Projects
      </a>
      <a className='border-r pr-6 border-brown' href='#reviews'>
        Reviews
      </a>
    </div>
  );
};

export default VendorNav;
