import React from 'react'
import ReactNode from "react";

type DestinationCardProps = {
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
  children?: ReactNode;
};

const DestinationCard = ({ name, location, rating, imageUrl, children }: DestinationCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      <img src={imageUrl} alt={name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow-500">⭐ {rating}</span>
        </div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-500">{location}</p>
      </div>
      <div className="absolute bottom-3 right-3">{children}</div>
    </div>
  );
};

export default DestinationCard;
