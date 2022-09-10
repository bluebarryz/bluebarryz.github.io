import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  const { draw, autoRun, reset, height, width, ...rest } = props;
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const render = () => {
      if (!reset) {
        if (!animationFrameId || (animationFrameId % 50 === 0)) {
          draw(ctx);
        }        
      } else if (reset) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw(ctx);
      }
      
      if (autoRun) {
        animationFrameId = window.requestAnimationFrame(render);
      } 
    }
    render();
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    };
  }, [draw])
  
  return (
    <canvas
      id="dotsCanvas"
      ref={canvasRef}
      width={width}
      height={height}
      {...rest}
    />
  );
};

export default Canvas;