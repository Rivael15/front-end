import React from 'react'

type TravelCard = {
  name: string;
  location: string;
  rating: number;
  image: string;
};

const TravelCard = ({ name, location, rating, image, }: TravelCard) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow-500">⭐ {rating}</span>
        </div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-500">{location}</p>
      </div>
      {/* Children akan di-render di sini */}
      <div className="absolute bottom-3 right-3"></div>
    </div>
  );
};

export default TravelCard;