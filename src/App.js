import { Route, Routes } from "react-router-dom";
import "./App.css";
import Calendar from "./Components/Calendar";

import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Calendar" element={<Calendar />} />
    </Routes>
  );
}

export default App;
