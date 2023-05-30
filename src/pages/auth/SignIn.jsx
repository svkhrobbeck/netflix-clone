// style
import "./SignIn.scss";

import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase/firebase";
import { setStorage } from "../../utils/utils";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { userSignFailure, userSignStart, userSignSuccess } from "../../slice/auth";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignInWithGoogle = () => {
    dispatch(userSignStart());
    signInWithPopup(auth, provider)
      .then(result => {
        const { uid, accessToken, email, displayName, photoURL } = result.user;
        const data = { uid, accessToken, email, displayName, photoURL };
        dispatch(userSignSuccess(data));

        // set LocalStorage
        setStorage("token", accessToken);
        setStorage("uid", uid);
        console.log("user signed in");
        navigate("/");
      })
      .catch(error => {
        dispatch(userSignFailure(error));
        console.log(error);
      });
  };

  return (
    <main className="main-content">
      <section className="sign-in">
        <img className="sign-in__logo" src="/images/logo.svg" alt="Netflix logo" width={250} height={68} loading="lazy" />
        <button className="sign-in__button button" onClick={handleSignInWithGoogle} title="Sign in">
          Sign in with Google
        </button>
      </section>
    </main>
  );
};

export default SignIn;
