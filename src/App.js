import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Login from "./components/Login";
import Topics from "./components/Topics";

function App() {
  return (
    <div className="App">
      <Header />
      <Topics />
      <Articles />
      <Login />
    </div>
  );
}

export default App;
