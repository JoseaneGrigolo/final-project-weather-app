import logo from "./logo.png";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="mt-2 mb-2">
          <a
            href="https://musical-starburst-1b9dd7.netlify.app/"
            rel="noreferrer"
          >
            <img src={logo} alt="Logo Joseane's Weather" className="logo" />
          </a>
        </header>
        <Weather />
        <hr />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/joseane-ivelise-grigolo-863a1a35/"
            target="_blank"
            rel="noreferrer"
            className="fw-semibold"
          >
            Joseane Grigolo{" "}
          </a>
          and is open-sourced on{" "}
          <a
            href="https://github.com/JoseaneGrigolo/react-weather-app"
            target="_blank"
            rel="noreferrer"
            className="fw-semibold"
          >
            GitHub{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://musical-starburst-1b9dd7.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="fw-semibold"
          >
            {" "}
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
