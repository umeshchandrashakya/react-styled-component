import React from "react";

//import components
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThum from "./elements/MovieThum";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";
import {
  API_URL,
  API_KEY,
  API_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE
} from "../config";

import { useState, useEffect } from "react";

const Home = () => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <>
      <HeroImage />
      <SearchBar />
      <Grid />
      <MovieThum />
      <Spinner />
      <LoadMoreBtn />
    </>
  );
};

export default Home;
