import { useDispatch } from "react-redux";
import { actionChangeColor } from "../../actions";
import "./styles.scss";

const palette = [
  {
    id: 1,
    bgColor: "rgb(208, 217, 225)",
    borderColor: "rgb(128, 142, 155)",
  },
  {
    id: 2,
    bgColor: "rgb(72 84 96)",
    borderColor: "rgb(30 39 46)",
  },
  {
    id: 3,
    bgColor: "rgb(251 192 72)",
    borderColor: "rgb(247 168 53)",
  },
  {
    id: 4,
    bgColor: "rgb(121 234 131)",
    borderColor: "rgb(101 198 109)",
  },
];

function ColorPalette() {
  const dispatch = useDispatch();
  const namePaletteColor = "paletteColor";

  const handleClickLabel = (event) => {
    const colorSelected = {
      bgColor: event.target.style.backgroundColor,
      borderColor: event.target.style.borderColor,
    };

    dispatch(
      actionChangeColor({
        bgColor: colorSelected.bgColor,
        borderColor: colorSelected.borderColor,
      })
    );
  };

  return (
    <section className="ColorPalette">
      {palette.map((color) => (
        <label
          className="ColorPalette__label"
          key={color.id}
          htmlFor={color.id}
          style={{
            backgroundColor: color.bgColor,
            borderColor: color.borderColor,
          }}
        >
          <input
            onChange={handleClickLabel}
            className="ColorPalette__inputRadio"
            id={color.id}
            type="radio"
            name={namePaletteColor}
            style={{
              backgroundColor: color.bgColor,
              borderColor: color.borderColor,
            }}
          />
        </label>
      ))}
    </section>
  );
}

export default ColorPalette;
