// import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// const categories = ['series', 'episode', 'movie'];

// const MovieCategory = () => {
//   const [selectedCategory, setSelectedCategory] = useState('series');
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`http://www.omdbapi.com/?s=${selectedCategory}&apikey=YOUR_API_KEY`)
//       .then((response) => {
//         setMovies(response.data.Search);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [selectedCategory]);

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   return (
//     <div>
//       <select value={selectedCategory} onChange={handleCategoryChange}>
//         {categories.map((category) => (
//           <option key={category} value={category}>
//             {category}
//           </option>
//         ))}
//       </select>
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.imdbID}>{movie.Title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MovieCategory;
