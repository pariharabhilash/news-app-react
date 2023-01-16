import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const routes = [
   {path: "/",data:{ category: "general" }},
   {path: "/Business",data:{category:"business"}},
    {path:"/Entertainment",data:{category:"entertainment"}},
    {path:"/General",data:{category:"general"}},
    {path:"/Health",data:{category:"Health"}},
    {path:"/Science", data:{category:"science"}},
    {path:"/Sports", data:{category:"sports"}},
    {path:"/Technology", data:{category:"technology"}}

  ];
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" state={{ category: "general" }}>
            NewsMonkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  key="Home"
                  to="/"
                  state={{ category: "general" }}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  key="Business"
                  to="/Business"
                  state={{ category: "business" }}
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  key="Entertainment"
                  to="/Entertainment"
                  state={{ category: "entertainment" }}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  key="General"
                  to="/General"
                  state={{ category: "general" }}
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  key="Health"
                  to="/Health"
                  state={{ category: "health" }}
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  key="Science"
                  to="/Science"
                  state={{ category: "science" }}
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  key="Sports"
                  to="/Sports"
                  state={{ category: "sports" }}
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  key="Technology"
                  to="/Technology"
                  state={{ category: "technology" }}
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
