import "./App.css";

import Header from "./components/Header";
import Articles from "./components/Articles";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import SingleArticle from "./components/SingleArticle";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Login />
        <div>
          <h3>Trending Topics</h3>
          <Navigation />
        </div>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/topics/:topic" element={<Articles />} />
          <Route path="/article/:article_id" element={<SingleArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
