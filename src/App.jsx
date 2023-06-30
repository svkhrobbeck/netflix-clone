// pages
import { SignIn, Home } from "./pages";

import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { getStorage } from "./utils/utils";
import { userSignSuccess } from "./slice/auth";

const App = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector(state => state.auth);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        if (getStorage("token") === user.accessToken) {
          const { uid, accessToken, email, displayName, photoURL } = user;
          const data = { uid, accessToken, email, displayName, photoURL };
          dispatch(userSignSuccess(data));
        }
      }
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={loggedIn ? <Navigate to="/" /> : <SignIn />} />
      </Routes>
    </>
  );
};

export default App;
