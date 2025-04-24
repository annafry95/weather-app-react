import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/anna-fry-a75446198/"
            target="_blank"
            rel="noreferrer"
          >
            Anna Fry
          </a>{" "}
          and is opened-sourced on{" "}
          <a
            href="https://github.com/annafry95/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
