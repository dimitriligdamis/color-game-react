import ColorPalette from "../ColorPalette";
import GridInvader from "../GridInvader";
import GridSettings from "../GridSettings";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <GridSettings />
      </header>
      <main className="App__main">
        <GridInvader />
      </main>
      <footer className="App__footer">
        <ColorPalette />
      </footer>
    </div>
  );
}

export default App;
