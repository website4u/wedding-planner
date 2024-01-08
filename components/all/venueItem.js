import React from 'react';
import Link from 'next/link';

const VenueItem = ({ venue }) => (
  <div className="max-w-sm bg-brown border h-full border-gray-200 rounded-lg shadow relative">
    <Link href="/venues/[slug]" as={`/venues/${venue.slug}`}>
      <div className="relative">
        <img className="rounded-t-lg" src={venue.image} alt={venue.name} />
        <div className="absolute bottom-2 left-2 p-2 py-1 border rounded-lg border-ash bg-ash ">
          <p className="text-xs md:text-sm italic mb-1">{venue.location}</p>
        </div>
      </div>
    </Link>
    <div className="p-5 flex flex-col justify-between flex-nowrap z-10 relative min-h-60 h-60">
      <Link href="/venues/[slug]" as={`/venues/${venue.slug}`}>
        <h5 className="mb-2 text-base md:text-lg font-bold tracking-tight text-white">{venue.name}</h5>
      </Link>
      <p className="mb-3 text-sm md:text-sm font-normal text-lrose">{venue.description}</p>
      <Link
        href="/venues/[slug]"
        as={`/venues/${venue.slug}`}
        className="inline-flex items-center px-3 align-bottom py-2 text-sm font-medium text-center text-white bg-lbule rounded-lg hover:bg-lrose hover:text-brown focus:ring-4 focus:outline-none"
      >
        View Venue
        <svg
          className="w-3.5 h-3.5 ms-2"
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

export default VenueItem;
