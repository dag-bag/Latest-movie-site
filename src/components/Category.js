import React, { useState } from "react";
import "../assets/Category.css";

export default function Category(props) {
  const [Data, setData] = useState([]);

  const genres = [
    "Action",
    "Crime",
    "Drama",
    "Mystery",
    "Adventure",
    "Fantasy",
    "Romance",
    "Film-Noir",
    "Comedy",
    "Horror",
    "Thriller",
    "Sport",
    "Documentary",
  ];
  const api = `https://yts.mx/api/v2/list_movies.json?page=1&genre=`;
  async function getMovies(api) {
    const resp = await fetch(api);
    const respData = await resp.json();
    const data = respData.data.movies;
    setData(data);

    console.log(data);
  }
  const showCategory = (e) => {
    props.getM(api + e.target.value);
    getMovies(api);
  };

  return (
    <div className="Ccontainer">
      {genres.map((item) => {
        return (
          <button
            className="btn"
            key={item}
            onClick={showCategory}
            value={item}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
