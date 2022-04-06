import React from "react";
import "../assets/Pagination/Paginatin.css";

export default function Pagination(props) {
  const cPage = (e) => {
    props.setPage(e.target.value);
    props.getM(props.api);
  };
  //   const nextPage = () => {
  //     let currentpage = 1;
  //     props.setPage(currentpage + 1);
  //     props.getM(props.api);
  //   };
  return (
    <div>
      <div id="app" className="container">
        <ul className="page">
          <li className="page__btn">prevBtn</li>
          <li className="page__numbers"> 1</li>
          <li className="page__numbers active" onClick={cPage} value={3}>
            2
          </li>
          <li className="page__numbers">3</li>
          <li className="page__numbers">4</li>
          <li className="page__numbers">5</li>

          <li className="page__btn">nexBtn</li>
        </ul>
      </div>
    </div>
  );
}
