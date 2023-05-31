// style
import "./Films.scss";

import { useEffect, useState } from "react";
import moviesService from "../../service/movies";
import YouTube from "react-youtube";
import request from "../../service/request";
import { IMG_URL } from "../../constants";
import { Tooltip } from "@mui/material";

const Films = ({ isLarge = false, title, requestStr }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const options = { playerVars: { autoplay: 1 } };

  const handleGetMovies = async () => {
    try {
      const { results } = await moviesService.getData(requestStr);
      setMovies(results.slice(0, 6));
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetTrailers = async movie => {
    try {
      const { results } = await moviesService.getData(`/movie/${movie?.id.toString()}${request.trailerQuery}`);
      setTrailerUrl(results[0]?.key);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBannerClick = movie => {
    console.log("a");
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      handleGetTrailers(movie);
    }
  };

  useEffect(() => {
    handleGetMovies();
  }, [requestStr]);

  return (
    <div className="films">
      <h3 className="films__title">{title}</h3>
      <div className="films__list">
        {!!movies.length &&
          movies.map(movie => (
            <Tooltip title={movie?.original_name || movie?.original_title} key={movie.id}>
              <img
                className={`films__img ${isLarge && "films__img--poster"}`}
                src={`${IMG_URL}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.original_title}
                onClick={() => handleBannerClick(movie)}
                loading="lazy"
              />
            </Tooltip>
          ))}
      </div>
      {trailerUrl && <YouTube className="films__yt-player" videoId={trailerUrl} opts={options} />}
    </div>
  );
};

export default Films;
