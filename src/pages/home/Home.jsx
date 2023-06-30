<<<<<<< HEAD
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Films, Header } from "../../components";
import HeroBanner from "../../components/hero-banner/HeroBanner";
import request from "../../service/request";

const Home = () => {
  const { loggedIn } = useSelector(state => state.auth);

  return (
    <>
      {loggedIn ? (
        <>
          <Header />
          <main className="main-content">
            <HeroBanner />
            <Films title="NETFLIX ORIGINALS" isLarge={true} request={request.NetflixOriginals} />
            <Films title="Trending Now" isLarge={false} request={request.Trending} />
          </main>
        </>
      ) : (
        <div className="please">
          <Link className="please__btn button button--white" to={"/sign-in"}>
            Please Sign In
          </Link>
        </div>
      )}
    </>
  );
};

export default Home;
=======
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Films, Header } from "../../components";
import HeroBanner from "../../components/hero-banner/HeroBanner";
import request from "../../service/request";

const Home = () => {
  const { loggedIn } = useSelector(state => state.auth);

  return (
    <>
      {loggedIn ? (
        <>
          <Header />
          <main className="main-content">
            <HeroBanner />
            <Films title="NETFLIX ORIGINALS" isLarge={true} requestStr={request.NetflixOriginals} />
            <Films title="Trending Now" requestStr={request.Trending} />
            <Films title="Top Rated" requestStr={request.ActionMovies} />
            <Films title="Action Movies" requestStr={request.ComedyMovies} />
            <Films title="Comedy Movies" requestStr={request.HorrorMovies} />
            <Films title="Romance Movies" requestStr={request.RomanceMovies} />
            <Films title="Documentary Movies" requestStr={request.Documentaries} />
          </main>
        </>
      ) : (
        <div className="please">
          <p className="please__text">You are not Signed in, please sign in</p>
          <Link className="please__btn button button--white" to={"/sign-in"}>
            Sign In
          </Link>
        </div>
      )}
    </>
  );
};

export default Home;
>>>>>>> 410c153bfc1f44cdd110469d4626f52f7432afdb
