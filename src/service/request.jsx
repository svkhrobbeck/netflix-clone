const request = {
  Trending: `/trending/all/week?api_key=${import.meta.env.VITE_PUBLIC_API_KEY}&languages=en-US`,
  NetflixOriginals: `/discover/tv?api_key=${import.meta.env.VITE_PUBLIC_API_KEY}&with_networks=213`,
  TopRated: `/movie/top_rated?api_key=${import.meta.env.VITE_PUBLIC_API_KEY}&languages=en-US`,
  ActionMovies: `/discover/movie?api_key=${import.meta.env.VITE_PUBLIC_API_KEY}&with_genres=28`,
  ComedyMovies: `/discover/movie?api_key=${import.meta.env.VITE_PUBLIC_API_KEY}&with_genres=35`,
  HorrorMovies: `/discover/movie?api_key=${import.meta.env.VITE_PUBLIC_API_KEY}&with_genres=27`,
  RomanceMovies: `/discover/movie?api_key=${import.meta.env.VITE_PUBLIC_API_KEY}&with_genres=10749`,
  Documentaries: `/discover/movie?api_key=${import.meta.env.VITE_PUBLIC_API_KEY}&with_genres=99`,
  trailerQuery: `/videos?api_key=${import.meta.env.VITE_PUBLIC_API_KEY}`,
};

export default request;
