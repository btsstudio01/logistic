import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import FadeLoader from "react-spinners/FadeLoader";

function Loader({ loading }) {
  const [color, setColor] = useState("#ffffff");

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div
      className="sweet-loading"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity for the desired blur effect
        display: loading ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FadeLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
