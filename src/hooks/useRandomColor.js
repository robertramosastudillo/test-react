import { useState } from "react";

export const useRandomColor = () => {
  const [color, setColor] = useState("#3581b8");

  const getRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    setColor(randomColor);
  };

  return { getRandomColor, color };
};
