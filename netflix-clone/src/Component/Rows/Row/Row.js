import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from '../../../Uitils/Axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]); // Default to an empty array
  const [trailerUrl, setTrailerUrl] = useState(''); // State for trailer URL
  const BASE_URL = 'https://image.tmdb.org/t/p/original'; // Base URL for images from TMDB

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        console.log('API Response:', request.data); // Debug API response
        setMovies(request.data.results || []); // Default to empty array if results are missing
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchData(); // Fetch movies when component mounts
  }, [fetchUrl]); // Refetch movies if fetchUrl changes

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(''); // Close the trailer if one is open
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v')); // Extract and set the video ID
        })
        .catch((error) => console.error('Error fetching trailer:', error));
    }
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)} // Handle click to play trailer
              className={`row_poster ${isLargeRow && 'row_poster_large'}`}
              src={
                movie.poster_path || movie.backdrop_path
                  ? `${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`
                  : 'https://via.placeholder.com/300x450?text=No+Image'
              }
              alt={movie?.name || movie?.title || 'No Title'}
            />
          ))
        ) : (
          <p>No movies available</p>
        )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
