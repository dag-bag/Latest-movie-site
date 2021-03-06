import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/Download/Donwload.css";
import { useParams } from "react-router-dom";

export default function Download(props) {
  const { id, slug } = useParams();
  const [SingleData, setSingleData] = useState([]);

  const api = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
  async function getMovies(api) {
    document.title = slug;
    // const resp = await fetch(api);
    // const respData = await resp.json();
    // const data = respData.data.movies;
    // console.log(resp);
    props.setLoading(true);
    const resp = await axios.get(api);

    // fetch()
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((movieData) => {
    //     const movieObj = movieData.data.movie;
    //     setSingleData(movieObj);
    //   });
    // props.setLoading(false);
    // // const respData = await resp.json();
    // console.log(resp);
    const data = resp.data.data;
    const realData = data === undefined ? [] : data;
    setSingleData(realData.movie);
    props.setLoading(false);
    // console.log(realData.data.data.movie);
    // const data = await axios.get(api);
    // console.log(data);
  }

  useEffect(() => {
    getMovies(api);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    title,
    title_long,
    year,
    rating,
    genres,
    description_full,
    torrents,
    large_cover_image,
    background_image_original,
  } = SingleData;

  return (
    <div
      className="downloadPage"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background_image_original})`,
      }}
      key={id}
    >
      <div className="downloadCol">
        <div className="leftCol">
          <h1>{title_long}</h1>
          <h2>
            Year:<span>{year}</span>{" "}
          </h2>
          <h2>
            Ratings:<span>{rating}</span>{" "}
          </h2>
          <h3>
            genres:
            {genres === undefined
              ? "Not avalible"
              : genres.map((i) => {
                  return <span> {i} | </span>;
                })}
          </h3>
          <div className="about">
            <h2>About the movie</h2>
            <p>{description_full}</p>
          </div>
        </div>
        <div className="rightCol">
          <div className="imgContainer">
            <img src={large_cover_image} alt="" />
          </div>
          <button>Download Now</button>
          <div className="btn2">
            {torrents === undefined
              ? "not"
              : torrents.map((item) => {
                  const { quality, size, url } = item;
                  return (
                    <a href={url} key={size} className="donwloadLinks">
                      {quality}|{size}
                    </a>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
}
