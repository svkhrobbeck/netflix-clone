import { useEffect, useState } from "react";
import moviesService from "../../service/movies";
import youtube from "react-youtube";
import { Tooltip } from "@mui/material";

const Films = ({ isLarge = false, title, request }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleGetMovies = async () => {
    const { results } = await moviesService.getData(request);
    setMovies(results);
  };

  useEffect(() => {
    handleGetMovies();
  }, []);

  return <div>Films</div>;
};

export default Films;
