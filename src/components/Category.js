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
  const showCategory = (e) => {
    props.getM(props.api + e.target.value);
  };

  return (
    <div className="Ccontainer">
      {genres.map((item) => {
        return (
          <button key={item} onClick={showCategory} value={item}>
            {" "}
            {item}
          </button>
        );
      })}
    </div>
  );
}
