import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  const { draw, dots, ...rest } = props;
  const canvasRef = useRef(null);
  //console.log(dots);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const render = () => {
      draw(ctx, 1, Math.PI / 120);
      requestAnimationFrame(render);
    }
    render();
  }, [draw])
  
  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      {...rest}
    />
  );
};

export default Canvas;