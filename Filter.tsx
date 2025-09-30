import React from 'react'
type FilterProps = {
  selectedLocation: string;
  setSelectedLocation: (val: string) => void;
  selectedRating: number;
  setSelectedRating: (val: number) => void;
  locations: string[];
};

const Filter = ({
  selectedLocation,
  setSelectedLocation,
  selectedRating,
  setSelectedRating,
  locations,
}: FilterProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <select
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Locations</option>
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

    </div>
  );
};

export default Filter;
