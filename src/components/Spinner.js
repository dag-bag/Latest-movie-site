import React from "react";
import Loading from "../Loading.gif";
export default function Spinner() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={Loading}
        alt=""
        style={{
          width: "40rem",
        }}
      />
    </div>
  );
}
