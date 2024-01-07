"use client";

import Head from "@/components/home/newhero";
import CatSlider from "@/components/home/catSlider";

import Services from "@/components/home/services";
import Footer from "@/components/home/footer";
import VendorList from "@/components/all/VendorList";
import VendorCategoryList from "@/components/all/VendorCategoryList";

function Home() {
  return (
    <div id="Main">
      <Head />

      <div className="bg-rose p-4">
        <h2 className="text-3xl font-semibold text-brown pl-4 mb-6">
          Featured Vendor Categories
        </h2>
        <CatSlider />
      </div>

      <div className="bg-rose p-4">
        <h2 className="text-3xl font-semibold pl-4  text-brown mb-6">
          Featured Vendors
        </h2>
        <VendorList />
      </div>
      <Services />
      <Footer />
    </div>
  );
}

export default Home;
