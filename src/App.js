import React, { useState, useEffect } from "react";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import { MovieCard } from "./components/MovieCard.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js"
// import MovieCategory from "./components/MoviesByCategory.js";

const API_KEY = "c8082b36";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  // const [trendingCategory, setTrendingCategory] = useState("trending");

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${category}&apikey=${API_KEY}`
      );
      const data = await res.json();
      console.log(data.Search);
      setMovies(data.Search);
    };
    fetchMovies();
  }, [category]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };


  const filteredMovies = movies
    ? movies.filter((movie) =>
        movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <Container>
      <Header/>
      {/* <h1 className="text-center my-10">Movie List</h1> */}
      <TextField
        label="Search"
        type="text"
        value={searchTerm}
        onChange={handleSearch}
      />
      <Button variant="outlined" onClick={() => setCategory(searchTerm)}>
        Search
      </Button>
      <Button variant="outlined"  onClick={() => setCategory('trending')}>
        Trending
      </Button>

     
      <Grid container spacing={3} alignItems = 'center'>
        {filteredMovies.map((movie) => (
          <Grid item key={movie.imdbID} xs={12} sm={6} md={4} lg={3}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
         
      </Grid>
      
      <Footer/>
    
      
    </Container>
  );
};

export default App;
