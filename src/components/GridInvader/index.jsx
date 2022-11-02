import { useState } from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

function GridInvader() {
  const gridNumber = useSelector((state) => state.gridNumber);
  const defaultBgColor = useSelector((state) => state.defaultBgColor);
  const defaultBorderColor = useSelector((state) => state.defaultBorderColor);
  const bgColor = useSelector((state) => state.bgColor);
  const borderColor = useSelector((state) => state.borderColor);

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
