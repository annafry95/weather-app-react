import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/anna-fry-a75446198/"
            target="_blank"
            rel="noreferrer"
          >
            Anna Fry
          </a>{" "}
          is opened-sourced on{" "}
          <a
            href="https://github.com/annafry95/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://weatherap-react.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
