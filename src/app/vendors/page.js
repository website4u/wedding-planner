"use client";

import React, { useState } from 'react';
import VendorItem from '../../components/VendorItem';
import Navbar from 'src/components/navbar';
import Footer from 'src/components/home/footer';
import vendorsData from '../../utility/vendorsDataAll.json';

const VendorsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedDistrict, setSelectedDistrict] = useState('All');
    const [sortBy, setSortBy] = useState('name');
  
    const filteredVendors = vendorsData.filter(vendor => {
      const categoryFilter = selectedCategory === 'All' || vendor.category === selectedCategory;
      const districtFilter = selectedDistrict === 'All' || vendor.district === selectedDistrict;
      return categoryFilter && districtFilter;
    });
  
    const sortedVendors = filteredVendors.slice().sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
  
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };
  
    const handleDistrictChange = (district) => {
      setSelectedDistrict(district);
    };
  
    const handleSortChange = (sortOption) => {
      setSortBy(sortOption);
    };
  
    const categoryOptions = ['All', 'Florist', 'Bridal Wear', 'Bakery', 'Photography'];
    // Add your Sri Lankan districts
    const districtOptions = ['All', 'Colombo', 'Gampaha', 'Kandy', 'Galle', 'Jaffna', 'Matara'];
  

  return (
    <>
    <Navbar />
    <div className="flex">
      <div className="bg-ash border-r p-4">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Filter by Category:</label>
          <select
            className="mt-1 block w-full p-2 border rounded-md"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            {categoryOptions.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Sort by:</label>
          <select
            className="mt-1 block w-full p-2 border rounded-md"
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="category">Category</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Filter by District:</label>
          <select
            className="mt-1 block w-full p-2 border rounded-md"
            value={selectedDistrict}
            onChange={(e) => handleDistrictChange(e.target.value)}
          >
            {districtOptions.map((district) => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 p-2">
          {sortedVendors.map((vendor) => (
            <div key={vendor.id} className="flex flex-col h-full">
              <VendorItem vendor={vendor} />
            </div>
          ))}
        </div>
        
      </div>
    </div>
    <Footer />
    </>
  );
};

export default VendorsPage;
