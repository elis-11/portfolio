import { Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import "./App.scss";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
