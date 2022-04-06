import React, { useEffect, useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Spinner from "./components/Spinner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Download from "./components/Download";
import Category from "./components/Category";
import Pagination from "./components/Pagination";

function App() {
  const [Id, setId] = useState();
  const [Slug, setSlug] = useState();
  const [Page, setPage] = useState(1);
  const [Loading, setLoading] = useState(false);
  const [Movies, setMovies] = useState([]);
  let movieDownloadAPi = `https://yts.mx/api/v2/list_movies.json?page=${Page}`;
  let UpcomingMoveis = `https://yts.mx/api/v2/list_upcoming.json`;
  let queryApi = `https://yts.mx/api/v2/list_movies.json?query_term=`;
  async function getMovies(api) {
    setLoading(true);
    const resp = await fetch(api);
    const respData = await resp.json();
    const data = respData.data.movies;
    setMovies(data);
    setLoading(false);
    console.log(respData);
  }
  useEffect(() => {
    getMovies(movieDownloadAPi);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Fetch id functions
  const Gid = (id, slug) => {
    setId(id);
    setSlug(slug);
  };
  console.log(Id);
  return (
    <div className="App">
      <Router>
        <Navbar getM={getMovies} api={movieDownloadAPi} />
        <Category getM={getMovies} api={queryApi} />
        {Loading && <Spinner />}
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route
            path={`/download/:slug/:id`}
            element={<Download ID={Id} setLoading={setLoading} />}
          />
          <Route
            path="/Latest-movie-site"
            element={
              <Slider
                Movies={Movies}
                api={queryApi}
                getM={getMovies}
                Gid={Gid}
              />
            }
          />
        </Routes>
      </Router>
      {/* <Pagination
        setPage={setPage}
        page={Page}
        getM={getMovies}
        api={movieDownloadAPi}
      /> */}
    </div>
  );
}

export default App;
