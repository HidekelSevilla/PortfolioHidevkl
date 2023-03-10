import "./App.css";
import { Banner } from "./components/Hero/Banner";
import { NavBar } from "./components/NavBar/NavBar";
import { Projects } from "./components/Projects/Projects";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Connect } from "./components/Connect/Connect";

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
