import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { tokenContext } from "../App";

export const Navbar = () => {
    const { token, setToken } = useContext(tokenContext);
  const navigation = useNavigate();
  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, [token]);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Home</span>
        </Link>
        <div className="ml-auto">
          {token && (
            <button
              className="btn btn-primary m-1"
              onClick={() => {
                sessionStorage.removeItem("token");
                setToken(sessionStorage.getItem("token"))
                navigation("/");
              }}
            >
              Logout
            </button>
          )}
          {!token && (
            <button
              className="btn btn-primary m-1"
              onClick={() => navigation("/login")}
            >
              Log in
            </button>
          )}
            {!token && (
            <button
              className="btn btn-primary m-1"
              onClick={() => navigation("/register")}
            >
              Register
            </button>
          )}

          {token && (
            <button
              className="btn btn-primary m-1"
              onClick={() => navigation("/birthday")}
            >
              Birthday!
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};