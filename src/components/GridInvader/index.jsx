import { useState } from "react";
import "./styles.scss";

function GridInvader() {
  const [gridNumber, setGridNumber] = useState(8);

  const [defaultBgColor, setDefaultBgColor] = useState("rgb(208, 217, 225)");
  const [defaultBorderColor, setDefaultBorderColor] =
    useState("rgb(128, 142, 155)");

  const [bgColor, setBgColor] = useState("rgb(72 84 96)");
  const [borderColor, setborderColor] = useState("rgb(30 39 46)");

  const handleClickSquare = (event) => {
    const squareClicked = event.target;
    const backgroundStyle = squareClicked.style.backgroundColor;
    const borderStyle = squareClicked.style.borderColor;

    if (backgroundStyle == defaultBgColor) {
      squareClicked.style.backgroundColor = bgColor;
      squareClicked.style.borderColor = borderColor;
    } else {
      squareClicked.style.backgroundColor = defaultBgColor;
      squareClicked.style.borderColor = defaultBorderColor;
    }
  };

  return (
    <div className="GridInvader">
      {/* Double Loop to create multiple li in multiple ul with same number 
      refers to state gridNumber */}
      {[...Array(gridNumber)].map((myUl, indexRow) => (
        <ul key={indexRow} className="GridInvader__row">
          {[...Array(gridNumber)].map((myLi, indexSquare) => (
            <li
              onClick={handleClickSquare}
              key={indexSquare}
              className="GridInvader__square"
              style={{
                backgroundColor: defaultBgColor,
                border: `2px solid ${defaultBorderColor}`,
              }}
            ></li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default GridInvader;
