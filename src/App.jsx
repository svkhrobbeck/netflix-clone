// pages
import { useEffect, useState } from "react";
import { SignIn, Home } from "./pages";

import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { userSignSuccess } from "./slice/auth";
import { getStorage } from "./utils/utils";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loggedIn } = useSelector(state => state.auth);

  // useEffect(() => {
  //   onAuthStateChanged(auth, user => {
  //     if (user) {
  //       if (getStorage("token") === user.accessToken) {
  //         const { uid, accessToken, email, displayName, photoURL } = user;
  //         const data = { uid, accessToken, email, displayName, photoURL };
  //         dispatch(userSignSuccess(data));
  //       }
  //     }
  //   });
  // }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {!loggedIn && <Route path="/sign-in" element={<SignIn />} />}
      </Routes>
    </>
  );
};

export default App;
