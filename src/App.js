import "./App.css";
import { Routes, Route } from "react-router";
import About from "./About/About";
import Home from "./Home/Home";
import NotFound from "./ErrorPages/NotFound";
import { Link } from "react-router-dom";
import RouteUrls from "./Navigation/Navigation";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={RouteUrls.homepage}>Home</Link>
          </li>
          <li>
            <Link to={RouteUrls.about}>About Me</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path={RouteUrls.homepage} element={<Home />} />
        <Route path={RouteUrls.about} element={<About />} />
        <Route path="/" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
