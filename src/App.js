import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/modules/login/login";
import Dashboard from "./components/modules/dashboard/dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
