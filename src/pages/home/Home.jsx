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
