import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Download(props) {
  const [SingleData, setSingleData] = useState([]);
  const api = `https://yts.torrentbay.to/api/v2/movie_details.json?movie_id=${props.ID}`;
  async function getMovies(api) {
    // const resp = await fetch(api);
    // const respData = await resp.json();
    // const data = respData.data.movies;
    // console.log(resp);
    const resp = await axios.get(api);
    const realData = resp;
    setSingleData(realData.data.data.movie);
    console.log(realData.data.data.movie);
    // const data = await axios.get(api);
    // console.log(data);
  }
  useEffect(() => {
    getMovies(api);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <img src="" alt="" />
    </div>
  );
}
