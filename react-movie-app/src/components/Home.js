import React from "react";

//import components
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThum from "./elements/MovieThum";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";

const Home = () => (
  <>
    <HeroImage />
    <SearchBar />
    <Grid />
    <MovieThum />
    <Spinner />
    <LoadMoreBtn />
  </>
);

export default Home;
