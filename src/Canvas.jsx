import "./Canvas.css";
import React, { useRef, useEffect } from "react";
const Canvas = ({ canvasRef }) => {
  return <canvas ref={canvasRef} className="canvas"></canvas>;
};

export default Canvas;
