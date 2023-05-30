// style
import "./HeroBanner.scss";

import { useEffect, useState } from "react";
import moviesService from "../../service/movies";
import request from "../../service/request";

const HeroBanner = () => {
  const [movie, setMovie] = useState({});

  console.log(movie);

  const getRandomNumber = max => {
    return Math.trunc(Math.random() * max);
  };

  const handleGetMovies = async () => {
    const { results } = await moviesService.getData(request.NetflixOriginals);
    setMovie(results[getRandomNumber(results.length)]);
  };

  useEffect(() => {
    handleGetMovies();
  }, []);

  return (
    <section className="hero-banner" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")` }}>
      <div className="hero-banner__inner">
        <div className="hero-banner__content">
          <h2 className="hero-banner__title">{movie?.original_name}</h2>
          <div className="hero-banner__buttons">
            <button className="button button--white hero-banner__btn">Play</button>
            <button className="button button--black hero-banner__btn">My List</button>
          </div>
          <p className="hero-banner__overview">{movie?.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
