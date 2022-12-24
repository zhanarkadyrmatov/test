import "./App.css";
import Header from "./Componetn/Header";
import { Route, Routes } from "react-router-dom";
import HomeComponetn from "./Componetn/HomeComponetn";
import TextComponetn from "./Componetn/TextComponetn";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomeComponetn />} />
          <Route path="text/" element={<TextComponetn />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
