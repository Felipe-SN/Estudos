const drawBackground = () => {
  const background = {
    colorBg: 'black',

    draw() {
      context.fillStyle = background.colorBg;
      context.fillRect(0, 0, canvas.width, canvas.height);
    },
  };
  return background;
};

export default drawBackground;
