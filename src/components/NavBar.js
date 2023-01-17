import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const routes = [
    { path: "/", value: "Home", data: { category: "general" } },
    { path: "/Business", value: "Business", data: { category: "business" } },
    { path: "/Entertainment", value: "Entertainment", data: { category: "entertainment" } },
    { path: "/General", value: "General", data: { category: "general" } },
    { path: "/Health", value: "Health", data: { category: "Health" } },
    { path: "/Science", value: "Science", data: { category: "science" } },
    { path: "/Sports", value: "Sports", data: { category: "sports" } },
    { path: "/Technology", value: "Technology", data: { category: "technology" } }

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
              {
                routes.map(({ value, path, data }) => {
                  return (
                    <li className="nav-item" key={value}>
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to={path}
                        state={data}
                      >
                        {value}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
