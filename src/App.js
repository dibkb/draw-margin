import "./App.css";
import React, { useEffect, useRef, useState } from "react";
const App = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const elementRef = useRef(null);
  const drawTopmargin = (top, right, bottom, left) => {
    const canvas = canvasRef.current;
    console.log(canvasRef.current.getBoundingClientRect());
    const context = canvas.getContext("2d");
    context.fillStyle = "red";
    // top
    context.moveTo(
      (canvasRef.current.getBoundingClientRect().width -
        canvasRef.current.getBoundingClientRect().x) /
        2,
      0
    );
    context.lineTo(
      (canvasRef.current.getBoundingClientRect().width -
        canvasRef.current.getBoundingClientRect().x) /
        2,
      top
    );
    context.stroke();
    // bottom
    context.moveTo(
      (canvasRef.current.getBoundingClientRect().width -
        canvasRef.current.getBoundingClientRect().x) /
        2,
      canvasRef.current.getBoundingClientRect().height
    );
    context.lineTo(
      (canvasRef.current.getBoundingClientRect().width -
        canvasRef.current.getBoundingClientRect().x) /
        2,
      canvasRef.current.getBoundingClientRect().height - bottom
    );
    context.stroke();
    // right
    context.moveTo(
      canvasRef.current.getBoundingClientRect().width,
      canvasRef.current.getBoundingClientRect().height / 2
    );
    context.lineTo(
      canvasRef.current.getBoundingClientRect().width - right,
      canvasRef.current.getBoundingClientRect().height / 2
    );
    context.stroke();
    // left
    context.moveTo(0, canvasRef.current.getBoundingClientRect().height / 2);
    context.lineTo(left, canvasRef.current.getBoundingClientRect().height / 2);
    context.stroke();
  };
  useEffect(() => {
    // canvasRef.current.style.height = `${
    //   elementRef.current?.getBoundingClientRect().height
    // }px`;
    // canvasRef.current.style.width = `${
    //   elementRef.current?.getBoundingClientRect().width
    // }px`;
    //Our first draw
    drawTopmargin(10, 60, 40, 10);
  }, [canvasRef]);
  return (
    <div className="container" ref={containerRef}>
      <canvas ref={canvasRef} className="canvas"></canvas>
      {/* <div className="logo" ref={elementRef}>
        <img
          src="https://cdn.wallpapersafari.com/53/85/upiEBU.jpg"
          alt="logo"
        />
      </div> */}
    </div>
  );
};

export default App;
