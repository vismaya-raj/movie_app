import React, { useState, useEffect } from "react";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import { MovieCard } from "./MovieCard.js";

const API_KEY = "c8082b36";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("trending");

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
      <h1 className="text-center my-10">Movie List</h1>
      <TextField
        label="Search"
        type="text"
        value={searchTerm}
        onChange={handleSearch}
      />
      <Button variant="outlined" onClick={() => setCategory(searchTerm)}>
        Search
      </Button>
      <Grid container spacing={3}>
        {filteredMovies.map((movie) => (
          <Grid item key={movie.imdbID} xs={12} sm={6} md={4} lg={3}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
