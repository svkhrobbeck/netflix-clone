// style
import "./Header.scss";

import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { userSignOut } from "../../slice/auth";
import { useEffect, useState } from "react";

const Header = () => {
  const { loggedIn, user } = useSelector(state => state.auth);
  const [fixed, setFixed] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        dispatch(userSignOut());
        navigate("/sign-in");
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  }, []);

  return (
    <header className={`site-header ${fixed && "site-header--fixed"}`}>
      <div className="container site-header__container">
        <Link className="logo">
          <img className="logo__img" src="/images/logo.svg" alt="Netflix logo" />
        </Link>
        {loggedIn && (
          <button className="site-header__logout button" onClick={handleSignOut} title="Log Out">
            <img className="site-header__logout-img" src={user?.photoURL} alt="" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
