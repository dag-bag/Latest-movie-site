import React from "react";
import "../assets/Home/Slider/Slider.css";
import SliderBox from "./SliderBox";
export default function Slider(props) {
  const getID = (id) => {
    props.Gid(id);
  };

  return (
    <>
      <div className="slider">
        <div className="sliderCol">
          <SliderBox
            Movies={props.Movies}
            api={props.api}
            getM={props.getM}
            fID={getID}
          />
        </div>
      </div>
    </>
  );
}
