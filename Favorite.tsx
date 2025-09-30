import React from 'react'
import DestinationCard from "./DestinationCard";

type Destination = {
  id: number;
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
};

type FavoritesProps = {
  favorites: Destination[];
};

const Favorites = ({ favorites }: FavoritesProps) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">❤️ Your Favorite Destinations</h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {favorites.map((d) => (
            <DestinationCard
              key={d.id}
              name={d.name}
              location={d.location}
              rating={d.rating}
              imageUrl={d.imageUrl}
            >
              <span className="text-red-500 text-xl">❤️</span>
            </DestinationCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
