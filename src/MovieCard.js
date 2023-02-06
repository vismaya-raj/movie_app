import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
// const placeholderImage = "https://via.placeholder.com/300x450.png?text=No+Image+Available";

export const MovieCard = ({ movie }) => {
  return (
    <Card>
      <CardContent>
        <img
          src={movie.Poster}
          alt={movie.Title}
        />
        <Typography gutterBottom variant="h5" component="h2">
          {movie.imdbID}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {movie.Title}
        </Typography>
      </CardContent>
    </Card>
  );
};
