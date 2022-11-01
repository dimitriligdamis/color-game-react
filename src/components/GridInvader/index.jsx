import { useState } from "react";
import "./styles.scss";

function GridInvader() {
  const [gridNumber, setGridNumber] = useState(8);

  return (
    <div className="GridInvader">
      {/* Double Loop to create multiple li in multiple ul with same number refers to state gridNumber */}
      {[...Array(gridNumber)].map((myUl, indexRow) => (
        <ul key={indexRow} className="GridInvader__row">
          {[...Array(gridNumber)].map((myLi, indexSquare) => (
            <li key={indexSquare} className="GridInvader__square"></li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default GridInvader;
