import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSignOut } from "../../slice/auth";
import { useEffect } from "react";
import { Header } from "../../components";

const Home = () => {
  const navigate = useNavigate();
  const { loggedIn } = useSelector(state => state.auth);

  useEffect(() => {
    if (!loggedIn) {
      navigate("/sign-in");
    }
  }, []);

  return (
    <>
      <Header />
      <main className="main-content container">Some</main>
    </>
  );
};

export default Home;
