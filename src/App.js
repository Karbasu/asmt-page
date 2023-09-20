import "./App.css";
import Login from "./Login.js";
import Dashboard from './Dashboard.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path='/' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
