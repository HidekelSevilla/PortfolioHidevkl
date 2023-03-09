import "./App.css";
import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { Connect } from "./components/Connect";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <AboutMe />
      <Projects />
      <Connect />
    </div>
  );
}

export default App;
