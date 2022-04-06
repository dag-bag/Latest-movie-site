import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";
import "../assets/Home/Slider/subSlider.css";
import React, { useState } from "react";
export default function SliderBox(props) {
  // const getID = (e) => {

  // };

  const getId = (eL) => {
    const id = eL.currentTarget.id;
    props.fID(id);
  };

  const showTag = (e) => {
    props.getM(props.api + e.target.value);
  };

  return (
    <>
      {props.Movies === undefined ? (
        <h1 style={{ fontSize: "3rem" }}>Result not found</h1>
      ) : (
        props.Movies.map((item) => {
          const {
            medium_cover_image,
            rating,
            title,
            genres,
            date_uploaded,
            id,
          } = item;

          return (
            <div className="sliderBox" key={medium_cover_image}>
              <div className="imgcontains">
                <img src={medium_cover_image} alt="" />
              </div>

              <div className="detailsBox">
                <h3>{title}</h3>
                <div className="rating">
                  <MdOutlineStarPurple500
                    color="blue"
                    style={{ fontSize: "2rem", color: "purple" }}
                    className="icon"
                  />
                  <span>{rating}</span>
                </div>
                <Link
                  to={`/download`}
                  id={id}
                  onClick={getId}
                  className="donwloadBtn"
                >
                  DownLoad Now
                </Link>
                <div className="generes">
                  <h5>genres</h5> :
                  {genres === undefined
                    ? "Not Available"
                    : genres.map((gen) => {
                        return (
                          <button value={gen} onClick={showTag} key={gen}>
                            {gen}
                          </button>
                        );
                      })}
                  <span>{date_uploaded}</span>;
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}
