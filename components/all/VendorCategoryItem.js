import React from "react";

const VendorCategoryItem = ({ category }) => (
  <div
    className="max-w-sm flex flex-col border h-64 max-h-64 border-gray-200 rounded-lg shadow relative"
    style={{
      width: "100%",
    }}
  >
    <div
      className="border rounded-lg-lg"
      style={{
        backgroundImage: 'url("/assets/hero2.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        borderRadius: 8,
      }}
    ></div>
    <div
      className="border rounded-lg"
      style={{
        backgroundColor: "#3C3C3C",
        opacity: 0.4,
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 2,
      }}
    ></div>
    <div
      className="p-5 flex flex-col justify-between flex-nowrap z-10 relative h-64"
      style={{ zIndex: 3 }}
    >
      <h5 className="mb-2 text-base md:text-lg  font-bold tracking-tight text-white">
        {category.name}
      </h5>
      <p className="mb-3 text-sm md:text-sm font-normal text-rose">
        {category.description}
      </p>
      <a
        href="#"
        className="inline-flex items-center px-3 align-bottom py-2 text-sm font-medium text-center text-white bg-lbule rounded-lg hover:bg-lrose hover:text-brown focus:ring-4 focus:outline-none"
      >
        View Category
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </div>
);

export default VendorCategoryItem;
