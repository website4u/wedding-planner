import React, { useState, useEffect } from "react";
import categoriesData from "@/lib/categoriesData.json";
import VendorCategoryItem from "@/components/all/VendorCategoryItem";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

const VendorCategoryList = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(categoriesData.length);
    setCurrent(api.selectedScrollSnap() + 1);
    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };
    api.on("select", updateCurrent);
    return () => api.off("select", updateCurrent);
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi} className="w-full max-w-7xl mx-auto">
        <CarouselContent>
          {categoriesData.map((category, index) => (
            <CarouselItem
              key={category.id}
              className="md:basis-1/4 lg:basis-1/5"
            >
              <div className="p-1">
                <VendorCategoryItem category={category} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex justify-center p-4">
        {Array.from({ length: count }).map((_, index) => (
          <span
            key={index}
            className={`mx-1 h-2 w-2 rounded-full cursor-pointer ${
              current === index + 1 ? "bg-blue-700" : "bg-gray-300"
            }`}
            onClick={() => api.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default VendorCategoryList;
