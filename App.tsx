import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PengenalanJSX } from './course/PengenalanJSX'
import SingleRootElement from './course/SingleRootElement'
import DisplayData from './course/DisplayData'
import FunctionalComponent from './course/FunctionalComponent'
import PropsComponent from './course/PropsComponent'
import FruitComponent from './course/exercisefrontend'
import Travel from './course/mid_frontend/Travel'
import Favorites from './course/mid_frontend/Favorite'

type Destination = {
  id: number;
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
};

function App() {
  const [favorites, setFavorites] = useState<Destination[]>([]);
  const [currentPage, setCurrentPage] = useState<"explore" | "favorites">("explore");

  return (
    <div>
      <nav className="flex justify-between items-center p-4 shadow-md bg-white">
        <div className="text-xl font-bold text-blue-600">🌍 TRAVEL EXPLORER</div>
        <div className="flex gap-4">
          <button
            onClick={() => setCurrentPage("explore")}
            className={`px-4 py-2 rounded ${currentPage === "explore" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Explore
          </button>
          <button
            onClick={() => setCurrentPage("favorites")}
            className={`px-4 py-2 rounded ${currentPage === "favorites" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Favorites ({favorites.length})
          </button>
        </div>
      </nav>

      {currentPage === "explore" ? (
        <Travel favorites={favorites} setFavorites={setFavorites} />
      ) : (
        <Favorites favorites={favorites} />
      )}
    </div>
  );
}

export default App;