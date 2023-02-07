import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
const placeholderImage = "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png";

export const MovieCard = ({ movie }) => {
  return (
    <Card>
      <CardContent>
        <img
          src={movie.Poster === "N/A" ? placeholderImage : movie.Poster}
          alt={movie.Title}
          
        />
        <Typography gutterBottom variant="h5" component="h2" align="center">
          {movie.Title}
        </Typography>
      </CardContent>
    </Card>
  );
};
