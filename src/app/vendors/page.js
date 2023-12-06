"use client";

import React, { useState } from 'react';
import VendorItem from '../../components/VendorItem';
import Navbar from 'src/components/navbar';
import Footer from 'src/components/home/footer';
import vendorsData from '../../utility/vendorsDataAll.json';
import SearchBar from 'src/components/vendor/searchBar';

const VendorsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVendors = vendorsData.filter((vendor) => {
    const categoryFilter = selectedCategory === 'All' || vendor.category === selectedCategory;
    const districtFilter = selectedDistrict === 'All' || vendor.district === selectedDistrict;
    const searchFilter = searchTerm === '' || vendor.name.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryFilter && districtFilter && searchFilter;
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

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const categoryOptions = ['All', 'Florist', 'Bridal Wear', 'Bakery', 'Photography'];
  // Add your Sri Lankan districts
  const districtOptions = ['All', 'Colombo', 'Gampaha', 'Kandy', 'Galle', 'Jaffna', 'Matara'];


  return (
    <>
      <Navbar />
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <SearchBar onSearch={handleSearch} />
        <div className='flex md:gap-8'>
          <div className="p-1 md:p-4 flex-col md:flex md:flex-row  md:gap-4 items-center">
            <label className="text-sm  text-gray-700">Category:</label>
            <select
              className="mt-1 block w-40 p-2 border rounded-md"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              {categoryOptions.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="flex-col md:flex md:flex-row p-4 gap-4 items-center">
            <label className="block text-sm  text-gray-700">District:</label>
            <select
              className="mt-1 block w-40 p-2 border rounded-md"
              value={selectedDistrict}
              onChange={(e) => handleDistrictChange(e.target.value)}
            >
              {districtOptions.map((district) => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="p-4 flex-col md:flex md:flex-row md:gap-4 items-center justify-self-end">
          <label className="text-sm text-gray-700">Sort by:</label>
          <select
            className="mt-1 block w-28 p-2 border rounded-md"
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="category">Category</option>
          </select>
        </div>
        {searchTerm && (
          <button
            className="p-2 mt-4 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none"
            onClick={clearSearch}
          >
            Clear Search
          </button>
        )}
      </div>
      <div className="flex-1 p-4">

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 p-2">
          {sortedVendors.map((vendor) => (
            <div key={vendor.id} className="flex flex-col h-full">
              <VendorItem vendor={vendor} />
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </>
  );
};

export default VendorsPage;
