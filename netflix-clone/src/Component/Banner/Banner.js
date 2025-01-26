import React, { useEffect, useState } from 'react';
import axios from '../../Uitils/Axios'; // Axios instance
import requests from '../../Uitils/Request'; // API requests
import './Banner.css'; // Import styles

export default function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(requests.fetchTrending); // Fetch trending movies
        const results = response.data.results;

        // Filter movies with valid backdrop paths
        const validMovies = results.filter((movie) => movie.backdrop_path);

        // Pick a random movie from the filtered list
        const randomMovie =
          validMovies[Math.floor(Math.random() * validMovies.length)];

        setMovie(randomMovie);
      } catch (error) {
        console.error('Error fetching banner movie:', error);
      }
    }

    fetchData();
  }, []);

  // Function to truncate text
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <div
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: movie?.backdrop_path
          ? `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
          : `url("https://via.placeholder.com/1920x1080?text=No+Image+Available")`, // Fallback image
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name || 'No Title'}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button_play">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">
          {truncate(movie?.overview || 'No description available.', 150)}
        </h1>
      </div>

      <div className="banner_fadeBottom" />
    </div>
  );
}
 