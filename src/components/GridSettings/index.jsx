import "./styles.scss";

function GridSettings() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="GridSettings">
      <input
        className="GridSettings__input"
        type="text"
        placeholder="Taille de la grille"
      />
      <input
        className="GridSettings__input"
        type="text"
        placeholder="Taille des pixels"
      />
      <button className="GridSettings__submit" type="submit">
        Valider
      </button>
    </form>
  );
}

export default GridSettings;
