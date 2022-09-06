import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  const { draw, autoRun, reset, ...rest } = props;
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const render = () => {
      console.log(animationFrameId)
      //console.log(reset);
      
      if (!reset) {
        if (!animationFrameId || (animationFrameId % 50 === 0)) {
          draw(ctx);
        }        
      } if (reset) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //draw(ctx);
      }
      
      if (autoRun) {
        animationFrameId = window.requestAnimationFrame(render);
        //setTimeout(() => {}, 900);
      } 
    }
    render();
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    };
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