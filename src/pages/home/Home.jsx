import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Films, Header } from "../../components";
import HeroBanner from "../../components/hero-banner/HeroBanner";

const Home = () => {
  const { loggedIn } = useSelector(state => state.auth);

  return (
    <>
      {loggedIn ? (
        <>
          <Header />
          <main className="main-content">
            <HeroBanner />
            <Films />
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
