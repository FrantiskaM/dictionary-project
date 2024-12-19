import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://github.com/FrantiskaM"
              target="_blank"
              rel="noreferrer"
            >
              Frantiska M
            </a>{" "}
            and it is open-sourced on{" "}
            <a
              href="https://github.com/FrantiskaM/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
