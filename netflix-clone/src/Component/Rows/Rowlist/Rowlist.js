import React from 'react';
import Row from '../Row/Row';
import requests from '../../../Uitils/Request';

export default function Rowlist() {
  return (
    <div>
      {/* Netflix Originals */}
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow // Pass `isLargeRow` to apply large poster styling
      />

      {/* Trending Now */}
      <Row 
        title="Trending Now" 
        fetchUrl={requests.fetchTrending} 
      />

      {/* Top Rated */}
      <Row 
        title="Top Rated" 
        fetchUrl={requests.fetchTopRated} 
      />

      {/* Upcoming Movies */}
      <Row 
        title="Upcoming Movies" 
        fetchUrl={requests.fetchUpcoming} 
      />
    </div>
  );
}
