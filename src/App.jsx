import Login from "./component/Login.jsx";
import Osic from "./component/Osic.jsx";
import AboutUs from "./component/AboutUs.jsx";
import "./App.css";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useStateProvider } from "./utilities/StateProvider.jsx";
import { reducerCases } from "./utilities/constant.js";

function App() {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      console.log(hash);
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={token ? <Navigate to="/osic" /> : <Login />} />
        <Route path="/osic" element={token ? <Osic /> : <Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
