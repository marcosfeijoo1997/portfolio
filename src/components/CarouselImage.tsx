import React from "react";

interface ExampleCarouselImageProps {
  src: string;
  alt?: string;

}

const ExampleCarouselImage: React.FC<ExampleCarouselImageProps> = ({ src, alt = "Carousel Image",}) => {
  return (
    <div className="w-full h-64 flex items-center justify-center">
      <img src={src} alt={alt} className="w-full h-full object-cover rounded-lg shadow-md" />
    </div>
  );
};

export default ExampleCarouselImage;
