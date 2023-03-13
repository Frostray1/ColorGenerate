import React, { useState } from "react";
import styles from "./ColorGenerate.module.scss";

const ColorGenerate = () => {
  const [hexColor, setHexColor] = useState("");

  const generateColor = () => {
    // const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    // let newHexColor = "#";
    // for (let i = 0; i < 6; i++) {
    //     newHexColor += color[Math.floor(Math.random() * color.length)];
    // }
    // setHexColor(newHexColor);
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const hexColor = "#" + randomColor;
    setHexColor(hexColor);
  };

  // var item = items[Math.floor(Math.random()*items.length)];

  return (
    <div className="wrapper">
      <div className={styles.container}>
        <div className={styles.hexText}>{hexColor ? hexColor : "#FFFFFF"}</div>
        <div
          className={styles.windowColor}
          style={{ background: `${hexColor}` }}
        />
        <button onClick={() => generateColor()}>generate color</button>
      </div>
    </div>
  );
};

export default ColorGenerate;
