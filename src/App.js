import "./App.css";

import Header from "./components/Header";
import Articles from "./components/Articles";
import Login from "./components/Login";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Login />
        <div>
          <h3>Trending Topics</h3>
          <Link className="links" to="/topics/coding">
            Coding
          </Link>
          <Link className="links" to="/topics/football">
            Football
          </Link>
          <Link className="links" to="/topics/cooking">
            Cooking
          </Link>
          <Link className="links" to="/">
            All Topics
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/topics/:topic" element={<Articles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
