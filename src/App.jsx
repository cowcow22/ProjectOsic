import Login from "./component/Login.jsx";
import Osic from "./component/Osic.jsx";
import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
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
      {token ? <Osic /> : <Login />}
      {/* 
    <Routes>
        <Route exact path="/" Component={Login}></Route>
        <Route exact path="/osic" Component={Osic}></Route>
      </Routes>
      */}
    </div>
  );
}

export default App;
