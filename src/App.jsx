import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  const [token, setToken] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/admin" 
          element={token ? <Admin token={token} /> : <Login onLogin={setToken} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;