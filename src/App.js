import "./App.css";
import { AddNewTeam, MainPage } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/new-team" element={<AddNewTeam />} />
      </Routes>
    </div>
  );
}

export default App;
