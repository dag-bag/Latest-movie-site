import React, { useState } from "react";
import "../assets/Navbar/Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  const [text, settext] = useState("");
  let queryApi = `https://yts.mx/api/v2/list_movies.json?query_term=`;
  const textChange = (e) => {
    settext(e.target.value);
  };
  const searchMovies = (e) => {
    e.preventDefault();
    props.getM(queryApi + text);
  };
  const homePage = () => {
    props.getM(props.api);
  };
  return (
    <>
      <header>
        <div className="menuBar">
          <i className="fas fa-bars" id="Menu"></i>
        </div>
        <nav id="nav">
          <ul>
            <li id="home" onClick={homePage}>
              <Link to={"/Latest-movie-site"}>Home</Link>
            </li>
            <li>About</li>
            <li>APis</li>
            <li>
              {" "}
              <Link to={"/contact"}>Contact</Link>{" "}
            </li>
            <div className="close">
              <i className="fas fa-times" id="close"></i>
            </div>
          </ul>
        </nav>
        <div className="searchBar">
          <form id="form" onSubmit={searchMovies}>
            <input
              type="text"
              placeholder="Search Movies"
              id="search"
              onChange={textChange}
              value={text}
            />
          </form>
        </div>
      </header>
    </>
  );
}
