import React from "react";
import VendorCategoryItem from "./VendorCategoryItem";
// @ts-ignore
import categoriesData from "@/lib/categoriesData.json"; // Import your JSON data

const VendorCategoryList = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 p-2 ">
      {categoriesData.map((category) => (
        <div key={category.id} className="flex flex-col h-full">
          <VendorCategoryItem category={category} />
        </div>
      ))}
    </div>
  );
};

export default VendorCategoryList;
