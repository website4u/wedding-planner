import React, { useState, useEffect } from "react";
import VenueItem from "../all/venueItem";
import venuesData from "@/lib/venuesDataAll.json";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const VenueList = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const limitedVenues = venuesData.slice(0, 10);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(limitedVenues.length);
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
          {limitedVenues.map((venue) => (
            <CarouselItem key={venue.id} className="md:basis-1/4 lg:basis-1/5">
              <div className="p-1">
                <VenueItem venue={venue} />
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
            className={`mx-1 h-2 w-2 rounded-full cursor-pointer ${current === index + 1 ? 'bg-blue-700' : 'bg-gray-300'}`}
            onClick={() => api.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default VenueList;
