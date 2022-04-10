import React from "react";
import "../assets/Category.css";

export default function Category(props) {
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

  const showCategory = (e) => {
    props.getM(api + e.target.value);
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
