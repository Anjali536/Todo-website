import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import userInfoAtom from './recoil/UserInfoAtom';

function App() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const status = localStorage.getItem("userStatus");
    setUserInfo(status === "true");
    setLoading(false);
  }, [setUserInfo]);

  if (loading) return <div>Loading...</div>; // ⏳ prevents flash redirect

  return (
    <Routes>
      <Route
        path="/"
        element={
          userInfo ? <Navigate to="/home" /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/login"
        element={
          userInfo ? <Navigate to="/home" /> : <Login />
        }
      />
      <Route
        path="/home"
        element={
          userInfo ? <Home /> : <Navigate to="/login" />
        }
      />
    </Routes>
  );
}

export default App;
