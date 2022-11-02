import "./styles.scss";

function GridSettings() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="GridSettings">
      <input
        className="GridSettings__input"
        type="number"
        placeholder="Taille de la grille"
        required
      />
      <input
        className="GridSettings__input"
        type="number"
        placeholder="Taille des pixels"
        required
      />
      <button className="GridSettings__submit" type="submit">
        Valider
      </button>
    </form>
  );
}

export default GridSettings;
