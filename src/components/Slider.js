import React from "react";
import "../assets/Home/Slider/Slider.css";
import SliderBox from "./SliderBox";
import InfiniteScroll from "react-infinite-scroll-component";

import Spinner from "./Spinner";
export default function Slider(props) {
  const getID = (id, slug) => {
    props.Gid(id, slug);
  };

  return (
    <>
      <div className="slider">
        <InfiniteScroll
          className="sliderCol"
          dataLength={props.length}
          next={props.fetchMoreData}
          // hasMore={props.length !== props.count}
          hasMore={true}
          loader={<Spinner />}
        >
          <SliderBox
            count={props.count}
            length={props.length}
            fetchMoreData={props.fetchMoreData}
            Movies={props.Movies}
            api={props.api}
            getM={props.getM}
            fID={getID}
          />
        </InfiniteScroll>
      </div>
    </>
  );
}
