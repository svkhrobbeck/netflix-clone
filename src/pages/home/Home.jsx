import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Header } from "../../components";
import HeroBanner from "../../components/hero-banner/HeroBanner";

const Home = () => {
  const navigate = useNavigate();
  const { loggedIn } = useSelector(state => state.auth);

  return (
    <>
      {loggedIn ? (
        <>
          <Header />
          <main className="main-content">
            <HeroBanner />
          </main>
        </>
      ) : null}
    </>
  );
};

export default Home;
