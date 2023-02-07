import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  AppBar,
  Toolbar,
  Typography,
  colors,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MovieCard } from "./components/MovieCard.js";
import Footer from "./components/Footer.js";
const API_KEY = "c8082b36";
const useStyles = makeStyles({
  root: {
    alignItems: "center",
    backgroundColor: "white",
  },
  selectStyles: {
    width: "100px",
    height: "30px",
  },
});
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [selectedOption, setSelectedOption] = useState("movie");
  const classes = useStyles();
  useEffect(() => {
    console.log("this is selected option", setSelectedOption);
    const fetchMovies = async () => {
      let url = `https://www.omdbapi.com/?s=${category}&apikey=${API_KEY}`;
      if (selectedOption) {
        url += `&type=${selectedOption}`;
      }
      const res = await fetch(url);
      const data = await res.json();

      setMovies(
        data.Search ? data.Search.filter((obj) => obj.Poster !== "N/A") : []
      );
    };
    fetchMovies();
  }, [category, selectedOption]);

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
      <AppBar className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.typographyAlign}>
            Movies
          </Typography>
          <TextField
            label="Search"
            type="text"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Button variant="outlined" onClick={() => setCategory(searchTerm)}>
            Search
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setSearchTerm("");
              setSelectedOption("");
              setCategory("trending");
            }}
          >
            Trending
          </Button>
          <select
            className={classes.selectStyles}
            onChange={(event) => setSelectedOption(event.target.value)}
          >
            <option value="movie">Movies</option>
            <option value="series">Series</option>
            <option value="episode">Episodes</option>
          </select>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} alignItems="center">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Grid item key={movie.imdbID} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} />
            </Grid>
          ))
        ) : (
          <p style={{ marginTop: "100px" }}>No Result Found</p>
        )}
      </Grid>
      <Footer />
    </Container>
  );
};

export default App;
