export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      x: direction == "left" ? 100 : (direction = "right" ? -400 : 0),
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
