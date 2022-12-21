import { Button } from "react-bootstrap";
import Login from "./component/login";
import Home from "./component/home";
import Dashboard from "./component/dashboard/index";
import Register from "./component/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home title="HOME PAGE" />} />
        <Route
          path="/login"
          element={<Login title="LOGIN PAGE" description="MINI ABSENSI APPS" />}
        />
        <Route path="/register" element={<Register title="REGISTER PAGE" description="MINI ABSENSI APPS"/>} />
        <Route path="/dashboard" element={<Dashboard title="DASHBOARD" />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
