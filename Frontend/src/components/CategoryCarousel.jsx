import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Forntend Developer",
  "Backand Developer",
  "Graphic Designer",
  "Digital Markiting",
  "FullStack Developer",
  "Mobile App Developer",
  "DevOps Engineer",
  "Data Scientist",
];
const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className={`w-full mx-auto my-20 max-w-xl`}>
        <CarouselContent>
          {category.map((cat) => (
            <CarouselItem className={`md:basis-1/2 lg:basis-1/3`}>
              <Button
                variant={`outline`}
                className={`rounded-full cursor-pointer `}
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious></CarouselPrevious>
        <CarouselNext></CarouselNext>
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
