import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./components/UserContext";
import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import SingleArticle from "./components/SingleArticle";

function App() {
  let initialUser = {
    username: "",
    password: "",
  };

  const [user, setUser] = useState(initialUser);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Header />
          <div>
            <h3>Trending Topics</h3>
            <Navigation />
          </div>
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/topics/:topic" element={<Articles />} />
            <Route path="/article/:article_id" element={<SingleArticle />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
