import { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { actionChangeGridSize } from "../../actions";
import "./styles.scss";

function GridSettings() {
  const dispatch = useDispatch();

  const [valueGrid, setValueGrid] = useState("");
  const [valueSquarePx, setValueSquarePx] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      actionChangeGridSize({
        gridNumber: valueGrid,
        pixelNumber: valueSquarePx,
      })
    );

    setValueGrid("");
    setValueSquarePx("");
  };

  const handleChangeGrid = (event) => {
    setValueGrid(event.target.value);
  };
  const handleChangeSquarePx = (event) => {
    setValueSquarePx(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="GridSettings">
      <input
        onChange={handleChangeGrid}
        className="GridSettings__input"
        type="number"
        placeholder="Taille de la grille"
        value={valueGrid}
        required
      />
      <input
        onChange={handleChangeSquarePx}
        className="GridSettings__input"
        type="number"
        placeholder="Taille des pixels"
        value={valueSquarePx}
        required
      />
      <button className="GridSettings__submit" type="submit">
        Valider
      </button>
    </form>
  );
}

export default GridSettings;
