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
  const namePaletteColor = "paletteColor";

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
            className="ColorPalette__inputRadio"
            id={color.id}
            type="radio"
            name={namePaletteColor}
          />
        </label>
      ))}
    </section>
  );
}

export default ColorPalette;
